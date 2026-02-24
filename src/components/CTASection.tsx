import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-vault-yellow text-vault-black py-20">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
          NEED A CUSTOM BUILD?
        </h2>
        <p className="font-mono text-sm md:text-base tracking-wider uppercase opacity-70">
          LET'S DISCUSS YOUR ARCHITECTURE
        </p>
        <Link
          to="/contact"
          className="inline-block bg-vault-black text-primary-foreground px-10 py-4 text-sm font-bold tracking-wider uppercase hover:opacity-90 transition-opacity mt-4"
        >
          GET IN TOUCH
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
