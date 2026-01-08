import { useState } from "react";
import "./Contacto.css";

const Contacto: React.FC = () => {
  const [form, setForm] = useState({
    motivo: "",
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { motivo, nombre, correo, asunto, mensaje } = form;

    if (!motivo || !nombre || !correo || !asunto || !mensaje) {
      alert("Por favor completa todos los campos");
      return;
    }

    setEnviado(true);

    setForm({
      motivo: "",
      nombre: "",
      correo: "",
      asunto: "",
      mensaje: "",
    });

    // Ocultar mensaje después de 2 segundos (Consultar Milton)
    setTimeout(() => {
      setEnviado(false);
    }, 2000);
  };

  return (
    <main className="main-container">
      <h1>Página Contacto</h1>

      <form className="contacto-container" onSubmit={handleSubmit}>
            <div className="fila">
          <div className="titulo">
            <label>Motivo de contacto</label>
          </div>
          <div className="campo">
            <select name="motivo" value={form.motivo} onChange={handleChange} >
              <option value="">Selecciona un motivo</option>
              <option value="consulta">Consulta</option>
              <option value="soporte">Soporte</option>
              <option value="ventas">Ventas</option>
              <option value="otro">Otro</option>
            </select>
          </div>
        </div>

           <div className="fila">
          <div className="titulo">
            <label>Nombre o Razón Social</label>
          </div>
          <div className="campo">
            <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
          </div>
        </div>

          <div className="fila">
          <div className="titulo">
            <label>Correo solicitante contacto</label>
          </div>
          <div className="campo">
            <input  type="email"  name="correo" value={form.correo} onChange={handleChange} />
          </div>
        </div>

           <div className="fila">
          <div className="titulo">
            <label>Asunto</label>
          </div>
          <div className="campo">
            <input type="text" name="asunto"  value={form.asunto} onChange={handleChange} />
          </div>
        </div>

         <div className="fila">
          <div className="titulo">
            <label>Contenido de contacto</label>
          </div>
          <div className="campo">
            <textarea  name="mensaje"  rows={4} value={form.mensaje} onChange={handleChange} />
          </div>
        </div>

          <div className="fila">
          <div className="titulo">
            <button type="submit" className="btn-enviar">
              Enviar mensaje
            </button>
          </div>

          <div className="campo">
            {enviado && (
              <span className="mensaje-exito-inline visible">
                ✅ Su mensaje ha sido enviado correctamente
              </span>
            )}
          </div>
        </div>
      </form>
    </main>
  );
};

export default Contacto;
