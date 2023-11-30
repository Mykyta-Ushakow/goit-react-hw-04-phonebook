export const Filter = props => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        onChange={props.handleSearch}
        placeholder={'Enter name'}
      />
    </div>
  );
};
