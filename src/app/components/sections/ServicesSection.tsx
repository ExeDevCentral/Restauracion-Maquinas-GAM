import { Gem, Compass, Wrench, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { TiltCard } from '../effects/TiltCard'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { BUSINESS_CONFIG } from '../../config/business'

const services = [
  {
    icon: Gem,
    title: 'Aros, Collares & Pulseras',
    description: 'Creaciones manuales con piedras naturales: cuarzo cristal, calipso, lapislázuli chileno y amatista. Engarces y tejidos en alpaca, cobre y macramé.',
    cta: 'Ver Joyas con Piedras',
    message: '¡Hola! Quiero consultar por sus aros, collares y pulseras hechos a mano.',
  },
  {
    icon: Compass,
    title: 'Cosmos & Calendario Maya',
    description: 'Amuletos y diseños concebidos en sintonía con las fases lunares, la siembra y la cuenta sagrada maya. Joyas para conectar con la energía de la tierra.',
    cta: 'Consultar Piezas Sagradas',
    message: '¡Hola! Quiero consultar por las piezas inspiradas en el calendario maya y el cosmos.',
  },
  {
    icon: Wrench,
    title: 'Rescate de Máquinas de Escribir',
    description: 'Oficio y cariño para restaurar, limpiar y calibrar máquinas de escribir clásicas (Olivetti, Remington, Brother). Un servicio paciente de preservación.',
    cta: 'Consultar Mantención',
    message: '¡Hola! Quiero consultar por la mantención y cuidado de mi máquina de escribir.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 px-6 bg-[var(--vintage-paper)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-3 text-[var(--vintage-bronze)]">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wider uppercase font-sans">
                Oficio Hecho a Mano · Taller GAM
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl text-[var(--vintage-dark)] font-bold tracking-tight mb-4">
              Oficios Vivos & Artesanía Chilena
            </h2>
            <p className="text-[var(--vintage-metal)] max-w-2xl mx-auto font-sans leading-relaxed">
              Orfebrería en piedras naturales y cuarzo, inspiración en los ciclos de la tierra y el cosmos, y rescate manual de objetos nobles.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const whatsappUrl = buildWhatsAppUrl(BUSINESS_CONFIG.phone, service.message)

            return (
              <TiltCard key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="h-full bg-[var(--vintage-cream)] p-8 rounded-lg border border-[var(--vintage-bronze)]/20 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow duration-300 group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div>
                    <div
                      className="w-16 h-16 bg-[var(--vintage-gold)]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--vintage-gold)]/30 transition-colors"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      <Icon className="w-8 h-8 text-[var(--vintage-bronze)]" />
                    </div>
                    <h3
                      className="text-2xl text-[var(--vintage-dark)] mb-4"
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-[var(--vintage-metal)] text-sm leading-relaxed mb-6"
                      style={{ transform: 'translateZ(10px)' }}
                    >
                      {service.description}
                    </p>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--vintage-dark)] text-[var(--vintage-cream)] rounded hover:bg-[var(--vintage-gold)] hover:text-[var(--vintage-dark)] transition-all duration-300 text-sm font-typewriter tracking-wide"
                    style={{ transform: 'translateZ(15px)' }}
                  >
                    {service.cta}
                  </a>
                </motion.div>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
