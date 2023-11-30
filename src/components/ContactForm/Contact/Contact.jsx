export const Contact = props => {
  return (
    <li key={props.id}>
      <p>{props.name}: </p>
      <p>{props.number}</p>
      <button onClick={props.handleDelete}>Delete</button>
    </li>
  );
};
