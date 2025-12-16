import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, X } from "lucide-react"
//import { cn } from "@/lib/utils"

export const ContactSection = () => {

    return (
        <section
            id="contato"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                    Entre em <span className="text-blue-700"> Contato</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                    Transforme sua produção com a gente!
                    Oferecemos soluções industriais completas com a qualidade
                    e o custo-benefício que sua empresa procura.
                    Entre em contato e solicite um orçamento personalizado.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 w-full">
                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/5512992338065"
                        target="_blank"
                        rel="noopener noreferrr"
                        className="group relative bg-gradient-to-br from-blue-300 to-blue-600
                        hover:from-blue-600 hover:to-blue-500 text-white p-8 rounded-2xl 
                        shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105
                        cursor-pointer"
                    >
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                                <Phone className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="font-bols text-xl mb-2">WhatsApp</h3>
                                <p className="text-white/90 font-medium text-lg">+55 (12) 99233-8065</p>
                                <p className="text-white/80 text-sm mt-2">Clique para conversar</p>
                            </div>

                        </div>
                    </a>

                    {/* Email Button */}
                    <a
                        href="mailto:laiyssa.comercial@wmsolucoesindustrial.com.br"
                        className="group relative bg-gradient-to-br from-blue-300 to-blue-600
                        hover:from-blue-600 hover:to-blue-500 text-white p-6 md:p-8 
                        rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
                        hover:scale-105 cursor-pointer w-full max-w-sm mx-auto"
                    >
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                                <Mail className="h-8 w-8" />
                            </div>
                            <div className="w-full">
                                <h3 className="font-bold text-xl mb-2 truncate">E-mail</h3>
                                <p className="text-white/90 font-medium text-sm md:text-base break-all">
                                    laiyssa.comercial@wmsolucoesindustrial.com.br
                                </p>
                                <p className="text-white/80 text-sm mt-2">Clique para enviar e-mail</p>
                            </div>
                        </div>
                    </a>

                    {/* Location Button */}
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Rua+Braunas+41+Bairro+Floresta+Coronel+Fabriciano+MG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-gradient-to-br from-blue-300 to-blue-600
                       hover:from-blue-600 hover:to-blue-500 text-white p-6 md:p-8 
                        rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
                        hover:scale-105 cursor-pointer w-full max-w-sm mx-auto"
                    >
                        <div className="flex flex-col items-center text-center space-y">
                            <div className="p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                                <MapPin className="h-8 w-8" />

                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-2">LOcalização</h3>
                            <p className="text-white/90 font-medium text-sm">
                                Rua Braunas, 41
                                <br />
                                Bairro Floresta
                                <br />
                                Coronel Fabriciano-MG
                            </p>
                            <p className="text-white/80 text-sm mt-2">Clique para ver o mapa</p>
                        </div>
                    </a>

                </div>

                {/* Social Media Links */}
                <div className="text-center">
                    <h4 className="font-semibold mb-6 text-lg">Conecte-se com a Empresa</h4>
                    <div className="flex space-x-6 justify-center">
                        <a
                            href="#"
                            target="_blank"
                            className="p-3 rounded-full bg-blue-100 hover:bg-blue-700
                          hover:text-white transition-all duration-300 hover:scale-110"
                            rel="noreferrer"
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            className="p-3 rounded-full bg-blue-100 hover:bg-blue-700
                          hover:text-white transition-all duration-300 hover:scale-110"
                            rel="noreferrer"
                        >
                            <X className="h-6 w-6" />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            className="p-3 rounded-full bg-blue-100 hover:bg-blue-700
                          hover:text-white transition-all duration-300 hover:scale-110"
                            rel="noreferrer"
                        >
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            className="p-3 rounded-full bg-blue-100 hover:bg-blue-700
                          hover:text-white transition-all duration-300 hover:scale-110"
                            rel="noreferrer"
                        >
                            <Instagram className="h-6 w-6" />
                        </a>

                    </div>

                </div>
            </div>
        </section>
    )
}


/* <form
    className="space-y-6"
    onSubmit={async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        const res = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.success) {
            alert("Mensagem enviada com sucesso!");
            e.target.reset();
        } else {
            alert("Erro ao enviar mensagem.");
        }
    }}
>
 */

//VZGTGPU5TA84HW1BABPRU7FR