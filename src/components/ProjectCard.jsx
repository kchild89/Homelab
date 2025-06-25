import Image from "next/image";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition transform hover:scale-[1.02]">
      {image && (
        <Image
          src={image}
          alt={title}
          width={640}
          height={360}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}
