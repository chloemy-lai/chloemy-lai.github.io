import GlareHover from '../components/GlareHover'
import { teams } from '../data/team'

export default function OurTeam() {
  return (
    <>
      <div className="px-[45px] py-6">
      <h1 className="text-4xl font-semibold tracking-[-1px] mb-8">Our Team 2026-2027</h1>

      {Object.entries(teams).map(([dept, members]) => (
        <div key={dept} className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 border-b pb-1">{dept}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 text-3md">
            {members.map((m, idx) => (
              <div key={idx} className="group">
                <div className="w-full overflow-hidden mb-3 rounded">
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="block mb-0.5">
                    <GlareHover
                      width="100%"
                      height="auto"
                      background="transparent"
                      borderRadius="0.25rem"
                      borderColor="transparent"
                      glareColor="#ffffff"
                      glareOpacity={0.3}
                      glareAngle={-30}
                      glareSize={300}
                      transitionDuration={800}
                      playOnce={false}
                    >
                      <img src={m.img} alt={m.name} className="w-full" />
                    </GlareHover>
                  </a>
                </div>
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="block mb-0.5">
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-4 h-4 grayscale group-hover:grayscale-0 transition" />
                </a>

                <div className="font-semibold mt-1 tracking-tight transition-all duration-200 group-hover:font-bold group-hover:underline">
                  {m.name}
                </div>
                <div className="text-[13px] text-gray-600 mt-px transition-all duration-200 group-hover:font-semibold group-hover:underline">
                  {m.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  )
}
