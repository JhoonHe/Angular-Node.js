import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import generateToken from '../middlewares/generate-token';

export const register = async (req: Request, res: Response) => {

    const { username, password } = req.body;

    // Validar si el usuario existe en la db
    const user = await User.findOne({ where: { username: username } })

    if (user) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    try {
        // Guardar usuario en la db
        await User.create({
            username: username,
            password: hashedPassword
        });

        res.json({
            msg: `Usuario ${username} creado exitosamente`
        });
    } catch (error) {
        res.status(400).json({
            msg: 'Ups! Ocurrió un error'
        })
    }
}


export const login = async (req: Request, res: Response) => {

    const { username, password } = req.body;

    // Validar si el usuario existe en la db
    const user: any = await User.findOne({ where: { username: username } })

    if (!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${username}`
        });
    }

    // Validar password
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
        return res.status(400).json({
            msg: 'Password incorrecta'
        })
    }

    const token = generateToken(username);

    res.status(200).json({ token });
}