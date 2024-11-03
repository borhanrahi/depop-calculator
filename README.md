# Depop Fee Calculator

A modern web application built with Next.js that helps Depop sellers calculate fees, profits, and costs across multiple currencies (USD, EUR, GBP).

## Features

- Real-time fee calculation for Depop and PayPal payments
- Support for multiple currencies (USD, EUR, GBP)
- Detailed breakdown of all fees and costs
- Shipping cost calculator with Depop's official rates
- Sales tax calculation (percentage or fixed amount)
- Profit margin and markup calculations
- Boosted listing fee calculations
- Responsive design with dark/light mode support

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Build Tool**: Turbopack

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/depop-calculator.git
cd depop-calculator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable React components
- `/utils` - Helper functions and constants
- `/lib` - Utility functions and shared code
- `/public` - Static assets

## Key Components

- `DepopCalculator` - Main calculator component
- `CalculatorForm` - Form for input values
- `ResultsTable` - Displays calculation results
- `constants.ts` - Contains shipping rates and fee structures

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License

## Contact

For questions or suggestions, please email: borhanrahi111@gmail.com

## Deployment

The project is optimized for deployment on Vercel. For other platforms, please refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).