import HomeClient from "./client";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <section className="flex flex-1 h-full flex-col items-center justify-center drop-shadow-[5px_15px_35px_rgba(0,0,0,0.15)]">
        <HomeClient />
      </section>
      <footer className="max-w-sm mb-4 text-[0.65rem] m-auto text-center text-blue-200">
        Challenge by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.frontendmentor.io?ref=challenge"
          className="font-medium underline text-blue-400"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Esteban-Montecinos"
          className="font-medium underline text-blue-400"
        >
          Esteban Montecinos
        </a>
        .
      </footer>
    </main>
  );
}
