import { Link } from 'react-router-dom'
import { useRef, useLayoutEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import ScrollFloat from '../components/ScrollFloat'
import SplitFlapText from '../components/SplitFlapText'
import GradientText from '../components/GradientText'
import ShinyText from '../components/ShinyText'
import CountUp from '../components/CountUp'

export default function Home() {
  const gridRef = useRef(null)
  const itemRefs = useRef([])
  const hasAnimatedRef = useRef(false)

  useLayoutEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const calculate = () => {
      const items = itemRefs.current.filter(Boolean)
      if (!items.length) return

      const gridRect = grid.getBoundingClientRect()
      const centerX = gridRect.left + gridRect.width / 2
      const centerY = gridRect.top + gridRect.height / 2

      let maxDist = 0
      const entries = items.map((item) => {
        const rect = item.getBoundingClientRect()
        const ix = rect.left + rect.width / 2
        const iy = rect.top + rect.height / 2
        const tx = centerX - ix
        const ty = centerY - iy
        const dist = Math.sqrt(tx * tx + ty * ty)

        if (dist > maxDist) maxDist = dist
        
        return { item, tx, ty, dist }
      })

      entries.forEach(({ item, tx, ty, dist }) => {
        item.style.setProperty('--from-x', `${tx}px`)
        item.style.setProperty('--from-y', `${ty}px`)
        const norm = maxDist > 0 ? dist / maxDist : 0
        const delay = norm * 450
        item.style.setProperty('--delay', `${delay}ms`)
      })
    }

    calculate()

    const itemsNow = itemRefs.current.filter(Boolean)
    itemsNow.forEach((item) => item.classList.add('animating'))

    requestAnimationFrame(() => {
      if (grid) {
        grid.classList.add('animate')
        hasAnimatedRef.current = true
      }
    })

    const ro = new ResizeObserver(() => {
      calculate()
    })
    ro.observe(grid)

    return () => ro.disconnect()
  }, [])

  return (
    <>
      {/* Stable fixed background layer (above body bg, below content) */}
      <div
        className="fixed inset-0 z-[0] bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url("${import.meta.env.BASE_URL}img/background-tower.jpeg")` }}
      />
      <div className="fixed inset-0 z-[0] bg-[#09346A]/24 pointer-events-none" />

      <div className="-mt-16 relative z-[10]">
        {/* Hero content */}
        {/* Phase 1: Logo + big ACE UTSC (full screen) */}
        <div className="h-screen flex items-center justify-center text-white">
          <div className="text-center">
            <img
              src={import.meta.env.BASE_URL + 'img/icon/ace-utsc-logo-1.png'}
              alt="ACE UTSC Logo"
              className="mx-auto h-20 md:h-30"
            />
            <h1>
              <ScrollFloat
                containerClassName="text-7xl md:text-8xl font-semibold tracking-[-2px] text-white"
                scrollStart="top bottom+=50%"
                scrollEnd="bottom bottom"
              >
                ACE UTSC 
              </ScrollFloat>
            </h1>
          </div>
        </div>

        {/* Phase 2: Achieve. Connect. Empower. (full screen) */}
        <div className="h-screen flex items-center justify-center text-white">
          <div className="px-[60px] text-center">
            <ScrollReveal
              containerClassName="text-6xl md:text-7xl font-bold tracking-[-0.2px]"
              scrollStart="top bottom+=20%"
              scrollEnd="bottom bottom"
            >
              <GradientText
                colors={["#FFFFFF", "#03BBFF", "#FFFFFF"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                Achieve. Connect. Empower.
              </GradientText>
            </ScrollReveal>
          </div>
        </div>

        {/* Phase 3: Who We Are (full screen + extra scroll space so fixed bg picture 
            stays visible until the reveal animation is fully complete and the text 
            has scrolled up near the top of the screen ~10%) */}
        <div className="min-h-screen pb-[55vh] flex items-center justify-center text-white">
          <div className="px-[45px] text-center">
            <ScrollReveal
              baseRotation={0}
              containerClassName="text-4xl md:text-5xl font-semibold mb-5 tracking-[-0.6px]"
            >
              Who We Are
            </ScrollReveal>
            <ScrollReveal
              baseRotation={0}
              containerClassName="text-lg md:text-2xl leading-relaxed tracking-[-0.1px] text-white/90"
            >
              We are dedicated to offering <ShinyText text="real world practice" color="#000000" shineColor="#ffdddd" speed={2} /> for students. Our mission is to transform <ShinyText text="classroom knowledge" color="#000000" shineColor="#ffdddd" speed={2} /> into <ShinyText text="practical expertise" color="#000000" shineColor="#ffdddd" speed={2} /> and empower students to strengthen their skills and get ready for the real world.
            </ScrollReveal>
           </div>
           </div>
  
           <div className="min-h-screen w-full">
            {/* Join + Stats */}
              <div className="relative z-[1] px-[45px] pt-50 pb-50 bg-white">
              <div className="text-center mb-20">
                <Link
                  to="/ace-member"
                  className="inline-flex items-center transition-colors"
                >
                  <SplitFlapText
                    words={["JOIN US BECAUSE", "JOIN US BECAUSE","JOIN US BECAUSE"]}
                    flipDuration={0.12}
                    stagger={0.06}
                    cycleDelay={2400}
                    charset="alphanumeric"
                    flipsPerChar={8}
                     tileColor="#020617"
                     textColor="#f8fafc"
                    tileRadius={8}
                    gap="clamp(2px,0.8vw,6px)"
                    fontSize="clamp(24px,6.5vw,72px)"
                    loop
                    padTo={12}
                  />
              </Link>
            </div>
                {/* Stats: numbers & tiny text (animated, grid: two on top, one down) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-y-8 text-center px-4 py-20  bg-[#09346A]/90"> 
                  {[
                    { to: 1, prefix: '# ', suffix: '', separator: '', desc: 'Largest Case Competition in Canada' },
                    { to: 50000, prefix: '#', suffix: '+', separator: ',', desc: 'Public Awareness Initiatives' },
                    { to: 100, prefix: '', suffix: '+', separator: '', desc: 'Undergraduate Students Joined' }
                  ].map((stat, index) => (
                    <div key={index} >
                      <div className="text-6xl md:text-6xl font-semibold tracking-[-1.5px] text-white mb-6 tabular-nums">
                        {stat.prefix}<CountUp to={stat.to} separator={stat.separator} duration={1.6} />{stat.suffix}
                      </div>
                      <p className="text-sm md:text-[15px] text-white/80 tracking-[-0.2px] leading-snug">
                        {stat.desc}
                      </p>
                    </div>
                  ))}
                </div>
         </div>

        {/* Achievements, Events & Partnerships — one unified section */}
        <div className="px-[45px] pb-12 relative z-[1] bg-white">
          <div className="text-center mb-15">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.6px] mb-3">
              WHAT WE DO
            </h1>
          </div>
          <div
            ref={gridRef}
            className="achievements-grid grid grid-cols-1 gap-12 md:gap-16 pb-20 pt-10"
          >
           {/* Achievements */}
           <div
             ref={(el) => { itemRefs.current[0] = el }}
             className="achievement-item group grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 md:gap-9 items-center"
           >
             <div className="achievement-image w-full aspect-[4/3] overflow-hidden">
                 <img
                   src={import.meta.env.BASE_URL + 'img/AceNationalsEdited.jpeg'}
                   alt="Achievements"
                   className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.1]"
                 />
             </div>
              <div className="achievement-description bg-white/80 p-3 rounded-md">
               <h2 className="text-3xl font-semibold mb-2.5 tracking-[-0.3px]">Achievements</h2>
               <p className="text-xl leading-relaxed text-[#333]">
                 Our team has proudly secured <strong>3rd Place</strong> in EY Ripples, <strong>Top 5</strong> in Accounting, Management Consulting, and Travel Management at the ACE Nationals, competing against more than 20 students chapters from across Canada.
               </p>
             </div>
           </div>

           {/* Events */}
           <div
             ref={(el) => { itemRefs.current[1] = el }}
             className="achievement-item group grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 md:gap-9 items-center"
           >
             <div className="achievement-image w-full aspect-[4/3] overflow-hidden">
                 <img
                    src={import.meta.env.BASE_URL + 'img/event.jpeg'}
                   alt="Events"
                   className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.1]"
                 /> 
              </div>
              <div className="achievement-description bg-white/80 p-3 rounded-md">
               <h2 className="text-3xl font-semibold mb-2.5 tracking-[-0.3px]">Events</h2>
               <p className="text-xl leading-relaxed text-[#333]">
                 We run <strong>ACE Invitationals</strong>, <strong>ACE Chronicles</strong>, and <strong>ELA</strong> — events designed to equip students with the skills and experiences needed to succeed in the workplace.
               </p>
               <p className="mt-3 text-4sm"><Link to="/events" className="underline decoration-1 underline-offset-2 hover:text-[#09346A]">See all events →</Link></p>
             </div>
           </div>

           {/* Partnerships */}
           <div
             ref={(el) => { itemRefs.current[2] = el }}
             className="achievement-item group grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 md:gap-9 items-center"
           >
             <div className="achievement-image w-full aspect-[4/3] overflow-hidden">
                 <img
                    src={import.meta.env.BASE_URL + 'img/events/2324_AceInvitationals_4.jpg'}
                   alt="Sponsors & Partnerships"
                   className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.1]"
                 />
             </div>
              <div className="achievement-description bg-white/80 p-3 rounded-md">
               <h2 className="text-3xl font-semibold mb-2.5 tracking-[-0.3px]">Partnerships</h2>
               <p className="text-xl leading-relaxed text-[#333]">
                 Proudly sponsored by <strong>EY</strong>, <strong>UofT MMPA</strong>, <strong>ICUBE UTM</strong>, and <strong>the CFA Society</strong>. We have also collaborated with RBC, Deloitte, York Region, AutoTrader, and more.
               </p>
            </div>
            </div>
            </div>
          </div>
         </div>
        </div>
    </>
  )
}