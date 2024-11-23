import jwt from 'jsonwebtoken';

//generar JsonWebToken
const generarJWT = (id)=> {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

export default generarJWT;