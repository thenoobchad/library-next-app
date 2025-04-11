"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="./icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>

      <ul className="flex flex-row items-cenetr gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              "text-lg cursor-pointer capitalize",
              pathname == "/library" ? "text-gray-300" : "text-gray-100"
            )}
          >
            Library
          </Link>
        </li>
      </ul>
    </header>
  );
}
