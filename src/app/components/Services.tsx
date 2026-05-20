import { motion, useInView } from "motion/react";
import { Palette, Code, TrendingUp, Zap, Globe, Rocket } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Crafting unique visual identities that resonate with your audience and stand out in the market.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive, performant websites with cutting-edge technologies and best practices.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven strategies to boost your online presence and drive measurable growth.",
  },
  {
    icon: Zap,
    title: "UX/UI Design",
    description: "Creating intuitive, beautiful interfaces that users love and convert better.",
  },
  {
    icon: Globe,
    title: "SEO & Analytics",
    description: "Optimizing your digital presence for search engines and tracking meaningful metrics.",
  },
  {
    icon: Rocket,
    title: "Product Launch",
    description: "End-to-end support to bring your ideas to market with impact and momentum.",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-service creative solutions tailored to your unique needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-shadow"
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
