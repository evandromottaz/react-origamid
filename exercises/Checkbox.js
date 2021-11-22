import React from 'react';

const Checkbox = () => {
  const [cores, setCor] = React.useState(['vermelho']);

  function handleChange({ target }) {
    // insira no array, além do que já tem
    if (target.checked) setCor([...cores, target.value]);
    // se a cor for diferente da selecionada
    else setCor(cores.filter((cor) => cor !== target.value));
  }

  function checkColor(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      <label style={{ display: 'block' }}>
        <input
          type="checkbox"
          value="azul"
          onChange={handleChange}
          checked={checkColor('azul')}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          onChange={handleChange}
          checked={cores.includes('vermelho')}
        />
        Vermelho
      </label>
    </form>
  );
};

export default Checkbox;
