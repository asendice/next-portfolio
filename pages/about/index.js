import { Fragment } from "react";
import AboutImage from "../../components/about-page/about-image";
import AboutText from "../../components/about-page/about-text";
import { getAboutMe } from "../../helpers/api-util";

function AboutPage(props) {
  const { about, hero } = props;

  return (
    <Fragment>
      <h1>about-page</h1>
      <AboutImage />
       {/* <AboutText /> */}
    </Fragment>
  );
}

export async function getStaticProps() {
  const aboutme = await getAboutMe();

  return {
    props: {
      about: aboutme,
      // about: aboutme.aboutText,
      // hero: aboutme.heroText,
    },
  };
}

export default AboutPage;
