import { useParams, Link } from 'react-router-dom'
import InfiniteSpiral from '../components/InfiniteSpiral'
import GlareHover from '../components/GlareHover'
import { eventBySlug } from '../data/events'

export default function EventDetail() {
  const { slug } = useParams()
  const ev = eventBySlug[slug]

  if (!ev) {
    return (
      <div className="px-[45px] py-6 pb-2">
        <p>Event not found. <Link to="/events" className="underline">Back to Events</Link></p>
      </div>
    )
  }
  return (
    <div>
      <div className="px-[45px] pt-2">
        {/* TOP SECTION */}
        <div>
          <Link
            to="/events"
            className="text-sm underline mb-4 inline-block hover:text-[#09346A]"
          >
            ← All Events
          </Link>

          <h1 className="text-4xl font-semibold tracking-[-0.8px] mb-3">
            {ev.title}
          </h1>

          <p className="mb-1 whitespace-pre-line">
            {ev.schedule
              ? ev.schedule.split('\n').map((line) => `📅 ${line}`).join('\n')
              : `📅 ${ev.date}`}
          </p>
          <p className="mb-6">📍 {ev.location}</p>
        </div>

        {/* BODY SECTION */}
        <div className="text-lg leading-[1.72] whitespace-pre-line pb-8">
          {ev.body}
          {ev.extra && (
            <p className="mt-4">
              <a href={ev.extra} target="_blank" rel="noopener noreferrer" className="underline">
                View on Instagram →
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Pictures or Infinite Spiral at bottom */}
      {ev.imgs && ev.imgs.length > 0 && (
        ev.imgs.length >= 3 ? (
          <div style={{ height: 'min(55vh, 600px)', position: 'relative', marginTop: '48px', marginBottom: '48px' }}>
            <InfiniteSpiral
              items={ev.imgs.map((src, i) => ({ src, alt: `${ev.title} ${i + 1}` }))}
              animationMode="auto"
              speed={0.15}
              radius={420}
              cardWidth={192}
              cardHeight={128}
              verticalSpacing={120}
              perspective={1400}
              cardRadius={10}
              centerScale={1.2}
              edgeBlur={6}
              cardsPerTurn={4}
              pauseOnHover={false}
              direction="up"
              rotation={0}
              cardTilt={0}
              edgeFade={0.3}
              imageFit="cover"
              grayscale={0}
            />
          </div>
         ) : (
           <div className="px-[45px]" style={{ marginTop: '48px', marginBottom: '48px' }}>
             {ev.imgs.map((src, i) => (
               <div key={i} className="w-full overflow-hidden mb-3">
                 <GlareHover
                   width="100%"
                   height="auto"
                   background="transparent"
                   borderRadius="0"
                   borderColor="transparent"
                   glareColor="#ffffff"
                   glareOpacity={0.3}
                   glareAngle={-30}
                   glareSize={300}
                   transitionDuration={800}
                   playOnce={true}
                 >
                    <img src={src} alt={ev.title} className="w-full" />
                 </GlareHover>
               </div>
             ))}
           </div>
         )
       )}
    </div>
  )
} 