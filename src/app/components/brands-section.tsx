import { motion } from 'motion/react';
import { Star, ShieldCheck, Gem, Award, Truck, HeartHandshake, History, type LucideIcon } from 'lucide-react';
import { guarantees } from '../data/guarantees';

const iconMap: Record<string, LucideIcon> = {
  Gem, History, Award, Truck, Star, ShieldCheck,
};

export function BrandsSection() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="mb-4 text-[var(--vintage-dark)] text-3xl md:text-4xl font-bold tracking-tight">
          Amor por la Tierra, el Cosmos y las Manos
        </h2>
        <p className="text-[var(--vintage-metal)] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Artesanía chilena nacida en el Centro Cultural GAM: aros, collares y pulseras con piedras vivas, inspiradas en los ciclos naturales y el respeto por el oficio manual.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {guarantees.map((item, index) => {
          const Icon = iconMap[item.icon];
          if (!Icon) return null;
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl border-2 flex flex-col justify-between shadow-sm transition-all duration-200 hover:-translate-y-0.5 ${
                item.highlight
                  ? 'bg-[var(--vintage-gold)]/10 border-dashed border-[var(--vintage-gold)]'
                  : 'bg-[var(--vintage-cream)] border-dashed border-[var(--vintage-bronze)]/40 hover:border-[var(--vintage-gold)]/70'
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Icon className={`w-5 h-5 ${item.highlight ? 'text-[var(--vintage-gold)]' : 'text-[var(--vintage-bronze)]'}`} />
                  <h3 className={`font-semibold text-sm tracking-tight ${
                    item.highlight ? 'text-[var(--vintage-gold)]' : 'text-[var(--vintage-dark)]'
                  }`}>
                    {item.name}
                  </h3>
                </div>
                <p className="text-xs text-[var(--vintage-metal)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 p-6 sm:p-8 bg-[var(--vintage-dark)] text-[var(--vintage-cream)] rounded-2xl border-2 border-dashed border-[var(--vintage-gold)]/35 shadow-xl relative overflow-hidden">
        <div className="flex items-start gap-4 relative z-10">
          <HeartHandshake className="w-7 h-7 text-[var(--vintage-gold)] flex-shrink-0 mt-1" />
          <div>
            <h4 className="mb-2 text-[var(--vintage-gold)] font-bold text-lg tracking-tight">
              Filosofía del Buen Vivir & Tiempo Sagrado
            </h4>
            <p className="text-xs sm:text-sm text-[var(--vintage-cream)]/85 leading-relaxed">
              Sentimos la artesanía como un diálogo con la naturaleza: las manos tejen, los metales de alpaca se templan y las piedras de cuarzo y calipso conectan con la energía de quien las porta. Una forma de vivir en armonía con los ciclos del cosmos, la siembra y el rescate paciente de objetos con historia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
