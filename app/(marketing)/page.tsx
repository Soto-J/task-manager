import Link from "next/link";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

const headingFont = localFont({ src: "../../public/fonts/font.woff2" });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "flex flex-col items-center justify-center",
          headingFont.className,
        )}
      >
        <div
          className="
            mb-4 
            flex 
            items-center 
            rounded-full 
            border 
            bg-amber-100 
            p-4 uppercase 
            text-amber-700 
            shadow-sm
          "
        >
          <Medal className="mr-2 h-6 w-6" />
          No 1 task managment
        </div>

        <h1
          className="
            mb-6 
            text-center 
            text-3xl 
            text-neutral-800 
            md:text-6xl
          "
        >
          Taskify helps team move
        </h1>
        <div
          className="
            w-fit 
            rounded-md 
            bg-gradient-to-r 
            from-fuchsia-600 
            to-pink-600 
            p-4
            pb-2 
            text-3xl 
            text-white 
            md:text-6xl
          "
        >
          Work forward.
        </div>
      </div>

      <div
        className={cn(
          "mx-auto mt-4 max-w-xs text-center text-sm text-neutral-400 md:max-w-2xl md:text-xl",
          poppins.className,
        )}
      >
        Colaborate, manage projects, and reach new productivity peeks. From high
        rises to the home office, the way your team works is unique - accomplish
        it all with Taskify
      </div>

      <Button className="mt-6" size="lg" asChild>
        <Link href="/signup">Get Taskify for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;