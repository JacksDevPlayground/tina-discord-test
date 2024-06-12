"use client";
import { Home, Posts } from "@/routes";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const currentPath = usePathname();

  const navClass = (href: string) =>
    cn(
      currentPath === href
        ? "bg-gray-900 text-white"
        : "hover:bg-gray-700 text-gray-300",
      "px-3 py-2 rounded-md text-sm font-medium"
    );

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <Home.Link>
                <div className="flex-shrink-0 flex items-center prose">
                  <h2 className="text-white">TinaCMS 🦙</h2>
                </div>
              </Home.Link>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Posts.Link className={navClass(Posts.routeName)}>
                    {Posts.routeName}
                  </Posts.Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
