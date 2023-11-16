const {personas, empresas} = require('../data/db.js');
const agregarPersona = (req, res) => {
    const { nombre, apellido, edad } = req.body;
    const persona = { nombre, apellido, edad };
    personas.push(persona);
    res.status(201).json({ message: 'Persona agregada exitosamente' });
};
const eliminarPersona = (req, res) => {
    const { id } = req.params;
    const index = personas.findIndex(persona => persona.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ error: 'Persona no encontrada' });
    }
    personas.splice(index, 1);
    res.status(200).json({ message: 'Persona eliminada exitosamente' });
};
const buscarPersona = (req, res) => {
    const { nombre, apellido } = req.query;
    const persona = personas.find(persona => persona.nombre === nombre && persona.apellido === apellido);
    if (!persona) {
        return res.status(404).json({ error: 'Persona no encontrada' });
    }
    res.status(200).json(persona);
};
const verPersona = (req, res) => {
    const { id } = req.params;
    const persona = personas.find(persona => persona.id === parseInt(id));
    if (!persona) {
        return res.status(404).json({ error: 'Persona no encontrada' });
    }
    res.status(200).json(persona);
};

module.exports = { agregarPersona, eliminarPersona, buscarPersona, verPersona };