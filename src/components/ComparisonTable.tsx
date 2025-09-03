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
    },
    {
      aspect: 'Team Size',
      waterfall: 'Works well with larger teams',
      agile: 'Better suited for smaller teams'
    },
    {
      aspect: 'Project Duration',
      waterfall: 'Better for longer projects',
      agile: 'Ideal for shorter iterations'
    }
  ];

  return (
    <div className="comparison-table">
      {/* Desktop Table View */}
      <div className="hidden lg:block bg-card rounded-xl border border-border/50 shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-primary/10 to-accent/10">
                <th className="text-left p-6 font-semibold text-foreground">Aspect</th>
                <th className="text-left p-6 font-semibold text-primary">Waterfall</th>
                <th className="text-left p-6 font-semibold text-accent-foreground">Agile</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comparison, index) => (
                <tr 
                  key={comparison.aspect}
                  className={`border-t border-border/50 hover:bg-muted/30 transition-all duration-200 ${
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

      {/* Mobile/Tablet Card View */}
      <div className="lg:hidden space-y-4">
        {comparisons.map((comparison, index) => (
          <div 
            key={comparison.aspect}
            className="bg-card rounded-xl border border-border/50 p-6 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <h3 className="font-semibold text-foreground mb-4 text-lg">{comparison.aspect}</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="text-sm font-medium text-primary">Waterfall:</span>
                  <p className="text-muted-foreground text-sm mt-1">{comparison.waterfall}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="text-sm font-medium text-accent-foreground">Agile:</span>
                  <p className="text-muted-foreground text-sm mt-1">{comparison.agile}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;