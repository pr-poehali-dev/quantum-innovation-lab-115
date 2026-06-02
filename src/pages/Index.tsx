import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Icon from "@/components/ui/icon"

const HERO_BG = "https://cdn.poehali.dev/projects/9282e868-d016-4875-bffb-9d44679946a2/files/7a685d11-83d8-43e0-bc5d-bb60cfbb9e65.jpg"
const CHARS_IMG = "https://cdn.poehali.dev/projects/9282e868-d016-4875-bffb-9d44679946a2/files/08806924-7fd5-40ff-898d-7ca7f99bf34e.jpg"
const BATTLE_IMG = "https://cdn.poehali.dev/projects/9282e868-d016-4875-bffb-9d44679946a2/files/4b1fc195-d80e-4ec6-bb60-a0fb6631d128.jpg"

const elements = [
  { name: "Анемо", emoji: "🌪️", color: "#4ECDC4", desc: "Ветер и воздух", reaction: "Рассеивание" },
  { name: "Гео", emoji: "🪨", color: "#D4A843", desc: "Земля и камень", reaction: "Кристаллизация" },
  { name: "Электро", emoji: "⚡", color: "#9B59B6", desc: "Молния и энергия", reaction: "Перегрузка" },
  { name: "Дендро", emoji: "🌿", color: "#27AE60", desc: "Природа и жизнь", reaction: "Расцвет" },
  { name: "Гидро", emoji: "💧", color: "#3498DB", desc: "Вода и течение", reaction: "Испарение" },
  { name: "Пиро", emoji: "🔥", color: "#E74C3C", desc: "Огонь и жар", reaction: "Расплавление" },
  { name: "Крио", emoji: "❄️", color: "#85C1E9", desc: "Лёд и холод", reaction: "Заморозка" },
]

const characters = [
  { name: "Хутао", element: "Пиро", stars: 5, role: "ДПС", emoji: "🔥", color: "#E74C3C" },
  { name: "Венти", element: "Анемо", stars: 5, role: "Поддержка", emoji: "🌪️", color: "#4ECDC4" },
  { name: "Чжун Ли", element: "Гео", stars: 5, role: "Щит", emoji: "🪨", color: "#D4A843" },
  { name: "Кэ Цин", element: "Электро", stars: 5, role: "ДПС", emoji: "⚡", color: "#9B59B6" },
  { name: "Ноэль", element: "Гео", stars: 4, role: "Защита", emoji: "🪨", color: "#D4A843" },
  { name: "Сян Лин", element: "Пиро", stars: 4, role: "Поддержка", emoji: "🔥", color: "#E74C3C" },
]

const platforms = [
  { name: "Windows PC", icon: "Monitor", desc: "Максимальное качество графики" },
  { name: "Android", icon: "Smartphone", desc: "Google Play Store" },
  { name: "iOS (iPhone)", icon: "Tablet", desc: "App Store" },
  { name: "PlayStation 4", icon: "Gamepad2", desc: "PS4 версия" },
  { name: "PlayStation 5", icon: "Gamepad2", desc: "Улучшенная графика PS5" },
]

const steps = [
  { num: "01", title: "Скачайте игру", desc: "Перейдите на официальный сайт genshin.hoyoverse.com и скачайте клиент для вашей платформы. Игра весит около 30–70 ГБ." },
  { num: "02", title: "Создайте аккаунт", desc: "Зарегистрируйтесь на HoYoverse.com. Аккаунт единый для всех платформ — один раз создал и играй везде." },
  { num: "03", title: "Выберите сервер", desc: "При первом входе выберите сервер. Для России рекомендуется Европа (Europe). Сменить сервер после нельзя!" },
  { num: "04", title: "Пройдите обучение", desc: "Игра сама проведёт вас через основы. Не торопитесь — обучение показывает управление, боевую систему и исследование мира." },
  { num: "05", title: "Исследуйте мир", desc: "После обучения вы попадёте в открытый мир. Выполняйте основные квесты, собирайте ресурсы и открывайте новые регионы." },
]

const facts = [
  { icon: "Users", value: "80+", label: "Игровых персонажей", desc: "Каждый с уникальным стилем и историей" },
  { icon: "Map", value: "9", label: "Регионов Тейвата", desc: "Огромный открытый мир для исследования" },
  { icon: "Download", value: "100М+", label: "Скачиваний", desc: "Одна из самых популярных игр в мире" },
  { icon: "RefreshCw", value: "каждые 6 нед.", label: "Обновления", desc: "Новый контент выходит регулярно" },
]

