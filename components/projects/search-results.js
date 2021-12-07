import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./search-results.module.css";

function SearchResults(props) {
  const { results, active, setActive, searchTerm } = props;

  const searchResultsRef = useRef();

  useEffect(() => {
    const outsideClick = (e) => {
      if (
        active &&
        searchResultsRef.current &&
        !searchResultsRef.current.contains(e.target)
      ) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", outsideClick);
    return () => {
      // cleans up the eventlistener
      document.removeEventListener("mousedown", outsideClick);
    };
  }, [active]);

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  if (!active) {
    return <div></div>;
  }

  if (active && results.length === 0){
    return <ul className={classes.container}>
      <li>
        <div className={classes.item}>
          <p>"{searchTerm}" found zero projects...</p>
        </div>
      </li>
    </ul>
  }

  return (
    <ul
      className={classes.container}
      id="search-results"
      ref={searchResultsRef}
    >
      {results.map((result) => {
        return (
          <li key={result.name}>
            <Link href={`/projects/${result.name}`}>
              <div className={classes.item}>
                <Image
                  loader={myLoader}
                  src={result.images[1]}
                  alt={result.name}
                  height={40}
                  width={50}
                />
                <p>{result.name}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchResults;
