import React, { useEffect, useState } from 'react';
import { getStockPrice } from '../services/api';
import { Stock } from '../types';

const StockPage: React.FC<{ stockSymbol: string }> = ({ stockSymbol }) => {
    const [stockData, setStockData] = useState<Stock | null>(null);
    const [timeFrame, setTimeFrame] = useState<string>('1d');

    useEffect(() => {
        const fetchStockData = async () => {
            const data = await getStockPrice(stockSymbol, timeFrame);
            setStockData(data);
        };

        fetchStockData();
    }, [stockSymbol, timeFrame]);

    const handleTimeFrameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTimeFrame(event.target.value);
    };

    return (
        <div>
            <h1>{stockSymbol} Stock Price</h1>
            <select value={timeFrame} onChange={handleTimeFrameChange}>
                <option value="1d">1 Day</option>
                <option value="1w">1 Week</option>
                <option value="1m">1 Month</option>
                <option value="1y">1 Year</option>
            </select>
            {stockData ? (
                <div>
                    <h2>Price History</h2>
                    {/* Render chart here with stockData */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default StockPage;