import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./search-results.module.css";

function SearchResults(props) {
  const { results, active, setActive } = props;

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

  if (!active) {
    return <div></div>;
  }
  return (
    <ul
      className={classes.container}
      id="search-results"
      ref={searchResultsRef}
    >
      {results.map((result) => (
        <li>
          <Link href="/projects/">
            <div>
            <Image src="/" alt={result.tilte} height={20} width={20}/>
            {result.title}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
