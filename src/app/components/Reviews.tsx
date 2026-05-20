import { motion, useInView } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useState, useRef } from "react";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Digital Artist",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1580428180123-313752d0f0f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhcnR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzkyMzg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    review: "SignatureAgency transformed my workflow completely. The prompts are so well-crafted that I'm getting consistent, professional results every single time. My client satisfaction has increased by 40%!",
    result: "40% increase in client satisfaction",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "Creative Director",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1559828801-04565cd31e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhcnR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzkyMzg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    review: "The quality of these curated prompts is unmatched. I've tried many prompt libraries, but SignatureAgency stands out with their attention to detail and the reference images that come with each prompt.",
    result: "3x faster project delivery",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Content Creator",
    location: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1664267674275-6017ea4c7f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhcnR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzkyMzg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    review: "As a content creator, time is money. SignatureAgency's prompts save me hours of trial and error. The reference images show exactly what's possible, and the results are always stunning.",
    result: "2.5x boost in engagement",
    rating: 5
  },
  {
    name: "David Park",
    role: "UX Designer",
    location: "Seoul, South Korea",
    image: "https://images.unsplash.com/photo-1704426882813-8acfff020487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhcnR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzkyMzg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    review: "Perfect for rapid prototyping and concept visualization. The prompts are versatile and produce high-quality results across different AI tools. Absolutely worth the investment!",
    result: "50% reduction in concept time",
    rating: 5
  },
  {
    name: "Isabella Fontana",
    role: "Brand Strategist",
    location: "Milan, Italy",
    image: "https://images.unsplash.com/photo-1745402152130-2aec1b45f4ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhcnR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzkyMzg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    review: "The curated collection is impressive. Each prompt is carefully crafted and tested. I use SignatureAgency for all my brand identity projects now. The consistency is incredible!",
    result: "90% client approval rate",
    rating: 5
  }
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const itemsPerView = 3;
  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  const nextReview = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20"
          >
            <span className="text-sm font-medium">Success Stories</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Creators Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied creators using SignatureAgency prompts
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation buttons */}
          <div className="flex justify-end gap-3 mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevReview}
              disabled={currentIndex === 0}
              className="p-3 bg-card border border-border rounded-full hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextReview}
              disabled={currentIndex === maxIndex}
              className="p-3 bg-card border border-border rounded-full hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Reviews carousel */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex gap-6"
            >
              {reviews.map((review, index) => (
                <ReviewCard key={index} review={review} index={index} isInView={isInView} />
              ))}
            </motion.div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-primary/50"
                } h-2 rounded-full`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, index, isInView }: { review: typeof reviews[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="min-w-[calc(33.333%-1rem)] flex-shrink-0 group"
    >
      <div className="relative h-full p-8 bg-card rounded-3xl border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
        {/* Quote icon */}
        <motion.div
          whileHover={{ rotate: 180, scale: 1.2 }}
          transition={{ duration: 0.4 }}
          className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center"
        >
          <Quote className="w-6 h-6 text-primary/50" />
        </motion.div>

        {/* Profile */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-primary/50 transition-all">
            <img
              src={review.image}
              alt={review.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold">{review.name}</h4>
            <p className="text-sm text-muted-foreground">{review.role}</p>
            <p className="text-xs text-muted-foreground">{review.location}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          ))}
        </div>

        {/* Review text */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          "{review.review}"
        </p>

        {/* Result badge */}
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-primary/20">
          <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {review.result}
          </span>
        </div>

        {/* Hover effect overlay */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        />
      </div>
    </motion.div>
  );
}
