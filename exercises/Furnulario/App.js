import React from 'react';
import Input from './Input';
import useForm from './useForm';

const App = () => {
  const nome = useForm();
  const sobrenome = useForm(false);
  const cep = useForm('cep');
  const email = useForm('email');

  function handleSubmit(e) {
    e.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('enviou');
    } else {
      console.log('Não enviou');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="nome" type="text" {...nome} />
      <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="12345-123"
        {...cep}
      />
      <Input label="Email" id="email" type="email" {...email} />
      <p>
        <button>Enviar</button>
      </p>
    </form>
  );
};

export default App;
