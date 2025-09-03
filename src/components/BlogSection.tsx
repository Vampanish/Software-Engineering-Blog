import { useEffect, useRef, useState } from 'react';

interface BlogSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const BlogSection = ({ id, title, children, className = '' }: BlogSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-16 md:py-20 lg:py-24 section-bg relative ${className}`}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-float pointer-events-none" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            {/* Enhanced decorative elements */}
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-slow"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-primary to-transparent rounded-full"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient leading-tight max-w-4xl mx-auto">
              {title}
            </h2>
            
            {/* Enhanced decorative line under title */}
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6 animate-pulse-slow"></div>
            
            {/* Additional decorative dots */}
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse-slow"></div>
              <div className="w-2 h-2 bg-accent/60 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
          {/* Section Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;