import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const filters = ["all", "web", "mobile"] as const;

const Projects = () => {
  const [active, setActive] = useState<"all" | "web" | "mobile">("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <span className="text-vault-red text-xs font-bold tracking-widest uppercase">ALL_PROJECTS</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mt-2">PROJECTS</h1>
        </div>

        <div className="flex gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 text-xs font-bold tracking-wider uppercase border transition-colors ${
                active === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-foreground/20 text-foreground hover:border-foreground/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
