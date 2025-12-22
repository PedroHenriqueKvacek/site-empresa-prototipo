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
                            Com ampla experiência técnica e compromisso com a inovação, a WM alia tecnologia, mão-de-obra  especializada
                            e equipamentos de alta performance para garantir um ciclo térmico conforme curva característica do material tratado.
                            Nossos projetos são elaborados de forma a homogeneizar  o desempenho térmico, reduzir custos operacionais.
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
                                        Desenvolver, implementar e fornecer soluções completas em tratamento térmico,
                                        com alto rigor técnico, foco em segurança operacional e excelência em desempenho.
                                        Atuamos para otimizar processos industriais, aumentar a produtividade, reduzir riscos
                                        e agregar valor sustentável aos nossos clientes, sempre com compromisso com a qualidade
                                        e a confiabilidade dos resultados.
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
                                        Ser reconhecida como referência nacional em soluções industriais de tratamento térmico ,
                                        destacando-se pela inovação técnica, confiabilidade operacional e entrega de resultados consistentes.
                                        Buscamos crescimento sustentável, expansão de mercado e construção de parcerias estratégicas de longo prazo,
                                        mantendo-nos na vanguarda das melhores práticas do setor industrial.
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
                                        <span className="font-semibold text-white">Inovação:</span> Investimos continuamente em tecnologia, processos e
                                        conhecimento técnico para oferecer soluções atualizadas, eficientes e alinhadas às demandas do mercado industrial.
                                    </p>
                                    <p className="text-white/90">
                                        <span className="font-semibold text-white">Qualidade Técnica:</span> Atuamos com alto padrão de execução, rigor técnico e
                                        atenção aos detalhes em todas as etapas dos projetos, garantindo segurança, eficiência e desempenho superior.
                                    </p>
                                    <p className="text-white/90">
                                        <span className="font-semibold text-white">Comprometimento com Resultados:</span> Assumimos responsabilidade total pelas soluções entregues,
                                        priorizando eficácia, confiabilidade e satisfação do cliente.
                                    </p>
                                    <p className="text-white/90">
                                        <span className="font-semibold text-white">Ética e Transparência:</span> Conduzimos nossos negócios com integridade, clareza e
                                        responsabilidade, construindo relações baseadas na confiança mútua.
                                    </p>
                                    <p className="text-white/90">
                                        <span className="font-semibold text-white">Sustentabilidade:</span> Buscamos reduzir impactos ambientais, otimizar o uso de energia e
                                        promover práticas responsáveis que contribuam para a eficiência e longevidade dos processos industriais.
                                    </p>
                                    <p className="text-white/90">
                                        <span className="font-semibold text-white">Parceria e Relacionamento:</span> Valorizamos relações duradouras com clientes, fornecedores e
                                        colaboradores, atuando de forma colaborativa para alcançar resultados sólidos e contínuos.
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