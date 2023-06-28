export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <div>
            {name}: <span>{number}</span>
          </div>

          <button onClick={() => onDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
