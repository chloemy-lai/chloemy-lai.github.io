import { motion } from 'framer-motion';
import DepthCarousel from '../components/DepthCarousel';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    scale: 0.97 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.2, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  },
}

const carouselItems = [
  {
    image: import.meta.env.BASE_URL + 'img/delegate/LargestChapterGrowth.jpg',
    alt: 'ACE Nationals Largest Chapter Growth Award',
  },
  {
    image: import.meta.env.BASE_URL + 'img/AceNationalsEdited.jpeg',
    alt: 'ACE Nationals 2025 Winners',
  },
  {
    image: import.meta.env.BASE_URL + 'img/delegate/ace-nationals-2024-1.png',
    alt: 'ACE Nationals 2024 Winners',
  },
  {
    image: import.meta.env.BASE_URL + 'img/delegate/Member1.jpg',
    alt: 'ACE Nationals',
  }
];

export default function AceMember() {
  return (
    <div>
      <div className="px-[45px] py-6 pb-2">
        <motion.h1 
          className="text-4xl font-semibold tracking-[-1px] mb-6"
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          Become an ACE Member (Delegate)
        </motion.h1>
      </div>

      <div className="px-[45px] pb-16 md:pb-24">
        <motion.div
          variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-semibold mb-3 tracking-[-0.3px]">
            The Delegate Package
          </motion.h2>
          <motion.p variants={itemVariants} className="mb-2 text-lg leading-relaxed">
            Your quick guide on becoming an ACE UTSC General Member to ACE Canada Delegate.
          </motion.p>
          <motion.p variants={itemVariants} className="mb-6 text-lg">
            Stay tuned for our revised 2026/2027 Delegate Package!
          </motion.p>
          {/* adjust to preview later */}
          <motion.p variants={itemVariants} className="mb-6 text-lg leading-relaxed">
            <a href="https://pdflink.to/aceutscdelegatehandbook/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#09346A]">
              <img src={import.meta.env.BASE_URL + 'img/delegate/delegate_handbook.png'} alt="Delegate Handbook" className="w-full max-w-lg mx-auto mt-4" />
            </a>
          </motion.p> 
          <motion.p variants={itemVariants} className="mb-8 text-2sm">
            <a href="https://pdflink.to/aceutscdelegatehandbook/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#09346A]">
              View Our Delegate Package →
            </a>
          </motion.p>

          <motion.h2 variants={itemVariants} className="text-4xl font-semibold mb-3 tracking-[-0.3px] py-2">
            Represent UTSC at ACE Canada Nationals
          </motion.h2>
          <motion.p variants={itemVariants} className="mb-6 text-lg leading-relaxed">
            Join us as an <strong>ACE UTSC General Member</strong> and represent UTSC at a National level.
          </motion.p>

          {/* Landscape Depth Carousel */}
          <div className="w-full pb-25 pt-6">
            <DepthCarousel
              items={carouselItems}
              depth={420}
              spread={65}
              tilt={14}
              tiltDirection="right"
              perspective={1300}
              visibleCards={3}
              falloff={0.22}
              blur={4}
              autoplay={true}
              loop
              cardWidth={800}
              cardHeight={480}
              radius={0}
              tint="#05060a"
              duration={800}
              ease="power3.out"
              autoplayDelay={1500}
              showIndicators
              draggable={false}
            />
          </div>


          <motion.h3 variants={itemVariants} className="text-4xl font-semibold mb-2 py-2">
            General Member (Delegate) Registration — Now Open
          </motion.h3>
          <motion.p variants={itemVariants} className="mb-4 text-lg">
            Complete the <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_pGgnT4ApYzyy1QqOouFcTP0WTYzL7UspVJ8iU26dma1AvQ/viewform?pli=1" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#09346A]">Google Form</a>
          </motion.p>
          <motion.p variants={itemVariants} className="mb-4 text-lg">
            Deadline: Friday, October 23, 2026
          </motion.p>
          
          
          <motion.h3 variants={itemVariants} className="text-4xl font-semibold mb-3 py-2">
            ACE Canada Member Registration
          </motion.h3>
          <motion.ol 
            variants={containerVariants}
            className="list-decimal pl-6 mb-6 space-y-1 text-lg"
          >
            <motion.li variants={itemVariants}>Go to <a href="https://acenationals.ca/dev/memberRegistration" target="_blank" rel="noopener noreferrer" className="underline">https://acenationals.ca/dev/memberRegistration</a></motion.li>
            <motion.li variants={itemVariants}>Scroll down on the homepage where you will find a register option under the “How Do I Get Involved?”</motion.li>
            <motion.li variants={itemVariants}>Sign in (if you already have an account)/Register as Student (if you don’t already have an account)</motion.li>
            <motion.li variants={itemVariants}>Fill in all fields (If you are making new account)</motion.li>
            <motion.li variants={itemVariants}>Pay $15 membership fee</motion.li>
          </motion.ol>

          <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-2">
            ACE UTSC General Member (Registered Delegate) Benefits:
          </motion.h3>
          <motion.ul 
            variants={containerVariants}
            className="list-disc pl-6 mb-6 text-lg space-y-1"
          >
            <motion.li variants={itemVariants}>Gain exclusive access to ACE Canada events/content</motion.li>
            <motion.li variants={itemVariants}>As well as our training sessions</motion.li>
            <motion.li variants={itemVariants}>Enhance both your hard and soft skills through workshops, training bootcamps, case presentation practice</motion.li>
          </motion.ul>

          <motion.p variants={itemVariants}>
            Compete individually, as a team (2), or in a special* event (3-5) and choose from a range of competitive categories including Business Law, Corporate Finance and Management Consulting—refine your leadership skills as you compete at Mock Nationals and ACE Canada Nationals.
          </motion.p>
            <motion.p variants={itemVariants} className="text-xs mt-1">
              *Require up to 3 weeks of case prep time
            </motion.p>
          </motion.div>
        </div>
        
      </div>
    )
  }


