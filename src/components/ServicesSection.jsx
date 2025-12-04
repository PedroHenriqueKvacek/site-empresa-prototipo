export const ServicesSection = () => {
    return (
        <section id="servicosSection" className="py-24 px-4 md:px-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">
                    Serviços que <span className="text-blue-700"> Prestamos</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left column: EPIs description */}
                    <div className="space-y-6 md:col-span-1">
                        <h3 className="text-3xl md:text-4xl font-semibold">Ensaio Elétrico de Equipamentos de Proteção Individual</h3>

                        <p className="text-foreground max-w-prose mx-0 md:mx-0 leading-relaxed text-left text-lg md:text-xl">
                            Realizar ensaios elétricos nos Equipamentos de Proteção Individual (EPIs) é crucial para garantir
                            a segurança dos trabalhadores, pois verifica se os equipamentos oferecem proteção adequada contra
                            riscos elétricos como choques e arcos elétricos, conforme as normas de segurança.
                            Esses ensaios ajudam a identificar falhas e desgastes nos EPIs, evitando acidentes
                            e prolongando a vida útil dos equipamentos.
                        </p>
                    </div>

                    {/* Right column: EPIs image card (stays on the right) */}
                    <div className="md:col-span-1">
                        <div className="gradient-border p-6 card-hover bg-blue-50">
                            <div className="relative w-full h-64 overflow-hidden">
                                <img
                                    src="/cards/EPIS.png"
                                    alt="EPIS"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />

                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold">
                                    Ensaio Elétrico em EPIs
                                </h3>
                                <p className="text-muted-foreground text-lg mt-2">
                                    Segurança, confiabilidade e desempenho garantidos
                                    por meio de testes elétricos especializados.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Full-width convective method card below */}
                    <div className="md:col-span-2">
                        <div className="gradient-border p-6 card-hover bg-blue-50">
                            <div className="text-left">
                                <h3 className="text-3xl md:text-4xl font-semibold">Aquecimento e Secagem Controlada</h3>

                                <p className="text-foreground max-w-prose mx-0 md:mx-0 leading-relaxed text-left text-lg md:text-xl">
                                    A secagem de materiais refratários e assemelhados pelo método convectivo é um processo utilizado principalmente
                                    em indústrias como a Siderúrgica, Petroquímica, Vidreira, Fundição entre outros, para retirar a umidade de materiais
                                    ou produtos utilizando ar aquecido em movimento (convecção).
                                </p>

                                <p className="mt-4"><span className="font-semibold">1) Aquecimento do ar:</span> O ar é aquecido por uma fonte de calor (queimadores a gás de alta performance).</p>

                                <p><span className="font-semibold">2) Movimentação do ar quente:</span> Esse ar quente é forçado a circular dentro do forno, por nosso equipamento de alta performance.</p>

                                <p><span className="font-semibold">3) Contato com o material úmido:</span> O ar entra em contato com a superfície do material,
                                    aquecendo-o e promovendo a evaporação da água gradativamente em conformidade com o ciclo térmico.</p>

                                <p><span className="font-semibold">4) Remoção da umidade:</span>  O vapor gerado é transferido pelo fluxo de ar da face quente para a face fria e eliminado da unidade aquecida.</p>

                                <h4 className="text-2xl font-semibold mt-6">Vantagens do método convectivo: </h4>
                                <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                                    <li>
                                        Homogeneidade de um ciclo térmico, devido à performance do nosso equipamento.
                                    </li>
                                    <li>
                                        Custo operacional moderado, comparado a outros métodos como radiação ou micro-ondas.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}