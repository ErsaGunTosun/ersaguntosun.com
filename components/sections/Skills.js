"use client";

import { motion } from "framer-motion";
import skills from "@/data/skills.json";
import Badge from "@/components/ui/Badge";
import SectionTitle from "@/components/ui/SectionTitle";

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Skills() {
    return (
        <motion.section variants={stagger} initial="hidden" animate="visible" className="py-8">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Skills</h2>
            <div className="space-y-6">
                {skills.map((group) => (
                    <motion.div key={group.category} variants={fadeUp}>
                        <SectionTitle>{group.category}</SectionTitle>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((skill) => <Badge key={skill}>{skill}</Badge>)}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
