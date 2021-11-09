import React from 'react';

const formFields = [
  {
    id: 'nome',
    type: 'text',
    label: 'Nome',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email',
  },
  {
    id: 'senha',
    type: 'password',
    label: 'Senha',
  },
  {
    id: 'cep',
    type: 'text',
    label: 'CEP',
  },
  {
    id: 'rua',
    type: 'text',
    label: 'Rua',
  },
  {
    id: 'bairro',
    type: 'text',
    label: 'Bairro',
  },
  {
    id: 'cidade',
    type: 'text',
    label: 'Cidade',
  },
  {
    id: 'estado',
    type: 'text',
    label: 'Estado',
  },
];

const Form = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
  });
  function handleChange({ target }) {
    const { id, value } = target;
    setForm({
      ...form,
      [id]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefaul();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((r) => r.json());
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, type, label }) => (
        <div style={{ background: 'green' }} key={id}>
          <label style={{ fontSize: '2em' }} htmlFor={label} name={id}>
            {label}
          </label>
          <input type={type} id={id} />
        </div>
      ))}
      <button style={{ marginTop: '1rem' }}>Enviar</button>
    </form>
  );
};

export default Form;
