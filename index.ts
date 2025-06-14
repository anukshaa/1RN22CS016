export interface Stock {
    symbol: string;
    name: string;
    currentPrice: number;
    priceHistory: PriceHistory[];
}

export interface PriceHistory {
    date: string;
    price: number;
}

export interface CorrelationData {
    [key: string]: number[];
}

export interface HeatmapData {
    stocks: string[];
    correlations: number[][];
}