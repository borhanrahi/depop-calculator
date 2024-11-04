import React from "react";
import { Percent, DollarSign, Euro, PoundSterling } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SalesTaxSectionProps {
  currency: "USD" | "EUR" | "GBP";
  salesTaxMethod: string;
  setSalesTaxMethod: (value: string) => void;
  salesTaxAmount: number;
  setSalesTaxAmount: (value: number) => void;
}

const SalesTaxSection: React.FC<SalesTaxSectionProps> = ({
  currency,
  salesTaxMethod,
  setSalesTaxMethod,
  salesTaxAmount,
  setSalesTaxAmount,
}) => {
  return (
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
  );
};

export default SalesTaxSection;
