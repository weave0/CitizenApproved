import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink, FileSearch, Globe2, Scale, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'
import { LAST_RESOURCE_REVIEW } from '@/lib/resources/official-resources'

export const metadata: Metadata = {
  title: 'Orientación sobre ciudadanía en español',
  description: 'Orientación en español para encontrar la ruta correcta, conservar términos jurídicos importantes en inglés y llegar a fuentes oficiales de ciudadanía y naturalización.',
  alternates: {
    canonical: '/languages/es',
    languages: {
      en: '/languages',
      es: '/languages/es',
    },
  },
}

const terms = [
  ['naturalización', 'naturalization', 'Proceso mediante el cual una persona que no nació ciudadana adquiere la ciudadanía conforme a la ley aplicable.'],
  ['presencia física', 'physical presence', 'Tiempo que una persona estuvo realmente dentro de Estados Unidos. No es lo mismo que residencia.'],
  ['residencia continua', 'continuous residence', 'Requisito de residencia que puede verse afectado por ciertas ausencias prolongadas. No significa que la persona nunca pueda viajar.'],
  ['buen carácter moral', 'good moral character', 'Término legal usado en naturalización. No es simplemente una evaluación informal de si alguien es una “buena persona”.'],
  ['adquisición de ciudadanía', 'acquisition', 'Ciudadanía obtenida al nacer cuando se cumplen las reglas legales aplicables.'],
  ['derivación de ciudadanía', 'derivation', 'Ciudadanía que puede surgir después del nacimiento por medio de un padre o madre ciudadano cuando se cumplen los requisitos legales.'],
] as const

