"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation"; // <-- Use next/navigation
import { useEffect } from "react";
import { ADMIN_USER_IDS } from "@/types/admin"; // Adjust path if needed

const Header = () => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn && user && ADMIN_USER_IDS.includes(user.id)) {
      if (window.location.pathname !== "/admin") {
        router.replace("/admin");
      }
    }
  }, [isSignedIn, user, router]);

  return (
    <header className="w-full border-b bg-black mx-0 mb-0 my-0 shadow-sm">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image 
            src="/assets/images/image.png" width={128} height={38}
            alt="Evephoria logo" 
          />
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in" className="bg-red-600 hover:bg-red-700 text-white px-2 py-0 rounded-full">
                Event Login
              </Link>
            </Button>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/admin">
                Admin Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header