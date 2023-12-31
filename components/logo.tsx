import Image from "next/image";
import { cn } from "@/lib/utils";

import localFont from "next/font/local";

const headingFont = localFont({ src: "../public/fonts/font.woff2" });

const Logo = () => {
  return (
    <div
      className="
        hidden 
        items-center 
        gap-x-2 
        transition 
        hover:opacity-75
        md:flex
      "
    >
      <Image src="/logo.svg" alt="Logo" height={30} width={30} />

      <p className={cn("pt-1 text-lg text-neutral-700", headingFont.className)}>
        Taskify
      </p>
    </div>
  );
};

export default Logo;
