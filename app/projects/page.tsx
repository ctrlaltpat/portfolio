import { Suspense } from "react";
import { notFound } from "next/navigation";
import Projects from "@/components/projects/projects";
import Loader from "@/components/ui/loader";
import { fetchFromStrapi, strapiContent } from "@/lib/strapi";
import { Project } from "@/lib/strapi/types";

export const dynamic = "force-dynamic";

async function fetcher() {
  const { data } = await fetchFromStrapi<Project>(strapiContent.projects);
  if (data.length === 0) notFound();

  return data;
}

export default function ProjectsPage() {
  const projects = fetcher();

  return (
    <Suspense fallback={<Loader />}>
      <Projects projectData={projects} />
    </Suspense>
  );
}
