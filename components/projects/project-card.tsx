import { Project } from "@/lib/strapi/types";
import { strapiURL } from "@/lib/strapi";
import { Suspense } from "react";
import Loader from "../ui/loader";

export interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
      <figure className="project-card">
        <div
          className="cover"
          style={{
            backgroundImage: `url(${strapiURL()}${project.cover?.url})`,
          }}
        ></div>
        {project.demo && (
          <div className="preview">
            <Suspense fallback={<Loader />}>
              <video autoPlay loop muted preload="none" controls={false}>
                <source
                  src={`${strapiURL()}${project.demo?.url}`}
                  type="video/mp4"
                />
              </video>
            </Suspense>
          </div>
        )}
        <h5>{project.title}</h5>
        <div className="tags">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag.id}>{tag.title}</span>
          ))}
        </div>
        <div className="more">
          <p>{project.description}</p>
          <div className="links">
            {project.repo && (
              <a href={project.repo} target="_blank" className="cap-btn">
                REPO
              </a>
            )}
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" className="cap-btn">
                DEMO
              </a>
            )}
          </div>
        </div>
      </figure>
    </>
  );
}
