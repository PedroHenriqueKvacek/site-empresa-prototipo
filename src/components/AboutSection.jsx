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
                        <div className="gradient-border p-6 card-hover bg-blue-50">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-blue-100">
                                    <Flame className="h-6 text-blue-700" />

                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg md:text-xl"> Missão</h4>
                                    <p className="text-muted-foreground text-base md:text-lg">
                                        Desenvolver e fornecer soluções de aquecimento controlado em
                                        materiais refratários, com excelência técnica e compromisso com a qualidade,
                                        contribuindo para o aumento da produtividade e segurança dos processos industriais.
                                    </p>
                                </div>

                            </div>

                        </div>
                        <div className="gradient-border p-6 card-hover bg-blue-50">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-blue-100">
                                    <Globe className="h-6 text-blue-700" />

                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg md:text-xl"> Visão</h4>
                                    <p className="text-muted-foreground text-base md:text-lg">
                                        Ser referência nacional em engenharia térmica e soluções industriais
                                        personalizadas, reconhecida pela confiabilidade, i
                                        novação e resultados de alto desempenho.
                                    </p>
                                </div>

                            </div>


                        </div>

                        <div className="gradient-border p-6 card-hover bg-blue-50">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-blue-100">
                                    <ShieldCheck className="h-6 text-blue-700" />

                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg md:text-xl"> Valores</h4>
                                    <div className="space-y-2 text-muted-foreground text-base md:text-lg">

                                        <p><span className="font-semibold">Inovação:</span> buscamos continuamente novas tecnologias e aprimoramentos em nossos processos.</p>

                                        <p><span className="font-semibold">Qualidade:</span> garantimos alto padrão técnico em cada etapa do projeto.</p>

                                        <p><span className="font-semibold">Comprometimento:</span> priorizamos a entrega de soluções eficazes e seguras.</p>

                                        <p><span className="font-semibold">Ética e Transparência:</span> atuamos com responsabilidade e respeito em todas as relações.</p>

                                        <p><span className="font-semibold">Sustentabilidade:</span> promovemos práticas que reduzem impactos ambientais e otimizam o uso de energia.</p>

                                        <p><span className="font-semibold">Parceria:</span> valorizamos relações duradouras com clientes, fornecedores e colaboradores.</p>

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