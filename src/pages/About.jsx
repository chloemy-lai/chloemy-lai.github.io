export default function About() {
  return (
    <div 
      className="relative bg-white text-[#222] flex-1 flex flex-col overflow-hidden"
    >
      {/* Contained header */}
      <div className="relative z-10 px-[45px] py-6 pb-4">
        <h1 className="text-4xl font-semibold tracking-[-1px] mb-6">About Us</h1>
      </div>

      {/* Image left + text right */}
      <div className="text-lg relative z-10 px-[45px] py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-center">
          <div>
            <img
              src={import.meta.env.BASE_URL + 'img/events/2324_TasteOfAce_1.jpg'}
              alt="About ACE UTSC"
              className="w-full rounded-2xl"
            />
          </div>
          <div className="text-lg space-y-5 leading-[1.72]">
            <p>
              ACE UTSC is the University of Toronto Scarborough’s chapter of Canada’s <strong>largest undergraduate case</strong> competition. We prepare future leaders in <strong>consulting</strong>, <strong>finance</strong>, and <strong>management</strong> by transforming classroom learning into real-world application at the 2-day Nationals in downtown Toronto.
            </p>
            <p>
              Through case training, industry events, and mentorship, we have supported the professional development of hundreds of students. Our mission is to build <strong>critical thinking</strong>, <strong>communication</strong>, and <strong>networking skills</strong> while fostering meaningful connections.
            </p>
          </div>
        </div>
      </div>

      {/* Text left + image right */}
      <div className="relative z-10 px-[45px] py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-center">
          <div className="order-2 md:order-1 space-y-5 text-lg leading-[1.72]">
            <p>
              Our mission is to build a community where students <strong>strengthen</strong> their <strong>communication</strong>, <strong>presentation</strong>, and <strong>problem-solving skills</strong> to excel in their careers. Each year, our delegates proudly represent us at Nationals, consistently placing in the Top 3. In 2024, our chapter was recognized with the <strong>Award for Largest Chapter Growth</strong>.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={import.meta.env.BASE_URL + 'img/about/img_8418.jpeg'}
              alt="Our Mission"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Sponsors section */}
      <div className="relative z-10 px-[45px] py-10 md:py-12">
        <h2 className="text-4xl font-semibold mb-5 tracking-[-0.4px]">Our Sponsors</h2>
        <p className="mb-6 text-lg leading-[1.72]">ACE UTSC has proudly received sponsorship from a range of reputable organizations, including:</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-center ">
          <div className="mb-6 md:mb-0 hover:scale-105 hover:underline transition-transform duration-300">
            <a href="https://www.ey.com/" target="_blank" rel="noopener noreferrer">
              <img src={import.meta.env.BASE_URL + 'img/about/552707593_1483908372940497_6092641396353532351_n.jpg'} alt="EY" className="h-50 md:h-50 mx-auto object-contain mb-3 hover:shadow-sm rounded-2xl" />
            </a>
            <div className="font-semibold text-base md:text-lg">EY</div>
          </div>
          <div className="mb-6 md:mb-0 hover:scale-105 hover:underline transition-transform duration-300">
            <a href="https://mmpa.utoronto.ca" target="_blank" rel="noopener noreferrer">
              <img src={import.meta.env.BASE_URL + 'img/about/553043371_817168714099790_9159688809164605491_n_resized.jpg'} alt="UofT MMPA" className="h-50 md:h-50 mx-auto object-contain mb-3 border-radius: 8px hover:shadow-sm rounded-2xl" />
            </a>
            <div className="font-semibold text-base md:text-lg">UofT MMPA</div>
          </div>
          <div className="mb-6 md:mb-0 hover:scale-105 hover:underline transition-transform duration-300">
            <a href="https://icubeutm.ca" target="_blank" rel="noopener noreferrer">
              <img src={import.meta.env.BASE_URL + 'img/about/554337631_4164718567180340_6030518401904829660_n_cropped_cropped_resized.png'} alt="ICUBE UTM" className="h-50 md:h-50 mx-auto object-contain mb-3 hover:shadow-sm rounded-2xl" />
            </a>
            <div className="font-semibold text-base md:text-lg">ICUBE UTM</div>
          </div>
          <div className="mb-6 md:mb-0 hover:scale-105 hover:underline transition-transform duration-300">
            <a href="https://cfatoronto.ca/" target="_blank" rel="noopener noreferrer">
              <img src={import.meta.env.BASE_URL + 'img/about/553754636_1981939729254480_7985881626194828189_n_resized.jpg'} alt="the CFA Society" className="h-50 md:h-50 mx-auto object-contain mb-3 hover:shadow-sm rounded-2xl" />
            </a>
            <div className="font-semibold text-base md:text-lg">CFA Society</div>
          </div>
        </div>

        <p className="text-lg leading-[1.72]">
          These sponsors support our flagship events such as the <strong>ACE Invitationals</strong>. EY in particular has been deeply engaged, contributing judges and valuable industry insight to our students.
        </p>
      </div>

      {/* Delegate Training Program*/}
      <div className="relative z-10 px-[45px] py-10 md:py-12">
        <h2 className="text-4xl font-semibold mb-5 tracking-[-0.4px]">Delegate Training Program</h2>
            <p className="mb-6 text-lg leading-[1.72]">Looking to build your <strong>confidence</strong> and <strong>excel in case competitions</strong>? The ACE UTSC Training Program offers a hands-on learning experience designed to help delegates develop <strong>strong case analysis</strong>, problem-solving, presentation, and communication skills. Whether you're competing for the first time or aiming to refine your approach, you'll have access to exclusive resources, personalized feedback, and <strong>mentorship from our Delegate Development Directors</strong>.</p>
            <p className="mb-6 text-lg leading-[1.72]">Starting in mid-October, delegates can book <strong>virtual or in-person training sessions </strong> tailored to their goals. These sessions focus on case structuring, presentation delivery, and skill development, while providing <strong>actionable feedback</strong> to support continuous growth. Combined with regular practice opportunities and a supportive community, the program equips delegates with the tools and experience needed to perform <strong>confidently</strong> in future competitions.</p>
            <p className="mb-6 text-lg leading-[1.72]"><strong>Ready to get involved?</strong> Follow ACE UTSC on Instagram and register through the link in our bio to join our delegate community and gain access to a year of <strong>training</strong>, <strong>mentorship</strong>, and <strong>competitive opportunities</strong>.</p>
            <img 
              src={import.meta.env.BASE_URL + 'img/events/2526_AceInvitationals_3.jpeg'} 
              alt="Delegate Training" 
              className="w-full rounded-2xl w-full h-full max-h-150 object-cover" />
      </div>
    </div>
  )
}
