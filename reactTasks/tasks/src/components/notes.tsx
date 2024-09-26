import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Contact {
  id: string;
  name: string;
  phone: string;
}

export const PhoneBook: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [editingContactId, setEditingContactId] = useState<string | null>(null);

  const addContact = () => {
    if (name && phone) {
      const newContact: Contact = { id: uuidv4(), name, phone };
      setContacts([...contacts, newContact]);
      setName("");
      setPhone("");
    }
  };

  const removeContact = (id: string) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const startEditing = (id: string) => {
    const contactToEdit = contacts.find((contact) => contact.id === id);
    if (contactToEdit) {
      setName(contactToEdit.name);
      setPhone(contactToEdit.phone);
      setEditingContactId(id);
    }
  };

  const saveEditing = (id: string) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === id ? { ...contact, name, phone } : contact
    );
    setContacts(updatedContacts);
    setEditingContactId(null);
    setName("");
    setPhone("");
  };

  const cancelEditing = () => {
    setEditingContactId(null);
    setName("");
    setPhone("");
  };

  return (
    <div>
      <h1>Телефонная книга</h1>
      <div>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {editingContactId ? (
          <>
            <button onClick={() => saveEditing(editingContactId)}>
              Сохранить
            </button>
            <button onClick={cancelEditing}>Отмена</button>
          </>
        ) : (
          <button onClick={addContact}>Добавить</button>
        )}
      </div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {editingContactId === contact.id ? (
              <>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </>
            ) : (
              <>
                {contact.name} - {contact.phone}
              </>
            )}
            <button onClick={() => removeContact(contact.id)}>Удалить</button>
            {editingContactId === contact.id ? (
              <>
                <button onClick={() => saveEditing(contact.id)}>
                  Сохранить
                </button>
                <button onClick={cancelEditing}>Отмена</button>
              </>
            ) : (
              <button onClick={() => startEditing(contact.id)}>
                Редактировать
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
