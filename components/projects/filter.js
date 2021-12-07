import { useState, useEffect } from "react";
import classes from "./filter.module.css";
import SearchResults from "./search-results";

function Filter(props) {
  const [active, setActive] = useState(false);

  const { skills, updateFilters, filters, searchTerm, setSearchTerm, projects } = props;

  useEffect(() => {
    if (searchTerm) {
      setActive(true);
      return;
    }
    setActive(false)
  }, [searchTerm]);

  return (
    <div className={classes.filter}>
      <input placeholder="" onChange={(e) => setSearchTerm(e.target.value)} />
      <SearchResults
        active={active}
        setActive={setActive}
        results={projects}
        searchTerm={searchTerm}
      />
      <p>keywords to filter</p>
      <ul className={classes.list}>
        {skills.map((skill) => {
          const selected = filters.includes(skill);
          return (
            <li
              key={skill}
              onClick={() => updateFilters(skill)}
              style={{
                backgroundColor: selected && "#333",
                color: selected && "#fff",
              }}
            >
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Filter;
