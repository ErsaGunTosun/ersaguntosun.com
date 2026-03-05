"use client";

import { motion } from "framer-motion";
import aboutData from "@/data/about.json";
const { about = {}, openSource = [], community = [] } = aboutData || {};
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function About() {
    return (
        <motion.section variants={stagger} initial="hidden" animate="visible" className="py-8">
            <motion.p variants={fadeUp} className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                {about.bio}
            </motion.p>

            {about.available && (
                <motion.p variants={fadeUp} className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-4">
                    {about.available}
                </motion.p>
            )}

            <motion.div variants={fadeUp} className="mt-8">
                <SectionTitle>Community</SectionTitle>

                {openSource?.length > 0 && (
                    <div className="mb-6">
                        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
                            Active Open Source Contributor
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {openSource?.map((item) => (
                                <Badge key={item.name}>{item.name} {item.stars}★</Badge>
                            ))}
                        </div>
                    </div>
                )}

                <div className="space-y-5">
                    {community?.map((item, i) => (
                        <motion.div key={i} variants={fadeUp}>
                            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{item.title}</p>
                            {item.subtitle && (
                                <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">{item.subtitle}</p>
                            )}
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
}
