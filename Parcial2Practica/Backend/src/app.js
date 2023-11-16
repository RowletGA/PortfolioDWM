const express = require('express');
const personasRoutes = require('./routes/personas.routes');
const empresasRoutes = require('./routes/empresas.routes');
const authMiddleware = require('./middlewares/auth.middleware');

const app = express();
app.use(express.json());

app.use(authMiddleware);

app.use('/personas', personRoutes);
app.use('/empresas', empresasRoutes);

module.exports = app;
