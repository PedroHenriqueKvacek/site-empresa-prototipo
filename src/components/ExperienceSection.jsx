import { Award } from "lucide-react"

export const ExperienceSection = () => {
    return (
        <section id="experiencia" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />

            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 md:mb-6">
                            <Award className="w-5 h-5" />
                            <span className="text-sm font-semibold">Experiência Comprovada</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-balance mb-6 md:mb-8">
                            Mais de 20 Anos de Experiência Industrial
                        </h2>
                        <p className="text-2xl md:text-2xl text-white/90 max-w-3xl mx-auto text-pretty">
                            Nossa equipe conta com profissionais altamente qualificados,
                            com mais de duas décadas de experiência em
                            engenharia térmica e soluções industriais
                        </p>
                    </div>
                    <div className="gradient-border card-hover bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                        <h3 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">O que nos diferencia</h3>
                        <div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-white mt-2" />
                                    <div>
                                        <h4 className="font-semibold text-lg md:text-xl">Conhecimento Profundo do Setor</h4>
                                        <p className="text-base md:text-lg text-white/80 leading-relaxed">
                                            Nossa equipe vivenciou a evolução das tecnologias industriais,
                                            trazendo insights valiosos para cada
                                            projeto
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-white mt-2" />
                                    <div>
                                        <h4 className="font-semibold text-lg md:text-xl">Soluções Testadas e Comprovadas</h4>
                                        <p className="text-base md:text-lg text-white/80 leading-relaxed">
                                            Metodologias desenvolvidas e aperfeiçoadas ao longo de décadas de atuação no mercado
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-white mt-2" />
                                    <div>
                                        <h4 className="font-semibold text-lg md:text-xl">Mentoria e Capacitação</h4>
                                        <p className="text-base md:text-lg text-white/80 leading-relaxed">
                                            Contamos com equipamentos de combustão modernos, eficientes e seguros, 
                                            cuja construção está em conformidade na norma NBR 12313. Com um corpo técnico 
                                            seguro e eficiente, mostramos o nosso diferencial que é fazer sempre o 
                                            melhor, com técnica com qualidade e segurança.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-white mt-2" />
                                    <div>
                                        <h4 className="font-semibold mb-2 text-lg md:text-xl">Relacionamento de Longo Prazo</h4>
                                        <p className="text-base md:text-lg text-white/80 leading-relaxed">
                                            Parcerias duradouras construídas com base em confiança e resultados consistentes
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}