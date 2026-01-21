import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Demo from "./pages/Demo";
import Demo2 from "./pages/Demo2";
import Marketing from "./pages/marketing";
import QuickStart from "./pages/quick_start";
import Features from "./pages/features";

export default function Home() {
  return (
    <div>
      <Hero />
      <Demo />
      <QuickStart />
      <Cards />
      <Demo2 />
      <Marketing />
      <Features />
    </div>
  );
}
