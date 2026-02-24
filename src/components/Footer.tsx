const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm font-bold tracking-tighter uppercase">DEV_VAULT © 2026</span>
        <div className="flex gap-6 text-xs font-mono tracking-wider uppercase opacity-60">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">GITHUB</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">LINKEDIN</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">TWITTER</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
