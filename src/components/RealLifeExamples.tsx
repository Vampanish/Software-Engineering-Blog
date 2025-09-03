import { Building, Smartphone, Shield, Zap, ArrowRight } from 'lucide-react';

const ExampleCard = ({ 
  icon: Icon, 
  title, 
  description, 
  methodology,
  color 
}: {
  icon: any;
  title: string;
  description: string;
  methodology: string;
  color: string;
}) => (
  <div className="blog-card bg-card rounded-xl p-6 text-center border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
    <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
    <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
      methodology === 'Waterfall' 
        ? 'bg-primary/10 text-primary border border-primary/20' 
        : 'bg-accent/20 text-accent-foreground border border-accent/20'
    }`}>
      Best with: {methodology}
    </div>
  </div>
);

const RealLifeExamples = () => {
  const examples = [
    {
      icon: Building,
      title: 'Government System',
      description: 'Large-scale government software with strict compliance requirements, detailed documentation needs, and fixed specifications.',
      methodology: 'Waterfall',
      color: 'bg-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Startup',
      description: 'Fast-moving startup developing a mobile app with evolving features based on user feedback and market demands.',
      methodology: 'Agile',
      color: 'bg-green-500'
    },
    {
      icon: Shield,
      title: 'Medical Device Software',
      description: 'Critical healthcare software requiring extensive testing, regulatory approval, and comprehensive documentation.',
      methodology: 'Waterfall',
      color: 'bg-red-500'
    },
    {
      icon: Zap,
      title: 'E-commerce Platform',
      description: 'Online retail platform needing rapid feature deployment, A/B testing, and quick adaptation to market trends.',
      methodology: 'Agile',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Examples Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {examples.map((example, index) => (
          <ExampleCard key={index} {...example} />
        ))}
      </div>
      
      {/* Decision Guide */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 md:p-8 border border-border/50">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground">When to Choose Which?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understanding the context and requirements of your project is key to selecting the right methodology
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Waterfall Section */}
          <div className="bg-card rounded-xl p-6 border border-primary/20 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Choose Waterfall When:</h4>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              {[
                'Requirements are well-defined and unlikely to change',
                'Working with regulatory or compliance-heavy industries',
                'You have a fixed budget and timeline',
                'The project is large with multiple dependencies',
                'Team members are distributed across different locations'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Agile Section */}
          <div className="bg-card rounded-xl p-6 border border-accent/20 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <h4 className="text-lg font-semibold text-accent-foreground">Choose Agile When:</h4>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              {[
                'Requirements are expected to change frequently',
                'You need to deliver value quickly to market',
                'Client feedback is crucial throughout development',
                'Working on innovative or experimental projects',
                'Team is small, co-located, and experienced'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealLifeExamples;