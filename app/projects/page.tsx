"use client";

import Img from "@/components/media/img";
import Video from "@/components/media/video";
import { TagFilter } from "@/components/ui/tagFilter";
import { fetchProjects } from "@/lib/strapi";
import { Project } from "@/lib/types";
import { useEffect, useState } from "react";

// Group projects by primary tag
const groupedProjects = (projects: Project[]) =>
  projects.reduce((acc, project) => {
    let { stage } = project;
    if (!acc[stage]) {
      acc[stage] = [];
    }
    acc[stage].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

//archived, in progress, done

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSelectTag = (tag: string) => {
    if (tag === "all") {
      setSelectedTags([]);
    } else {
      setSelectedTags((prev) => {
        if (prev.includes(tag)) {
          return prev.filter((t) => t !== tag);
        }
        return [...prev, tag];
      });
    }
  };

  useEffect(() => {
    async function fetchButUpdateThisName() {
      const projects = await fetchProjects();

      setProjects(projects.data);
      setTags(
        Array.from(
          new Set(
            projects.data
              .map((item) => item.tags)
              .flat()
              .map((tag) => tag.title)
          )
        ).sort()
      );
    }

    fetchButUpdateThisName();
  }, []);

  console.log(projects);
  console.log(groupedProjects(projects));

  return (
    <div className="projects">
      <h2>Projects</h2>
      <h3>
        A collection of my work in web development, creative coding, and
        software engineering.
      </h3>
      <section>
        <TagFilter
          tags={tags}
          selectedTags={selectedTags}
          onTagSelect={handleSelectTag}
        />
        <div className="project-list">
          {Object.entries(groupedProjects(projects))
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([status, projectList]) => {
              const column = status.replace(/\_/gi, "");
              return (
                <div key={column} className={`status ${column}`}>
                  <h4>{column}</h4>
                  {projectList.map((project) => (
                    <figure key={project.documentId}>
                      <h5>{project.title}</h5>
                      <p>{project.description}</p>
                      <p>{project.demoLink || "no link"}</p>
                      {/* TODO */}
                      {project.demo && project.demo.ext === ".mp4" ? (
                        <Video
                          item={{
                            type: "video",
                            video: project.demo,
                            ...project,
                          }}
                        />
                      ) : !project.demo ? (
                        ""
                      ) : (
                        <Img
                          item={{
                            type: "video",
                            image: project.demo,
                            ...project,
                          }}
                        />
                      )}
                      <div className="tags">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag.id}>{tag.title}</span>
                        ))}
                      </div>
                    </figure>
                  ))}
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}
