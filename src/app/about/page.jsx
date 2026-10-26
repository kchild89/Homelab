export const metadata = { title: "About | Kevin Child" };

export default function About() {
  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">I’m Kevin, a journeyman electrician turned full-stack developer with an interest in home labs, hardware projects, and automation.</p>
      <p>This site brings together my project files and lab notes, including the parts that are still works in progress.</p>
      <p>The lab is currently offline. My next step is to document what I have, verify the previous setup, and make it easier to maintain when it comes back online.</p>
    </div>
  );
}
