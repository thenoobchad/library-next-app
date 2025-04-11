import Image from "next/image";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <main className="h-[100vh] w-screen flex flex-col-reverse ">
      <section className="container h-full mx-auto flex flex-col justify-center items-center">
        <div className="bg-gray-900 p-9">
          <div className="flex flex-row gap-3">
            <Image src="/icons/logo.svg" alt="logo" width={37} height={37} />
            <h1 className="text-2xl font-semibold text-white">BookWise</h1>
          </div>
          <div>{children}</div>
        </div>
      </section>

     
    </main>
  );
}
