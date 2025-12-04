import { cn } from "@/lib/utils";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const navItems = [
    { name: "Home", href: "/#hero" },
    { name: "Sobre", href: "/#sobre" },
    { name: "Nossos Serviços", href: "/servicos" },
    { name: "Contato", href: "#contato" },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-40 bg-white border-b border-gray-200 shadow-sm h-[112px] flex items-center transition-all duration-300"
            )}
        >

            <div className="container flex items-center justify-between px-0 h-full">
                <a href="#" className="flex items-center ml-0 h-full mr-3">
                    <img src="/logo2.png" alt="Logo" className="h-34 w-auto object-contain" />
                </a>

                {/*  Menu Desktop */}
                <div className="hidden md:flex gap-8">
                    {navItems.map((item, key) => (
                        item.href.startsWith("/") ? (
                            <Link
                                key={key}
                                to={item.href}
                                className="text-[22px] font-medium text-gray-700 hover:text-[#3871CD] transition-colors duration-200 tracking-[0.12em]"
                            >
                                {item.name}
                            </Link>
                        ) : (
                            <a
                                key={key}
                                href={item.href}
                                className="text-[22px] font-medium text-gray-700 hover:text-[#3871CD] transition-colors duration-200 tracking-[0.12em]"
                            >
                                {item.name}
                            </a>
                        )
                    ))}
                </div>
                {/* Botão menu mobile */}
                <button
                    className="md:hidden flex justify-center items-center w-10 h-10 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {menuOpen ? (
                        // simple X icon
                        <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // hamburger
                        <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
                {/* Mobile menu drawer + backdrop */}
                {/* Backdrop */}
                <div
                    className={`md:hidden fixed inset-0 bg-black/40 transition-opacity ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    onClick={() => setMenuOpen(false)}
                    aria-hidden={!menuOpen}
                />

                {/* Drawer */}
                <aside
                    className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-white border-l border-gray-200 shadow-lg transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    aria-hidden={!menuOpen}
                >
                    <div className="flex flex-col p-4" style={{ paddingTop: '112px' }}>
                        {navItems.map((item, idx) => (
                            item.href.startsWith("/") ? (
                                <Link
                                    key={idx}
                                    to={item.href}
                                    className="py-3 text-lg text-gray-800 border-b border-gray-100"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <a
                                    key={idx}
                                    href={item.href}
                                    className="py-3 text-lg text-gray-800 border-b border-gray-100"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            )
                        ))}
                    </div>
                </aside>
            </div>

        </nav>
    )
}