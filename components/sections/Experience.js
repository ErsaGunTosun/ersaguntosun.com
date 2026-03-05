"use client";

import { motion } from "framer-motion";
import experience from "@/data/experience.json";
import Badge from "@/components/ui/Badge";

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Experience() {
    return (
        <motion.section variants={stagger} initial="hidden" animate="visible" className="py-8">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Experience</h2>
            <div className="flex flex-col">
                {experience.map((job, i) => (
                    <motion.div key={job.id} variants={fadeUp} className="group relative flex gap-4 pb-8 last:pb-0">
                        {i < experience.length - 1 && (
                            <div className="absolute top-3 bottom-0 left-[3.5px] w-px bg-zinc-200 dark:bg-zinc-800" />
                        )}
                        <div className="flex flex-col items-center pt-1.5 relative z-10">
                            <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-600 shrink-0" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{job.role}</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">{job.company} · {job.location}</p>
                            <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">{job.period}</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">{job.description}</p>
                            {job.tags && (
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                    {job.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
