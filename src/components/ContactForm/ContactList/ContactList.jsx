import { Contact } from '../Contact/Contact';

export const ContactList = props => {
  return (
    <ul>
      {props.initialValues.length !== 0 ? (
        props.initialValues.map(contact => (
          <Contact
            name={contact.name}
            number={contact.number}
            key={contact.id}
            handleDelete={props.handleDelete}
          />
        ))
      ) : (
        <p>No contacts saved</p>
      )}
    </ul>
  );
};
