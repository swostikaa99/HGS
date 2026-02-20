import { motion } from "framer-motion";

interface FloatingShape {
  className?: string;
  variant?: "circle" | "ring" | "diamond" | "dot";
  size?: number;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
}

const FloatingShapes = ({
  shapes,
}: {
  shapes: FloatingShape[];
}) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {shapes.map((shape, i) => (
      <motion.div
        key={i}
        className={`absolute ${shape.className || ""}`}
        style={{
          left: `${shape.x ?? Math.random() * 100}%`,
          top: `${shape.y ?? Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -20, 10, -15, 0],
          x: [0, 10, -5, 8, 0],
          rotate: [0, 5, -3, 4, 0],
          scale: [1, 1.05, 0.98, 1.02, 1],
        }}
        transition={{
          duration: shape.duration ?? 8,
          delay: shape.delay ?? i * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {shape.variant === "circle" && (
          <div
            className="rounded-full bg-gold/10"
            style={{ width: shape.size ?? 60, height: shape.size ?? 60 }}
          />
        )}
        {shape.variant === "ring" && (
          <div
            className="rounded-full border-2 border-gold/15"
            style={{ width: shape.size ?? 80, height: shape.size ?? 80 }}
          />
        )}
        {shape.variant === "diamond" && (
          <div
            className="bg-gold/8 rotate-45"
            style={{ width: shape.size ?? 40, height: shape.size ?? 40 }}
          />
        )}
        {shape.variant === "dot" && (
          <div
            className="rounded-full bg-gold/20"
            style={{ width: shape.size ?? 8, height: shape.size ?? 8 }}
          />
        )}
      </motion.div>
    ))}
  </div>
);

export const heroShapes: FloatingShape[] = [
  { variant: "circle", size: 120, x: 85, y: 15, delay: 0, duration: 10, className: "opacity-30" },
  { variant: "ring", size: 180, x: 75, y: 60, delay: 1, duration: 12, className: "opacity-20" },
  { variant: "diamond", size: 50, x: 90, y: 80, delay: 2, duration: 9 },
  { variant: "dot", size: 12, x: 15, y: 70, delay: 0.5, duration: 7 },
  { variant: "dot", size: 8, x: 60, y: 20, delay: 1.5, duration: 6 },
  { variant: "circle", size: 40, x: 10, y: 30, delay: 3, duration: 11, className: "opacity-20" },
  { variant: "ring", size: 60, x: 50, y: 85, delay: 2.5, duration: 8, className: "opacity-15" },
];

export const pageHeroShapes: FloatingShape[] = [
  { variant: "circle", size: 80, x: 90, y: 20, delay: 0, duration: 10, className: "opacity-20" },
  { variant: "ring", size: 120, x: 5, y: 50, delay: 1, duration: 12, className: "opacity-15" },
  { variant: "diamond", size: 35, x: 80, y: 75, delay: 2, duration: 9 },
  { variant: "dot", size: 10, x: 30, y: 30, delay: 0.5, duration: 7 },
  { variant: "dot", size: 6, x: 70, y: 15, delay: 1.5, duration: 6 },
];

export default FloatingShapes;
