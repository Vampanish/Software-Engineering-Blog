import { CheckCircle, XCircle, TrendingUp, TrendingDown } from 'lucide-react';

interface MethodologyProps {
  title: string;
  pros: string[];
  cons: string[];
  color: 'primary' | 'accent';
}

const MethodologyCard = ({ title, pros, cons, color }: MethodologyProps) => (
  <div className="blog-card bg-card rounded-xl p-6 md:p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="text-center mb-8">
      <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${color === 'primary' ? 'text-primary' : 'text-accent-foreground'}`}>
        {title}
      </h3>
      <div className={`w-16 h-1 mx-auto rounded-full ${
        color === 'primary' ? 'bg-primary' : 'bg-accent'
      }`} />
    </div>
    
    <div className="space-y-8">
      {/* Pros Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-6 border border-green-200/50 dark:border-green-800/30">
        <h4 className="text-lg font-semibold mb-4 text-green-700 dark:text-green-400 flex items-center gap-2 justify-center">
          <TrendingUp className="w-5 h-5" />
          Pros
        </h4>
        <ul className="space-y-3">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-foreground group">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
              <span className="group-hover:text-foreground transition-colors duration-200">{pro}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Cons Section */}
      <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-xl p-6 border border-red-200/50 dark:border-red-800/30">
        <h4 className="text-lg font-semibold mb-4 text-red-700 dark:text-red-400 flex items-center gap-2 justify-center">
          <TrendingDown className="w-5 h-5" />
          Cons
        </h4>
        <ul className="space-y-3">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-foreground group">
              <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
              <span className="group-hover:text-foreground transition-colors duration-200">{con}</span>
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
      'Well-suited for projects with fixed requirements',
      'Good for compliance and regulatory environments'
    ],
    cons: [
      'Inflexible to changing requirements',
      'Late discovery of issues and bugs',
      'No working software until near the end',
      'Limited client feedback during development',
      'High risk if requirements are misunderstood',
      'Difficult to incorporate new features mid-project'
    ]
  };

  const agileData = {
    title: 'Agile Methodology',
    pros: [
      'Highly adaptable to changing requirements',
      'Regular delivery of working software',
      'Continuous client feedback and involvement',
      'Early detection and resolution of issues',
      'Promotes team collaboration and communication',
      'Faster time to market'
    ],
    cons: [
      'Less predictable timeline and costs',
      'Requires experienced and dedicated team',
      'Minimal documentation can be problematic',
      'Scope creep can occur without proper management',
      'May not work well for large, distributed teams',
      'Challenging for fixed-price contracts'
    ]
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
      <MethodologyCard {...waterfallData} color="primary" />
      <MethodologyCard {...agileData} color="accent" />
    </div>
  );
};

export default ProsAndCons;