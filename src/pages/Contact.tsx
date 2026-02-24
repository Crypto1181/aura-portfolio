import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Demo)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="max-w-2xl mx-auto px-6 py-20">
        <div className="mb-12">
          <span className="text-vault-red text-xs font-bold tracking-widest uppercase">GET_IN_TOUCH</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mt-2">CONTACT</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold tracking-widest uppercase mb-2">NAME</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border-2 border-foreground/20 bg-background px-4 py-3 text-sm font-mono focus:border-foreground outline-none transition-colors"
              placeholder="YOUR NAME"
            />
          </div>
          <div>
            <label className="block text-xs font-bold tracking-widest uppercase mb-2">EMAIL</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border-2 border-foreground/20 bg-background px-4 py-3 text-sm font-mono focus:border-foreground outline-none transition-colors"
              placeholder="YOUR@EMAIL.COM"
            />
          </div>
          <div>
            <label className="block text-xs font-bold tracking-widest uppercase mb-2">MESSAGE</label>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border-2 border-foreground/20 bg-background px-4 py-3 text-sm font-mono focus:border-foreground outline-none transition-colors resize-none"
              placeholder="TELL ME ABOUT YOUR PROJECT..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground px-8 py-4 text-sm font-bold tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            SEND MESSAGE
          </button>
        </form>

        <div className="mt-16 pt-10 border-t border-foreground/10">
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-muted-foreground">FIND ME ON</p>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold tracking-wider uppercase hover:text-vault-red transition-colors">GITHUB</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold tracking-wider uppercase hover:text-vault-red transition-colors">LINKEDIN</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold tracking-wider uppercase hover:text-vault-red transition-colors">TWITTER</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
