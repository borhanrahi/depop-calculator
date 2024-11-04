import React from "react";
import { DollarSign, Euro, PoundSterling } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ItemCostInputProps {
  currency: "USD" | "EUR" | "GBP";
  itemCost: number;
  setItemCost: (value: number) => void;
}

const ItemCostInput: React.FC<ItemCostInputProps> = ({
  currency,
  itemCost,
  setItemCost,
}) => {
  return (
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
  );
};

export default ItemCostInput;
