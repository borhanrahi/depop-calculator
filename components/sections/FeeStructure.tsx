import { Card } from "@/components/ui/card";
import { Percent, CreditCard, Package, Zap, Receipt, Rocket } from "lucide-react";

export default function FeeStructure() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Understanding Depop Fees</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Learn how Depop calculates different fees and charges for your sales
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Percent className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Platform Fee</h3>
              <p className="text-muted-foreground mb-4">
                Platform fees vary by region as of March 2024:
              </p>
              <ul className="space-y-2 text-sm">

                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>USA: No platform fee</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>UK: No platform fee</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Europe: 10% of total transaction amount</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground text-xs mt-2">
                  <span className="w-2 h-2 bg-primary/50 rounded-full" />
                  <span>Fees apply to both item price and shipping cost in EUR</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Payment Processing</h3>
              <p className="text-muted-foreground mb-4">
                Additional fees vary based on your payment method.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Depop Payments: 2.9% + £0.30</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>PayPal: 3.49% + £0.49</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Shipping Costs</h3>
              <p className="text-muted-foreground mb-4">
                Shipping rates vary by item size and location.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Small items from £2.99</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Large items up to £6.49</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Boost Fees</h3>
              <p className="text-muted-foreground mb-4">
                Optional promotional fees for increased visibility.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>8% additional fee on sale price</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Higher search ranking</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Receipt className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">State Sales Tax</h3>
              <p className="text-muted-foreground mb-4">
                Sales tax is automatically calculated and collected by Depop based on:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Buyer&apos;s shipping address</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>State and local tax rates</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Item price + shipping cost</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Boost Listings</h3>
              <p className="text-muted-foreground mb-4">
                Increase visibility with boosted listings:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Additional 8% fee on sale price</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Higher search result placement</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Increased visibility to buyers</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground text-xs mt-2">
                  <span className="w-2 h-2 bg-primary/50 rounded-full" />
                  <span>Only charged when item sells</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
