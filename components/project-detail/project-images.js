import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import classes from "./project-images.module.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

function ProjectImages(props) {
  const [imgIndex, setImgIndex] = useState(0);
  const { images } = props;

  const prevImgIndexRef = useRef();
  useEffect(() => {
    prevImgIndexRef.current = imgIndex;
  });
  const prevIndex = prevImgIndexRef.current;

  console.log(prevIndex);

  console.log(imgIndex, "imgIndex");
  console.log(images.length, "images.length");

  function onRightArrowClick() {
    if (imgIndex < images.length - 1) {
      setImgIndex((prevState) => prevState + 1);
    } else if (imgIndex === images.length - 1) {
      setImgIndex(0);
    }
  }
  function onLeftArrowClick() {
    if (imgIndex >= 1) {
      setImgIndex((prevState) => prevState - 1);
    } else {
      setImgIndex(images.length - 1);
    }
  }
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  function carousel(index) {
    if (imgIndex === index) {
      return classes.active;
    }

    if (imgIndex === images.length - 1 && index === 0){
      return classes.next;
    }

    if(imgIndex === 0 && index === images.length -1){
      return classes.prev;
    }

    if (imgIndex + 1 === index) {
      return classes.next;
    }

    if (imgIndex - 1 === index){
      return classes.prev;
    }
  }

  return (
    <div className={classes.container}>
      <button
        className={`${classes.arrow} ${classes.left}`}
        onClick={() => onLeftArrowClick()}
      >
        <BsArrowLeftShort />
      </button>

      {images.map((img, index) => {
        return (
          <div
            key={img}
            className={`${classes.imagecontainer} ${carousel(index)}`}
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
