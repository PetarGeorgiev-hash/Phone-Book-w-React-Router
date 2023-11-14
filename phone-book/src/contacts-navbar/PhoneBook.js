import { useContext } from "react";
import { PhonesContext } from "../context-store/context";
import ContactItem from "../components/ContactItem";
import { Outlet } from "react-router-dom";
import classes from "./PhoneBook.module.css";

const PhoneBook = () => {
  const ctx = useContext(PhonesContext);
  console.log(ctx.phonesBook);
  return (
    <div className={classes.layout}>
      <div className={classes.contactNav}>
        {ctx.phonesBook.map((contact) => (
          <ContactItem key={contact.id} name={contact.name} id={contact.id} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default PhoneBook;
