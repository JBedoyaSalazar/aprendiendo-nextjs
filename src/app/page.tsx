import { Description, Hero, MainProducts } from "app/components/index";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Description />
        <MainProducts />
      </main>
    </div>
  );
}
