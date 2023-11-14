import classes from "./ContactItem.module.css";
import { useNavigate } from "react-router-dom";

const ContactItem = (props) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`${props.id}`);
  };
  return (
    <div
      onClick={clickHandler}
      className={classes.card}
      style={{ padding: "1.5rem 0 ", width: "90%", color: "white" }}
    >
      <div className={classes.img}>IMG</div>
      <div>{props.name}</div>
    </div>
  );
};

export default ContactItem;
