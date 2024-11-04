import React from "react";
import { CreditCard } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { PAYMENT_METHODS } from "@/utils/constants";

interface PaymentMethodSelectProps {
  currency: "USD" | "EUR" | "GBP";
  paymentMethod: "depop" | "paypal";
  setPaymentMethod: (value: "depop" | "paypal") => void;
}

const PaymentMethodSelect: React.FC<PaymentMethodSelectProps> = ({
  currency,
  paymentMethod,
  setPaymentMethod,
}) => {
  return (
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
  );
};

export default PaymentMethodSelect;
