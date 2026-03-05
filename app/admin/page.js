"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminDashboard() {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [activeSection, setActiveSection] = useState("about");
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");
    const [editData, setEditData] = useState(""); // Raw JSON string for editing

    const sections = ["about", "projects", "experience", "education", "skills"];

    // Fetch data for the active section
    const fetchData = async (section) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/data?section=${section}`);
            const json = await res.json();
            if (res.ok) {
                setData(json.data);
                setEditData(JSON.stringify(json.data, null, 2));
            } else {
                setMessage(json.error || "Failed to load data");
            }
        } catch (err) {
            setMessage("Error loading data");
        }
        setLoading(false);
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchData(activeSection);
        }
    }, [activeSection, isAuthenticated]);

    // Check for existing token on mount
    useEffect(() => {
        const token = localStorage.getItem("adminToken");
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!password) return;

        setLoading(true);
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });
            const json = await res.json();

            if (res.ok && json.token) {
                localStorage.setItem("adminToken", json.token);
                setIsAuthenticated(true);
                setPassword(""); // clear password from state
            } else {
                setMessage("❌ " + (json.error || "Login failed"));
                setTimeout(() => setMessage(""), 3000);
            }
        } catch (err) {
            setMessage("❌ Network error");
            setTimeout(() => setMessage(""), 3000);
        }
        setLoading(false);
    };

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        setIsAuthenticated(false);
        setData({});
        setEditData("");
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage("");
        try {
            // Parse to ensure it's valid JSON before sending
            const parsedData = JSON.parse(editData);
            const token = localStorage.getItem("adminToken");

            const res = await fetch("/api/data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    section: activeSection,
                    data: parsedData,
                }),
            });

            const json = await res.json();
            if (res.ok) {
                setMessage("✅ Saved successfully!");
                setData(parsedData);
            } else {
                setMessage("❌ " + (json.error || "Failed to save"));
                if (res.status === 401) {
                    handleLogout(); // Token expired or invalid
                }
            }
        } catch (err) {
            setMessage("❌ Invalid JSON format or network error");
        }
        setSaving(false);

        // Clear message after 3 seconds
        setTimeout(() => setMessage(""), 3000);
    };

    // Login Screen
    if (!isAuthenticated) {
        return (
            <div className="h-screen flex items-center justify-center bg-white dark:bg-zinc-950 p-6">
                <motion.div
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full max-w-sm"
                >
                    <div className="mb-8 text-center relative">
                        <h1 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                            Ersagun Tosun
                        </h1>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                            Admin Access
                        </p>
                        <AnimatePresence>
                            {message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                    className="absolute -bottom-8 left-0 right-0 text-xs font-medium text-red-500 flex justify-center w-full whitespace-nowrap"
                                >
                                    {message}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2.5 text-sm bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100 dark:text-zinc-100 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-center"
                            placeholder="Enter password..."
                            autoFocus
                        />
                        <button
                            type="submit"
                            disabled={loading || !password}
                            className="w-full py-2.5 text-sm font-medium text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors disabled:opacity-50"
                        >
                            {loading ? "Authenticating..." : "Authenticate"}
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    // Dashboard Screen
    return (
        <div className="h-screen overflow-hidden flex flex-col bg-white dark:bg-zinc-950">
            <div className="max-w-2xl w-full mx-auto px-6 py-10 flex flex-col h-full">
                <header className="flex items-start justify-between mb-8 pb-4 border-b border-zinc-100 dark:border-zinc-800/50 shrink-0">
                    <div>
                        <h1 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                            Ersagun Tosun
                        </h1>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                            Data Manager
                        </p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    >
                        Sign Out
                    </button>
                </header>

                <div className="flex flex-col h-full overflow-hidden">
                    {/* Navigation */}
                    <nav className="flex items-center gap-1 overflow-x-auto pb-4 shrink-0 no-scrollbar">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => setActiveSection(section)}
                                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors capitalize whitespace-nowrap ${activeSection === section
                                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                                    }`}
                            >
                                {section}
                            </button>
                        ))}
                    </nav>

                    {/* Editor */}
                    <div className="flex-1 min-h-0 flex flex-col bg-zinc-50 dark:bg-zinc-900/30 rounded-2xl border border-zinc-100 dark:border-zinc-800/50 overflow-hidden relative">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 dark:border-zinc-800/50 shrink-0">
                            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                                {activeSection}.json
                            </span>

                            <AnimatePresence mode="wait">
                                {message && (
                                    <motion.span
                                        initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                        className="text-xs font-medium text-zinc-900 dark:text-zinc-100"
                                    >
                                        {message}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="flex-1 overflow-y-auto no-scrollbar relative">
                            {loading ? (
                                <div className="absolute inset-0 flex items-center justify-center text-sm text-zinc-400">
                                    Loading...
                                </div>
                            ) : (
                                <textarea
                                    value={editData}
                                    onChange={(e) => setEditData(e.target.value)}
                                    className="w-full h-full min-h-[400px] p-4 bg-transparent font-mono text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 focus:outline-none resize-none"
                                    spellCheck={false}
                                />
                            )}
                        </div>

                        <div className="p-4 border-t border-zinc-100 dark:border-zinc-800/50 shrink-0 flex justify-end">
                            <button
                                onClick={handleSave}
                                disabled={saving || loading}
                                className="px-5 py-2 text-sm font-medium text-white dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-100 rounded-lg hover:bg-zinc-800 dark:hover:bg-white transition-colors disabled:opacity-50"
                            >
                                {saving ? "Saving..." : "Save File"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
