export default function Badge({ children }) {
    return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 whitespace-nowrap">
            {children}
        </span>
    );
}
