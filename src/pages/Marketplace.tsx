import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <span className="text-vault-red text-xs font-bold tracking-widest uppercase">DIGITAL_GOODS</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mt-2">MARKETPLACE</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((product) => (
            <div key={product.id} className="border-2 border-foreground/10 overflow-hidden group hover:border-foreground/30 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-vault-yellow text-vault-black px-3 py-1 text-xs font-bold tracking-wider">
                  ${product.price}
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold tracking-tight uppercase">{product.name}</h3>
                <span className="font-mono text-xs text-vault-red tracking-wider uppercase">{product.tech}</span>
                <p className="text-sm text-muted-foreground">{product.description}</p>
                <a
                  href="#"
                  className="block bg-primary text-primary-foreground px-4 py-3 text-xs font-bold tracking-wider uppercase hover:opacity-90 transition-opacity text-center mt-4"
                >
                  BUY NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Marketplace;
