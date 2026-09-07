import { Phone, MapPin, Mail, Sparkles, Feather, Gem, Clock, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import { lazy, Suspense } from 'react';
import { WhatsAppButton } from './components/whatsapp-button';
import { LocationSection } from './components/location-section';
import { GrainOverlay } from './components/effects/GrainOverlay';
import { ScrollProgress } from './components/effects/ScrollProgress';
import { CursorSpotlight } from './components/effects/CursorSpotlight';
import { DiagnosisSection } from './components/diagnosis-section';
import { BUSINESS_CONFIG } from './config/business';
import { buildWhatsAppUrl } from './utils/whatsapp';

const Gallery = lazy(() => import('./components/gallery').then(m => ({ default: m.Gallery })));
const Testimonials = lazy(() => import('./components/testimonials').then(m => ({ default: m.Testimonials })));
const BrandsSection = lazy(() => import('./components/brands-section').then(m => ({ default: m.BrandsSection })));
const ProductGrid = lazy(() => import('./components/product-grid').then(m => ({ default: m.ProductGrid })));
const HeroSection = lazy(() => import('./components/sections/HeroSection').then(m => ({ default: m.HeroSection })));
const Navbar = lazy(() => import('./components/sections/Navbar').then(m => ({ default: m.Navbar })));
const ServicesSection = lazy(() => import('./components/sections/ServicesSection').then(m => ({ default: m.ServicesSection })));
const TypewriterSection = lazy(() => import('./components/sections/TypewriterSection').then(m => ({ default: m.TypewriterSection })));

export default function App() {
  const whatsappUrl = buildWhatsAppUrl(BUSINESS_CONFIG.phone, BUSINESS_CONFIG.messages.restoration);

  return (
    <div className="min-h-screen bg-[var(--vintage-paper)] text-[var(--vintage-dark)] selection:bg-[var(--vintage-gold)] selection:text-[var(--vintage-dark)]">
      <GrainOverlay />
      <ScrollProgress />
      <CursorSpotlight />

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-[var(--vintage-dark)] text-[var(--vintage-cream)]">
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-[var(--vintage-gold)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="font-typewriter text-xs uppercase tracking-widest text-[var(--vintage-gold)]">
                Cargando Taller GAM...
              </p>
            </div>
          </div>
        }
      >
        {/* Navigation Bar */}
        <Navbar />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton phoneNumber={BUSINESS_CONFIG.phone} message={BUSINESS_CONFIG.messages.general} />

        {/* Hero Section */}
        <HeroSection />

        {/* 4 Core Specialties */}
        <ServicesSection />

        {/* Typewriter Workshop Service */}
        <TypewriterSection />

        {/* Product Catalog */}
        <ProductGrid />

        {/* Interactive Workshop Diagnosis & Budget Estimator */}
        <DiagnosisSection />

        {/* Craft Guarantees & Authenticity */}
        <section className="py-20 px-4 sm:px-6 bg-[var(--vintage-paper)]">
          <div className="max-w-7xl mx-auto">
            <BrandsSection />
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 px-4 sm:px-6 bg-[var(--vintage-cream)] border-t border-b border-[var(--vintage-bronze)]/20">
          <Gallery />
        </section>

        {/* Customer Testimonials */}
        <section className="py-20 px-4 sm:px-6 bg-[var(--vintage-paper)]">
          <div className="max-w-6xl mx-auto">
            <Testimonials />
          </div>
        </section>

        {/* Location & Map Section */}
        <section id="contacto" className="py-20 px-4 sm:px-6 bg-[var(--vintage-cream)] border-t border-[var(--vintage-bronze)]/20">
          <LocationSection />
        </section>

        {/* Pre-footer Call to Action */}
        <section className="py-20 px-4 sm:px-6 bg-[var(--vintage-dark)] text-[var(--vintage-cream)] relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-4 text-[var(--vintage-gold)]">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-typewriter">
                Oficio, Historia & Calidez
              </span>
            </div>
            <motion.h2
              className="mb-4 text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-[var(--vintage-cream)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              ¿Tienes una idea o pieza especial en mente?
            </motion.h2>
            <p className="text-base sm:text-lg text-[var(--vintage-sepia)] mb-8 max-w-2xl mx-auto font-cormorant">
              Hacemos tapices de macramé a medida, aros personalizados en alpaca, búsquedas de antigüedades y mantención de tu máquina de escribir. Contáctanos directamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#catalogo"
                className="px-8 py-4 bg-[var(--vintage-gold)] text-[var(--vintage-dark)] rounded hover:bg-[var(--vintage-bronze)] hover:text-[var(--vintage-cream)] transition-colors cursor-pointer font-typewriter font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-lg"
              >
                Ver Catálogo Disponible
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-[var(--vintage-cream)]/50 rounded hover:bg-[var(--vintage-cream)]/10 transition-colors flex items-center justify-center gap-2 font-typewriter text-xs sm:text-sm tracking-wider uppercase"
              >
                <span>Escribir por WhatsApp</span>
                <Phone className="w-4 h-4 text-[var(--vintage-gold)]" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-14 px-4 sm:px-6 bg-[var(--vintage-dark)] border-t border-[var(--vintage-gold)]/20 text-[var(--vintage-cream)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-10">
              {/* Col 1 */}
              <div className="md:col-span-1">
                <h3 className="text-[var(--vintage-gold)] font-cinzel text-lg font-bold mb-3">
                  {BUSINESS_CONFIG.name}
                </h3>
                <p className="text-[var(--vintage-sepia)] text-xs font-cormorant leading-relaxed mb-4">
                  Taller artesanal dedicado a la creación manual en Macramé, aritos y orfebrería en Alpaca, curaduría de antigüedades y servicio técnico de máquinas de escribir.
                </p>
                <span className="text-[11px] text-[var(--vintage-gold)]/80 font-typewriter block">
                  Ubicados en los Locales Artesanales del GAM.
                </span>
              </div>

              {/* Col 2 */}
              <div>
                <h4 className="text-[var(--vintage-cream)] text-xs uppercase tracking-widest font-typewriter font-semibold mb-3 border-b border-[var(--vintage-bronze)]/30 pb-2">
                  Especialidades
                </h4>
                <ul className="text-[var(--vintage-sepia)] text-xs space-y-2 font-typewriter">
                  <li className="flex items-center gap-1.5 hover:text-[var(--vintage-gold)] transition-colors">
                    <Feather className="w-3 h-3 text-[var(--vintage-gold)]" />
                    <span>Macramé & Fibras Naturales</span>
                  </li>
                  <li className="flex items-center gap-1.5 hover:text-[var(--vintage-gold)] transition-colors">
                    <Gem className="w-3 h-3 text-[var(--vintage-gold)]" />
                    <span>Aritos & Joyas en Alpaca</span>
                  </li>
                  <li className="flex items-center gap-1.5 hover:text-[var(--vintage-gold)] transition-colors">
                    <Clock className="w-3 h-3 text-[var(--vintage-gold)]" />
                    <span>Reventa de Antigüedades</span>
                  </li>
                  <li className="flex items-center gap-1.5 hover:text-[var(--vintage-gold)] transition-colors">
                    <Wrench className="w-3 h-3 text-[var(--vintage-gold)]" />
                    <span>Mantención Máquinas de Escribir</span>
                  </li>
                </ul>
              </div>

              {/* Col 3 */}
              <div>
                <h4 className="text-[var(--vintage-cream)] text-xs uppercase tracking-widest font-typewriter font-semibold mb-3 border-b border-[var(--vintage-bronze)]/30 pb-2">
                  Marcas de Máquinas
                </h4>
                <p className="text-xs text-[var(--vintage-sepia)] font-typewriter leading-relaxed">
                  Olivetti · Underwood · Remington · Olympia · Brother · Erika · Smith-Corona · Hermes · Royal
                </p>
                <div className="mt-3 p-2 bg-[var(--vintage-cream)]/5 rounded border border-[var(--vintage-gold)]/20 text-[11px] text-[var(--vintage-gold)] font-typewriter">
                  Cintas bicolores y negras siempre disponibles en taller.
                </div>
              </div>

              {/* Col 4 */}
              <div>
                <h4 className="text-[var(--vintage-cream)] text-xs uppercase tracking-widest font-typewriter font-semibold mb-3 border-b border-[var(--vintage-bronze)]/30 pb-2">
                  Ubicación & Contacto
                </h4>
                <ul className="text-[var(--vintage-sepia)] text-xs space-y-2 font-cormorant">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[var(--vintage-gold)]" />
                    <span>{BUSINESS_CONFIG.address}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 flex-shrink-0 text-[var(--vintage-gold)]" />
                    <a href={`https://wa.me/${BUSINESS_CONFIG.phone}`} className="hover:text-[var(--vintage-gold)] transition-colors font-typewriter">
                      +56 9 5409 5465
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 flex-shrink-0 text-[var(--vintage-gold)]" />
                    <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-[var(--vintage-gold)] transition-colors font-typewriter">
                      {BUSINESS_CONFIG.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-[var(--vintage-bronze)]/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--vintage-sepia)] font-typewriter">
              <p>© 2026 {BUSINESS_CONFIG.name}. Todos los derechos reservados.</p>
              <p className="text-[var(--vintage-gold)]/90">
                Artesanía, memoria y técnica en Santiago de Chile.
              </p>
            </div>
          </div>

          <style>{`
            :where(.xepw-crafted){--xepw-bg:#162330;--xepw-ink:rgba(250,248,245,.6);--xepw-ink-hover:rgba(250,248,245,.95);--xepw-accent:#C88A6E;--xepw-accent-soft:#E8BFAC;--xepw-line:rgba(200,138,110,.18);--xepw-badge:rgba(255,255,255,.03);--xepw-border:rgba(200,138,110,.12);--xepw-border-hover:rgba(200,138,110,.3);--xepw-glow:rgba(200,138,110,.2);position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:1.15rem 1rem;background:var(--xepw-bg);border-top:1px solid var(--xepw-line);width:100%}
            :where(.xepw-crafted)::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:280px;height:1px;background:linear-gradient(90deg,transparent,var(--xepw-accent),transparent)}
            :where(.xepw-crafted) .xepw-sig-glow{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);width:340px;height:340px;border-radius:50%;background:radial-gradient(circle,rgba(200,138,110,.18) 0%,transparent 70%);pointer-events:none;animation:xepw-sig-pulse 4s ease-in-out infinite}
            :where(.xepw-crafted) .xepw-sig-link{position:relative;z-index:1;display:inline-flex;align-items:center;gap:.6rem;padding:.45rem 1.1rem;border-radius:9999px;text-decoration:none;background:var(--xepw-badge);border:1px solid var(--xepw-border);font-family:'Plus Jakarta Sans','Inter',system-ui,-apple-system,sans-serif;font-size:.75rem;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--xepw-ink);transition:color .4s cubic-bezier(.16,1,.3,1),background .4s ease,border-color .4s ease,box-shadow .4s ease,transform .4s cubic-bezier(.16,1,.3,1)}
            :where(.xepw-crafted) .xepw-sig-link:hover{color:var(--xepw-ink-hover);background:rgba(200,138,110,.08);border-color:var(--xepw-border-hover);box-shadow:0 0 25px var(--xepw-glow),0 0 60px rgba(200,138,110,.08);transform:translateY(-2px)}
            :where(.xepw-crafted) .xepw-sig-shimmer{position:absolute;inset:0;border-radius:inherit;overflow:hidden;pointer-events:none}
            :where(.xepw-crafted) .xepw-sig-shimmer::after{content:'';position:absolute;top:0;left:0;width:60%;height:100%;background:linear-gradient(110deg,transparent,rgba(255,255,255,.14),transparent);transform:translateX(-120%);transition:transform .9s cubic-bezier(.16,1,.3,1)}
            :where(.xepw-crafted) .xepw-sig-link:hover .xepw-sig-shimmer::after{transform:translateX(260%)}
            :where(.xepw-crafted) .xepw-sig-prefix{font-weight:400;opacity:.75;white-space:nowrap}
            :where(.xepw-crafted) .xepw-sig-brand{font-weight:700;background:linear-gradient(135deg,var(--xepw-accent-soft) 0%,var(--xepw-accent) 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;white-space:nowrap}
            :where(.xepw-crafted) .xepw-sig-sparkle{color:var(--xepw-accent-soft);font-size:.85rem;line-height:1;display:inline-block;transition:transform .6s cubic-bezier(.34,1.56,.64,1),color .3s ease}
            :where(.xepw-crafted) .xepw-sig-link:hover .xepw-sig-sparkle{transform:rotate(180deg) scale(1.3);color:var(--xepw-accent)}
            @media (max-width:768px){:where(.xepw-crafted) .xepw-sig-prefix{display:none}:where(.xepw-crafted) .xepw-sig-link{letter-spacing:.14em}}
            @media (prefers-reduced-motion: reduce){:where(.xepw-crafted) .xepw-sig-glow{animation:none}:where(.xepw-crafted) .xepw-sig-shimmer::after{transition:none;transform:none}:where(.xepw-crafted) .xepw-sig-sparkle{transition:none}}
            @keyframes xepw-sig-pulse{0%,100%{opacity:.35;transform:translate(-50%,-50%) scale(.92)}50%{opacity:.85;transform:translate(-50%,-50%) scale(1.05)}}
            :where(.xepw-crafted){--xepw-bg:#162330;--xepw-ink:rgba(250,248,245,.6);--xepw-ink-hover:rgba(250,248,245,.95);--xepw-accent:#C88A6E;--xepw-accent-soft:#E8BFAC;--xepw-line:rgba(200,138,110,.18);--xepw-badge:rgba(255,255,255,.03);--xepw-border:rgba(200,138,110,.12);--xepw-border-hover:rgba(200,138,110,.3);--xepw-glow:rgba(200,138,110,.2)}
          `}</style>
          <div className="xepw-crafted" role="contentinfo">
            <div className="xepw-sig-glow" aria-hidden="true"></div>
            <a className="xepw-sig-link" href="https://exepaginasweb.com" target="_blank" rel="noopener noreferrer" title="Diseño & Desarrollo por Exepaginasweb.com">
              <span className="xepw-sig-shimmer" aria-hidden="true"></span>
              <span className="xepw-sig-prefix">Crafted with precision by</span>
              <span className="xepw-sig-brand">Exepaginasweb.com</span>
              <span className="xepw-sig-sparkle" aria-hidden="true">✦</span>
            </a>
          </div>
        </footer>
      </Suspense>
    </div>
  );
}
