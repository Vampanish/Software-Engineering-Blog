import { useEffect, useState } from 'react';
import heroImage from '@/assets/agile-vs-waterfall.jpg';

const BlogHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(currentProgress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    document.getElementById('introduction')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Progress Bar at the top */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted/30 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 transform scale-110" 
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: 'translateZ(0)'
        }} 
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 text-center z-10 relative">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient leading-tight max-w-6xl mx-auto">
            Agile vs Waterfall in<br />
            <span className="text-primary">Software Engineering</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Which methodology is better for your software development project? 
            Let's explore the pros, cons, and real-world applications of both approaches.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToContent} 
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover-lift"
            >
              Start Reading
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </button>
            
            <button 
              onClick={scrollToContent}
              className="group border-2 border-primary/30 text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm hover-glow"
            >
              Learn More
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </button>
          </div>
          
          {/* Stats or Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { number: '2', label: 'Methodologies' },
              { number: '15+', label: 'Key Differences' },
              { number: '100%', label: 'Real Examples' }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <button 
          onClick={scrollToContent} 
          className="group text-primary hover:text-primary/70 transition-colors"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
              Scroll to explore
            </span>
            <div className="w-6 h-6 border-2 border-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* Floating scroll indicator on the right side */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col items-center gap-4">
          <div className="w-1 h-20 bg-gradient-to-b from-primary/50 to-transparent rounded-full"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse-slow"></div>
          <div className="w-1 h-20 bg-gradient-to-t from-primary/50 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;