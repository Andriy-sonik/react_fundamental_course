import classes from "./MyButton.module.css";
const MyButton = ({ children, ...props }) => {
  return (
    <button className={classes.Button} {...props}>
      {children}
    </button>
  );
};
export default MyButton;
