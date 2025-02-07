"use client";
import { useEffect, useState } from "react";

export default function DarkModeButton() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="mt-3 p-2 border rounded-md bg-gray-800 text-white">
            {isDarkMode ? "ダークモード" : "ライトモード"}
        </button>
    );
}