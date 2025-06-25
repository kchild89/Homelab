import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 text-center sm:text-left">
      <main className="flex flex-col gap-8 items-center sm:items-start max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Hey, I’m Kevin 👋</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I’m a journeyman electrician turned full-stack developer and homelab
          addict. I build, break, automate, and document everything — from
          custom rackmounts to React dashboards.
        </p>
        <p className="text-base text-gray-500 dark:text-gray-400">
          Check out the{" "}
          <a className="underline text-blue-500" href="/homelab">
            Homelab
          </a>{" "}
          and{" "}
          <a className="underline text-blue-500" href="/projects">
            Projects
          </a>{" "}
          pages to see what I’ve been working on.
        </p>
        <Image
          src="/images/network-rack.png"
          alt="My homelab rack"
          width={640}
          height={320}
          className="rounded-lg shadow-lg"
        />
      </main>
    </div>
  );
}
