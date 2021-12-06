import { Fragment } from "react";
import { getAllProjects, getProjectByName } from "../../helpers/api-util";
import Project from "../../components/project-detail/project";

function ProjectDetailPage(props) {
  const { project } = props;
  return (
    <Fragment>
      <Project project={project} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const projectName = context.params.slug;

  const project = await getProjectByName(projectName);

  console.log(project);

  return {
    props: {
      project: project,
    },
    revalidate: 1800,
  };
}

export async function getStaticPaths() {
  const projects = await getAllProjects();

  const paths = projects.projects.map((project) => ({ params: { slug: project.name } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default ProjectDetailPage;
