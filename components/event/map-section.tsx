import { MapPinIcon } from '@/components/shared/icons'
import { strings } from '@/lib/i18n'

const { map: s } = strings

const MAPS = [
  {
    ...s.groom,
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.9659459500117!2d105.869811!3d21.1139238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135019c2c12c493%3A0x2a2f60a58ce074a0!2zTmjDoCBWxINuIEhvw6EgVGjDtG4gTGFuIFRyw6w!5e0!3m2!1svi!2s!4v1793590656630!5m2!1svi!2s',
    openUrl: 'https://maps.app.goo.gl/RmEG6MxFvNcddk6Z6',
  },
  {
    ...s.bride,
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.6581949234037!2d105.88742289999999!3d21.0863097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a9fab3ec293d%3A0xf5f60d7e0bad792f!2zxJHGsOG7nW5nIEEsIE1haSBIacOqbiwgxJDDtG5nIEFuaCwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1793590660331!5m2!1svi!2s',
    openUrl: 'https://maps.app.goo.gl/Kxj1zM1ASv2X97uR9',
  },
] as const

export const MapSection = () => {
  return (
    <div className='relative overflow-hidden bg-cream-dark'>
      <section className='relative z-10 px-6 py-12 sm:px-8 md:px-12 md:py-24'>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-10 text-center'>
            <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-wine/10'>
              <MapPinIcon className='text-wine' />
            </div>
            <h2 className='mb-4 font-script text-5xl text-wine drop-shadow-sm'>
              {s.heading}
            </h2>
          </div>

          <div className='grid gap-8 md:grid-cols-2'>
            {MAPS.map((map) => (
              <article key={map.title} className='text-center'>
                <h3 className='mb-2 font-serif text-2xl text-wine'>
                  {map.title}
                </h3>
                <p className='mb-5 text-sm text-text-secondary'>
                  {map.address}
                </p>
                <div className='relative h-80 w-full overflow-hidden rounded-3xl border-4 border-white shadow-[0_0_30px_rgba(212,175,55,0.15)] sm:h-96'>
                  <iframe
                    allowFullScreen={true}
                    height='100%'
                    loading='lazy'
                    referrerPolicy='strict-origin-when-cross-origin'
                    src={map.embedUrl}
                    style={{ border: 0 }}
                    title={map.iframeTitle}
                    width='100%'
                  />
                </div>
                <a
                  className='mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-gold bg-wine px-8 py-3 text-sm font-semibold text-cream shadow-lg shadow-wine/20 transition-all hover:bg-gold hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold'
                  href={map.openUrl}
                  rel='noopener noreferrer'
                  target='_blank'>
                  {s.openMapsLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
