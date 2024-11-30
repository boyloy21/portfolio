'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isActive = (path) =>  pathname === path;
    return (
        <nav className="bg-zinc-600 p-6 w-full">
            <div className="container flex flex-row justify-between">
                <div className="flex justify-start">
                    <h1 className="text-3xl font-bold text-white">Portfolio</h1>
                </div>
                <div className="flex justify-end ">
                    <Link 
                        href="/" className={`text-2xl px-6 mx-4 hover:underline transition duration-75 ease-in-out transform hover:scale-110 hover:bg-blue-500 hover:text-white rounded-lg ${
                        isActive("/") ? "text-blue-500 font-bold text-3xl" : "text-white"
                        }`}  >Home</Link>
                    <Link className={`text-2xl px-6 mx-4 rounded-lg transition duration-75 ease-in-out transform hover:scale-110 hover:bg-blue-500 hover:underline hover:text-white ${
                        isActive("/skill") ? "text-blue-500 font-bold text-3xl" : "text-white"
                        }`} href="/skill">Skill</Link>
                    <Link className={`text-2xl px-6 mx-4 rounded-lg transition duration-75 ease-in-out transform hover:scale-110 hover:bg-blue-500 hover:underline hover:text-white ${
                        isActive("/project") ? "text-blue-500 font-bold text-3xl" : "text-white"
                        }`} href="/project">Project</Link>
                    <Link className={`text-2xl px-6 mx-4 rounded-lg transition duration-75 ease-in-out transform hover:scale-110 hover:bg-blue-500 hover:underline hover:text-white ${
                        isActive("/document") ? "text-blue-500 font-bold" : "text-white"
                        }`} href="/document">Document</Link>
                    <Link className={`text-2xl px-6 mx-4 rounded-lg transition duration-75 ease-in-out transform hover:scale-110 hover:bg-blue-500 hover:underline hover:text-white ${
                        isActive("/about") ? "text-blue-500 font-bold" : "text-white"
                        }`} href="/about">About</Link>
                </div>
            </div>
        </nav>
    );
}
