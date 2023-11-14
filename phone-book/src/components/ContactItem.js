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
      style={{  }}
    >
      <div className={classes.img}>IMG</div>
      <div>{props.name}</div>
    </div>
  );
};

export default ContactItem;
