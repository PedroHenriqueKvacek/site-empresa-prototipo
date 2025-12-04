import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, X } from "lucide-react"
import { cn } from "@/lib/utils"

export const ContactSection = () => {

    return (
        <section
            id="contato"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text4xl font-bold mb-4 text-center">
                    Enter em <span className="text-blue-700"> Contato</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Transforme sua produção com a gente!
                    Oferecemos soluções industriais completas com a qualidade
                    e o custo-benefício que sua empresa procura.
                    Entre em contato e solicite um orçamento personalizado.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> informações de contato</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-center space-x-4 justify-center">
                                <div className="p-3 rounded-full bg-blue-50">
                                    <Mail className="h-6 w-6 text-blue-700" />
                                </div>
                                <div className="flex flex-col justify-center items-center text-center">
                                    <h4 className="font-medium"> Email</h4>
                                    <a
                                        href="mailto:wellington.wm@wmsolucoesindustrial.com.br"
                                        className="text-muted-foreground hover:text-blue-700 transition-colors"
                                    >
                                        wellington.wm@wmsolucoesindustrial.com.br
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 justify-center">
                                <div className="p-3 rounded-full bg-blue-50">
                                    <Phone className="h-6 w-6 text-blue-700" />
                                </div>
                                <div className="flex flex-col justify-center items-center text-center">
                                    <h4 className="font-medium">Contato</h4>
                                    <a
                                        href="tel:+5511982742628"
                                        className="text-muted-foreground hover:text-blue-700 transition-colors"
                                    >
                                        +55 (11) 98274-2628
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 justify-center">
                                <div className="p-3 rounded-full bg-blue-50">
                                    <MapPin className="h-6 w-6 text-blue-700" />
                                </div>
                                <div className="flex flex-col justify-center items-center text-center">
                                    <h4 className="font-medium"> Localização</h4>
                                    <a
                                        className="text-muted-foreground hover:text-blue-700 transition-colors text-left"
                                    >
                                        Rua Braunas, 41 Bairro Floresta Coronel Fabriciano-MG
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Conecte-se com a empresa</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <X />
                                </a>
                                <a href="#" target="_blank">
                                    <Facebook />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> envie-nos uma mensagem</h3>

                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Seu Nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border- bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Nome..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Seu Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border- bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="E-mail"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Mensagem
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border- bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Digite sua mensagem aqui..."
                                />
                            </div>

                            <button
                                type="submit"
                                className={cn(
                                    "button w-full flex items-center justify-center gap-2 text-white",
                                )}
                            >
                                Enviar Mensagem
                                <Send size={16} className="text-white"/>

                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}