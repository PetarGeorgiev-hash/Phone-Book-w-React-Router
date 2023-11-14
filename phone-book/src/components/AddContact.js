import classes from "./AddContact.module.css";
import { useNavigate } from "react-router-dom";
const AddContact = () => {
  const navigate = useNavigate();
  const addContactHandler = () => {
    navigate("/newContact");
  };
  return (
    <div className={classes.addContact} onClick={addContactHandler}>
      + Add a contact
    </div>
  );
};

export default AddContact;
