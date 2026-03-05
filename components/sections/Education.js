"use client";

import { motion } from "framer-motion";
import education from "@/data/education.json";

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Education() {
    return (
        <motion.section variants={stagger} initial="hidden" animate="visible" className="py-8">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Education</h2>
            <div className="space-y-6">
                {education.map((edu) => (
                    <motion.div key={edu.id} variants={fadeUp}>
                        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{edu.school}</p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{edu.degree}</p>
                        <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">{edu.period} · {edu.location}</p>
                        {edu.description && (
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">{edu.description}</p>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
