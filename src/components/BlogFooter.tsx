import { Mail, Linkedin, Twitter, Github, Heart, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const BlogFooter = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const socialLinks = [{
    icon: Twitter,
    href: '#',
    label: 'Twitter'
  }, {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn'
  }, {
    icon: Github,
    href: '#',
    label: 'GitHub'
  }, {
    icon: Mail,
    href: 'mailto:anish@example.com',
    label: 'Email'
  }];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group bg-primary text-primary-foreground w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover-lift border-2 border-primary/20"
        >
          <ArrowUp className="w-6 h-6 mx-auto group-hover:-translate-y-1 transition-transform duration-200" />
        </button>
      )}

      <footer className="bg-gradient-to-br from-muted/30 via-background to-muted/20 border-t border-border/50 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative">
          <div className="text-center">
            {/* Main content */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Ready to Choose Your Methodology?
              </h3>
              
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
                Software Engineer and Technical Writer passionate about sharing knowledge on 
                software development methodologies, best practices, and emerging technologies. 
                Always exploring the intersection of technology and team dynamics.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-12">
              {socialLinks.map(({
                icon: Icon,
                href,
                label
              }) => (
                <a 
                  key={label} 
                  href={href} 
                  className="group w-14 h-14 bg-card hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-border/50 hover:border-primary/50" 
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
            
            {/* Bottom section */}
            <div className="border-t border-border/50 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
                <div className="flex items-center gap-2">
                  <span>© {new Date().getFullYear()} Anish. Made with</span>
                  <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse-slow" />
                  <span>for developers.</span>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                  <a href="#" className="hover:text-foreground transition-colors duration-200 hover:underline">Privacy Policy</a>
                  <a href="#" className="hover:text-foreground transition-colors duration-200 hover:underline">Terms of Service</a>
                  <a href="#" className="hover:text-foreground transition-colors duration-200 hover:underline">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BlogFooter;