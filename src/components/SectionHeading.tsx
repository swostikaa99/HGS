import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Reveal } from "./AnimationWrappers";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

const SectionHeading = ({ title, subtitle, light, className = "" }: SectionHeadingProps) => (
  <div className={`text-center mb-14 ${className}`}>
    <Reveal direction="up">
      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
    </Reveal>
    <Reveal direction="up" delay={0.1}>
      <div className="gold-divider mx-auto mb-5" />
    </Reveal>
    {subtitle && (
      <Reveal direction="up" delay={0.2}>
        <p className={`max-w-2xl mx-auto text-lg ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      </Reveal>
    )}
  </div>
);

export default SectionHeading;
