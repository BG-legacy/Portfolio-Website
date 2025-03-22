import StarParticles from "./components/StarParticles";
import StarWarsCrawl from "./components/StarWarsCrawl";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <StarParticles />
      <StarWarsCrawl />
    </main>
  );
}
