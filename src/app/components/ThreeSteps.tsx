import { motion, useInView } from "motion/react";
import { Search, Download, Sparkles } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Explore Our Collection",
    description: "Browse through hundreds of expertly curated prompts across multiple categories. Each prompt comes with a stunning reference image showing exactly what you can achieve.",
    image: "https://images.unsplash.com/photo-1764345933694-7d4eb49ef266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwY3JlYXRpdmUlMjBkZXNpZ258ZW58MXx8fHwxNzc5MjM4ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Download,
    number: "02",
    title: "Select & Download",
    description: "Choose the perfect prompt for your project. Get instant access to the complete prompt text and high-quality reference image. Filter by style, category, and use case.",
    image: "https://images.unsplash.com/photo-1776126508553-471f8c30cd61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwY3JlYXRpdmUlMjBkZXNpZ258ZW58MXx8fHwxNzc5MjM4ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Create Amazing Results",
    description: "Use your prompt in Midjourney, DALL-E, Stable Diffusion, or any AI tool. Our optimized prompts ensure consistent, professional-quality outputs every time.",
    image: "https://images.unsplash.com/photo-1772048199964-68cc45b48b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8YWJzdHJhY3QlMjBjb2xvcmZ1bCUyMGNyZWF0aXZlJTIwZGVzaWdufGVufDF8fHx8MTc3OTIzODg1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-orange-500 to-red-500"
  }
];

export function ThreeSteps() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20"
          >
            <span className="text-sm font-medium">Simple Process</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            From Upload to Impactful Visuals<br />
            in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3 Easy Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start creating stunning AI art in minutes with our curated prompt library
          </p>
        </motion.div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} isInView={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg shadow-blue-500/30"
          >
            Start Creating Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({ step, index, isInView }: { step: typeof steps[0]; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, amount: 0.3 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={cardInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`${isEven ? "" : "lg:col-start-2"}`}
      >
        <div className="relative">
          {/* Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={cardInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-8xl md:text-9xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent opacity-20 absolute -top-8 ${isEven ? "-left-4" : "-right-4"}`}
          >
            {step.number}
          </motion.div>

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={cardInView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ rotate: 360, scale: 1.1 }}
              className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg`}
            >
              <step.icon className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={cardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {step.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={cardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {step.description}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={cardInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`${isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"} relative group`}
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.4 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={step.image}
            alt={step.title}
            className="w-full aspect-square object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
        </motion.div>

        {/* Floating decoration */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute -z-10 w-64 h-64 bg-gradient-to-br ${step.gradient} opacity-20 blur-3xl ${isEven ? "-right-20 -bottom-20" : "-left-20 -top-20"}`}
        />
      </motion.div>
    </motion.div>
  );
}
