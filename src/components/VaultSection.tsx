import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const VaultSection = () => {
  const featured = projects.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="text-vault-red text-xs font-bold tracking-widest uppercase">SELECTED_WORKS</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mt-2">THE VAULT</h2>
        </div>
        <Link
          to="/projects"
          className="text-sm font-bold tracking-wider uppercase hover:text-vault-red transition-colors hidden md:block"
        >
          VIEW ALL PROJECTS →
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Link
        to="/projects"
        className="text-sm font-bold tracking-wider uppercase hover:text-vault-red transition-colors mt-8 block md:hidden text-center"
      >
        VIEW ALL PROJECTS →
      </Link>
    </section>
  );
};

export default VaultSection;
