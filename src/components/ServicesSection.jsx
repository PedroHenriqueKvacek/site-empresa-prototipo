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

                    {/* Full-width convective method card below */}
                    <div className="md:col-span-2">
                        <div
                            className="group relative
                            bg-gradient-to-br from-blue-300 to-blue-600
                            hover:from-blue-600 hover:to-blue-500
                            text-white
                            p-8 md:p-12
                            rounded-2xl
                            shadow-lg hover:shadow-2xl
                            transition-all duration-300
                            hover:scale-[1.02]"
                        >
                            <div className="flex flex-col gap-6 text-left">

                                {/* Título */}
                                <h3 className="text-3xl md:text-4xl font-bold">
                                    Aquecimento e Secagem Controlada
                                </h3>

                                {/* Texto principal */}
                                <p className="text-white/90 leading-relaxed text-lg md:text-xl max-w-4xl">
                                    A secagem de materiais refratários e assemelhados pelo método convectivo é um processo utilizado em vários seguimentos
                                    indústrias como: a Siderúrgica, Petroquímica, Vidreira, Fundição entre outros, para retirar a umidade de materiais
                                    ou produtos utilizando ar aquecido em movimento (convecção).
                                </p>

                                {/* Etapas */}
                                <div className="space-y-2 text-lg text-white/90">
                                    <p><span className="font-semibold text-white">1) Aquecimento do ar:</span> O ar é aquecido por uma fonte de calor (queimadores a gás de alta performance).</p>

                                    <p><span className="font-semibold text-white">2) Movimentação do ar quente:</span> Esse ar quente é forçado a circular dentro da unidade a ser tratada, por nosso equipamento de alta performance.</p>

                                    <p><span className="font-semibold text-white">3) Contato com o material úmido:</span> O ar entra em contato com a superfície do material, aquecendo-o e promovendo a evaporação da água gradativamente.</p>

                                    <p><span className="font-semibold text-white">4) Remoção da umidade:</span> O vapor gerado é transferido pelo fluxo de ar da face quente para a face fria e eliminado da unidade aquecida.</p>
                                </div>

                                {/* Vantagens */}
                                <div>
                                    <h4 className="text-2xl font-bold mb-3">
                                        Vantagens do método convectivo
                                    </h4>

                                    <ul className="space-y-2 text-lg font-bold">
                                        <li>• Homogeneidade do ciclo térmico</li>
                                        <li>• Custo operacional moderado</li>
                                    </ul>
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
                            <h2 className="
                            text-5xl md:text-6xl font-bold mb-12 text-center
                            whitespace-normal md:whitespace-nowrap
                        ">
                                Tratamento Térmico{" "}
                                <span className="block md:inline text-white">
                                    Especializado
                                </span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 w-full">
                                <a
                                    className="group relative bg-gradient-to-br from-blue-300 to-blue-600
                                     hover:from-blue-600 hover:to-blue-500 text-white p-8 rounded-2xl 
                                      shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105
                                      cursor-pointer"
                                >
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <div className="p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                                            <Flame className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-2">Secagem Controlada</h3>
                                            <p className="text-white/90 font-medium text-lg text-left">Processo de secagem controlada utilizando técnica convectiva
                                                para remoção eficiente de água livre e água quimicamente ligada estrutura dos refratários.</p>

                                            <ul className="mt-6 font-bold space-y-2 text-lg text-white text-left">
                                                <li>• Remoção total da água</li>
                                                <li>• Pressão interna controlada</li>
                                                <li>• Chama oxidante azulada</li>
                                            </ul>
                                        </div>

                                    </div>

                                </a>

                                <a
                                    className="group relative bg-gradient-to-br from-blue-300 to-blue-600
                                     hover:from-blue-600 hover:to-blue-500 text-white p-8 rounded-2xl 
                                      shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105
                                      cursor-pointer"
                                >
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <div className="p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                                            <Thermometer className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-2">Aquecimento Controlado</h3>
                                            <p className="text-white/90 font-medium text-lg text-left">
                                                Aquecimento preciso com alta modulação (1:1000) para garantir homogeneidade térmica em todo o equipamento.
                                            </p>

                                            <ul className="mt-6 font-bold space-y-2 text-lg text-white text-left">
                                                <li>• Alta controlabilidade</li>
                                                <li>• Distribuição homogênea</li>
                                            </ul>
                                        </div>

                                    </div>

                                </a>

                                <a
                                    className="group relative bg-gradient-to-br from-blue-300 to-blue-600
                                     hover:from-blue-600 hover:to-blue-500 text-white p-8 rounded-2xl 
                                      shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105
                                      cursor-pointer"
                                >
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <div className="p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                                            <Wind className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-2">Resfriamento Controlado</h3>
                                            <p className="text-white/90 font-medium text-lg text-left">
                                                Processo de resfriamento gradual e controlado para preservar a integridade estrutural dos materiais refratários.
                                            </p>

                                            <ul className="mt-6 font-bold space-y-2 text-lg text-white text-left">
                                                <li>• Processo gradual</li>
                                                <li>• Preserva integridade</li>
                                                <li>• Evita choque térmico</li>
                                            </ul>
                                        </div>

                                    </div>

                                </a>

                                <a
                                    className="group relative bg-gradient-to-br from-blue-300 to-blue-600
                                     hover:from-blue-600 hover:to-blue-500 text-white p-8 rounded-2xl 
                                      shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105
                                      cursor-pointer"
                                >
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <div className="p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                                            < Gauge className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-2">Manutenção de Temperatura</h3>
                                            <p className="text-white/90 font-medium text-lg text-left">
                                                Controle preciso para manutenção de temperatura em ambientes industriais durante todo o processo.
                                            </p>

                                            <ul className="mt-6 font-bold space-y-2 text-lg text-white text-left">
                                                <li>• Controle 24/7</li>
                                                <li>• Monitoramento digital</li>
                                                <li>• Registro de dados</li>
                                            </ul>
                                        </div>

                                    </div>

                                </a>
                            </div>
                            <div className="flex justify-center text-center gap-2">
                                <h3 className="text-3xl md:text-4xl font-bold">
                                    Conforto <span className="text-white">Térmico</span>
                                </h3>

                            </div>

                            <div
                                className="group relative mt-4
                                    bg-gradient-to-br from-blue-300 to-blue-600
                                    hover:from-blue-600 hover:to-blue-500
                                    text-white
                                    p-8 md:p-12
                                    rounded-2xl
                                    shadow-lg hover:shadow-2xl
                                    transition-all duration-300
                                    hover:scale-[1.02]"
                            >

                                <p className="text-white/90 leading-relaxed text-lg md:text-xl max-w-4xl text-left">
                                    O conforto térmico  é tratado como uma prioridade crítica de segurança e produtividade,
                                    especialmente diante do cenário  de calor extremo e ambientes confinado.
                                    o desafio é mitigar tanto o calor radiante dos fornos quanto o estresse
                                    térmico ambiental para prevenir doenças graves e acidentes.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section id="experiencia"
                className="relative
                left-1/2 right-1/2
                -ml-[50vw] -mr-[50vw]
                w-screen
                mt-6
                py-20
                bg-white text-gray-900
                overflow-hidden"
            >

                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">
                        Pós-Cura <span className="text-blue-700"> Controlada</span>
                    </h2>

                    <div className="group relative
                            bg-gradient-to-br from-blue-300 to-blue-600
                            hover:from-blue-600 hover:to-blue-500
                            text-white
                            p-8 md:p-12
                            rounded-2xl
                            shadow-lg hover:shadow-2xl
                            transition-all duration-300
                            hover:scale-[1.02]">
                        <p className="text-white leading-relaxed text-lg md:text-xl max-w-3xl mx-auto text-left">
                            A pós-cura é o processo de aquecimento controlado de um material compósito (fibra + resina)
                            realizado após a cura inicial. Ela serve para maximizar as propriedades mecânicas e a estabilidade
                            térmica do material.
                        </p>

                        <p className="text-white leading-relaxed text-lg md:text-xl max-w-3xl mx-auto mt-4 text-left">
                            Em 2025, com a evolução dos polímeros de alto desempenho, a pós-cura é considerada
                            uma etapa obrigatória para componentes de engenharia (aeroespacial, automotivo e industrial).
                        </p>
                    </div>



                    <h3 className="text-3xl md:text-4xl font-bold mt-6">
                        Para quer serve a <span className="text-blue-700">Pós-Cura?</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10 w-full">
                        <a
                            className="group relative bg-gradient-to-br from-blue-300 to-blue-600
                                hover:from-blue-600 hover:to-blue-500 text-white p-8 rounded-2xl 
                                shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105
                                cursor-pointer"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div>

                                </div>
                                <div>
                                    <p className="text-white/90 font-medium text-lg text-left">
                                        Aumento da Tg (Temperatura de Transição Vítrea):
                                        Eleva o ponto em que a resina começa a amolecer.
                                        Sem pós-cura, uma peça pode deformar ao ser exposta ao sol ou ao calor de motores
                                    </p>
                                </div>

                            </div>
                        </a>

                        <a
                            className="group relative bg-gradient-to-br from-blue-300 to-blue-600
                                hover:from-blue-600 hover:to-blue-500 text-white p-8 rounded-2xl 
                                shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105
                                cursor-pointer"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div>

                                </div>
                                <div>
                                    <p className="text-white/90 font-medium text-lg text-left">
                                        Conclusão da Reação Química: Garante que 100% das
                                        moléculas da resina se conectem (reticulação),
                                        eliminando partes "moles" ou pegajosas no interior do laminado
                                    </p>
                                </div>

                            </div>
                        </a>

                        <a
                            className="group relative bg-gradient-to-br from-blue-300 to-blue-600
                                hover:from-blue-600 hover:to-blue-500 text-white p-8 rounded-2xl 
                                shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105
                                cursor-pointer"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div>

                                </div>
                                <div>
                                    <p className="text-white/90 font-medium text-lg text-left">
                                        Melhoria Mecânica: Aumenta a resistência à tração,
                                        compressão e impacto, pois a estrutura molecular
                                        torna-se mais rígida e estável.
                                    </p>
                                </div>

                            </div>
                        </a>
                    </div>
                </div>

            </section>

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
                                className="group relative bg-gradient-to-br from-blue-300 to-blue-600
                        hover:from-blue-600 hover:to-blue-500 text-white p-8 rounded-2xl 
                        shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105
                        cursor-pointer"
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                                        < Droplets className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">Qualidade</h3>
                                        <p className="text-white/90 font-medium text-lg">Manutenção da integridade do equipamento</p>
                                    </div>

                                </div>
                            </a>


                            <a

                                className="group relative bg-gradient-to-br from-blue-300 to-blue-600
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
                                className="group relative bg-gradient-to-br from-blue-300 to-blue-600
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
                                className="group relative bg-gradient-to-br from-blue-300 to-blue-600
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
                        <h2 className="
                            text-5xl md:text-6xl font-bold mb-12 text-center
                            whitespace-normal md:whitespace-nowrap
                        ">
                            Atendemos Diversas{" "}
                            <span className="block md:inline text-blue-700">
                                Indústrias
                            </span>
                        </h2>

                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {segments.map((segment) => (
                            <div
                                key={segment.name}
                                className="group relative
                                bg-gradient-to-br from-blue-300 to-blue-600
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
                        <h2 className="
                            text-5xl md:text-6xl font-bold mb-12 text-center
                            whitespace-normal md:whitespace-nowrap
                        ">
                            Experiência em {" "}
                            <span className="block md:inline text-white">
                                Grandes Projetos
                            </span>
                        </h2>

                        <p className="text-2xl md:text-2xl text-white/90 max-w-3xl mx-auto text-pretty">
                            Profissionais com vasto conhecimento, à frente de diversas obras em todo território nacional e internacional
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "Projetos Siderúrgicos",
                                "Plantas Petroquímicas",
                                "Complexos Industriais",
                                "Unidades de Mineração",
                                "Indústrias de Base",
                                "Plantas Vidreiras",
                                "Parques Metalúrgicos",
                                "Indústrias Cimenteiras",
                                "Operações de Alta Temperatura",
                                "Projetos Turn-Key",
                                "Ambientes Críticos",
                                "Processos Contínuos"
                            ].map((client) => (
                                <div
                                    key={client}
                                    className="group relative
                                        px-6 py-3
                                        rounded-full
                                        cursor-pointer
                                        bg-gradient-to-br from-blue-300 to-blue-600
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