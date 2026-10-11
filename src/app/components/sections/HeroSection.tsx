import { ArrowRight, Sparkles, Compass, HeartHandshake } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ParticleField } from '../effects/ParticleField'
import { TypewriterText } from '../effects/TypewriterText'
import { useRef, useState, useEffect } from 'react'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { BUSINESS_CONFIG } from '../../config/business'

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const decorationsRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    const el = decorationsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const scrollToCatalog = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
  }

  const whatsappUrl = buildWhatsAppUrl(
    BUSINESS_CONFIG.phone,
    '¡Hola! Me encantaría consultar por tus aros, collares y artesanías con piedras naturales.'
  )

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale: bgScale }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--vintage-dark)]/90 via-[var(--vintage-dark)]/80 to-[var(--vintage-dark)]/95 z-10" />
        <motion.img
          src="https://images.unsplash.com/photo-1641985899378-990ae6eb3c11?w=1920&auto=format"
          srcSet="https://images.unsplash.com/photo-1641985899378-990ae6eb3c11?w=480&auto=format 480w, https://images.unsplash.com/photo-1641985899378-990ae6eb3c11?w=800&auto=format 800w, https://images.unsplash.com/photo-1641985899378-990ae6eb3c11?w=1200&auto=format 1200w, https://images.unsplash.com/photo-1641985899378-990ae6eb3c11?w=1920&auto=format 1920w"
          sizes="100vw"
          alt="Taller artesanal"
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
          style={{ scale: bgScale }}
        />
      </motion.div>

      <ParticleField />

      <div ref={decorationsRef} className="absolute inset-0 z-10 pointer-events-none">
        {isVisible && (
          <>
            <motion.div
              className="absolute top-20 left-10 w-40 h-40 border-2 border-dashed border-[var(--vintage-gold)]/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute bottom-40 right-20 w-64 h-64 border border-dashed border-[var(--vintage-bronze)]/15 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            />
          </>
        )}
      </div>

      <motion.div style={{ opacity }} className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 sm:pt-32 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 bg-[var(--vintage-gold)]/15 backdrop-blur-sm border-2 border-dashed border-[var(--vintage-gold)]/40 rounded-full">
            <span className="text-[var(--vintage-cream)] text-xs sm:text-sm font-sans tracking-wide">
              ✦ Artesanía Chilena Hecha a Mano · Piedras & Cuarzos · Cosmos & Tierra ✦
            </span>
          </div>

          <TypewriterText
            text="Manos que Crean, Piedras que Conectan"
            speed={50}
            as="h1"
            className="mb-6 text-4xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tight text-[var(--vintage-cream)] max-w-4xl mx-auto"
          />

          <p className="text-lg sm:text-xl md:text-2xl text-[var(--vintage-cream)]/90 mb-10 max-w-3xl mx-auto leading-relaxed font-sans">
            Aros, collares y pulseras en alpaca y macramé con piedras de cuarzo y calipso. Creadas con amor por los ciclos del cultivo, la sincronía del calendario maya y el rescate de oficios nobles en el GAM.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <button
              onClick={scrollToCatalog}
              className="group px-8 py-4 bg-[var(--vintage-gold)] hover:bg-[var(--vintage-bronze)] text-[var(--vintage-dark)] font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 shadow-xl hover:shadow-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--vintage-gold)]/50"
            >
              <span>Ver Creaciones Artesanales</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[var(--vintage-dark)]/60 hover:bg-[var(--vintage-dark)]/90 text-[var(--vintage-cream)] border-2 border-dashed border-[var(--vintage-cream)]/40 hover:border-[var(--vintage-gold)] rounded-xl backdrop-blur-sm transition-all duration-200 cursor-pointer font-medium focus:outline-none focus:ring-2 focus:ring-[var(--vintage-cream)]/40"
            >
              Conversar con la Artesana
            </a>
          </div>

          {/* Indicadores ligeros que no tapan la foto de la portada */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-5 max-w-3xl mx-auto pt-2 text-xs sm:text-sm font-sans">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-dashed border-[var(--vintage-gold)]/50 text-[var(--vintage-cream)] shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Piedras Calipso & Cuarzo</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-dashed border-[var(--vintage-gold)]/50 text-[var(--vintage-cream)] shadow-lg">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Cosmos & Calendario Maya</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-dashed border-[var(--vintage-gold)]/50 text-[var(--vintage-cream)] shadow-lg">
              <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
              <span>Artesanía Chilena en el GAM</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[var(--vintage-cream)]/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-[var(--vintage-gold)] rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
