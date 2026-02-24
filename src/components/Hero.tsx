import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.png";

const Hero = () => {
  return (
    <section className="relative grid-bg">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <span className="inline-block bg-vault-red text-primary-foreground px-3 py-1 text-xs font-bold tracking-widest uppercase">
            FULL-STACK ARCHITECT
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tighter uppercase">
            I BUILD SYSTEMS THAT DON'T BREAK.
          </h1>
          <p className="font-mono text-sm md:text-base text-muted-foreground tracking-wide uppercase max-w-lg">
            BRUTALIST CODE. EFFICIENT DESIGN. READY-MADE SOLUTIONS FOR MODERN DEVS.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/marketplace"
              className="bg-primary text-primary-foreground px-8 py-3 text-sm font-bold tracking-wider uppercase hover:opacity-90 transition-opacity inline-block"
            >
              EXPLORE VAULT
            </Link>
            <Link
              to="/projects"
              className="border-2 border-primary text-foreground px-8 py-3 text-sm font-bold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors inline-block"
            >
              VIEW PROJECTS
            </Link>
          </div>
        </div>
        <div className="hidden md:flex justify-end">
          <img
            src={heroImage}
            alt="Brutalist 3D render"
            className="w-full max-w-md object-cover border-2 border-foreground/10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
