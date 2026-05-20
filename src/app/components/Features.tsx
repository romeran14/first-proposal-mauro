import { motion, useInView, useScroll, useTransform } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const features = [
  "Strategic thinking with creative execution",
  "Agile methodology for faster delivery",
  "Transparent communication every step",
  "Data-driven decision making",
  "Scalable solutions built for growth",
  "Ongoing support and optimization",
];

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SignatureAgency
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We combine creativity with strategy to deliver results that matter.
              Our approach is collaborative, innovative, and focused on your success.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <span className="text-lg group-hover:text-primary transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 bg-primary text-primary-foreground rounded-full"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ scale, rotate }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdvcmtzcGFjZSUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NzkwNDk3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team collaboration"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20" />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, 30, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl opacity-20 blur-xl"
            />
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl opacity-20 blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