export default function SpanishLanguageGuide() {
  return (
    <main className="min-h-screen" lang="es">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Orientación en español · revisado {formatReviewDate(LAST_RESOURCE_REVIEW)}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Empiece con la fuente correcta.</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">Esta página no intenta traducir todo el derecho de ciudadanía de Estados Unidos. Su función es ayudarle a identificar la ruta, conservar los términos jurídicos importantes en inglés y llegar a los recursos oficiales de USCIS, USAGov, el Departamento de Estado u otras autoridades.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-5">
          <article className="glass-panel p-7">
            <Scale className="w-7 h-7 text-cyan-400 mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-3">Quiero solicitar la naturalización</h2>
            <p className="text-gray-300 mb-5">Empiece con el Centro de Recursos de Ciudadanía de USCIS y la página vigente del Formulario N-400. Las tarifas, la edición del formulario, el examen aplicable y las reglas de presentación pueden cambiar.</p>
            <div className="space-y-3 text-sm">
              <a href="https://www.uscis.gov/es/ciudadania" target="_blank" rel="noreferrer" className="block text-cyan-300 underline underline-offset-4">USCIS en español: Ciudadanía <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
              <a href="https://www.uscis.gov/es/n-400" target="_blank" rel="noreferrer" className="block text-cyan-300 underline underline-offset-4">USCIS: Formulario N-400 <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
              <Link href="/pathways/naturalization" className="block text-white underline underline-offset-4">Explicación detallada en inglés <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
            </div>
          </article>

          <article className="glass-panel p-7">
            <FileSearch className="w-7 h-7 text-violet-400 mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-3">Creo que ya soy ciudadano</h2>
            <p className="text-gray-300 mb-5">Una persona puede ser ciudadana por nacimiento en Estados Unidos, por nacimiento fuera del país con un padre o madre ciudadano, o por ciertas reglas de ciudadanía derivada. La fecha del nacimiento y otros hechos pueden cambiar la ley aplicable.</p>
            <div className="space-y-3 text-sm">
              <a href="https://www.usa.gov/es/obtener-reemplazar-certificado-ciudadania-naturalizacion" target="_blank" rel="noreferrer" className="block text-cyan-300 underline underline-offset-4">USAGov en Español: comprobar la ciudadanía <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
              <Link href="/topics/proof" className="block text-white underline underline-offset-4">Cómo probar la ciudadanía — explicación en inglés <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
              <Link href="/topics/historical-law" className="block text-white underline underline-offset-4">Por qué importa la fecha de la ley <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
            </div>
          </article>

          <article className="glass-panel p-7">
            <ShieldCheck className="w-7 h-7 text-green-400 mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-3">Necesito ayuda adicional</h2>
            <p className="text-gray-300 mb-5">USCIS ofrece recursos multilingües y procesos para solicitar adaptaciones por discapacidad. Si necesita asesoría jurídica individual, use recursos oficiales para encontrar abogados o representantes acreditados.</p>
            <div className="space-y-3 text-sm">
              <a href="https://www.uscis.gov/es/herramientas/centro-de-recursos-multilingues" target="_blank" rel="noreferrer" className="block text-cyan-300 underline underline-offset-4">USCIS: Centro de Recursos Multilingües <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
              <Link href="/help" className="block text-white underline underline-offset-4">Directorio de ayuda oficial <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
              <Link href="/accessibility" className="block text-white underline underline-offset-4">Idioma y accesibilidad <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
            </div>
          </article>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <Globe2 className="w-7 h-7 text-cyan-400 mt-1 shrink-0" aria-hidden="true" />
            <div>
              <h2 className="text-3xl font-bold mb-3">Términos que conviene conservar en inglés</h2>
              <p className="text-gray-400 max-w-4xl">En derecho de ciudadanía, palabras parecidas pueden tener consecuencias distintas. Por eso mostramos el término en español y el término jurídico en inglés juntos.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {terms.map(([spanish, english, description]) => (
              <article key={english} className="glass-panel p-6">
                <div className="text-sm text-cyan-300 font-mono mb-2" lang="en">{english}</div>
                <h3 className="text-xl font-semibold mb-3">{spanish}</h3>
                <p className="text-gray-300">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <div className="glass-panel p-8">
            <h2 className="text-2xl font-bold mb-4">La traducción no cambia la autoridad jurídica</h2>
            <p className="text-gray-300 mb-4">Las traducciones ayudan a comprender, pero la ley, los reglamentos, las decisiones judiciales y las instrucciones vigentes del formulario siguen controlando la respuesta. Si una traducción antigua y la página vigente del formulario no coinciden, verifique la fuente oficial actual antes de presentar algo.</p>
            <a href="https://www.usa.gov/es/naturalizacion-ciudadania-estados-unidos" target="_blank" rel="noreferrer" className="text-cyan-300 underline underline-offset-4">USAGov en Español: naturalización y ciudadanía <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
          </div>
          <div className="glass-panel p-8">
            <h2 className="text-2xl font-bold mb-4">No responda un formulario basándose sólo en un resumen</h2>
            <p className="text-gray-300 mb-4">CitizenApproved explica categorías y fuentes. No debe completar respuestas personales, declaraciones juradas o datos de historial basándose únicamente en una explicación educativa. Use las instrucciones actuales y busque ayuda jurídica autorizada cuando los hechos sean complejos o de alto riesgo.</p>
            <a href="https://www.uscis.gov/es/evite-las-estafas-de-inmigracion/encuentre-servicios-legales" target="_blank" rel="noreferrer" className="text-cyan-300 underline underline-offset-4">USCIS: encuentre servicios legales <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto glass-panel p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-4">¿Quiere seguir investigando?</h2>
          <p className="text-gray-300 mb-5">La biblioteca principal de CitizenApproved está en inglés y conserva las citas, fechas, niveles de autoridad y cambios de política con mayor detalle.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/languages" className="px-5 py-3 rounded-lg border border-cyan-400/20 text-cyan-300">Todos los idiomas <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
            <Link href="/resources" className="px-5 py-3 rounded-lg border border-white/10 text-white">Biblioteca de recursos <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
