import BlogHero from '@/components/BlogHero';
import BlogSection from '@/components/BlogSection';
import ComparisonTable from '@/components/ComparisonTable';
import ProsAndCons from '@/components/ProsAndCons';
import RealLifeExamples from '@/components/RealLifeExamples';
import BlogFooter from '@/components/BlogFooter';
import { Quote, ArrowRight, CheckCircle } from 'lucide-react';
import waterfallImage from '@/assets/waterfall-diagram.jpg';
import agileImage from '@/assets/agile-diagram.jpg';
import comparisonImage from '@/assets/agile-vs-waterfall-comparison.jpg';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHero />
      
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
          <RealLifeExamples />
        </div>
      </BlogSection>

      <BlogSection id="conclusion" title="Conclusion: Which One Should You Choose?">
        <div className="max-w-4xl mx-auto relative">
          {/* Floating decorative elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '2s' }}></div>
          
          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground relative z-10">
            <p>
              The choice between Agile and Waterfall isn't about which methodology is 
              "better" in absolute terms—it's about which one aligns best with your 
              project's specific context, requirements, and constraints.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/20 hover-lift transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <h3 className="text-2xl font-semibold text-primary">The Waterfall Winner</h3>
                </div>
                <p className="mb-4">
                  Waterfall shines in environments where predictability and documentation 
                  are paramount. It's your go-to choice for:
                </p>
                <ul className="space-y-2">
                  <li>• Regulated industries (healthcare, finance, government)</li>
                  <li>• Projects with fixed, well-understood requirements</li>
                  <li>• Large-scale enterprise systems</li>
                  <li>• Distributed teams across time zones</li>
                </ul>
              </div>
              
              <div className="bg-accent/10 rounded-xl p-8 border border-accent/30 hover-lift transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-accent rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <h3 className="text-2xl font-semibold text-accent-foreground">The Agile Advantage</h3>
                </div>
                <p className="mb-4">
                  Agile excels in dynamic environments where adaptability and speed 
                  are crucial. Choose Agile for:
                </p>
                <ul className="space-y-2">
                  <li>• Startups and innovative products</li>
                  <li>• Consumer-facing applications</li>
                  <li>• Projects with evolving requirements</li>
                  <li>• Small, co-located teams</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center hover-glow transition-all duration-300 relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-4 left-4 w-20 h-20 bg-primary rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-accent rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">The Modern Reality</h3>
                <p className="text-lg">
                  Many successful organizations today use a <strong>hybrid approach</strong>, 
                  adapting elements from both methodologies based on project phases, team 
                  capabilities, and stakeholder needs. The key is understanding your context 
                  and choosing the approach that maximizes your chances of success.
                </p>
              </div>
            </div>
            
            <div className="text-center relative">
              {/* Decorative elements around the final message */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent/20 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
              
              <div className="relative z-10">
                <p className="text-xl font-medium text-foreground">
                  Remember: The best methodology is the one your team can execute effectively 
                  while delivering value to your users and stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogFooter />
    </div>
  );
};

export default BlogPage;