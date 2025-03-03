import { Project } from "@/lib/strapi/types";
// import Video from "../media/video";
import { strapiURL } from "@/lib/strapi";

export interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <figure className="project-card">
      <div
        className="cover"
        style={{
          backgroundImage: `url(${strapiURL()}${project.cover?.url})`,
        }}
      ></div>
      <h5>{project.title}</h5>
      <div className="tags">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag.id}>{tag.title}</span>
        ))}
      </div>
      <p>{project.description}</p>
      {/* <p>{project.demoLink || "no link"}</p> */}
      {/* TODO */}
      {/* <Video
          item={{
            type: "video",
            video: project.demo,
            ...project,
          }}
        /> */}
    </figure>
  );
}
