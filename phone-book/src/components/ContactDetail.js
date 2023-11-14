import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PhonesContext } from "../context-store/context";
import classes from "./ContactDetail.module.css";
import cameraImage from "./camera_685655.png";

const ContactDetail = () => {
  const [itemDetail, setItemDetail] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    country: "",
    city: "",
  });
  const id = useParams().contactId;
  const navigate = useNavigate();

  const {
    phonesBook: phones,
    editContactInfo: editContact,
    deleteContactInfo: deleteContact,
  } = useContext(PhonesContext);
  useEffect(() => {
    const item = phones.find((contact) => contact.id === +id);
    if (item) {
      setItemDetail({
        id: item.id,
        name: item.name,
        phoneNumber: item.phoneNumber,
        email: item.email,
        country: item.country,
        city: item.city,
      });
    }
  }, [id, phones]);

  function submitHandler(e) {
    e.preventDefault();
    editContact(itemDetail);
    navigate("..");
  }
  function deleteHandler() {
    debugger;
    deleteContact(itemDetail);
    navigate("..");
  }

  function cancelHandler() {
    navigate("/");
  }

  function onChangeHandler(e) {
    const { name, value } = e.target;

    setItemDetail((prevItem) => {
      return { ...prevItem, [name]: value };
    });
  }

  if (itemDetail) {
    return (
      <div className={classes.contactInfo}>
        <div className={classes.cancel} onClick={cancelHandler}>
          X
        </div>
        <img
          src={cameraImage}
          alt="avatar details"
          style={{
            height: "8rem",
            width: "8rem",
            backgroundColor: "white",
            border: "1px rgb(55, 55, 55) solid",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        ></img>
        <div style={{ width: "100%" }}>
          <form onSubmit={submitHandler} className={classes.contactForm}>
            <label>Name</label>
            <input
              name="name"
              value={itemDetail.name || ""}
              onChange={onChangeHandler}
            ></input>
            <label>Phone</label>
            <input
              name="phoneNumber"
              value={itemDetail.phoneNumber || ""}
              onChange={onChangeHandler}
            ></input>
            <label>E-mail</label>
            <input
              name="email"
              value={itemDetail.email || ""}
              onChange={onChangeHandler}
            ></input>
            <label>Country</label>
            <input
              name="country"
              value={itemDetail.country || ""}
              onChange={onChangeHandler}
            ></input>
            <label>City</label>
            <input
              name="city"
              value={itemDetail.city || ""}
              onChange={onChangeHandler}
            ></input>
            <div className={classes.controlButtons}>
              <button tpye="delete" onClick={deleteHandler}>
                Delete
              </button>
              <button type="submit">Edit & Save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  return <div>This conntact is missing</div>;
};

export default ContactDetail;
