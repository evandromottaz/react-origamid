import React from 'react';
import Input from './Input';
import Button from './Button';

function Form() {
  return (
    <form>
      <Input id="email" label="E-mail" required />
      <Input id="senha" label="Senha" />
      <Button />
    </form>
  );
}

export default Form;
