import { ArrowUp, Mail, MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"

export const Footer = () => {
    const handleScrollTop = () => {
        const hero = document.querySelector("#hero")
        const servicos = document.querySelector("#servicos")

        if (hero) {
            hero.scrollIntoView({ behavior: "smooth" })
        } else if (servicos) {
            servicos.scrollIntoView({ behavior: "smooth" })
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    return (
        <footer className="bg-blue-50 border-border mt-12">
            {/* Conteúdo */}
            <div className="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">

                {/* Logo */}
                <div className="flex flex-col gap-4">
                    <img
                        src="/logonova.png"
                        alt="Logo WMS Soluções Industrial"
                        className="h-23 w-fit"
                    />
                    <p className="text-sm text-muted-foreground max-w-xs text-left">
                        Sua parceira em soluções industriais. Oferecemos qualidade,
                        eficiência e o melhor custo-benefício para sua empresa.
                    </p>
                </div>

                {/* Links rápidos */}
                <div>
                    <h4 className="font-semibold text-base mb-4">Links Rápidos</h4>
                    <nav className="flex flex-col gap-2 text-sm">
                        <Link
                            to="/"
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                        >
                            Início
                        </Link>

                        <Link
                            to="/servicos"
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                        >
                            Serviços
                        </Link>

                        <a
                            href="/#sobre"
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                        >
                            Sobre
                        </a>

                        <a
                            href="/#contato"
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                        >
                            Contato
                        </a>
                    </nav>
                </div>

                {/* Contatos */}
                <div>
                    <h4 className="font-semibold text-base mb-4 text-left">Contato</h4>

                    <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                        <a
                            href="https://wa.me/5511982742628"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                        >
                            <Phone size={16} />
                            <span>(11) 98274-2628</span>
                        </a>


                        <a
                            href="https://wa.me/5512992338065"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                        >
                            <Phone size={16} />
                            <span>(12) 99233-8065</span>
                        </a>

                        <a
                            href="mailto:wm@wmsolucoesindustrial.com.br"
                            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                        >
                            <Mail size={16} />
                            <span>wm@wmsolucoesindustrial.com.br</span>
                        </a>


                        <a
                            href="mailto:laiyssa.comercial@wmsolucoesindustrial.com.br"
                            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                        >
                            <Mail size={16} />
                            <span>laiyssa.comercial@wmsolucoesindustrial.com.br</span>
                        </a>


                        <div className="flex items-start gap-2">
                            <MapPin size={16} className="mt-0.5" />
                            <span>
                                Rua Braunas, 41 – Floresta<br />
                                Coronel Fabriciano – MG
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Barra inferior */}
            <div className="bg-blue-300 px-4 py-6 flex items-center relative">
                {/* Texto centralizado */}
                <p className="text-sm text-muted-foreground absolute left-1/2 -translate-x-1/2 text-center">
                    &copy; {new Date().getFullYear()} wmsolucoesindustrial. Todos os direitos reservados.
                </p>

                {/* Botão à direita */}
                <button
                    onClick={handleScrollTop}
                    className="ml-auto p-2 rounded-full bg-blue-100/10 hover:bg-blue-500/20 text-blue-600 transition-colors"
                    aria-label="Voltar ao topo"
                >
                    <ArrowUp size={20} />
                </button>
            </div>

        </footer>
    )
}
