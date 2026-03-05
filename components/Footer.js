import { about } from "@/data/about";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="py-8 border-t border-zinc-100 dark:border-zinc-800 mt-4">
            <div className="flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500">
                <span>© {year} {about.name}</span>
                <div className="flex items-center gap-4">
                    <a
                        href={`mailto:${about.email}`}
                        className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                    >
                        {about.email}
                    </a>
                    <a
                        href={about.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
