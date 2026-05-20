import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef } from "react";
import { Copy, Sparkles, Video } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Copy Prompt",
    description: "Browse and copy with one click",
    icon: Copy,
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1764345933694-7d4eb49ef266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwY3JlYXRpdmUlMjBkZXNpZ258ZW58MXx8fHwxNzc5MjM4ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    position: { x: "15%", y: "20%" }
  },
  {
    number: "02",
    title: "Generate Avatar",
    description: "Paste into your AI tool",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1704189125621-55e8c6cfd166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhcnR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzkyMzg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    position: { x: "50%", y: "30%" }
  },
  {
    number: "03",
    title: "Animate Video",
    description: "Create talking-head videos",
    icon: Video,
    color: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1771515220841-2dfbfe80e9e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhcnR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzkyMzg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    position: { x: "70%", y: "50%" }
  }
];

export function StepsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-1/2 -translate-x-1/2 z-10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            How It Works
          </h2>
          <p className="text-gray-400">Three simple steps to create stunning content</p>
        </motion.div>

        {/* Animated elements container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {steps.map((step, index) => (
            <StepElement
              key={step.number}
              step={step}
              index={index}
              scrollProgress={scrollYProgress}
              totalSteps={steps.length}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"
            style={{
              scaleX: scrollYProgress,
              transformOrigin: "left"
            }}
          />
        </div>
      </div>
    </div>
  );
}

function StepElement({
  step,
  index,
  scrollProgress,
  totalSteps
}: {
  step: typeof steps[0];
  index: number;
  scrollProgress: any;
  totalSteps: number;
}) {
  const start = index / totalSteps;
  const end = (index + 1) / totalSteps;
  const middle = (start + end) / 2;

  // Clamp ranges to [0,1] to avoid WAAPI offset errors
  const startMinus = Math.max(0, start - 0.1);
  const endPlus = Math.min(1, end + 0.1);
  const startPlus1 = Math.min(1, start + 0.1);
  const startPlus2 = Math.min(1, start + 0.2);
  const endMinus = Math.max(0, end - 0.1);

  // Element animations
  const opacity = useTransform(
    scrollProgress,
    [startMinus, start, middle, end, endPlus],
    [0, 1, 1, 1, 0]
  );

  const scale = useTransform(
    scrollProgress,
    [startMinus, start, middle, end],
    [0.5, 1, 1.2, 1]
  );

  const x = useTransform(
    scrollProgress,
    [start, middle, end],
    [step.position.x, step.position.x, step.position.x]
  );

  const y = useTransform(
    scrollProgress,
    [start, middle, end],
    [step.position.y, step.position.y, step.position.y]
  );

  const rotate = useTransform(
    scrollProgress,
    [start, middle, end],
    [0, 0, 0]
  );

  // Popup animation
  const popupOpacity = useTransform(
    scrollProgress,
    [startPlus1, startPlus2, endMinus, end],
    [0, 1, 1, 0]
  );

  const popupY = useTransform(
    scrollProgress,
    [startPlus1, startPlus2],
    [20, 0]
  );

  return (
    <motion.div
      style={{
        opacity,
        scale,
        x,
        y,
        rotate,
        position: "absolute",
        left: step.position.x,
        top: step.position.y
      }}
      className="w-48 h-64"
    >
      {/* Image card */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group">
        <img
          src={step.image}
          alt={step.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-30`} />

        {/* Step number badge */}
        <div className="absolute top-3 right-3">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
            <span className="text-white text-sm font-bold">{step.number}</span>
          </div>
        </div>

        {/* Icon */}
        <div className="absolute bottom-3 left-3">
          <div className="w-10 h-10 rounded-xl bg-black/50 backdrop-blur-md flex items-center justify-center">
            <step.icon className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: [
              `0 0 20px rgba(139, 92, 246, 0.3)`,
              `0 0 40px rgba(139, 92, 246, 0.5)`,
              `0 0 20px rgba(139, 92, 246, 0.3)`
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Popup explanation */}
      <motion.div
        style={{
          opacity: popupOpacity,
          y: popupY
        }}
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-64 pointer-events-none"
      >
        <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl p-4 border border-gray-700/50 shadow-2xl">
          {/* Arrow */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45 border-l border-t border-gray-700/50" />

          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                <step.icon className="w-3 h-3 text-white" />
              </div>
              <h3 className="text-white font-bold text-sm">{step.title}</h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
