import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PhonesContext } from "../context-store/context";
import classes from "./ContactDetail.module.css";

const ContactDetail = () => {
  const [itemDetail, setItemDetail] = useState(null);
  const id = useParams().contactId;
  const { phonesBook: phones } = useContext(PhonesContext);
  useEffect(() => {
    const item = phones.find((contact) => contact.id === +id);
    setItemDetail(item);
  }, [id, phones]);

  if (itemDetail) {
    return (
      <div className={classes.contactInfo}>
        <img
          src="/camera_685655.png"
          alt="avatar details"
          style={{ height: "5rem", width: "6rem", backgroundColor: "white" }}
        ></img>
        <div style={{ width: "100%" }}>
          <form className={classes.contactForm}>
            <label>Name</label>
            <input value={itemDetail.name}></input>
            <label>Phone</label>
            <input value={itemDetail.phoneNumber}></input>
            <label>E-mail</label>
            <input value={itemDetail.email}></input>
            <label>Country</label>
            <input value={itemDetail.country}></input>
            <label>City</label>
            <input value={itemDetail.city}></input>
          </form>
        </div>
        <div className={classes.controlButtons}>
          <button>Delete</button>
          <button>Edit & Save</button>
        </div>
      </div>
    );
  }
  return <div>This conntact is missing</div>;
};

export default ContactDetail;
