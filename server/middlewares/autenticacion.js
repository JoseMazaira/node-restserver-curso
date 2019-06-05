/**
 * 
 * Verificación del token
 * 
 */

var jwt = require('jsonwebtoken')

let verificaToken = (req, res, next) => {

    let token = req.get('token')


    jwt.verify(token, process.env.NODE_SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            })
        }

        req.usuario = decoded.usuario
        next()
    })
}


let verificaAdmin = (req, res, next) => {

    if (req.usuario.role != 'ADMIN_ROLE') {

        return res.status(401).json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        })
    }

    next()
}

module.exports = {
    verificaToken,
    verificaAdmin
}