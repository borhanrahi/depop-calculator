import React from "react";
import { CURRENCY_SYMBOLS } from "../utils/constants";

interface ResultsTableProps {
  results: {
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
  };
  currency: "USD" | "EUR" | "GBP";
}

export default function ResultsTable({ results, currency }: ResultsTableProps) {
  return (
    <div className='border border-primary/20 rounded-lg p-6 space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Key Metrics */}
        <div className='bg-primary/5 rounded-lg p-4 text-center space-y-2'>
          <h4 className='text-sm font-medium text-muted-foreground'>Revenue</h4>
          <p className='text-2xl font-bold'>
            {CURRENCY_SYMBOLS[currency]}
            {results.revenue}
          </p>
        </div>
        <div className='bg-primary/5 rounded-lg p-4 text-center space-y-2'>
          <h4 className='text-sm font-medium text-muted-foreground'>Net Profit</h4>
          <p className={`text-2xl font-bold ${
            Number(results.grossProfit) >= 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {CURRENCY_SYMBOLS[currency]}
            {results.grossProfit}
          </p>
        </div>
        <div className='bg-primary/5 rounded-lg p-4 text-center space-y-2'>
          <h4 className='text-sm font-medium text-muted-foreground'>Profit Margin</h4>
          <p className={`text-2xl font-bold ${
            Number(results.profitMargin) >= 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {results.profitMargin}%
          </p>
        </div>
      </div>

      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Detailed Breakdown</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2'>
          {/* Costs Section */}
          <div className='space-y-2'>
            <h4 className='text-sm font-medium text-muted-foreground'>Costs</h4>
            <div className='space-y-1'>
              <div className='flex justify-between items-center py-1'>
                <span>Item Cost</span>
                <span className='font-medium'>
                  {CURRENCY_SYMBOLS[currency]}{results.costPrice}
                </span>
              </div>
              <div className='flex justify-between items-center py-1'>
                <span>Seller Paid Shipping</span>
                <span className='font-medium'>
                  {CURRENCY_SYMBOLS[currency]}{results.sellerPaidShipping}
                </span>
              </div>
            </div>
          </div>

          {/* Fees Section */}
          <div className='space-y-2'>
            <h4 className='text-sm font-medium text-muted-foreground'>Platform Fees</h4>
            <div className='space-y-1'>
              <div className='flex justify-between items-center py-1'>
                <span>Depop Fee {currency === "EUR" ? "(10%)" : "(0%)"}</span>
                <span className='font-medium text-red-600'>
                  -{CURRENCY_SYMBOLS[currency]}{results.depopFee}
                </span>
              </div>
              <div className='flex justify-between items-center py-1'>
                <span>Processing Fee</span>
                <span className='font-medium text-red-600'>
                  -{CURRENCY_SYMBOLS[currency]}{results.transactionFee}
                </span>
              </div>
              {Number(results.boostedFee) > 0 && (
                <div className='flex justify-between items-center py-1'>
                  <span>Boost Fee (8%)</span>
                  <span className='font-medium text-red-600'>
                    -{CURRENCY_SYMBOLS[currency]}{results.boostedFee}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 pt-6 border-t border-primary/10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='text-center'>
            <p className='text-sm text-muted-foreground'>Listing Price</p>
            <p className='text-xl font-semibold'>
              {CURRENCY_SYMBOLS[currency]}{results.listingPrice}
            </p>
          </div>
          <div className='text-center'>
            <p className='text-sm text-muted-foreground'>Markup</p>
            <p className={`text-xl font-semibold ${
              Number(results.markup) >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {results.markup}%
            </p>
          </div>
          <div className='text-center'>
            <p className='text-sm text-muted-foreground'>Sales Tax</p>
            <p className='text-xl font-semibold'>
              {CURRENCY_SYMBOLS[currency]}{results.salesTax}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
