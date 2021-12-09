import { useRef } from "react";
import Button from "../ui/button";
import classes from "./contact-form.module.css";

function ContactForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  function onSubmitHandler(e) {
    e.preventDefault();
    const submission = {
      name: nameRef.current.value,
      email: nameRef.current.value,
      message: messageRef.current.value,
    };
  }

  return (
    <div className={classes.container}>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <label htmlFor="name">name</label>
        <input type="text" id="name" name="name" ref={nameRef} />

        <label htmlFor="email">email</label>
        <input type="email" id="email" name="email" ref={emailRef} />

        <label htmlFor="message">message</label>
        <textarea
          type="text"
          id="message"
          name="message"
          rows="10"
          ref={messageRef}
        />

        <div className={classes.btncontainer}>
          <Button>submit</Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
