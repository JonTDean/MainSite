import { projects } from '@/config/dummyProjects';
import ProjectsContainer from '@/components/projects/ProjectsContainer';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex">
      <ProjectsContainer projects={projects} />
    </div>
  );
}
