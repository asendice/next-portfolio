import { useState } from "react";
import Image from "next/image";
import classes from "./project-images.module.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

function ProjectImages(props) {
  const [imgIndex, setImgIndex] = useState(0);

  console.log(imgIndex, "imgIndex");

  const { images } = props;

  function onRightArrowClick() {
    if (imgIndex < images.length - 1) {
      setImgIndex(imgIndex + 1);
    } else if (imgIndex === images.length - 1) {
      setImgIndex(0);
    }
  }
  function onLeftArrowClick() {
    if (imgIndex >= 1) {
      setImgIndex(imgIndex - 1);
    } else {
      setImgIndex(images.length - 1);
    }
  }
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className={classes.container}>
      <button
        className={`${classes.arrow} ${classes.left}`}
        onClick={() => onLeftArrowClick()}
      >
        <BsArrowLeftShort />
      </button>

      {images.map((img, index) => {
        console.log(index, "index");
        return (
          <div
            key={img}
            className={`${classes.imagecontainer} ${
              index === imgIndex ? classes.active : ""
            }`}
          >
            <Image
              loading="eager"
              priority={true}
              className={classes.image}
              loader={myLoader}
              alt={img}
              src={img}
              key={index}
              width={900}
              height={650}
            />
          </div>
        );
      })}
      <button
        className={`${classes.arrow} ${classes.right}`}
        onClick={() => onRightArrowClick()}
      >
        <BsArrowRightShort />
      </button>
    </div>
  );
}

export default ProjectImages;
