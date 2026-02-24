import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group border-2 border-foreground/10 overflow-hidden hover:border-foreground/30 transition-colors">
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-vault-yellow text-vault-black px-3 py-1 text-xs font-bold tracking-wider">
          ${project.price}
        </div>
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold tracking-tight uppercase">{project.name}</h3>
        <span className="font-mono text-xs text-vault-red tracking-wider uppercase">{project.tech}</span>
        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
        <div className="flex gap-3 pt-2">
          <a
            href={project.liveUrl || "#"}
            className="border border-foreground text-foreground px-4 py-2 text-xs font-bold tracking-wider uppercase hover:bg-foreground hover:text-background transition-colors flex-1 text-center"
          >
            TEST LIVE
          </a>
          <a
            href={project.apkUrl || "#"}
            className="bg-primary text-primary-foreground px-4 py-2 text-xs font-bold tracking-wider uppercase hover:opacity-90 transition-opacity flex-1 text-center"
          >
            BUY SOURCE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
