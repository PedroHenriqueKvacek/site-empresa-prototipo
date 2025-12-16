import { ArrowUp } from "lucide-react"

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
        <footer className="py-12 px-4 bg-blue-50 relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center gap-6">
            <div>
                <img src="/logonova.png" alt="Logo WMS Soluções Industrial" className="h-16 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} wmsolucoesindustrial. Todos os direitos reservados.
            </p>

            <button
                onClick={handleScrollTop}
                className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 transition-colors"
            >
                <ArrowUp size={20} />
            </button>
        </footer>
    )
}
