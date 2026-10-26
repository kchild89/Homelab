export const metadata = { title: "Homelab | Kevin Child" };

const previousServices = [
  ["Proxmox VE", "Hypervisor"],
  ["Jellyfin", "Media server"],
  ["Glances", "System monitoring"],
  ["Pi-hole", "DNS filtering and ad blocking"],
];
const plannedServices = [
  ["Docker", "Containerized application hosting"],
  ["Portainer", "Docker container management"],
  ["Uptime Kuma", "Service and network uptime monitoring"],
  ["Tailscale", "Remote access"],
  ["TrueNAS SCALE", "NAS and storage management"],
  ["Cybersecurity lab", "Isolated Kali Linux and vulnerable practice VMs"],
];

export default function Homelab() {
  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-4xl font-bold">Homelab</h1>
      <p className="rounded-lg border border-gray-300 p-5 dark:border-gray-700">
        <strong>Currently offline.</strong> As of October 25, 2026, no lab services are running.
        These notes describe the previous setup and future plans.
      </p>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Previous setup</h2>
        <p>The installed configuration and recovery readiness still need to be verified.</p>
        <ul className="space-y-3">{previousServices.map(([name, role]) => (
          <li key={name}><strong>{name}</strong> — {role}</li>
        ))}</ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Future plans</h2>
        <p>Ideas to revisit as the lab comes back online, with no deployment order set yet.</p>
        <ul className="space-y-3">{plannedServices.map(([name, role]) => (
          <li key={name}><strong>{name}</strong> — {role}</li>
        ))}</ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Network notes</h2>
        <p>The older diagram includes an OPNsense VM. That layout is unverified and does not describe a currently running network.</p>
        <a className="text-blue-600 underline dark:text-blue-400" href="/Files/NetworkDiagram.md">Read the historical network diagram (Markdown)</a>
      </section>
    </div>
  );
}
