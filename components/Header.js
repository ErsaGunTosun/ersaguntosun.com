import ThemeToggle from "@/components/ui/ThemeToggle";
import aboutData from "@/data/about.json";
const { about } = aboutData;

export default function Header() {
    return (
        <header className="flex items-start justify-between py-10">
            <div>
                <h1 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {about.name}
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {about.title}
                </p>
            </div>
            <div className="flex items-center gap-3">
                <ThemeToggle />
            </div>
        </header>
    );
}
