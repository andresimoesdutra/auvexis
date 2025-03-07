import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
    Navbar as NavbarComponent,
    NavbarLeft,
    NavbarRight,
} from "@/components/ui/navbar";
import Image from "next/image";
import AuvexisLogoWhite from "../logos/Auvexis Block White.png";

export default function NavbarNoAuth() {
    return (
        <header className="fixed w-screen bg-black top-0 z-50 py-5 px-3 md:px-5 lg:px-10">
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
                        <a href="/login" className="text-sm mx-3 hover:text-white/50">
                            Sign in
                        </a>
                        <Button variant="secondary" asChild>
                            <a href="/signup">Get Started</a>
                        </Button>
                    </NavbarRight>
                </NavbarComponent>
            </div>
        </header>
    );
}