const galleryImages = [
  { src: HERO_BG, alt: "Мир Тейвата", label: "Пейзажи Тейвата" },
  { src: CHARS_IMG, alt: "Персонажи", label: "Персонажи игры" },
  { src: BATTLE_IMG, alt: "Сражение", label: "Динамичные бои" },
  { src: HERO_BG, alt: "Города", label: "Города и регионы" },
  { src: BATTLE_IMG, alt: "Боссы", label: "Эпичные боссы" },
  { src: CHARS_IMG, alt: "Арты", label: "Арты персонажей" },
]

export default function Index() {
  return (
    <div className="w-full min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Genshin Impact мир" className="w-full h-full object-cover object-center" />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[hsl(var(--gold))] text-sm font-nunito tracking-widest uppercase">✦ Добро пожаловать в Тейват</span>
            </div>
            <h1 className="font-cinzel font-black text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
              <span className="gold-gradient">Genshin Impact</span>
              <br />
              <span className="text-foreground text-3xl md:text-4xl lg:text-5xl font-semibold">Путешествие по миру Тейвата</span>
            </h1>
            <p className="text-muted-foreground font-nunito text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Бесплатная RPG с открытым миром. Исследуйте огромный фэнтезийный мир, управляйте уникальными персонажами и раскрывайте тайны семи элементов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#about">
                <button className="bg-[hsl(var(--gold))] text-background px-8 py-4 rounded-full font-nunito font-bold text-lg hover:bg-[hsl(45,95%,72%)] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.6)] animate-glow-pulse">
                  Начать знакомство ✦
                </button>
              </a>
              <a href="https://genshin.hoyoverse.com/ru" target="_blank" rel="noopener noreferrer">
                <button className="border border-[hsl(var(--gold)/0.5)] text-[hsl(var(--gold))] px-8 py-4 rounded-full font-nunito font-semibold text-lg hover:bg-[hsl(var(--gold)/0.1)] transition-all duration-300">
                  Играть бесплатно →
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[hsl(var(--gold)/0.5)] rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[hsl(var(--gold))] rounded-full" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[hsl(var(--gold))] text-sm font-nunito tracking-widest uppercase mb-3">✦ Об игре</p>
            <h2 className="font-cinzel font-bold text-3xl md:text-5xl gold-gradient mb-4">Что такое Genshin Impact?</h2>
            <div className="section-divider max-w-xs mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="font-nunito text-lg text-foreground/90 leading-relaxed">
                <span className="gold-text font-semibold">Genshin Impact</span> — это бесплатная RPG с открытым миром от китайской студии <span className="gold-text font-semibold">HoYoverse</span>, вышедшая в 2020 году. Игра быстро стала мировым феноменом, завоевав сотни миллионов игроков по всему миру.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "Globe", title: "Открытый мир", desc: "Огромный мир Тейват с девятью уникальными регионами" },
                  { icon: "Sword", title: "Боевая система", desc: "Динамичные бои с использованием семи элементов" },
                  { icon: "Users", title: "80+ персонажей", desc: "Уникальные герои с историями и способностями" },
                  { icon: "Wifi", title: "Кооператив", desc: "Исследуйте мир вместе с друзьями до 4 игроков" },
                ].map((f) => (
                  <div key={f.title} className="genshin-card rounded-xl p-4 corner-decor relative">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[hsl(var(--gold)/0.15)] flex items-center justify-center flex-shrink-0">
                        <Icon name={f.icon} size={20} className="text-[hsl(var(--gold))]" />
                      </div>
                      <div>
                        <h4 className="font-nunito font-bold text-foreground mb-1">{f.title}</h4>
                        <p className="font-nunito text-sm text-muted-foreground">{f.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden genshin-border">
                <img src={CHARS_IMG} alt="Персонажи Genshin Impact" className="w-full h-80 object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 genshin-card rounded-xl p-4 border border-[hsl(var(--gold)/0.3)]">
                <p className="font-nunito text-sm text-[hsl(var(--gold))] font-bold">🆓 Полностью бесплатно</p>
                <p className="font-nunito text-xs text-muted-foreground">Весь основной контент доступен без оплаты</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-[1200px] mx-auto" />

      {/* STORY */}
      <section id="story" className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[hsl(var(--gold))] text-sm font-nunito tracking-widest uppercase mb-3">✦ История</p>
            <h2 className="font-cinzel font-bold text-3xl md:text-5xl gold-gradient mb-4">Сюжет игры</h2>
            <div className="section-divider max-w-xs mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden genshin-border">
                <img src={HERO_BG} alt="Мир Тейвата" className="w-full h-80 object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 genshin-card rounded-xl p-3 border border-[hsl(var(--gold)/0.3)]">
                <p className="font-nunito text-xs text-[hsl(var(--gold))]">🗺️ 9 регионов Тейвата</p>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="genshin-card rounded-2xl p-6">
                <h3 className="font-cinzel font-bold text-xl text-[hsl(var(--gold))] mb-3">Начало путешествия</h3>
                <p className="font-nunito text-foreground/90 leading-relaxed">
                  Вы играете за <span className="gold-text font-semibold">Путешественника</span> — юношу или девушку из другого мира, разлучённого с близнецом таинственным богом. Попав в мир Тейват, вы начинаете долгое путешествие в поисках брата или сестры.
                </p>
              </div>

              <div className="genshin-card rounded-2xl p-6">
                <h3 className="font-cinzel font-bold text-xl text-[hsl(var(--gold))] mb-3">Мир Тейват</h3>
                <p className="font-nunito text-foreground/90 leading-relaxed">
                  Тейват — огромный мир, которым управляют <span className="gold-text font-semibold">семь Архонтов</span> — богов, покровительствующих каждому из семи элементов. Каждый регион вдохновлён культурой реальных стран и имеет собственную историю.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { region: "Мондштадт", insp: "Германия", emoji: "🌬️" },
                  { region: "Ли Юэ", insp: "Китай", emoji: "⛰️" },
                  { region: "Инадзума", insp: "Япония", emoji: "⚡" },
                  { region: "Сумеру", insp: "Индия", emoji: "🌿" },
                  { region: "Фонтейн", insp: "Франция", emoji: "💧" },
                  { region: "Натлан", insp: "Африка", emoji: "🔥" },
                ].map((r) => (
                  <div key={r.region} className="genshin-card rounded-lg p-3 text-center">
                    <div className="text-xl mb-1">{r.emoji}</div>
                    <p className="font-nunito font-bold text-xs text-foreground">{r.region}</p>
                    <p className="font-nunito text-xs text-muted-foreground">{r.insp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-[1200px] mx-auto" />

      {/* CHARACTERS */}
      <section id="characters" className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[hsl(var(--gold))] text-sm font-nunito tracking-widest uppercase mb-3">✦ Герои</p>
            <h2 className="font-cinzel font-bold text-3xl md:text-5xl gold-gradient mb-4">Игровые персонажи</h2>
            <p className="font-nunito text-muted-foreground max-w-2xl mx-auto">
              В Genshin Impact более 80 уникальных персонажей с разными элементами, оружием и стилями игры. Каждый герой имеет свою историю и место в мире Тейвата.
            </p>
            <div className="section-divider max-w-xs mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {characters.map((char) => (
              <div key={char.name} className="char-card genshin-card rounded-2xl p-4 text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl"
                  style={{ background: `${char.color}22`, border: `2px solid ${char.color}44` }}
                >
                  {char.emoji}
                </div>
                <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold mb-2 ${char.stars === 5 ? "bg-[hsl(43,90%,58%,0.2)] text-[hsl(var(--gold))]" : "bg-[#7C3AED22] text-purple-400"}`}>
                  {"★".repeat(char.stars)}
                </div>
                <h4 className="font-cinzel font-bold text-sm text-foreground mb-1">{char.name}</h4>
                <p className="font-nunito text-xs text-muted-foreground">{char.element} · {char.role}</p>
              </div>
            ))}
          </div>

          <div className="genshin-card rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-cinzel font-bold text-xl text-[hsl(var(--gold))] mb-3">Система редкостей</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-[hsl(43,90%,58%,0.08)] rounded-xl p-3">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                  <div>
                    <p className="font-nunito font-bold text-[hsl(var(--gold))]">5 звёзд — Легендарные</p>
                    <p className="font-nunito text-sm text-muted-foreground">Редкие и мощные герои с уникальными способностями</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-purple-900/20 rounded-xl p-3">
                  <span className="text-2xl">⭐⭐⭐⭐</span>
                  <div>
                    <p className="font-nunito font-bold text-purple-400">4 звезды — Редкие</p>
                    <p className="font-nunito text-sm text-muted-foreground">Сильные персонажи, легче получить</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-cinzel font-bold text-xl text-[hsl(var(--gold))] mb-3">Как получить персонажей</h3>
              <p className="font-nunito text-foreground/80 leading-relaxed mb-3">
                Персонажи получаются через систему <span className="gold-text font-semibold">«Молитв» (Gacha)</span>. Вы тратите внутриигровую валюту — «Первозданные камни» — и получаете случайных персонажей или оружие.
              </p>
              <p className="font-nunito text-sm text-muted-foreground">
                💡 Многих персонажей можно получить <span className="text-[hsl(var(--gold))]">бесплатно</span> через прохождение сюжета и достижения.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-[1200px] mx-auto" />

      {/* ELEMENTS */}
      <section id="elements" className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[hsl(var(--gold))] text-sm font-nunito tracking-widest uppercase mb-3">✦ Боевая система</p>
            <h2 className="font-cinzel font-bold text-3xl md:text-5xl gold-gradient mb-4">Семь элементов</h2>
            <p className="font-nunito text-muted-foreground max-w-2xl mx-auto">
              Каждый персонаж владеет одним из семи элементов. Правильное сочетание элементов создаёт мощные реакции в бою.
            </p>
            <div className="section-divider max-w-xs mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-12">
            {elements.map((el) => (
              <div
                key={el.name}
                className="element-card genshin-card rounded-2xl p-4 text-center"
                style={{ borderColor: `${el.color}40` }}
              >
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl"
                  style={{ background: `${el.color}20`, border: `2px solid ${el.color}50` }}
                >
                  {el.emoji}
                </div>
                <h4 className="font-cinzel font-bold text-sm mb-1" style={{ color: el.color }}>{el.name}</h4>
                <p className="font-nunito text-xs text-muted-foreground mb-2">{el.desc}</p>
                <span
                  className="font-nunito text-xs px-2 py-0.5 rounded-full"
                  style={{ background: `${el.color}20`, color: el.color }}
                >
                  {el.reaction}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="genshin-card rounded-2xl p-6">
              <h3 className="font-cinzel font-bold text-xl text-[hsl(var(--gold))] mb-4">Элементальные реакции</h3>
              <div className="space-y-3">
                {[
                  { r: "🔥💧 Испарение", desc: "Пиро + Гидро = огромный урон", color: "#E74C3C" },
                  { r: "🔥❄️ Расплавление", desc: "Пиро + Крио = двойной урон", color: "#E74C3C" },
                  { r: "⚡💧 Электрозаряд", desc: "Электро + Гидро = цепная молния", color: "#9B59B6" },
                  { r: "❄️💧 Заморозка", desc: "Крио + Гидро = враг обездвижен", color: "#85C1E9" },
                  { r: "⚡🔥 Перегрузка", desc: "Электро + Пиро = взрыв энергии", color: "#9B59B6" },
                ].map((reaction) => (
                  <div key={reaction.r} className="flex items-center gap-3 rounded-xl p-3 bg-[hsl(220,25%,15%)]">
                    <span className="text-lg font-nunito font-bold" style={{ color: reaction.color }}>{reaction.r}</span>
                    <span className="text-sm font-nunito text-muted-foreground">{reaction.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden genshin-border">
              <img src={BATTLE_IMG} alt="Элементальные бои" className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-[1200px] mx-auto" />

      {/* PLATFORMS */}
      <section id="platforms" className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[hsl(var(--gold))] text-sm font-nunito tracking-widest uppercase mb-3">✦ Доступность</p>
            <h2 className="font-cinzel font-bold text-3xl md:text-5xl gold-gradient mb-4">Доступные платформы</h2>
            <p className="font-nunito text-muted-foreground max-w-xl mx-auto">
              Играйте на любом устройстве — один аккаунт работает на всех платформах одновременно.
            </p>
            <div className="section-divider max-w-xs mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
            {platforms.map((p) => (
              <div key={p.name} className="platform-icon genshin-card rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-[hsl(var(--gold)/0.1)] border border-[hsl(var(--gold)/0.3)] flex items-center justify-center mx-auto mb-3">
                  <Icon name={p.icon} size={24} className="text-[hsl(var(--gold))]" />
                </div>
                <h4 className="font-nunito font-bold text-sm text-foreground mb-1">{p.name}</h4>
                <p className="font-nunito text-xs text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="genshin-card rounded-2xl p-6 text-center border border-[hsl(var(--gold)/0.3)]">
            <div className="text-3xl mb-3">🔗</div>
            <h3 className="font-cinzel font-bold text-xl text-[hsl(var(--gold))] mb-2">Кроссплатформенная игра</h3>
            <p className="font-nunito text-foreground/80 max-w-2xl mx-auto">
              Один аккаунт HoYoverse работает на всех платформах. Начните игру на ПК, продолжите на телефоне — весь прогресс сохраняется автоматически.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-[1200px] mx-auto" />

      {/* HOW TO START */}
      <section id="start" className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[hsl(var(--gold))] text-sm font-nunito tracking-widest uppercase mb-3">✦ Для новичков</p>
            <h2 className="font-cinzel font-bold text-3xl md:text-5xl gold-gradient mb-4">Как начать играть</h2>
            <p className="font-nunito text-muted-foreground max-w-xl mx-auto">
              Всего 5 простых шагов — и вы уже в мире Тейвата!
            </p>
            <div className="section-divider max-w-xs mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={step.num} className="genshin-card rounded-2xl p-6 flex gap-6 items-start hover:border-[hsl(var(--gold)/0.5)] transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[hsl(var(--gold)/0.15)] border-2 border-[hsl(var(--gold)/0.4)] flex items-center justify-center">
                  <span className="font-cinzel font-black text-[hsl(var(--gold))] text-lg">{step.num}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-cinzel font-bold text-lg text-foreground mb-2">{step.title}</h4>
                  <p className="font-nunito text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {i === 0 && (
                  <a href="https://genshin.hoyoverse.com/ru/download" target="_blank" rel="noopener noreferrer"
                    className="flex-shrink-0 bg-[hsl(var(--gold))] text-background px-4 py-2 rounded-full font-nunito font-bold text-sm hover:bg-[hsl(45,95%,72%)] transition-colors hidden md:block">
                    Скачать →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-[1200px] mx-auto" />

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[hsl(var(--gold))] text-sm font-nunito tracking-widest uppercase mb-3">✦ Скриншоты</p>
            <h2 className="font-cinzel font-bold text-3xl md:text-5xl gold-gradient mb-4">Галерея</h2>
            <div className="section-divider max-w-xs mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className={`gallery-item genshin-border rounded-2xl overflow-hidden ${i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}>
                <div className="relative group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full object-cover ${i === 0 ? "h-64 lg:h-full lg:min-h-[400px]" : "h-52"}`}
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-all duration-300 flex items-end">
                    <span className="font-nunito font-semibold text-white text-sm px-4 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {img.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-[1200px] mx-auto" />

      {/* FACTS */}
      <section id="facts" className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[hsl(var(--gold))] text-sm font-nunito tracking-widest uppercase mb-3">✦ Цифры</p>
            <h2 className="font-cinzel font-bold text-3xl md:text-5xl gold-gradient mb-4">Интересные факты</h2>
            <div className="section-divider max-w-xs mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {facts.map((f) => (
              <div key={f.label} className="genshin-card rounded-2xl p-6 text-center corner-decor relative">
                <div className="w-14 h-14 rounded-full bg-[hsl(var(--gold)/0.12)] border border-[hsl(var(--gold)/0.3)] flex items-center justify-center mx-auto mb-4">
                  <Icon name={f.icon} size={24} className="text-[hsl(var(--gold))]" />
                </div>
                <div className="font-cinzel font-black text-3xl gold-gradient mb-2">{f.value}</div>
                <h4 className="font-nunito font-bold text-foreground mb-1">{f.label}</h4>
                <p className="font-nunito text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="relative rounded-3xl overflow-hidden">
            <img src={HERO_BG} alt="CTA фон" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/80" />
            <div className="relative z-10 text-center py-16 px-6">
              <h2 className="font-cinzel font-black text-3xl md:text-5xl gold-gradient mb-4">Готов начать путешествие?</h2>
              <p className="font-nunito text-lg text-foreground/80 mb-8 max-w-xl mx-auto">
                Genshin Impact — это бесплатно. Просто скачай и отправляйся в мир Тейвата прямо сейчас.
              </p>
              <a href="https://genshin.hoyoverse.com/ru/download" target="_blank" rel="noopener noreferrer">
                <button className="bg-[hsl(var(--gold))] text-background px-10 py-4 rounded-full font-nunito font-black text-xl hover:bg-[hsl(45,95%,72%)] transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--gold)/0.7)] animate-glow-pulse">
                  🎮 Скачать бесплатно
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}