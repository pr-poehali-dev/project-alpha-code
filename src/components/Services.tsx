import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const dishes = [
  {
    title: "Паста Карбонара",
    description: "Классика итальянской кухни в идеальном исполнении. Шелковистый соус, хрустящая панчетта, свежий пармезан.",
    price: "580 ₽",
    tag: "Хит",
    icon: "UtensilsCrossed",
  },
  {
    title: "Пенне с цыпленком",
    description: "Пенне с нежным цыпленком и вялеными томатами — авторский рецепт шефа Николая с ярким средиземноморским акцентом.",
    price: "580 ₽",
    tag: "Авторское",
    icon: "ChefHat",
  },
  {
    title: "Сковородка со свиной вырезкой",
    description: "Сытное, истинно «рыцарское» горячее. Нежная свиная вырезка с сезонными овощами на раскалённой сковородке.",
    price: "680 ₽",
    tag: "Рыцарское",
    icon: "Flame",
  },
  {
    title: "Осеннее меню от шефа",
    description: "Николай регулярно обновляет сезонную карту. Только свежие локальные продукты и нестандартные сочетания.",
    price: "Сезонное",
    tag: "Сезон",
    icon: "Leaf",
  },
]

export function Services() {
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
    <section ref={sectionRef} id="services" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Наша кухня
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Блюда, которые запоминаются
          </h2>
          <p
            className={`text-muted-foreground mt-6 max-w-xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Большие порции, понятная, но доведённая до идеала европейская и авторская кухня. Средний чек, который приятно удивит.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {dishes.map((dish, index) => (
            <div
              key={dish.title}
              className={`group bg-background p-10 lg:p-14 transition-all duration-1000 hover:bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-terracotta transition-transform duration-500 group-hover:scale-110">
                  <Icon name={dish.icon} size={32} fallback="UtensilsCrossed" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs tracking-widest uppercase text-muted-foreground px-3 py-1 border border-border">
                    {dish.tag}
                  </span>
                  <span className="font-serif text-xl text-terracotta">{dish.price}</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{dish.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{dish.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-muted-foreground">
            Зона Настоичной · Концептуальная барная стойка · Банкетные залы
          </p>
        </div>
      </div>
    </section>
  )
}
