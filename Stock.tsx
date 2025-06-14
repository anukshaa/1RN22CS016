import React, { useEffect, useState } from 'react';
import { getStockPrice } from '../services/api';
import { Stock } from '../types';

const StockPage: React.FC<{ stockSymbol: string }> = ({ stockSymbol }) => {
    const [stockData, setStockData] = useState<Stock | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const data = await getStockPrice(stockSymbol);
                setStockData(data);
            } catch (err) {
                setError('Failed to fetch stock data');
            } finally {
                setLoading(false);
            }
        };

        fetchStockData();
    }, [stockSymbol]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>{stockSymbol} Stock Information</h1>
            {stockData && (
                <div>
                    <h2>Price: ${stockData.currentPrice}</h2>
                    <h3>Price History</h3>
                    <ul>
                        {stockData.priceHistory.map((price, index) => (
                            <li key={index}>
                                {price.date}: ${price.value}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default StockPage;