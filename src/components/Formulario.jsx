import React, { useState } from 'react';

function Formulario({ setAlert }) {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmContrasena, setConfirmContrasena] = useState('');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailPattern.test(email)) {
        setAlert({ type: 'error', message: 'Completa correctamente todos los campos' });
        return;
    }

    if (contrasena !== confirmContrasena) {
        setAlert({ type: 'danger', message: 'Las contraseñas no coinciden' });
        return;
    }

    setAlert({ type: 'success', message: 'Listo, ya estás registrado!' });
    setNombre('')
    setEmail('')
    setContrasena('')
    setConfirmContrasena('')
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