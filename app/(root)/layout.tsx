import Header from "@/components/Header";
import { ReactNode } from "react";
import "../globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className=" min-h-screen flex-1  bg-pattern bg-cover bg-top  px-5 xs:px-10 md:px-16 mt-2 text-justify text-xl flex w-full flex-col bg-gradient-to-t ">
      <div className="px-2 sm:px-0 mx-auto max-w-7xl">
        <Header />
        <div className="mt-20 pb-20">{children}</div>
      </div>
    </main>
  );
}
