export const calculateAverage = (data: number[]): number => {
    const total = data.reduce((acc, value) => acc + value, 0);
    return total / data.length;
};

export const calculateStandardDeviation = (data: number[]): number => {
    const avg = calculateAverage(data);
    const squareDiffs = data.map(value => Math.pow(value - avg, 2));
    const avgSquareDiff = calculateAverage(squareDiffs);
    return Math.sqrt(avgSquareDiff);
};

export const calculateCorrelation = (dataX: number[], dataY: number[]): number => {
    const avgX = calculateAverage(dataX);
    const avgY = calculateAverage(dataY);
    const numerator = dataX.reduce((acc, x, i) => acc + (x - avgX) * (dataY[i] - avgY), 0);
    const denominatorX = Math.sqrt(dataX.reduce((acc, x) => acc + Math.pow(x - avgX, 2), 0));
    const denominatorY = Math.sqrt(dataY.reduce((acc, y) => acc + Math.pow(y - avgY, 2), 0));
    return denominatorX && denominatorY ? numerator / (denominatorX * denominatorY) : 0;
};