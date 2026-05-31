export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-4">
            <p className="font-serif text-2xl tracking-wide text-foreground mb-4">Камелот</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Гастробар в историческом центре Костромы. С 1999 года.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              Советская площадь, Масляные ряды, 4
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Навигация</p>
            <nav className="flex flex-col gap-3">
              <a href="#philosophy" className="text-sm text-foreground hover:text-terracotta transition-colors">
                О нас
              </a>
              <a href="#services" className="text-sm text-foreground hover:text-terracotta transition-colors">
                Меню
              </a>
              <a href="#process" className="text-sm text-foreground hover:text-terracotta transition-colors">
                Шеф-повар
              </a>
              <a href="#contact" className="text-sm text-foreground hover:text-terracotta transition-colors">
                Забронировать
              </a>
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Соцсети</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-foreground hover:text-terracotta transition-colors">
                ВКонтакте
              </a>
              <a href="#" className="text-sm text-foreground hover:text-terracotta transition-colors">
                Instagram
              </a>
            </nav>
          </div>

          {/* Contacts */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Контакты</p>
            <nav className="flex flex-col gap-3">
              <a href="tel:+74942313000" className="text-sm text-foreground hover:text-terracotta transition-colors">
                8 (4942) 313-000
              </a>
              <a href="tel:+79203805588" className="text-sm text-foreground hover:text-terracotta transition-colors">
                +7 (920) 380-55-88
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Гастробар «Камелот». Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground italic">Место, куда возвращаются</p>
        </div>
      </div>
    </footer>
  )
}
