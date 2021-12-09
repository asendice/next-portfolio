import { Fragment } from "react";
import About from "../../components/about-page/about";
import { getAboutMe } from "../../helpers/api-util";

function AboutPage(props) {
  const { about } = props;

  const text = about.aboutme[0].aboutText;

  return (
    <Fragment>
      <About text={text} />

    </Fragment>
  );
}

export async function getStaticProps() {
  const aboutme = await getAboutMe();

  return {
    props: {
      about: aboutme,
    },
  };
}

export default AboutPage;
