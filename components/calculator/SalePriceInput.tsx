import React from "react";
import { DollarSign, Euro, PoundSterling } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SalePriceInputProps {
  currency: "USD" | "EUR" | "GBP";
  salePrice: number;
  setSalePrice: (value: number) => void;
}

const SalePriceInput: React.FC<SalePriceInputProps> = ({
  currency,
  salePrice,
  setSalePrice,
}) => {
  return (
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
  );
};

export default SalePriceInput;
