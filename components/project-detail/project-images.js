import { useState } from "react";
import Image from "next/image";
import classes from "./project-images.module.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

function ProjectImages(props) {
  const [imgIndex, setImgIndex] = useState(0);

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
      <BsArrowLeftShort
        className={classes.arrow}
        onClick={() => onLeftArrowClick()}
      />
      {images.map((img, index) => {
        return (
          <div
            className={`${classes.imagecontainer} ${
              index === imgIndex ? classes.active : ""
            }`}
          >
            <Image
              loader={myLoader}
              alt={img}
              src={img}
              key={index}
              width={700}
              height={550}
              className={classes.image}
            />
          </div>
        );
      })}
      <BsArrowRightShort
        className={classes.arrow}
        onClick={() => onRightArrowClick()}
      />
      {/* <BsArrowRightShort className={classes.arrow} onClick={() => onRightArrowClick()} /> */}
    </div>
  );
}

export default ProjectImages;
