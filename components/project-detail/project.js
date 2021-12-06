import ProjectImages from "./project-images";
import ProjectMain from "./project-main";
import ProjectText from "./project-text";

function Project(props) {
  const { name, images, description, live, gHub } = props.project;
  return (
    <div>
      <div>
        <ProjectImages images={images} />
        <ProjectMain name={name} live={live} gHub={gHub} />
      </div>
      <ProjectText text={description} />
    </div>
  );
}

export default Project;
