import { useState } from 'react';

export const ContactForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    props.handleSubmit({ number, name });
    setName('');
    setNumber('');
  };

  const onType = e => {
    const field = e.target.name;
    const value = e.target.value;

    field === 'name' ? setName(value) : setNumber(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={name || ''}
        onChange={onType}
        required
      />

      <label>Number</label>
      <input
        type="tel"
        name="number"
        required
        onChange={onType}
        value={number || ''}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};
