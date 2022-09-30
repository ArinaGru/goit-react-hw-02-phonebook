import { Button, Item } from './ContactList.styled';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Item key={contact.id} style={{ marginTop: '10px' }}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <Button type="button" onClick={() => onRemoveContact(contact.id)}>
            Delete
          </Button>
        </Item>
      ))}
    </ul>
  );
};
