import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with the actual API base URL

export const getStocks = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/stocks`);
        return response.data;
    } catch (error) {
        console.error('Error fetching stocks:', error);
        throw error;
    }
};

export const getStockPrice = async (stockSymbol) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/stocks/${stockSymbol}/price`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching price for stock ${stockSymbol}:`, error);
        throw error;
    }
};

export const getStockPriceHistory = async (stockSymbol) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/stocks/${stockSymbol}/history`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching price history for stock ${stockSymbol}:`, error);
        throw error;
    }
};

export const getCorrelationData = async (stockSymbols) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/correlation`, { stocks: stockSymbols });
        return response.data;
    } catch (error) {
        console.error('Error fetching correlation data:', error);
        throw error;
    }
};