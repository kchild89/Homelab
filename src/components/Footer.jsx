export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Kevin Child. All rights reserved.
        </p>
        <p>
          Built with <span className="text-blue-400">Next.js</span> +{" "}
          <span className="text-cyan-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
