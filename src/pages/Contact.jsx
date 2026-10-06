import { motion } from 'framer-motion'

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
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  },
}

export default function Contact() {
  return (
    <div className="relative bg-white text-[#222] flex-1 flex flex-col overflow-hidden bg-contain bg-center bg-repeat-y"
>
      <div className="relative z-10 px-[45px] py-6">
        <motion.h1 
          className="text-4xl font-semibold tracking-[-1px] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-semibold mb-4 tracking-[-0.3px]"
          >
            Get in touch!
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="mb-7 text-lg leading-relaxed"
          >
            Find us on our socials or email us at <a href="mailto:ace.uoftscarborough@gmail.com" className="underline">ace.uoftscarborough@gmail.com</a>. We’ll get back to you as soon as we can.
          </motion.p>

          <div className="mb-8 space-y-0.5 text-lg opacity-90">
            <motion.p variants={itemVariants}>1265 Military Trail</motion.p>
            <motion.p variants={itemVariants}>University of Toronto Scarborough</motion.p>
            <motion.p variants={itemVariants} className="mb-6">Scarborough, ON M1C 1A4</motion.p>
          </div>

          <div className="flex gap-5 mb-8 items-center">
            <motion.a 
              variants={itemVariants}
              href="https://www.instagram.com/aceutsc/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-4 h-4 grayscale hover:grayscale-0 transition" />
            </motion.a>
            <motion.a 
              variants={itemVariants}
              href="https://www.linkedin.com/company/ace-utsc/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-4 h-4 grayscale hover:grayscale-0 transition" />
            </motion.a>
          </div>

          <motion.a
            variants={itemVariants}
            href="mailto:ace.uoftscarborough@gmail.com"
            className="inline-block px-6 py-2.5 bg-[#09346A] text-white text-sm font-medium rounded-md hover:bg-[#001a47] transition-colors"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.985 }}
          >
            Email Us
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}
