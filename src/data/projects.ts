import projectNeuro from "@/assets/project-neuro.png";
import projectCrypto from "@/assets/project-crypto.png";
import projectTask from "@/assets/project-task.png";
import projectShop from "@/assets/project-shop.png";

export interface Project {
  id: string;
  name: string;
  tech: string;
  price: number;
  description: string;
  image: string;
  category: "web" | "mobile" | "all";
  liveUrl?: string;
  apkUrl?: string;
}

export const projects: Project[] = [
  {
    id: "neuro-os",
    name: "NEURO_OS",
    tech: "REACT + PYTHON",
    price: 89,
    description: "AI-powered dashboard with neural network visualization and real-time analytics.",
    image: projectNeuro,
    category: "web",
    liveUrl: "#",
  },
  {
    id: "crypto-flow",
    name: "CRYPTO_FLOW",
    tech: "NEXT.JS + RUST",
    price: 69,
    description: "Real-time cryptocurrency trading platform with advanced charting.",
    image: projectCrypto,
    category: "web",
    liveUrl: "#",
  },
  {
    id: "task-forge",
    name: "TASK_FORGE",
    tech: "FLUTTER + FIREBASE",
    price: 49,
    description: "Minimal kanban board app with dark theme and collaborative features.",
    image: projectTask,
    category: "mobile",
    liveUrl: "#",
    apkUrl: "#",
  },
  {
    id: "shop-engine",
    name: "SHOP_ENGINE",
    tech: "REACT NATIVE + NODE",
    price: 59,
    description: "E-commerce mobile app with sleek product browsing and checkout.",
    image: projectShop,
    category: "mobile",
    liveUrl: "#",
    apkUrl: "#",
  },
];
