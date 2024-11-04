import React from "react";
import {
  DollarSign,
  Package,
  Percent,
  Euro,
  PoundSterling,
  CreditCard,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEPOP_SHIPPING_RATES, CURRENCY_SYMBOLS, PAYMENT_METHODS } from "../utils/constants";

interface CalculatorFormProps {
  currency: "USD" | "EUR" | "GBP";
  setCurrency: (value: "USD" | "EUR" | "GBP") => void;
  salePrice: number;
  setSalePrice: (value: number) => void;
  shipping: string;
  setShipping: (value: string) => void;
  shippingMethod: string;
  setShippingMethod: (value: string) => void;
  size: "extra-small" | "small" | "medium" | "large" | "extra-large";
  setSize: (value: "extra-small" | "small" | "medium" | "large" | "extra-large") => void;
  customShipping: number;
  setCustomShipping: (value: number) => void;
  boosted: string;
  setBoosted: (value: string) => void;
  itemCost: number;
  setItemCost: (value: number) => void;
  salesTaxMethod: string;
  setSalesTaxMethod: (value: string) => void;
  salesTaxAmount: number;
  setSalesTaxAmount: (value: number) => void;
  paymentMethod: "depop" | "paypal";
  setPaymentMethod: (value: "depop" | "paypal") => void;
}
const CalculatorForm: React.FC<CalculatorFormProps> = ({
  currency,
  setCurrency,
  salePrice,
  setSalePrice,
  shippingMethod,
  setShippingMethod,
  size,
  setSize,
  customShipping,
  setCustomShipping,
  boosted,
  setBoosted,
  itemCost,
  setItemCost,
  salesTaxMethod,
  setSalesTaxMethod,
  salesTaxAmount,
  setSalesTaxAmount,
  paymentMethod,
  setPaymentMethod,
}) => {
  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='space-y-2'>
          <Label className='flex items-center gap-2'>
            <DollarSign className='w-4 h-4' />
            Currency
          </Label>
          <Select
            value={currency}
            onValueChange={(value: "USD" | "EUR" | "GBP") => setCurrency(value)}
          >
            <SelectTrigger 
              className='border-primary/20 focus:border-primary'
              aria-label="Select currency"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='USD'>USD ($)</SelectItem>
              <SelectItem value='EUR'>EUR (€)</SelectItem>
              <SelectItem value='GBP'>GBP (£)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='space-y-2'>
          <Label
            htmlFor='sale-price'
            className='flex items-center gap-2'
          >
            {currency === "USD" && <DollarSign className='w-4 h-4' />}
            {currency === "EUR" && <Euro className='w-4 h-4' />}
            {currency === "GBP" && <PoundSterling className='w-4 h-4' />}
            Sale price
          </Label>
          <Input
            id='sale-price'
            type='number'
            min='0'
            step='0.01'
            value={salePrice || ''}
            onChange={(e) => setSalePrice(parseFloat(e.target.value) || 0)}
            className='border-primary/20 focus:border-primary'
          />
        </div>
        <div className='space-y-2'>
          <Label className='flex items-center gap-2'>
            <Package className='w-4 h-4' />
            Shipping method
          </Label>
          <Select
            value={shippingMethod}
            onValueChange={setShippingMethod}
          >
            <SelectTrigger 
              className='border-primary/20 focus:border-primary'
              aria-label="Select shipping method"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='depop'>Ship With Depop</SelectItem>
              <SelectItem value='own'>Ship on Your Own</SelectItem>
              <SelectItem value='buyer'>Paid by Buyer</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {shippingMethod === "depop" ? (
          <div className='space-y-2'>
            <Label className='flex items-center gap-2'>
              <Package className='w-4 h-4' />
              Package Size
            </Label>
            <Select
              value={size}
              onValueChange={setSize}
            >
              <SelectTrigger 
                className='border-primary/20 focus:border-primary'
                aria-label="Select package size"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(DEPOP_SHIPPING_RATES[currency]).map(
                  ([key, { weight, price }]) => (
                    <SelectItem
                      key={key}
                      value={key}
                    >
                      {key
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}{" "}
                      ({weight}): {CURRENCY_SYMBOLS[currency]}
                      {price.toFixed(2)}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>
        ) : (
          <div className='space-y-2'>
            <Label
              htmlFor='custom-shipping'
              className='flex items-center gap-2'
            >
              <Package className='w-4 h-4' />
              Shipping cost
            </Label>
            <Input
              id='custom-shipping'
              type='number'
              min='0'
              step='0.01'
              value={customShipping || ''}
              onChange={(e) =>
                setCustomShipping(parseFloat(e.target.value) || 0)
              }
              className='border-primary/20 focus:border-primary'
            />
          </div>
        )}

        <div className='space-y-2'>
          <Label className='flex items-center gap-2'>
            <Percent className='w-4 h-4' />
            Boosted Listings?
          </Label>
          <Select
            value={boosted}
            onValueChange={setBoosted}
          >
            <SelectTrigger 
              className='border-primary/20 focus:border-primary'
              aria-label="Select boost option"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='no'>No</SelectItem>
              <SelectItem value='yes'>Yes</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='space-y-2'>
          <Label
            htmlFor='item-cost'
            className='flex items-center gap-2'
          >
            {currency === "USD" && <DollarSign className='w-4 h-4' />}
            {currency === "EUR" && <Euro className='w-4 h-4' />}
            {currency === "GBP" && <PoundSterling className='w-4 h-4' />}
            Item cost
          </Label>
          <Input
            id='item-cost'
            type='number'
            min='0'
            step='0.01'
            value={itemCost || ''}
            onChange={(e) => setItemCost(parseFloat(e.target.value) || 0)}
            className='border-primary/20 focus:border-primary'
          />
        </div>
        <div className='space-y-2'>
          <Label className='flex items-center gap-2'>
            <CreditCard className='w-4 h-4' />
            Payment Method
          </Label>
          <Select
            value={paymentMethod}
            onValueChange={(value: "depop" | "paypal") => setPaymentMethod(value)}
          >
            <SelectTrigger 
              className='border-primary/20 focus:border-primary'
              aria-label="Select payment method"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='depop'>{PAYMENT_METHODS[currency].depop.label}</SelectItem>
              <SelectItem value='paypal'>{PAYMENT_METHODS[currency].paypal.label}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='border border-primary/20 rounded-lg p-4 space-y-4'>
        <div className='text-center font-semibold bg-primary text-primary-foreground py-2 rounded'>
          Sales tax (optional)
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <Label className='flex items-center gap-2'>
              <Percent className='w-4 h-4' />
              Calculation method
            </Label>
            <Select
              value={salesTaxMethod}
              onValueChange={setSalesTaxMethod}
            >
              <SelectTrigger 
                className='border-primary/20 focus:border-primary'
                aria-label="Select sales tax calculation method"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='percentage'>% Percentage</SelectItem>
                <SelectItem value='fixed'>Fixed Amount</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='space-y-2'>
            <Label
              htmlFor='tax-amount'
              className='flex items-center gap-2'
            >
              {currency === "USD" && <DollarSign className='w-4 h-4' />}
              {currency === "EUR" && <Euro className='w-4 h-4' />}
              {currency === "GBP" && <PoundSterling className='w-4 h-4' />}
              Amount
            </Label>
            <Input
              id='tax-amount'
              type='number'
              min='0'
              step='0.01'
              value={salesTaxAmount || ''}
              onChange={(e) =>
                setSalesTaxAmount(parseFloat(e.target.value) || 0)
              }
              className='border-primary/20 focus:border-primary'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;

