import { motion, AnimatePresence, useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

const carouselItems = [
  {
    image: "https://images.unsplash.com/photo-1704189125621-55e8c6cfd166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhcnR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzkyMzg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    prompt: "Cinematic portrait with dramatic lighting, high contrast, ultra detailed face features, professional color grading"
  },
  {
    image: "https://images.unsplash.com/photo-1771515220841-2dfbfe80e9e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhcnR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzkyMzg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    prompt: "Chrome metallic robot, yellow glowing eyes, hyper-realistic 3D render, studio lighting, octane render"
  },
  {
    image: "https://images.unsplash.com/photo-1655834648155-f7a98ff3c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhcnR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzkyMzg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    prompt: "Vibrant abstract portrait, neon colors, digital art style, glowing effects, high saturation"
  },
  {
    image: "https://images.unsplash.com/photo-1727018663219-b0bd25a359e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhcnR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzkyMzg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    prompt: "Cyberpunk cityscape at night, neon signs, atmospheric fog, rain reflections, moody lighting"
  },
  {
    image: "https://images.unsplash.com/photo-1770249196550-ff6c641165cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8QUklMjBnZW5lcmF0ZWQlMjBhcnQlMjBkaWdpdGFsJTIwYXJ0d29yayUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzc5MjM4ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    prompt: "Metallic humanoid sculpture, intricate mechanical details, chrome finish, studio photography lighting"
  },
  {
    image: "https://images.unsplash.com/photo-1704426882813-8acfff020487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhcnR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzkyMzg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    prompt: "Futuristic portrait duo, ethereal lighting, symmetrical composition, pastel color palette"
  },
  {
    image: "https://images.unsplash.com/photo-1559828801-04565cd31e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhcnR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzkyMzg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    prompt: "Neon portrait photography, bokeh lights background, close-up shot, vibrant colors, cinematic mood"
  }
];

// Duplicate items for infinite loop
const infiniteItems = [...carouselItems, ...carouselItems, ...carouselItems];

export function ArcCarousel() {
  const [offset, setOffset] = useState(0);
  const [revealingIndex, setRevealingIndex] = useState<number | null>(null);

  // Smooth infinite scroll
  useEffect(() => {
    const animate = () => {
      setOffset((prev) => {
        const newOffset = prev - 0.3; // Velocidad del scroll
        // Reset when reaching one full cycle
        if (Math.abs(newOffset) >= carouselItems.length * 200) {
          return 0;
        }
        return newOffset;
      });
    };

    const rafId = requestAnimationFrame(function loop() {
      animate();
      requestAnimationFrame(loop);
    });

    return () => cancelAnimationFrame(rafId);
  }, []);

  // Random reveal animation - only for center items
  useEffect(() => {
    const randomReveal = setInterval(() => {
      const centerStart = Math.floor(infiniteItems.length / 2) - 2;
      const randomIndex = centerStart + Math.floor(Math.random() * 5);
      setRevealingIndex(randomIndex);
      setTimeout(() => setRevealingIndex(null), 2500);
    }, 7000);

    return () => clearInterval(randomReveal);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Header */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            SignatureAgency
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300"
        >
          Premium Curated AI Prompts
        </motion.p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full perspective-[2000px] overflow-visible">
        <div
          className="flex items-center justify-center"
          style={{
            transform: `translateX(${offset}px)`,
            transformStyle: "preserve-3d"
          }}
        >
          {infiniteItems.map((item, index) => {
            const isRevealing = revealingIndex === index;

            return (
              <CarouselCard
                key={`${index}-${item.image}`}
                item={item}
                index={index}
                offset={offset}
                isRevealing={isRevealing}
                onReveal={() => setRevealingIndex(index)}
                onHideReveal={() => setRevealingIndex(null)}
              />
            );
          })}
        </div>
      </div>

      {/* Bottom instruction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-gray-400 text-sm"
      >
        Hover over images to reveal prompts
      </motion.div>
    </div>
  );
}

function CarouselCard({
  item,
  index,
  offset,
  isRevealing,
  onReveal,
  onHideReveal
}: {
  item: typeof carouselItems[0];
  index: number;
  offset: number;
  isRevealing: boolean;
  onReveal: () => void;
  onHideReveal: () => void;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInViewport = useInView(cardRef, { amount: 0.5 });

  const shouldReveal = (isRevealing || isHovering) && isInViewport;

  // Calculate position in viewport
  const cardPosition = index * 200 + offset;
  const viewportCenter = typeof window !== 'undefined' ? window.innerWidth / 2 : 960;
  const distanceFromCenter = Math.abs(cardPosition + 100 - viewportCenter);

  // 3D arc effect
  const rotateY = ((cardPosition + 100 - viewportCenter) / viewportCenter) * 25;
  const translateZ = -Math.min(distanceFromCenter / 3, 150);
  const scale = Math.max(0.85, 1 - (distanceFromCenter / 1000));
  const opacity = Math.max(0.4, 1 - (distanceFromCenter / 800));

  // Floating animation offset
  const floatOffset = Math.sin(index * 0.5) * 20;

  return (
    <motion.div
      ref={cardRef}
      style={{
        transform: `translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
        opacity,
        transformStyle: "preserve-3d"
      }}
      animate={{
        y: [floatOffset, floatOffset + 15, floatOffset],
      }}
      transition={{
        y: {
          duration: 3 + (index % 3),
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className="relative flex-shrink-0 w-48 h-72 cursor-pointer mx-2"
      onMouseEnter={() => {
        if (isInViewport) {
          setIsHovering(true);
          onReveal();
        }
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        onHideReveal();
      }}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
        {/* Image */}
        <motion.img
          src={item.image}
          alt="AI Generated"
          className="w-full h-full object-cover"
          animate={{
            opacity: shouldReveal ? 0 : 1,
            scale: shouldReveal ? 1.1 : 1
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Shader effect overlay */}
        <AnimatePresence>
          {shouldReveal && (
            <>
              {/* Wave shader effect */}
              {[0, 1, 2].map((layer) => (
                <motion.div
                  key={layer}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{
                    y: "-100%",
                    opacity: [0, 0.5, 0.8, 0.5, 0]
                  }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: layer * 0.08,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(180deg,
                      transparent 0%,
                      rgba(59, 130, 246, ${0.3 - layer * 0.1}) 25%,
                      rgba(139, 92, 246, ${0.4 - layer * 0.1}) 50%,
                      rgba(236, 72, 153, ${0.3 - layer * 0.1}) 75%,
                      transparent 100%)`,
                    filter: `blur(${layer * 4}px)`
                  }}
                />
              ))}

              {/* AI Chat-style prompt reveal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="absolute inset-0 flex items-end justify-center p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent"
              >
                {/* Chat bubble style */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="w-full bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-2xl p-4 border border-gray-700/50 shadow-2xl"
                >
                  {/* AI Icon header */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs text-gray-400 font-medium">AI Prompt</span>
                  </div>

                  {/* Prompt text */}
                  <p className="text-white text-xs leading-relaxed">
                    {item.prompt}
                  </p>

                  {/* Typing indicator effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex gap-1 mt-2"
                  >
                    <div className="w-1 h-1 bg-blue-500 rounded-full" />
                    <div className="w-1 h-1 bg-purple-500 rounded-full" />
                    <div className="w-1 h-1 bg-pink-500 rounded-full" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: shouldReveal
              ? "0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4)"
              : "0 0 0px rgba(139, 92, 246, 0)"
          }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}
