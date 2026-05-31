import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Забронировать стол
            </p>
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Ждём вас в Замке
            </h2>
            <p
              className={`text-muted-foreground leading-relaxed mb-12 max-w-md transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Позвоните нам или напишите — мы с удовольствием забронируем для вас лучший стол.
              Для банкетов и корпоративов — отдельный зал по запросу.
            </p>

            {/* Contact Info */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-terracotta mt-1">
                  <Icon name="Phone" size={20} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Телефоны</p>
                  <a href="tel:+74942313000" className="block text-foreground hover:text-terracotta transition-colors font-medium">
                    8 (4942) 313-000
                  </a>
                  <a href="tel:+79203805588" className="block text-foreground hover:text-terracotta transition-colors font-medium mt-1">
                    +7 (920) 380-55-88
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-terracotta mt-1">
                  <Icon name="MapPin" size={20} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Адрес</p>
                  <p className="text-foreground">Кострома, Советская площадь</p>
                  <p className="text-foreground">Масляные ряды, 4</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-terracotta mt-1">
                  <Icon name="Clock" size={20} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Время работы</p>
                  <p className="text-foreground">Вс – Чт: 11:30 — 01:00</p>
                  <p className="text-foreground">Пт – Сб: 11:30 — 03:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-foreground p-10 lg:p-14 h-full flex flex-col justify-between">
              <div>
                <p className="font-serif text-3xl md:text-4xl text-background mb-6 leading-tight">
                  Пятница — можно отложить рыцарскую работу до понедельника
                </p>
                <p className="text-background/60 leading-relaxed mb-10">
                  Просто позвоните и скажите: «Хочу стол на двоих». Остальное мы возьмём на себя.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+79203805588"
                  className="group flex items-center justify-between w-full px-8 py-5 bg-terracotta text-white text-sm tracking-widest uppercase hover:bg-terracotta/90 transition-all duration-500"
                >
                  <span>Позвонить и забронировать</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <p className="text-center text-background/40 text-xs tracking-widest uppercase">
                  или +7 (920) 380-55-88
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
