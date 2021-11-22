import React from 'react';

const Comentarios = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');

  // useRef é como um querySelector ou salvar
  const inputElement = React.useRef();

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario, i) => (
          <li key={i}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <button style={{ marginTop: '1rem' }} onClick={handleClick}>
        Enviar
      </button>
    </div>
  );
};

export default Comentarios;
