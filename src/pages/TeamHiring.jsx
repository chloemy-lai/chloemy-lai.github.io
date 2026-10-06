import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  },
}

export default function TeamHiring() {
  return (
    <div>
      <div className="px-[45px] py-6 ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-semibold tracking-[-1px] mb-6"
          >
            Team Hiring
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-[#444]"
          >
            Associate Hiring is here!
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className="mt-4"
          >
            Looking to get more involved, build your network, and gain hands-on experience this year? Now's your chance! 👀
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className="mt-4"
          >
            We're excited to welcome new Associates for the 2026-2027 year! Whether you're interested in events, marketing, corporate relations, or just want to connect with more people, there's a place for you at ACE. 💙
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className="mt-4"
          >
            Come meet new people, grow your skills, and make an impact with us. 🤝✨ 
          </motion.p>
           <motion.p 
            variants={itemVariants}
            className="mt-4 font-medium"
          >
            📅 Application Deadline: October 7 at 11:59 PM
            </motion.p>
            <motion.p 
            variants={itemVariants}
            className="mt-4"
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdk8Yn5g9RjuPGoBQl5zXsldDGTJPAnlZ_KBFKNpYhOcXz2Iw/viewform" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#09346A]">
              APPLY HERE! →
            </a>
            </motion.p>
        </motion.div>


        <div style={{ marginTop: 32 }}>
          <iframe 
            src="https://docs.google.com/document/d/1RErMoZmqZhsYQnnIAT2eD0CjRRq0vHpl4nqld0zwfj0/edit?usp=drivesdk" 
            width="100%" 
            height="600">
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  )
}