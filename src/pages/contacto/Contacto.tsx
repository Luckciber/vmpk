const Contacto: React.FC = () => {
    return(
        <div>
            <h1>Página Contacto</h1>
        <select name="motivo">
            <option value="">Selecciona un motivo</option>
            <option value="consulta">Consulta</option>
            <option value="soporte">Soporte</option>
            <option value="ventas">Ventas</option>
            <option value="otro">Otro</option>
        </select>
        <input type="text" name="nombre" placeholder="Nombre O  Razon Social" required></input>
 
        
        <input type="text" name="correo" placeholder="Correo Solicitante Contacto" required></input>

        <input type="text" name="Nombre o Razon Social" placeholder="nombre" required></input>

        <input type="text" name="Asunto" placeholder="Asunto" required></input>
            <p>Contenido de Contacto</p>
        </div>
    );
}

export default Contacto;