import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1704189125621-55e8c6cfd166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhcnR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzkyMzg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Digital Portrait Masterpiece",
    prompt: "Cinematic portrait, dramatic lighting, ultra detailed",
    category: "Portrait"
  },
  {
    image: "https://images.unsplash.com/photo-1771515220841-2dfbfe80e9e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhcnR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzkyMzg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Futuristic Chrome Robot",
    prompt: "Chrome metallic robot, yellow glowing eyes, hyper-realistic",
    category: "Sci-Fi"
  },
  {
    image: "https://images.unsplash.com/photo-1655834648155-f7a98ff3c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhcnR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzkyMzg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Vibrant Abstract Art",
    prompt: "Colorful abstract portrait, neon colors, artistic style",
    category: "Abstract"
  },
  {
    image: "https://images.unsplash.com/photo-1727018663219-b0bd25a359e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhcnR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzkyMzg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Cyberpunk Night Scene",
    prompt: "Cyberpunk cityscape, neon lights, atmospheric fog",
    category: "Urban"
  },
  {
    image: "https://images.unsplash.com/photo-1770249196550-ff6c641165cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8QUklMjBnZW5lcmF0ZWQlMjBhcnQlMjBkaWdpdGFsJTIwYXJ0d29yayUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzc5MjM4ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Chrome Humanoid Sculpture",
    prompt: "Metallic sculpture, intricate details, studio lighting",
    category: "3D Art"
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black pt-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />

      {/* Slider */}
      <div className="relative h-full w-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center text-white">
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20"
          >
            <span className="text-sm">{slides[currentSlide].category}</span>
          </motion.div>

          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              SignatureAgency
            </span>
          </motion.h1>

          <motion.h2
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl font-bold mb-4"
          >
            {slides[currentSlide].title}
          </motion.h2>

          <motion.p
            key={`prompt-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Prompt: "{slides[currentSlide].prompt}"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
          >
            Premium curated prompts with reference images.<br />
            Ready to use in Midjourney, DALL-E, Stable Diffusion & more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg shadow-blue-500/50"
            >
              Browse Prompts
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-medium border border-white/20"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? "w-12 bg-white"
                : "w-3 bg-white/40 hover:bg-white/60"
            } h-3 rounded-full`}
          />
        ))}
      </div>
    </section>
  );
}
