import React from 'react';

const Form = () => {
  const [mensagem, setMensagem] = React.useState('');

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
  // loop nos objetos para o reactState
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {}),
  );
  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((r) =>
      r.ok
        ? setMensagem('Enviado com sucesso')
        : setMensagem('Tente novamente'),
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, type, label }) => (
        <div key={id}>
          <label htmlFor={label} name={id}>
            {label}
          </label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      <p>{mensagem}</p>
      <button style={{ marginTop: '1rem' }}>Enviar</button>
    </form>
  );
};

export default Form;
