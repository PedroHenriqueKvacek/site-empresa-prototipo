import { Award, Clock, Droplets, Factory, Flame, Gauge, Shield, Thermometer, Wind } from "lucide-react"

const segments = [
    { icon: Factory, name: "Indústrias Vidreiras" },
    { icon: Factory, name: "Indústrias de Alumínios" },
    { icon: Factory, name: "Indústrias Cimenteiras" },
    { icon: Factory, name: "Indústrias Siderúrgicas" },
    { icon: Factory, name: "Indústrias Petroquímicas" },
];

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

                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center whitespace-nowrap">
                            Tratamento Térmico <span className="text-blue-700">Especializado</span>

                        </h2>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 card-hover bg-blue-50">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-blue-100">
                                        <Flame className="h-6 text-blue-700" />
                                    </div>

                                    <div className="text-left">
                                        <h1 className="font-bold text-xl md:text-2xl mb-4">Secagem Convectiva</h1>

                                        <p className="text-muted-foreground text-base md:text-lg mb-4">
                                            Processo de secagem controlada utilizando técnica convectiva
                                            para remoção eficiente de água livre e de estrutura dos refratários.
                                        </p>

                                        <ul className="space-y-2 text-lg text-blue-700">
                                            <li>• Remoção total da água</li>
                                            <li>• Pressão interna controlada</li>
                                            <li>• Chama oxidante azulada</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="gradient-border p-6 card-hover bg-blue-50">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-blue-100">
                                        <Thermometer className="h-6 text-blue-700" />
                                    </div>

                                    <div className="text-left">
                                        <h1 className="font-bold text-xl md:text-2xl mb-4">Aquecimento Controlado</h1>

                                        <p className="text-muted-foreground text-base md:text-lg mb-4">
                                            Aquecimento preciso com alta modulação (1:1000) para garantir
                                            homogeneidade térmica em todo o equipamento.
                                        </p>

                                        <ul className="space-y-2 text-lg text-blue-700">
                                            <li>• Temperatura ambiente até 1370ºC</li>
                                            <li>• Alta controlabilidade</li>
                                            <li>• Distribuição homogêneaa</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="gradient-border p-6 card-hover bg-blue-50">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-blue-100">
                                        <Wind className="h-6 text-blue-700" />
                                    </div>

                                    <div className="text-left">
                                        <h1 className="font-bold text-xl md:text-2xl mb-4">Resfriamento Controlado</h1>

                                        <p className="text-muted-foreground text-base md:text-lg mb-4">
                                            Processo de resfriamento gradual e controlado para preservar
                                            a integridade estrutural dos materiais refratários.
                                        </p>

                                        <ul className="space-y-2 text-lg text-blue-700">
                                            <li>• Processo gradual</li>
                                            <li>• Preserva integridade</li>
                                            <li>• Evita choque térmico</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="gradient-border p-6 card-hover bg-blue-50">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-blue-100">
                                        <Gauge className="h-6 text-blue-700" />
                                    </div>

                                    <div className="text-left">
                                        <h1 className="font-bold text-xl md:text-2xl mb-4">Manutenção de Temperatura</h1>

                                        <p className="text-muted-foreground text-base md:text-lg mb-4">
                                            Controle preciso para manutenção de temperatura em ambientes
                                            industriais durante todo o processo.
                                        </p>

                                        <ul className="space-y-2 text-lg text-blue-700">
                                            <li>• Controle 24/7</li>
                                            <li>• Monitoramento digital</li>
                                            <li>• Registro de dados</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>


                </div>

            </div>

            <section id="experiencia" className="relative
            left-1/2 right-1/2
            -ml-[50vw] -mr-[50vw]
            w-screen
            mt-24
            py-20
            bg-gradient-to-br from-blue-600 to-blue-800
          text-white
            overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />

                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">

                            <h2 className="text-5xl md:text-6xl font-bold text-balance mb-6 md:mb-8">
                                Por que escolher nosso processo?
                            </h2>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 w-full">

                            <a
                                className="group relative bg-gradient-to-br from-blue-50 to-blue-600
                        hover:from-blue-600 hover:to-blue-500 text-white p-8 rounded-2xl 
                        shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105
                        cursor-pointer"
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                                        < Droplets className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <h3 className="font-bols text-xl mb-2">Qualidade</h3>
                                        <p className="text-white/90 font-medium text-lg">Manutenção da integridade do equipamento</p>
                                    </div>

                                </div>
                            </a>


                            <a

                                className="group relative bg-gradient-to-br from-blue-50 to-blue-600
                        hover:from-blue-600 hover:to-blue-500 text-white p-6 md:p-8 
                        rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
                        hover:scale-105 cursor-pointer w-full max-w-sm mx-auto"
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                                        <Shield className="h-8 w-8" />
                                    </div>
                                    <div className="w-full">
                                        <h3 className="font-bold text-xl mb-2 truncate">Segurança</h3>
                                        <p className="text-white/90 font-medium text-sm md:text-base break-all">
                                            Maior intervalo entre paradas de manutenção
                                        </p>

                                    </div>
                                </div>
                            </a>


                            <a
                                className="group relative bg-gradient-to-br from-blue-50 to-blue-600
                       hover:from-blue-600 hover:to-blue-500 text-white p-6 md:p-8 
                        rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
                        hover:scale-105 cursor-pointer w-full max-w-sm mx-auto"
                            >
                                <div className="flex flex-col items-center text-center space-y">
                                    <div className="p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                                        <Clock className="h-8 w-8" />

                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-2">Prazos</h3>
                                    <p className="text-white/90 font-medium text-sm">
                                        Otimização de resultados e maior competitividade
                                    </p>
                                </div>
                            </a>

                            <a
                                className="group relative bg-gradient-to-br from-blue-50 to-blue-600
                       hover:from-blue-600 hover:to-blue-500 text-white p-6 md:p-8 
                        rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
                        hover:scale-105 cursor-pointer w-full max-w-sm mx-auto"
                            >
                                <div className="flex flex-col items-center text-center space-y">
                                    <div className="p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                                        <Gauge className="h-8 w-8" />

                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-2">Custo-Benefício</h3>
                                    <p className="text-white/90 font-medium text-sm">
                                        Melhor desempenho operacional
                                    </p>
                                </div>
                            </a>

                        </div>

                    </div>

                </div>

            </section>
            <div className=" relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-20 mt-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-blue-700 font-semibold tracking-wider uppercase text-base md:text-lg">
                            Segmentos Atendidos
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center whitespace-nowrap">
                            Atendemos Diversas <span className="text-blue-700">Indústrias</span>

                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {segments.map((segment) => (
                            <div
                                key={segment.name}
                                className="group relative
                                bg-gradient-to-br from-blue-50 to-blue-600
                              hover:from-blue-600 hover:to-blue-500
                             text-white
                               p-6 md:p-8
                               rounded-2xl
                               shadow-lg hover:shadow-2xl
                               transition-all duration-300
                               hover:scale-105
                               cursor-pointer"
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                                        <segment.icon className="h-8 w-8" />
                                    </div>

                                    <p className="font-bold text-sm md:text-base">
                                        {segment.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <div className="relative
            left-1/2 right-1/2
            -ml-[50vw] -mr-[50vw]
            w-screen
            mt-24
            py-20
            bg-gradient-to-br from-blue-600 to-blue-800
          text-white
            overflow-hidden">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-white font-semibold tracking-wider uppercase text-base md:text-lg">
                            Clientes de Destaque
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center whitespace-nowrap">
                            Experiência em Grandes Projetos

                        </h2>
                        <p className="text-2xl md:text-2xl text-white/90 max-w-3xl mx-auto text-pretty">
                            Profissionais com vasto conhecimento, à frente de diversas obras em todo território nacional e internacional
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "Petrobras", "Vale", "CSN", "Usiminas", "Gerdau", "ArcelorMittal",
                                "Alcoa", "Novelis", "Klabin", "Braskem", "Anglo American", "Alumar"
                            ].map((client) => (
                                <div
                                    key={client}
                                     className="group relative
                                        px-6 py-3
                                        rounded-full
                                        cursor-pointer
                                        bg-gradient-to-br from-blue-50 to-blue-600
                                      hover:from-blue-600 hover:to-blue-500
                                      text-white
                                        shadow-md hover:shadow-xl
                                        transition-all duration-300
                                        hover:scale-105"
                                >
                                    {client}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </section>


    )
}