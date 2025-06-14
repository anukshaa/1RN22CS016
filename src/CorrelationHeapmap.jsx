import React, { useEffect, useState } from 'react';
import { fetchCorrelationData } from '../services/api';
import { HeatMap } from 'react-heatmap-grid';

const CorrelationHeatmap: React.FC = () => {
    const [data, setData] = useState<number[][]>([]);
    const [stocks, setStocks] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getCorrelationData = async () => {
            setLoading(true);
            const correlationData = await fetchCorrelationData();
            setData(correlationData.data);
            setStocks(correlationData.stocks);
            setLoading(false);
        };

        getCorrelationData();
    }, []);

    const handleCellClick = (x: number, y: number) => {
        const stockX = stocks[x];
        const stockY = stocks[y];
        alert(`Correlation between ${stockX} and ${stockY}: ${data[x][y]}`);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Correlation Heatmap</h2>
            <HeatMap
                xLabels={stocks}
                yLabels={stocks}
                data={data}
                onClick={handleCellClick}
                cellStyle={(value: number) => ({
                    background: `rgba(255, 0, 0, ${value})`,
                    fontSize: '11px',
                })}
                cellRender={(value: number) => value.toFixed(2)}
            />
        </div>
    );
};

export default CorrelationHeatmap;
