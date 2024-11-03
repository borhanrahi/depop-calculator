import { DEPOP_SHIPPING_RATES } from "./constants";
import { PAYMENT_METHODS } from "./constants";

export interface CalculationParams {
  currency: "USD" | "EUR" | "GBP";
  salePrice: number;
  shipping: string;
  shippingMethod: string;
  size: "extra-small" | "small" | "medium" | "large" | "extra-large";
  customShipping: number;
  boosted: string;
  itemCost: number;
  salesTaxAmount: number;
  paymentMethod: "depop" | "paypal";
}

export interface CalculationResults {
  costPrice: string;
  listingPrice: string;
  buyerPaidShipping: string;
  sellerPaidShipping: string;
  depopFee: string;
  transactionFee: string;
  boostedFee: string;
  marketplaceFee: string;
  salesTax: string;
  revenue: string;
  grossProfit: string;
  profitMargin: string;
  markup: string;
}

export interface ChartData {
  name: string;
  value: number;
}

export function calculateFees({
  currency,
  salePrice,
  shippingMethod,
  size,
  customShipping,
  boosted,
  itemCost,
  salesTaxAmount,
  paymentMethod,
}: CalculationParams): CalculationResults {
  // 1. Calculate Depop Fee (varies by currency)
  let depopFee = 0;
  switch (currency) {
    case "USD":
      depopFee = 0;
      break;
    case "EUR":
      depopFee = salePrice * 0.1;
      break;
    case "GBP":
      depopFee = 0; // No selling fees for UK after March 20, 2024
      break;
  }

  // 2. Calculate Processing Fee based on payment method
  const { percentage: processingFee, fixed: processingFixedFee } = 
    PAYMENT_METHODS[currency][paymentMethod];
  const transactionFee = (salePrice * processingFee) + processingFixedFee;

  // 3. Calculate Shipping Cost based on method and size
  const shippingCost = 
    shippingMethod === "depop" 
      ? DEPOP_SHIPPING_RATES[currency][size].price
      : shippingMethod === "own"
      ? customShipping
      : 0; // For 'buyer' option

  // 4. Calculate Boost Fee if applicable
  const boostedFee = boosted === "yes" ? salePrice * 0.08 : 0;

  // 5. Calculate Total Fees
  const totalFees = depopFee + transactionFee + shippingCost + boostedFee;

  // 6. Calculate Final Numbers
  const revenue = salePrice - totalFees - (salesTaxAmount || 0);
  const netProfit = revenue - itemCost;
  const profitMargin = (netProfit / salePrice) * 100;
  const markup = itemCost > 0 ? ((salePrice - itemCost) / itemCost) * 100 : 0;

  return {
    costPrice: itemCost.toFixed(2),
    listingPrice: salePrice.toFixed(2),
    buyerPaidShipping: (shippingMethod === 'buyer' ? customShipping : 0).toFixed(2),
    sellerPaidShipping: shippingCost.toFixed(2),
    depopFee: depopFee.toFixed(2),
    transactionFee: transactionFee.toFixed(2),
    boostedFee: boostedFee.toFixed(2),
    marketplaceFee: (depopFee + boostedFee).toFixed(2), // Combined marketplace fees
    salesTax: salesTaxAmount.toFixed(2),
    revenue: revenue.toFixed(2),
    grossProfit: netProfit.toFixed(2),
    profitMargin: isFinite(profitMargin) ? profitMargin.toFixed(2) : "N/A",
    markup: isFinite(markup) ? markup.toFixed(2) : "N/A",
  };
}
