import React from "react";
import { DollarSign } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface CurrencySelectProps {
  currency: "USD" | "EUR" | "GBP";
  setCurrency: (value: "USD" | "EUR" | "GBP") => void;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ currency, setCurrency }) => {
  return (
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
  );
};

export default CurrencySelect;
