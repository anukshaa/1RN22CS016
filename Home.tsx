import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Stock Price Aggregator</h1>
            <p>Welcome to the Stock Price Aggregator application. Here you can find real-time stock prices and analytical insights.</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/stock">View Stock Page</Link>
                    </li>
                    <li>
                        <Link to="/correlation-heatmap">View Correlation Heatmap</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;