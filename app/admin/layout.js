import { redirect } from "next/navigation";

export default function AdminLayout({ children }) {
    if (process.env.ENABLE_ADMIN !== "true") {
        // If not enabled in env, throw a 404 not found so the page effectively doesn't exist
        redirect("/");
    }
    return children;
}
