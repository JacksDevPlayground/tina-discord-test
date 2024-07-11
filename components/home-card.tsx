import { cn } from "@/utils/cn";

type HomeCardProps = {
  title: string;
  description: string;
  href: string;
  Icon: any;
  iconBackground?: string;
  iconForeground?: string;
};

export default function HomeCard({
  title,
  description,
  href,
  Icon,
  iconForeground = "text-indigo-700",
  iconBackground = "bg-indigo-50",
}: HomeCardProps) {
  return (
    <div
      key={title}
      className={cn(
        "rounded-bl-lg rounded-br-lg sm:rounded-bl-none",
        "group relative bg-white shadow-lg p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
      )}
    >
      <div>
        <span
          className={cn(
            iconBackground,
            iconForeground,
            "inline-flex rounded-lg p-3 ring-4 ring-white"
          )}
        >
          <Icon aria-hidden="true" className="h-6 w-6" />
        </span>
      </div>
      <div className="mt-8">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          <a href={href} className="focus:outline-none">
            {/* Extend touch target to entire panel */}
            <span aria-hidden="true" className="absolute inset-0" />
            {title}
          </a>
        </h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
      >
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
          <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
        </svg>
      </span>
    </div>
  );
}
