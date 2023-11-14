import { createContext, useState } from "react";

const DUMMY_CONTACTS = [
  {
    id: 1,
    name: "John Doe",
    phoneNumber: "123-456-7890",
    email: "john@example.com",
    country: "USA",
    city: "New York",
  },
  {
    id: 2,
    name: "Jane Smith",
    phoneNumber: "987-654-3210",
    email: "jane@example.com",
    country: "Canada",
    city: "Toronto",
  },
  {
    id: 3,
    name: "Alice Johnson",
    phoneNumber: "555-123-4567",
    email: "alice@example.com",
    country: "UK",
    city: "London",
  },
  {
    id: 4,
    name: "Bob Anderson",
    phoneNumber: "111-222-3333",
    email: "bob@example.com",
    country: "Australia",
    city: "Sydney",
  },
  {
    id: 5,
    name: "Eva Williams",
    phoneNumber: "444-555-6666",
    email: "eva@example.com",
    country: "France",
    city: "Paris",
  },
  {
    id: 6,
    name: "Michael Chen",
    phoneNumber: "777-888-9999",
    email: "michael@example.com",
    country: "China",
    city: "Beijing",
  },
  {
    id: 7,
    name: "Sophia Kim",
    phoneNumber: "666-555-4444",
    email: "sophia@example.com",
    country: "South Korea",
    city: "Seoul",
  },
  {
    id: 8,
    name: "Ahmed Salah",
    phoneNumber: "333-222-1111",
    email: "ahmed@example.com",
    country: "Egypt",
    city: "Cairo",
  },
  {
    id: 9,
    name: "Maria Rodriguez",
    phoneNumber: "888-999-0000",
    email: "maria@example.com",
    country: "Spain",
    city: "Madrid",
  },
  {
    id: 10,
    name: "Hiroshi Tanaka",
    phoneNumber: "123-789-4560",
    email: "hiroshi@example.com",
    country: "Japan",
    city: "Tokyo",
  },
  {
    id: 11,
    name: "Olivia Turner",
    phoneNumber: "555-987-1234",
    email: "olivia@example.com",
    country: "Canada",
    city: "Vancouver",
  },
  {
    id: 12,
    name: "Miguel Santos",
    phoneNumber: "987-654-3219",
    email: "miguel@example.com",
    country: "Brazil",
    city: "Rio de Janeiro",
  },
  {
    id: 13,
    name: "Anya Petrov",
    phoneNumber: "333-222-1112",
    email: "anya@example.com",
    country: "Russia",
    city: "Moscow",
  },
  {
    id: 14,
    name: "Khaled Rahman",
    phoneNumber: "777-888-9998",
    email: "khaled@example.com",
    country: "Saudi Arabia",
    city: "Riyadh",
  },
  {
    id: 15,
    name: "Isabel Fernandez",
    phoneNumber: "444-555-6667",
    email: "isabel@example.com",
    country: "Spain",
    city: "Barcelona",
  },
];

export const PhonesContext = createContext({
  phonesBook: [],
});

export default function ContextProvider(props) {
  const [contacts, setContacts] = useState(DUMMY_CONTACTS);

  function editContact(contactInfo) {
    setContacts((prevContacts) => {
      const contactToEditIndex = prevContacts.findIndex(
        (contact) => contact.id === contactInfo.id
      );

      if (!contactToEditIndex || contactToEditIndex === -1) {
        contactInfo.id = Math.random();
        return [contactInfo, ...prevContacts];
      }
      const newPhoneObj = [...prevContacts];
      newPhoneObj[contactToEditIndex] = contactInfo;
      return [...newPhoneObj];
    });
  }

  function deleteContact(contactInfo) {
    debugger;
    setContacts((prevContacts) => {
      const contactToDeleteIndex = prevContacts.findIndex(
        (contact) => contact.id === contactInfo.id
      );
      prevContacts.splice(contactToDeleteIndex, 1);
      return [...prevContacts];
    });
  }

  const ctxValue = {
    phonesBook: contacts,
    editContactInfo: editContact,
    deleteContactInfo: deleteContact,
  };

  return (
    <PhonesContext.Provider value={ctxValue}>
      {props.children}
    </PhonesContext.Provider>
  );
}
