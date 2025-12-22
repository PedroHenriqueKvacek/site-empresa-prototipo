import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { Navbar } from "../components/Navbar"
import { ServicesSection } from "../components/ServicesSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { useState } from "react"

export const Servicos = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 2)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 2) % 2)

    return (
        <>
            <Navbar />
            <section
                id="servicos"
                className="w-screen overflow-hidden py-10"

            >
                <div className="relative w-screen h-[750px] overflow-hidden">

                    {/* SLIDE 1 */}
                    <img
                        src="/cards/imagem3.png"
                        alt="Fundo"
                        className={`absolute inset-0 w-full h-full object-cover object-[center_40%] transition-opacity duration-700 ${currentSlide === 0 ? "opacity-100" : "opacity-0"
                            }`}
                    />

                    {/* SLIDE 2 */}
                    <img
                        src="/cards/imagem4.png"
                        alt="Experiencia Industrial"
                        className={`absolute inset-0 w-full h-full object-cover object-[center_40%] transition-opacity duration-700 ${currentSlide === 1 ? "opacity-100" : "opacity-0"
                            }`}
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* BOTÕES DE NAVEGAÇÃO */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 md:left-8 
                    top-[65%] md:top-1/2 
                    -translate-y-1/2 z-20 
                   text-white transition-all duration-300 hover:text-blue-500 hover:scale-110"
                        aria-label="Slide anterior"
                    >
                        <ChevronLeft className="w-7 h-7 md:w-10 md:h-10" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 md:right-8 
                    top-[65%] md:top-1/2 
                    -translate-y-1/2 z-20 
                   text-white transition-all duration-300 hover:text-blue-500 hover:scale-110"
                        aria-label="Próximo slide"
                    >
                        <ChevronRight className="w-7 h-7 md:w-10 md:h-10" />
                    </button>


                    {/* CONTEÚDO CENTRAL */}
                    <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
                        <div className="text-white text-center relative">

                            {/* TEXTO SLIDE 1 */}
                            <div
                                className={`transition-opacity duration-700 ${currentSlide === 0
                                    ? "opacity-100 pointer-events-auto"
                                    : "opacity-0 pointer-events-none absolute inset-0"
                                    }`}
                            >
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                                    Conheça todos nossos Serviços
                                </h1>

                                <p className="mt-4 text-lg md:text-2xl text-white/90 drop-shadow">
                                    Oferecemos soluções completas em serviços industriais,<br />
                                    com qualidade e compromisso para atender às necessidades da sua empresa.
                                </p>
                            </div>

                            {/* TEXTO SLIDE 2 */}
                            <div
                                className={`transition-opacity duration-700 ${currentSlide === 1
                                    ? "opacity-100 pointer-events-auto"
                                    : "opacity-0 pointer-events-none absolute inset-0"
                                    }`}
                            >
                                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Segmentos Atendidos</h1>
                                <p className="mt-4 text-lg md:text-2xl text-white/90 drop-shadow">
                                    Experiência comprovada atendendo indústrias de alta complexidade <br />
                                    em todo território nacional
                                </p>
                            </div>

                            {/* BOTÃO (AGORA FUNCIONA NO MOBILE) */}
                            {/* BOTÃO DINÂMICO */}
                            <a
                                href={currentSlide === 0 ? "#servicosSection" : "#segmentos"}
                                className="mt-8 inline-flex items-center gap-2 px-6 py-3 
                                 bg-white/90 text-black font-semibold rounded-full shadow-lg 
                                    transition-all duration-300 hover:bg-blue-700 hover:text-white"
                            >
                                {currentSlide === 0 ? "Nossos Serviços" : "Nossos Atendimentos"}
                                <ChevronDown className="w-5 h-5" />
                            </a>

                        </div>
                    </div>

                    {/* INDICADORES */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                        <button
                            onClick={() => setCurrentSlide(0)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === 0 ? "bg-white w-8" : "bg-white/50"
                                }`}
                        />
                        <button
                            onClick={() => setCurrentSlide(1)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === 1 ? "bg-white w-8" : "bg-white/50"
                                }`}
                        />
                    </div>
                </div>

                <ServicesSection />
                <ContactSection />

            </section>
            <Footer />

        </>
    )
}