# 1RN22CS016

# Stock Price Aggregator

This project is a React-based web application for aggregating stock prices and providing real-time analytical insights. It features a Stock Page for detailed stock information and a Correlation Heatmap for visualizing stock correlations.

## Features

- **Stock Page**: Displays stock price charts over specified time frames, with methods for fetching stock data and handling time interval changes.
- **Correlation Heatmap**: Visualizes the correlation between stocks, with hover functionality to display average and standard deviation.

## Project Structure

```
stock-aggregator-frontend
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── components          # Reusable components
│   │   ├── StockPage.tsx
│   │   └── CorrelationHeatmap.tsx
│   ├── pages               # Application pages
│   │   ├── Home.tsx
│   │   └── Stock.tsx
│   ├── services            # API service functions
│   │   └── api.ts
│   ├── utils               # Utility functions
│   │   └── helpers.ts
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── types               # TypeScript types and interfaces
│       └── index.ts
├── package.json            # npm configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd stock-aggregator-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage Guidelines

- Navigate to the Home page to access the Stock Page and Correlation Heatmap.
- Use the Stock Page to view detailed stock information and charts.
- Explore the Correlation Heatmap to analyze stock correlations visually.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.
