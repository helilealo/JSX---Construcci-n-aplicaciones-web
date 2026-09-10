function CampoEmail({ label, nombre, placeholder, id }) {
  return (
    <div className="campo">
      <label>{label}</label>

      <input
        type="email"
        name={nombre}
        placeholder={placeholder}
       id={id}
      />
    </div>
  );
}

export default CampoEmail;