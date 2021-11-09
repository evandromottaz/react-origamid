import React from 'react';

const Formulario = () => {
  const [formulario, setFormulario] = React.useState({
    nome: '',
    email: '',
  });

  function handleChange({ target }) {
    setFormulario({
      ...formulario,
      [target.id]: target.value,
    });
  }
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input type="text" name="nome" id="nome" onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" onChange={handleChange} />
      <p>Nome: {formulario.nome}</p>
      <p>Email: {formulario.email}</p>
    </form>
  );
};

export default Formulario;
