import express from 'express';
import cors from 'cors';
import routesProduct from './routes/product';
import routesUser from './routes/user';
import { Product } from './models/product';
import { User } from './models/user';


class Server {

    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.middlwares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicación corriendo en el puerto ${this.port}`);
        });
    }

    routes() {
        this.app.use('/api/products', routesProduct);
        this.app.use('/api/users', routesUser);
    }

    middlwares() {
        // Parseo body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await Product.sync();
            await User.sync();
            console.log("Connection has been established successfully.");

        } catch (error) {
            console.error('Unable to connect to the database', error);
        }
    }
}

export default Server;