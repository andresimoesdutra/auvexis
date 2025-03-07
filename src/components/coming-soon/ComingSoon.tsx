import ContactForm from "../contact-form/ContactForm";

export default function ComingSoonPage() {
    return (
        <>
            <div
                className="h-screen w-screen rounded-md flex justify-center items-center bg-grid-white/[0.02] relative overflow-hidden"
            >
                <div className="w-full flex flex-col gap-5 justify-center items-center">
                    <h1 className="w-full text-center text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-[600]">
                        <span
                            style={{ fontFamily: "KoHo" }}
                        >
                            Auvexis
                        </span>
                        <br />
                        Coming Soon
                    </h1>
                    <p className="w-1/2 text-center text-[1.1rem] sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] font-[500] text-white/90">
                        We're working hard to bring you something exciting. Stay tuned as we prepare powerful tools and resources designed for seamless integration and effortless use. Your support and contributions will help us make it happen!
                    </p>
                </div>
            </div>

            <ContactForm />
        </>
    );
}