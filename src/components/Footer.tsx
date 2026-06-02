export default function Footer() {
  return (
    <footer className="w-full bg-[hsl(220,30%,5%)] border-t border-[hsl(var(--gold)/0.2)] mt-0">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(35,85%,45%)] flex items-center justify-center text-background font-bold text-sm">
                ✦
              </div>
              <span className="font-cinzel font-bold text-lg gold-gradient">Genshin Impact</span>
            </div>
            <p className="text-muted-foreground text-sm font-nunito leading-relaxed">
              Бесплатная RPG с открытым миром от HoYoverse. Исследуйте огромный мир Тейват, встречайте новых персонажей и раскрывайте тайны вселенной.
            </p>
          </div>

          <div>
            <h4 className="font-cinzel font-semibold text-[hsl(var(--gold))] mb-4">Разделы</h4>
            <ul className="space-y-2 text-sm font-nunito text-muted-foreground">
              <li><a href="#about" className="hover:text-[hsl(var(--gold))] transition-colors">Об игре</a></li>
              <li><a href="#story" className="hover:text-[hsl(var(--gold))] transition-colors">Сюжет</a></li>
              <li><a href="#characters" className="hover:text-[hsl(var(--gold))] transition-colors">Персонажи</a></li>
              <li><a href="#elements" className="hover:text-[hsl(var(--gold))] transition-colors">Элементы</a></li>
              <li><a href="#start" className="hover:text-[hsl(var(--gold))] transition-colors">Как начать</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel font-semibold text-[hsl(var(--gold))] mb-4">Официальные ресурсы</h4>
            <ul className="space-y-2 text-sm font-nunito">
              <li>
                <a href="https://genshin.hoyoverse.com/ru" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors">
                  Официальный сайт HoYoverse
                </a>
              </li>
              <li>
                <a href="https://genshin.hoyoverse.com/ru/download" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors">
                  Скачать игру
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@GenshinImpact" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors">
                  YouTube канал
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-nunito">
            © 2024 HoYoverse. Genshin Impact и все связанные материалы являются собственностью HoYoverse.
          </p>
          <p className="text-muted-foreground text-sm font-nunito">
            Информационный сайт для новичков
          </p>
        </div>
      </div>
    </footer>
  )
}
