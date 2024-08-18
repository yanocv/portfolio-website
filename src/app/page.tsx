import Hero from "./components/Hero";

export default function Home(): JSX.Element {
  return (
    <div>
      <Hero />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </div>
  );
}
