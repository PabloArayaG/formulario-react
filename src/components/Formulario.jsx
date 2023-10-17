import React, { useState } from 'react';

function Formulario({ setAlert }) {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmContrasena, setConfirmContrasena] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
    setAlert({ type: 'error', message: 'Completa correctamente todos los campos' });
    return;
    }

    if (contrasena !== confirmContrasena) {
    setAlert({ type: 'danger', message: 'Las contraseñas no coinciden' });
    return;
    }

    setAlert({ type: 'success', message: 'Listo, ya estás registrado!' });

};

return (
    <form onSubmit={handleSubmit}>
    <div className="form-container">
        <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        />
        <input
        type="text"
        placeholder="tuemail@ejemplo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
        />
        <input
        type="password"
        placeholder="Confirmar Contraseña"
        value={confirmContrasena}
    onChange={(e) => setConfirmContrasena(e.target.value)}
        />
    </div>
    <button type="submit">Registrarse</button>
    </form>
);
}

export default Formulario;