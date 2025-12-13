import { ChevronDown } from "lucide-react"
import { Navbar } from "../components/Navbar"
import { ServicesSection } from "../components/ServicesSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"

export const Servicos = () => {
    return (
        <>
            <Navbar />
            <section
                id="servicos"
                className="w-screen overflow-hidden py-10"

            >
                <div className="relative w-screen h-[450px] overflow-hidden">
                    <img
                        src="/cards/industria.png"
                        alt="Fundo"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="absolute inset-0 flex items-center justify-center px-4">
                        <div className="text-white text-center">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                                Conheça todos nossos Serviços
                            </h1>
                            <p className="mt-4 text-lg md:text-2xl text-white/90 drop-shadow text-center">
                                Oferecemos soluções completas em serviços industriais,<br />
                                com qualidade e compromisso para atender às necessidades da sua empresa.
                            </p>

                            <div className="mt-8">
                                <a
                                    href="#servicosSection"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 text-black font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 hover:text-white"
                                >
                                    Nossos Serviços
                                    <ChevronDown className="w-5 h-5" />
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

                <ServicesSection />
                <ContactSection />

            </section>
            <Footer />

        </>
    )
}