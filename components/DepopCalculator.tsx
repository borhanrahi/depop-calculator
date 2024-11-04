"use client";

import React, { useState, useEffect } from "react";
import { Flag } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import ResultsTable from "./ResultsTable";
import { Button } from "@/components/ui/button";
import { calculateFees } from "../utils/calculations";

type SizeType = "extra-small" | "small" | "medium" | "large" | "extra-large";

export default function DepopCalculator() {
  const [currency, setCurrency] = useState<"USD" | "EUR" | "GBP">("USD");
  const [salePrice, setSalePrice] = useState<number>(0);
  const [shipping, setShipping] = useState<string>("seller");
  const [shippingMethod, setShippingMethod] = useState<string>("depop");
  const [size, setSize] = useState<SizeType>("extra-small");
  const [customShipping, setCustomShipping] = useState<number>(0);
  const [boosted, setBoosted] = useState<string>("no");
  const [itemCost, setItemCost] = useState<number>(0);
  const [salesTaxMethod, setSalesTaxMethod] = useState<string>("percentage");
  const [salesTaxAmount, setSalesTaxAmount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<"depop" | "paypal">("depop");

  const [results, setResults] = useState(
    calculateFees({
      currency,
      salePrice,
      shipping,
      shippingMethod,
      size,
      customShipping,
      boosted,
      itemCost,
      salesTaxAmount,
      paymentMethod,
    })
  );

  useEffect(() => {
    const newResults = calculateFees({
      currency,
      salePrice,
      shipping,
      shippingMethod,
      size,
      customShipping,
      boosted,
      itemCost,
      salesTaxAmount,
      paymentMethod,
    });
    setResults(newResults);
  }, [
    currency,
    salePrice,
    shipping,
    shippingMethod,
    size,
    customShipping,
    boosted,
    itemCost,
    salesTaxAmount,
    paymentMethod,
  ]);

  const resetCalculator = () => {
    setSalePrice(0);
    setItemCost(0);
    setSalesTaxAmount(0);
    setCustomShipping(0);
  };

  return (
    <Card className='w-full max-w-[1200px] mx-auto shadow-xl'>
      <CardHeader className='text-center bg-primary text-primary-foreground rounded-t-lg'>
        <div className='flex items-center justify-center gap-2 mb-2'>
          <Flag className='w-8 h-8' />
          <CardTitle className='text-3xl sm:text-4xl font-bold'>
            Calculate Your Depop Profit
          </CardTitle>
        </div>
        <CardDescription className='text-primary-foreground/60'>
          Up-to-date as of as of November 02, 2024
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-6 p-6'>
        <CalculatorForm
          currency={currency}
          setCurrency={setCurrency}
          salePrice={salePrice}
          setSalePrice={setSalePrice}
          shipping={shipping}
          setShipping={setShipping}
          shippingMethod={shippingMethod}
          setShippingMethod={setShippingMethod}
          size={size}
          setSize={setSize}
          customShipping={customShipping}
          setCustomShipping={setCustomShipping}
          boosted={boosted}
          setBoosted={setBoosted}
          itemCost={itemCost}
          setItemCost={setItemCost}
          salesTaxMethod={salesTaxMethod}
          setSalesTaxMethod={setSalesTaxMethod}
          salesTaxAmount={salesTaxAmount}
          setSalesTaxAmount={setSalesTaxAmount}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
        <ResultsTable results={results} currency={currency} />
        <Button
          className='w-full bg-primary text-primary-foreground hover:bg-primary/90'
          onClick={resetCalculator}
        >
          Reset calculator
        </Button>
        <div className='text-center text-sm text-muted-foreground'>
          <p>Calculation not correct? Request new features?</p>
          <Button
            variant='link'
            className='text-sm text-primary hover:text-primary/80'
            onClick={() => window.location.href = 'mailto:borhanrahi111@gmail.com'}
          >
            Send me a message
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
