const { personas, empresas } = require('../data/db.js');

const agregarEmpresa = (req, res) => {
    const { nombre, direccion, telefono } = req.body;
    const empresa = { nombre, direccion, telefono };
    empresas.push(empresa);
    res.status(201).json({ message: 'Empresa agregada exitosamente' });
};

const eliminarEmpresa = (req, res) => {
    const { id } = req.params;
    const index = empresas.findIndex(empresa => empresa.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ error: 'Empresa no encontrada' });
    }
    const tieneEmpleados = personas.some(persona => persona.empresaId === parseInt(id));
    if (tieneEmpleados) {
        return res.status(400).json({ error: 'La empresa tiene empleados, no se puede eliminar' });
    }

    empresas.splice(index, 1); // Elimina la empresa del array
    res.status(200).json({ message: 'Empresa eliminada exitosamente' });
};
