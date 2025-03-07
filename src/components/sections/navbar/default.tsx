import Navigation from "../../ui/navigation";
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import AuvexisLogoWhite from "../../logos/Auvexis Block White.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom absolute left-0 h-24 w-full bg-background/15 backdrop-blur-lg"></div>
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft>
            <a
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <Image src={AuvexisLogoWhite} alt="Logo" width={45} height={45} />
              Auvexis
            </a>
            <Navigation />
          </NavbarLeft>
          <NavbarRight>
            <a href="/login" className="text-sm">
              Sign in
            </a>
            <Button variant="default" asChild>
              <a href="/signup">Get Started</a>
            </Button>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
