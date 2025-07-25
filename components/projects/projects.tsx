"use client";

import { use } from "react";
import { Project } from "@/lib/strapi/types";
import Slider from "./project-slider";

export default function Projects({
  projectData,
}: {
  projectData: Promise<Project[]>;
}) {
  const projects = use(projectData);
  const groupedProjects = projects.reduce((acc, project) => {
    const { stage } = project;
    if (!acc[stage]) {
      acc[stage] = [];
    }
    acc[stage].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  return (
    <div className="projects">
      <h2>Projects</h2>
      <h3>
        A collection of my work in web development, creative coding, and
        software engineering.
      </h3>
      <p>{`Along with the below personal projects, I have worked on a Topology Builder and orchestration system for demonstrating bespoke system packages at Cisco, implemented complicated user forms which connect to secure Snowflake data lakes, created several pixel-perfect UIs from in-house designs, added custom analytics and tracking using Google services, managed CI/CD pipelines, and improved accessibility for websites in the public sector.`}</p>
      <section>
        <div className="project-list">
          {Object.entries(groupedProjects)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([status, pl]) => {
              const column = status.replace(/\_/gi, "");
              return (
                <div key={column} className={`status ${column}`}>
                  <h4>{column}</h4>
                  <Slider items={pl} />
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}
