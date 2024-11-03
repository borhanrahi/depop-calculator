import { Info, Calculator, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">About The Calculator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Accurate Calculations</h3>
          </div>
          <p className="text-muted-foreground">
            Get precise fee calculations including Depop fees, payment processing, and shipping costs.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Profit Analysis</h3>
          </div>
          <p className="text-muted-foreground">
            Calculate your profit margins and markup instantly with our advanced analytics.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Info className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Multiple Currencies</h3>
          </div>
          <p className="text-muted-foreground">
            Support for USD, EUR, and GBP with real-time currency-specific fee structures.
          </p>
        </div>
      </div>
    </section>
  );
}
