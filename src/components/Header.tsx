import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-[hsl(var(--gold)/0.2)]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(35,85%,45%)] flex items-center justify-center text-background font-bold text-sm">
            ✦
          </div>
          <span className="font-cinzel font-bold text-lg gold-gradient">Genshin Impact</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-nunito text-muted-foreground">
          <a href="#about" className="hover:text-[hsl(var(--gold))] transition-colors">Об игре</a>
          <a href="#characters" className="hover:text-[hsl(var(--gold))] transition-colors">Персонажи</a>
          <a href="#elements" className="hover:text-[hsl(var(--gold))] transition-colors">Элементы</a>
          <a href="#platforms" className="hover:text-[hsl(var(--gold))] transition-colors">Платформы</a>
          <a href="#start" className="hover:text-[hsl(var(--gold))] transition-colors">Начать</a>
        </nav>

        <a href="https://genshin.hoyoverse.com/ru" target="_blank" rel="noopener noreferrer">
          <Button className="bg-[hsl(var(--gold))] text-background hover:bg-[hsl(45,95%,72%)] rounded-full px-5 py-2 font-semibold text-sm font-nunito transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--gold)/0.5)]">
            Играть бесплатно
          </Button>
        </a>
      </div>
    </header>
  )
}
