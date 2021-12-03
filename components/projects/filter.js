import classes from "./filter.module.css";

function Filter(props) {
  const { skills, updateFilters, filters, searchTerm, setSearchTerm } = props;
  return (
    <div className={classes.filter}>
      <input onChange={() => setSearchTerm} />
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
