import React from "react";
import { Package } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEPOP_SHIPPING_RATES, CURRENCY_SYMBOLS } from "@/utils/constants";

interface ShippingSectionProps {
  currency: "USD" | "EUR" | "GBP";
  shippingMethod: string;
  setShippingMethod: (value: string) => void;
  size: "extra-small" | "small" | "medium" | "large" | "extra-large";
  setSize: (value: "extra-small" | "small" | "medium" | "large" | "extra-large") => void;
  customShipping: number;
  setCustomShipping: (value: number) => void;
}

const ShippingSection: React.FC<ShippingSectionProps> = ({
  currency,
  shippingMethod,
  setShippingMethod,
  size,
  setSize,
  customShipping,
  setCustomShipping,
}) => {
  return (
    <>
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
    </>
  );
};

export default ShippingSection;
