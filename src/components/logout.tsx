"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <Button className="cursor-pointer" variant="outline" onClick={handleLogout}>
      Logout
    </Button>
  );
}
