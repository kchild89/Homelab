import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ title, description, image, link, linkLabel = "View project", download = false }) {
  const linkClassName = "inline-block rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700";
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
      {image && <Image src={image} alt={title} width={640} height={360} className="h-48 w-full object-cover" />}
      <div className="space-y-4 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
        {link && (download ? (
          <a href={link} download className={linkClassName}>{linkLabel}</a>
        ) : (
          <Link href={link} className={linkClassName}>{linkLabel}</Link>
        ))}
      </div>
    </article>
  );
}
