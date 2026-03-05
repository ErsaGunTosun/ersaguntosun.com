export default function SectionTitle({ children }) {
    return (
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
            {children}
        </p>
    );
}
