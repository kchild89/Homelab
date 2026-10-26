import ProjectCard from "@/components/ProjectCard";

export const metadata = { title: "Projects | Kevin Child" };

export default function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="max-w-3xl text-lg text-gray-700 dark:text-gray-300">Hardware build files and notes from the lab. The lab itself is currently offline.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        <ProjectCard title="Network switch shelf" description="A saved 3D-printable shelf model for the TP-Link TL-SG108-M2 switch." link="/Files/TP-LinkTL-SG108-M2Shelf.stl" linkLabel="Download shelf STL" download />
        <ProjectCard title="Homelab documentation" description="The previous service setup, future plans, and historical network notes. Recovery details are still being documented." link="/homelab" linkLabel="Read lab notes" />
      </div>
    </div>
  );
}
