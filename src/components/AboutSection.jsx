import { Flame, Globe, ShieldCheck } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="sobre" className="py-24 px-4 md:px-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">
                    Sobre a <span className="text-blue-700"> Empresa</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6 md:col-span-1">
                        <h3 className="text-3xl md:text-4xl font-semibold">Compromisso com a Excelência Industrial</h3>

                        <p className="text-foreground max-w-prose mx-0 md:mx-0 leading-relaxed text-left text-lg md:text-xl">
                            A WM Soluções Industriais é uma empresa especializada em
                            projetos de secagem e aquecimento controlado em materiais
                            refratários e assemelhados, oferecendo soluções sob medida para as mais diversas demandas do setor industrial.
                            Atuamos em todo o território nacional, desenvolvendo sistemas personalizados de aquecimento, com foco em eficiência térmica,
                            precisão operacional e confiabilidade dos processos.
                        </p>

                        <p className="text-foreground max-w-prose mx-0 md:mx-0 leading-relaxed text-left text-lg md:text-xl">
                            Com ampla experiência técnica e compromisso com a inovação, a WM alia tecnologia,
                            engenharia especializada e equipamentos de alta performance para garantir resultados
                            consistentes e duradouros. Nossos projetos são elaborados de forma a otimizar o desempenho térmico,
                            reduzir custos operacionais e aumentar a segurança e a vida útil dos equipamentos.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {/* Missão */}
                        <div
                            className="group relative
        bg-gradient-to-br from-blue-300 to-blue-600
        hover:from-blue-600 hover:to-blue-500
        text-white
        p-6
        rounded-2xl
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        hover:scale-105
        cursor-pointer"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                                    <Flame className="h-6 w-6 text-white" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-bold text-lg md:text-xl mb-2">Missão</h4>
                                    <p className="text-white/90 text-base md:text-lg leading-relaxed">
                                        Desenvolver e fornecer soluções de aquecimento controlado em
                                        materiais refratários, com excelência técnica e compromisso com a qualidade,
                                        contribuindo para o aumento da produtividade e segurança dos processos industriais.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Visão */}
                        <div
                            className="group relative
        bg-gradient-to-br from-blue-300 to-blue-600
        hover:from-blue-600 hover:to-blue-500
        text-white
        p-6
        rounded-2xl
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        hover:scale-105
        cursor-pointer"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                                    <Globe className="h-6 w-6 text-white" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-bold text-lg md:text-xl mb-2">Visão</h4>
                                    <p className="text-white/90 text-base md:text-lg leading-relaxed">
                                        Ser referência nacional em engenharia térmica e soluções industriais
                                        personalizadas, reconhecida pela confiabilidade, inovação e resultados
                                        de alto desempenho.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Valores */}
                        <div
                            className="group relative
        bg-gradient-to-br from-blue-300 to-blue-600
        hover:from-blue-600 hover:to-blue-500
        text-white
        p-6
        rounded-2xl
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        hover:scale-105
        cursor-pointer"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                                    <ShieldCheck className="h-6 w-6 text-white" />
                                </div>

                                <div className="text-left space-y-2">
                                    <h4 className="font-bold text-lg md:text-xl mb-2">Valores</h4>

                                    <p className="text-white/90">
                                        <span className="font-semibold text-white">Inovação:</span> buscamos continuamente novas tecnologias.
                                    </p>
                                    <p className="text-white/90">
                                        <span className="font-semibold text-white">Qualidade:</span> alto padrão técnico em cada projeto.
                                    </p>
                                    <p className="text-white/90">
                                        <span className="font-semibold text-white">Comprometimento:</span> soluções eficazes e seguras.
                                    </p>
                                    <p className="text-white/90">
                                        <span className="font-semibold text-white">Ética e Transparência:</span> responsabilidade em todas as relações.
                                    </p>
                                    <p className="text-white/90">
                                        <span className="font-semibold text-white">Sustentabilidade:</span> redução de impactos e otimização energética.
                                    </p>
                                    <p className="text-white/90">
                                        <span className="font-semibold text-white">Parceria:</span> relações duradouras.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </section>
    )
}