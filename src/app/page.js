import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl space-y-8">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Home lab & projects</p>
        <h1 className="text-4xl font-bold tracking-tight">Hey, I’m Kevin 👋</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I’m a journeyman electrician turned full-stack developer. This is where
          I document my homelab, hardware projects, and what I learn along the way.
        </p>
      </div>
      <section aria-labelledby="lab-status" className="rounded-lg border border-gray-300 p-6 dark:border-gray-700">
        <h2 id="lab-status" className="text-xl font-semibold">Lab status: offline</h2>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
          As of October 25, 2026, the entire lab is offline. I’m documenting the
          previous setup and planning the next steps. Nothing here represents a live service status.
        </p>
      </section>
      <div className="flex flex-wrap gap-4">
        <Link className="rounded-md bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700" href="/homelab">Explore the lab notes</Link>
        <Link className="rounded-md border border-gray-400 px-5 py-3 font-medium hover:underline" href="/projects">View projects</Link>
      </div>
    </div>
  );
}
