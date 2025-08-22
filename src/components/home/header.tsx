"use client";

import { Ghost } from "lucide-react";
import { useRouter } from "next/navigation";

import { ModeToggle } from "../theme";
import { Button } from "@/components/ui/button";

export function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-3xl border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Ghost className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold font-geist">Jotly</span>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="font-manrope hover:bg-accent/20 transition-colors cursor-pointer rounded-full"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
          <Button
            className=" rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 font-manrope transition-all duration-300 cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Sign Up
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
