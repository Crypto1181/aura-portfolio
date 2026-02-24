import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full border-b border-foreground/10 bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold tracking-tighter uppercase">
          DEV_VAULT
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-0 text-sm font-semibold tracking-wider uppercase">
          <Link to="/projects" className="px-5 py-2 hover:text-vault-red transition-colors border-r border-foreground/10">
            Projects
          </Link>
          <Link to="/marketplace" className="px-5 py-2 hover:text-vault-red transition-colors border-r border-foreground/10">
            Marketplace
          </Link>
          <Link to="/contact" className="px-5 py-2 hover:text-vault-red transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden md:block">
          <button className="bg-vault-yellow text-vault-black px-5 py-2 text-sm font-bold tracking-wider uppercase hover:opacity-90 transition-opacity">
            LOG_IN
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-foreground/10 bg-background">
          <div className="flex flex-col text-sm font-semibold tracking-wider uppercase">
            <Link to="/projects" className="px-6 py-4 border-b border-foreground/10 hover:bg-muted" onClick={() => setMobileOpen(false)}>Projects</Link>
            <Link to="/marketplace" className="px-6 py-4 border-b border-foreground/10 hover:bg-muted" onClick={() => setMobileOpen(false)}>Marketplace</Link>
            <Link to="/contact" className="px-6 py-4 border-b border-foreground/10 hover:bg-muted" onClick={() => setMobileOpen(false)}>Contact</Link>
            <div className="px-6 py-4">
              <button className="bg-vault-yellow text-vault-black px-5 py-2 text-sm font-bold tracking-wider uppercase w-full">LOG_IN</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
