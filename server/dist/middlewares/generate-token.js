"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (username) => {
    // Generar token
    const token = jsonwebtoken_1.default.sign({
        username: username
    }, process.env.SECRET_KEY || 'H3!GLKJ#G5');
    // const token = jwt.sign({
    //     username: username
    // }, process.env.SECRET_KEY || 'H3!GLKJ#G5', {
    //     expiresIn: '10000'
    // });
    return token;
};
exports.default = generateToken;
