import React from "react";
import CurrencySelect from "./CurrencySelect";
import SalePriceInput from "./SalePriceInput";
import ShippingSection from "./ShippingSection";
import BoostedSelect from "./BoostedSelect";
import ItemCostInput from "./ItemCostInput";
import PaymentMethodSelect from "./PaymentMethodSelect";
import SalesTaxSection from "./SalesTaxSection";

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

const CalculatorForm: React.FC<CalculatorFormProps> = (props) => {
  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <CurrencySelect 
          currency={props.currency} 
          setCurrency={props.setCurrency} 
        />
        <SalePriceInput 
          currency={props.currency}
          salePrice={props.salePrice}
          setSalePrice={props.setSalePrice}
        />
        <ShippingSection 
          currency={props.currency}
          shippingMethod={props.shippingMethod}
          setShippingMethod={props.setShippingMethod}
          size={props.size}
          setSize={props.setSize}
          customShipping={props.customShipping}
          setCustomShipping={props.setCustomShipping}
        />
        <BoostedSelect 
          boosted={props.boosted}
          setBoosted={props.setBoosted}
        />
        <ItemCostInput 
          currency={props.currency}
          itemCost={props.itemCost}
          setItemCost={props.setItemCost}
        />
        <PaymentMethodSelect 
          currency={props.currency}
          paymentMethod={props.paymentMethod}
          setPaymentMethod={props.setPaymentMethod}
        />
      </div>

      <SalesTaxSection 
        currency={props.currency}
        salesTaxMethod={props.salesTaxMethod}
        setSalesTaxMethod={props.setSalesTaxMethod}
        salesTaxAmount={props.salesTaxAmount}
        setSalesTaxAmount={props.setSalesTaxAmount}
      />
    </div>
  );
};

export default CalculatorForm;
