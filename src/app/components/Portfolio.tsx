import { motion, useInView } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdvcmtzcGFjZSUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NzkwNDk3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "Brand Refresh",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1777703304166-d7713ec85de0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYWJzdHJhY3QlMjBncmFkaWVudHxlbnwxfHx8fDE3NzkyMjc2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    title: "Mobile App Design",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1761305135173-616efff573b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYWJzdHJhY3QlMjBncmFkaWVudHxlbnwxfHx8fDE3NzkyMjc2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-orange-600 to-red-600",
  },
  {
    title: "Marketing Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1671519821564-be9dbc25a08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYWJzdHJhY3QlMjBncmFkaWVudHxlbnwxfHx8fDE3NzkyMjc2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-green-600 to-teal-600",
  },
];

export function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of our recent projects that showcase our expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-sm bg-gradient-to-r ${project.gradient} text-white`}
                  >
                    {project.category}
                  </span>
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
              </div>

              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-border rounded-full hover:bg-accent transition-colors"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
