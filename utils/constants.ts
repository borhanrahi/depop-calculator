interface ShippingSizes {
  [key: string]: {
    weight: string;
    price: number;
  };
}

export const DEPOP_SHIPPING_RATES: Record<string, ShippingSizes> = {
  USD: {
    "extra-small": { weight: "4 oz", price: 4.49 },
    small: { weight: "8 oz", price: 5.49 },
    medium: { weight: "12 oz", price: 6.29 },
    large: { weight: "16 oz", price: 7.99 },
    "extra-large": { weight: "10 lbs", price: 13.49 },
  },
  GBP: {
    "extra-small": { weight: "1 kg", price: 2.99 },
    small: { weight: "1 kg", price: 2.99 },
    medium: { weight: "2 kg", price: 4.49 },
    large: { weight: "5 kg", price: 6.49 },
    "extra-large": { weight: "5 kg", price: 6.49 },
  },
  EUR: {
    "extra-small": { weight: "4 oz", price: 4.0 },
    small: { weight: "8 oz", price: 5.0 },
    medium: { weight: "1 kg", price: 6.0 },
    large: { weight: "2 kg", price: 8.0 },
    "extra-large": { weight: "5 kg", price: 10.0 },
  },
};

export const CURRENCY_SYMBOLS = {
  USD: "$",
  EUR: "€",
  GBP: "£",
};

export const PAYMENT_METHODS = {
  USD: {
    depop: {
      percentage: 0.033,
      fixed: 0.45,
      label: "Depop Payments (3.3% + $0.45)"
    },
    paypal: {
      percentage: 0.0349,
      fixed: 0.49,
      label: "PayPal (3.49% + $0.49)"
    }
  },
  EUR: {
    depop: {
      percentage: 0.029,
      fixed: 0.30,
      label: "Depop Payments (2.9% + €0.30)"
    },
    paypal: {
      percentage: 0.0349,
      fixed: 0.49,
      label: "PayPal (3.49% + €0.49)"
    }
  },
  GBP: {
    depop: {
      percentage: 0.029,
      fixed: 0.30,
      label: "Depop Payments (2.9% + £0.30)"
    },
    paypal: {
      percentage: 0.0349,
      fixed: 0.49,
      label: "PayPal (3.49% + £0.49)"
    }
  }
};
