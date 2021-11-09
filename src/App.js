import React from 'react';

const App = () => {
  // const [nome, setNome] = React.useState('');
  // const [email, setEmail] = React.useState('');

  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({
      ...form,
      [id]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome" name="nome">
        Nome
      </label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={form.nome}
        onChange={handleChange}
      />
      <label htmlFor="email" name="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      {form.nome} e {form.email}
      <button>Enviar</button>
    </form>
  );
};

export default App;
