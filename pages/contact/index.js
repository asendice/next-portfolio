import { Fragment } from "react";
import ContactInfo from "../../components/contact-page/contact-info";
import ContactForm from "../../components/contact-page/contact-form";

function ContactPage(props) {
  const { name, email, mobile } = props.info;
  return (
    <Fragment>
      <ContactInfo name={name} email={email} mobile={mobile} />
      {/* <ContactForm /> */}
    </Fragment>
  );
}

export async function getStaticProps() {
  const info = {
    name: "Dylan Travis",
    email: "dylantravisdev@gmail.com",
    mobile: "(775)203-4364",
  };

  return {
    props: {
      info: info,
    },
  };
}

export default ContactPage;
