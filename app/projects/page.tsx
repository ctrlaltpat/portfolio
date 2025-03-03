import { Suspense } from "react";
import { notFound } from "next/navigation";
import Projects from "@/components/projects/projects";
import Loader from "@/components/ui/loader";
import { fetchProjects } from "@/lib/strapi";

async function fetcher() {
  const { data } = await fetchProjects();
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
