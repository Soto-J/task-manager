import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav
      className="
        fixed 
        top-0 
        flex 
        h-14 
        w-full 
        items-center 
        border-b
        bg-white
        px-4
        shadow-sm
      "
    >
      <div
        className="
          mx-auto 
          flex 
          w-full 
          items-center 
          justify-between 
          md:max-w-screen-2xl
        "
      >
        <Logo />

        <div
          className="
            flex 
            w-full 
            items-center 
            justify-between 
            md:block 
            md:w-auto 
            md:space-x-4
          "
        >
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
