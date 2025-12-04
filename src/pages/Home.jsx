import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            { /* Theme Toogle */}
            <ThemeToggle />

            { /* Background Effects */}

            { /* Navbar */}
            <Navbar />

            { /* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
               <ContactSection />
            </main>

            { /* Footer */}
            <Footer />
        </div>
    )
}