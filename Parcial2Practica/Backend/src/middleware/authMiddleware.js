module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: 'No se ha enviado el token' });
    }
    const token = authorization.split(' ')[1];
    if (token !== '1234') {
        return res.status(401).json({ error: 'Token inválido' });
    }
    next();
}