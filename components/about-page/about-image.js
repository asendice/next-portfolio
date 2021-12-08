import Image from "next/image";
import classes from "./about-image.module.css";

function AboutImage() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.div1}> </div>
        <div className={classes.div2}> </div>
        <div className={classes.div3}> </div>
        <div className={classes.div4}> </div>
        <div className={classes.div5}> </div>
        <div className={classes.div6}> </div>
      </div>
        <Image src="/images/avatar.png" width={300} height={300} className={classes.image}/>
    </section>
  );
}

export default AboutImage;
