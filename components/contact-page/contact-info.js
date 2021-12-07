import classes from "./contact-info.module.css";
function ContactInfo(props) {
  const { name, email, mobile } = props;

  return (
    <div className={classes.container}>
      <h1>{name}</h1>
      <h2>email: {email}</h2>
      <h2>mobile: {mobile}</h2>
    </div>
  );
}

export default ContactInfo;
