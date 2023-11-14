import jwt from 'jsonwebtoken';

const generateToken = (username: string) => {

    // Generar token
    const token = jwt.sign({
        username: username
    }, process.env.SECRET_KEY || 'H3!GLKJ#G5');

    // const token = jwt.sign({
    //     username: username
    // }, process.env.SECRET_KEY || 'H3!GLKJ#G5', {
    //     expiresIn: '10000'
    // });

    return token;
};

export default generateToken;