import { useEffect, useState, useRef } from 'react';
import { Quote, ArrowRight, CheckCircle, Mail, Linkedin, Twitter, Github, Building, Smartphone, Shield, Zap, XCircle } from 'lucide-react';
import heroImage from '@/assets/hero-software-engineering.jpg';
import waterfallImage from '@/assets/waterfall-diagram.jpg';
import agileImage from '@/assets/agile-diagram.jpg';
import comparisonImage from '@/assets/agile-vs-waterfall-comparison.jpg';

// Hero Component
const BlogHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient leading-tight">
            Agile vs Waterfall in<br />Software Engineering
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Which methodology is better for your software development project? 
            Let's explore the pros, cons, and real-world applications of both approaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContent}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Reading
            </button>
            <div className="text-sm text-muted-foreground">
              By <span className="font-semibold text-foreground">Anish</span> • 10 min read
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToContent} className="text-primary hover:text-primary/70 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

// Navigation Component
const BlogNavigation = () => {
  const [activeSection, setActiveSection] = useState('');
  
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'waterfall', title: 'Waterfall' },
    { id: 'agile', title: 'Agile' },
    { id: 'differences', title: 'Key Differences' },
    { id: 'pros-cons', title: 'Pros & Cons' },
    { id: 'examples', title: 'Examples' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-6 right-6 z-50 hidden lg:block">
      <div className="blog-card bg-card/95 backdrop-blur-sm rounded-xl p-4 max-w-xs">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Table of Contents</h3>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`text-sm text-left w-full px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-primary text-primary-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// Section Component
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
      className={`py-16 section-bg ${className}`}
    >
      <div className="container mx-auto px-6">
        <div className={`animate-fade-in-up ${isVisible ? 'in-view' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
};

// Comparison Table Component
const ComparisonTable = () => {
  const comparisons = [
    {
      aspect: 'Approach',
      waterfall: 'Sequential phases, linear progression',
      agile: 'Iterative cycles, continuous improvement'
    },
    {
      aspect: 'Flexibility',
      waterfall: 'Low - difficult to change requirements',
      agile: 'High - adapts to changing requirements'
    },
    {
      aspect: 'Documentation',
      waterfall: 'Heavy documentation required',
      agile: 'Minimal documentation, focus on working software'
    },
    {
      aspect: 'Client Involvement',
      waterfall: 'Limited to beginning and end',
      agile: 'Continuous throughout development'
    },
    {
      aspect: 'Risk Management',
      waterfall: 'High risk - issues found late',
      agile: 'Lower risk - issues identified early'
    },
    {
      aspect: 'Delivery',
      waterfall: 'Single final delivery',
      agile: 'Regular, incremental deliveries'
    }
  ];

  return (
    <div className="comparison-table bg-card">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-left p-6 font-semibold text-foreground">Aspect</th>
              <th className="text-left p-6 font-semibold text-primary">Waterfall</th>
              <th className="text-left p-6 font-semibold text-accent-foreground">Agile</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((comparison, index) => (
              <tr 
                key={comparison.aspect}
                className={`border-t border-border hover:bg-muted/30 transition-colors ${
                  index % 2 === 0 ? 'bg-card' : 'bg-muted/10'
                }`}
              >
                <td className="p-6 font-medium text-foreground">{comparison.aspect}</td>
                <td className="p-6 text-muted-foreground">{comparison.waterfall}</td>
                <td className="p-6 text-muted-foreground">{comparison.agile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Pros and Cons Component
interface MethodologyProps {
  title: string;
  pros: string[];
  cons: string[];
  color: 'primary' | 'accent';
}

const MethodologyCard = ({ title, pros, cons, color }: MethodologyProps) => (
  <div className="blog-card bg-card rounded-xl p-8">
    <h3 className={`text-2xl font-bold mb-6 ${color === 'primary' ? 'text-primary' : 'text-accent-foreground'}`}>
      {title}
    </h3>
    
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold mb-4 text-green-600 flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          Pros
        </h4>
        <ul className="space-y-3">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold mb-4 text-red-600 flex items-center gap-2">
          <XCircle className="w-5 h-5" />
          Cons
        </h4>
        <ul className="space-y-3">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-foreground">
              <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ProsAndCons = () => {
  const waterfallData = {
    title: 'Waterfall Methodology',
    pros: [
      'Clear project timeline and milestones',
      'Comprehensive documentation',
      'Predictable costs and deliverables',
      'Easy to manage and track progress',
      'Well-suited for projects with fixed requirements'
    ],
    cons: [
      'Inflexible to changing requirements',
      'Late discovery of issues and bugs',
      'No working software until near the end',
      'Limited client feedback during development',
      'High risk if requirements are misunderstood'
    ]
  };

  const agileData = {
    title: 'Agile Methodology',
    pros: [
      'Highly adaptable to changing requirements',
      'Regular delivery of working software',
      'Continuous client feedback and involvement',
      'Early detection and resolution of issues',
      'Promotes team collaboration and communication'
    ],
    cons: [
      'Less predictable timeline and costs',
      'Requires experienced and dedicated team',
      'Minimal documentation can be problematic',
      'Scope creep can occur without proper management',
      'May not work well for large, distributed teams'
    ]
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <MethodologyCard {...waterfallData} color="primary" />
      <MethodologyCard {...agileData} color="accent" />
    </div>
  );
};

// Footer Component
const BlogFooter = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:anish@example.com', label: 'Email' }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format" 
              alt="Anish - Author" 
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
            />
            <h3 className="text-2xl font-bold text-foreground mb-2">Anish</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Software Engineer and Technical Writer passionate about sharing knowledge on 
              software development methodologies, best practices, and emerging technologies.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a 
                key={label}
                href={href}
                className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
              <div className="mb-4 md:mb-0">
                © {new Date().getFullYear()} Anish. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-foreground transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Blog Page
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHero />
      <BlogNavigation />
      
      <BlogSection id="introduction" title="Introduction to Software Development Methodologies">
        <div className="max-w-4xl mx-auto">
          <div className="text-lg leading-relaxed text-muted-foreground space-y-6">
            <p>
              In the ever-evolving world of software development, choosing the right methodology 
              can make or break your project. Two of the most prominent approaches dominate the 
              landscape: <strong className="text-primary">Waterfall</strong> and <strong className="text-accent-foreground">Agile</strong>.
            </p>
            <p>
              While Waterfall follows a traditional, sequential approach that has been trusted 
              for decades, Agile represents a more modern, flexible methodology that embraces 
              change and collaboration. Understanding when and why to use each approach is 
              crucial for project success.
            </p>
            <div className="bg-primary-muted rounded-xl p-6 border-l-4 border-primary">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-primary font-medium italic">
                "The best methodology is not the one that's most popular, but the one that 
                best fits your project's specific needs, constraints, and team dynamics."
              </p>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="waterfall" title="What is Waterfall Methodology?">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  The Waterfall methodology is a linear, sequential approach to software 
                  development where each phase must be completed before moving to the next. 
                  Think of it as a waterfall cascading down rocks - once the water flows down, 
                  it cannot flow back up.
                </p>
                <p>
                  Developed in the 1970s, this methodology emphasizes thorough planning, 
                  comprehensive documentation, and a structured approach to project management.
                </p>
                <div className="bg-card rounded-xl p-6 blog-card">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Key Phases:</h3>
                  <div className="space-y-3">
                    {[
                      '1. Requirements Analysis',
                      '2. System Design',
                      '3. Implementation',
                      '4. Integration & Testing',
                      '5. Deployment',
                      '6. Maintenance'
                    ].map((phase, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>{phase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src={waterfallImage} 
                alt="Waterfall Methodology Diagram" 
                className="w-full rounded-xl shadow-lg blog-card"
              />
              <p className="text-sm text-muted-foreground mt-4">
                Sequential phases of Waterfall methodology
              </p>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="agile" title="What is Agile Methodology?">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:order-1">
              <img 
                src={agileImage} 
                alt="Agile Methodology Diagram" 
                className="w-full rounded-xl shadow-lg blog-card"
              />
              <p className="text-sm text-muted-foreground mt-4">
                Iterative cycles of Agile methodology
              </p>
            </div>
            <div className="lg:order-2">
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Agile methodology is an iterative and incremental approach that emphasizes 
                  flexibility, collaboration, and customer satisfaction. Born from the Agile 
                  Manifesto in 2001, it revolutionized software development by prioritizing 
                  individuals and interactions over processes and tools.
                </p>
                <p>
                  Instead of following a rigid sequence, Agile works in short cycles called 
                  "sprints" (typically 2-4 weeks), allowing teams to adapt quickly to changing 
                  requirements and deliver working software regularly.
                </p>
                <div className="bg-card rounded-xl p-6 blog-card">
                  <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Core Values:</h3>
                  <div className="space-y-3">
                    {[
                      'Individuals over processes',
                      'Working software over documentation',
                      'Customer collaboration over contracts',
                      'Responding to change over plans'
                    ].map((value, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <ArrowRight className="w-5 h-5 text-accent-foreground" />
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="differences" title="Key Differences: Agile vs Waterfall">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <img 
              src={comparisonImage} 
              alt="Agile vs Waterfall Comparison" 
              className="w-full max-w-4xl mx-auto rounded-xl shadow-lg blog-card mb-6"
            />
            <p className="text-muted-foreground">
              Visual comparison of Agile and Waterfall methodologies
            </p>
          </div>
          <ComparisonTable />
        </div>
      </BlogSection>

      <BlogSection id="pros-cons" title="Pros & Cons Analysis">
        <div className="max-w-7xl mx-auto">
          <ProsAndCons />
        </div>
      </BlogSection>

      <BlogSection id="examples" title="Real-Life Examples & Use Cases">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Building,
                title: 'Government System',
                description: 'Large-scale government software with strict compliance requirements and fixed specifications.',
                methodology: 'Waterfall',
                color: 'bg-blue-500'
              },
              {
                icon: Smartphone,
                title: 'Mobile App Startup',
                description: 'Fast-moving startup developing a mobile app with evolving features based on user feedback.',
                methodology: 'Agile',
                color: 'bg-green-500'
              },
              {
                icon: Shield,
                title: 'Medical Device Software',
                description: 'Critical healthcare software requiring extensive testing and regulatory approval.',
                methodology: 'Waterfall',
                color: 'bg-red-500'
              },
              {
                icon: Zap,
                title: 'E-commerce Platform',
                description: 'Online retail platform needing rapid feature deployment and quick market adaptation.',
                methodology: 'Agile',
                color: 'bg-purple-500'
              }
            ].map((example, index) => (
              <div key={index} className="blog-card bg-card rounded-xl p-6 text-center">
                <div className={`w-16 h-16 ${example.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <example.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{example.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{example.description}</p>
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  example.methodology === 'Waterfall' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-accent/20 text-accent-foreground'
                }`}>
                  Best with: {example.methodology}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-primary-muted rounded-xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-primary">When to Choose Which?</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">Choose Waterfall When:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Requirements are well-defined and unlikely to change</li>
                  <li>• Working with regulatory or compliance-heavy industries</li>
                  <li>• You have a fixed budget and timeline</li>
                  <li>• The project is large with multiple dependencies</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-accent-foreground">Choose Agile When:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Requirements are expected to change frequently</li>
                  <li>• You need to deliver value quickly to market</li>
                  <li>• Client feedback is crucial throughout development</li>
                  <li>• Working on innovative or experimental projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="conclusion" title="Conclusion: Which One Should You Choose?">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
            <p>
              The choice between Agile and Waterfall isn't about which methodology is 
              "better" in absolute terms—it's about which one aligns best with your 
              project's specific context, requirements, and constraints.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
                <h3 className="text-2xl font-semibold mb-4 text-primary">The Waterfall Winner</h3>
                <p className="mb-4">
                  Waterfall shines in environments where predictability and documentation 
                  are paramount.
                </p>
              </div>
              
              <div className="bg-accent/10 rounded-xl p-8 border border-accent/30">
                <h3 className="text-2xl font-semibold mb-4 text-accent-foreground">The Agile Advantage</h3>
                <p className="mb-4">
                  Agile excels in dynamic environments where adaptability and speed 
                  are crucial.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">The Modern Reality</h3>
              <p className="text-lg">
                Many successful organizations today use a <strong>hybrid approach</strong>, 
                adapting elements from both methodologies based on project phases, team 
                capabilities, and stakeholder needs.
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-xl font-medium text-foreground">
                Remember: The best methodology is the one your team can execute effectively 
                while delivering value to your users and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogFooter />
    </div>
  );
};

export default Index;