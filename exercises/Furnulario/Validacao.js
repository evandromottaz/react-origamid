import React from 'react';
import Input from './Input';

const Validacao = () => {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  // quando tirar o foco do input
  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  function validateCep(value) {
    // se não tiver digitado nada
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
      // se for inválido
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateCep(cep)) console.log('enviou');
    else console.log('erro');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        value={cep}
        placeholder="12345-123"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p>{error}</p>}
      <p>
        <button>Enviar</button>
      </p>
    </form>
  );
};

export default Validacao;
