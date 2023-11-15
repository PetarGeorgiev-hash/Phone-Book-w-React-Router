import classes from "./ContactItem.module.css";
import { useNavigate } from "react-router-dom";

const ContactItem = (props) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`${props.id}`);
  };
  return (
    <div onClick={clickHandler} className={classes.card}>
      <div className={classes.img}>IMG</div>
      <div className={classes.name}>{props.name}</div>
    </div>
  );
};

export default ContactItem;
