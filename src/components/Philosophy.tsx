import { useEffect, useRef, useState } from "react"

export function Philosophy() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="philosophy" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div
            className={`relative aspect-[4/5] bg-sand overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src="/placeholder.jpg"
              alt="Интерьер гастробара Камелот"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay accent */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-terracotta/80" />
            {/* Year badge */}
            <div className="absolute top-6 right-6 bg-background/90 px-4 py-3 text-center">
              <p className="font-serif text-2xl text-terracotta">1999</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">год основания</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Наша история
            </p>

            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8 text-balance transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Больше, чем
              <span className="italic"> просто</span>
              <br />
              ресторан
            </h2>

            <div
              className={`space-y-6 text-muted-foreground leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                С 1999 года Камелот — это особое место в сердце Костромы, где рыцарское благородство встречается
                с современными гастрономическими трендами. Мы расположены на Советской площади, в исторических
                Масляных рядах — в самом сердце города.
              </p>
              <p>
                Наша концепция — это <em className="text-foreground">«современный средневековый замок»</em>: массивные деревянные текстуры,
                уютная атмосфера, концептуальная барная стойка и легендарная зона Настоичной,
                где каждый вечер становится маленьким праздником.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="font-serif text-3xl md:text-4xl text-terracotta">25+</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Лет в Костроме</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-terracotta">100+</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Блюд в меню</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-terracotta">до 3:00</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">В выходные</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
