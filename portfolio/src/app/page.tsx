import StarParticles from "./components/StarParticles";
import StarWarsCrawl from "./components/StarWarsCrawl";
import ClientOnly from "./components/ClientOnly";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <ClientOnly>
        <StarParticles />
      </ClientOnly>
      <StarWarsCrawl />
    </main>
  );
}
