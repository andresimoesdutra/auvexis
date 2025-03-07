import { BiLogoGmail } from "react-icons/bi";
import { FaSquareInstagram, FaSquareXTwitter, FaTelegram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function ContactForm() {


    return (
        <div className="w-screen h-auto py-20 flex justify-center items-center">
            <div className="w-full flex justify-center items-center">
                <div className="w-full p-4 flex flex-col justify-center items-center gap-3">
                    <h1 className="w-full font-[600] text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
                        Contact Us
                    </h1>
                    <p className="w-full sm:w-full lg:w-2/5 text-center font-[400] text-[1.1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]">
                        We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!
                    </p>
                    <div className="flex gap-3">
                        <a href="https://x.com/auvexis" target="_blank" className="text-4xl hover:text-white/60 transition-colors duration-300">
                            <FaSquareXTwitter />
                        </a>
                        <a href="https://instagram.com/auvexiscorp" target="_blank" className="text-4xl hover:text-white/60 transition-colors duration-300">
                            <FaSquareInstagram />
                        </a>
                        <a href="https://t.me/auvexiscorp" target="_blank" className="text-4xl hover:text-white/60 transition-colors duration-300">
                            <FaTelegram />
                        </a>
                        <a href="mailto:auvexis@gmail.com" target="_blank" className="text-4xl hover:text-white/60 transition-colors duration-300">
                            <BiLogoGmail />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}