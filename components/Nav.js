const navItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Education", id: "education" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
];

export default function Nav({ active, onSelect }) {
    return (
        <nav className="border-b border-zinc-200 dark:border-zinc-800 mb-6 shrink-0">
            <div className="flex gap-0 overflow-x-auto scrollbar-none">
                {navItems.map(({ label, id }) => (
                    <button
                        key={id}
                        onClick={() => onSelect(id)}
                        className={`px-4 py-3 text-sm whitespace-nowrap border-b-2 transition-colors cursor-pointer ${active === id
                                ? "border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 font-medium"
                                : "border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </nav>
    );
}
