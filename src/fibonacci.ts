export const fibonacci = (n: number): number => {
    if (n < 0) {
        throw new Error('n must be a non-negative integer');
    }

    if (!Number.isInteger(n)) {
        throw new Error('n must be an integer');
    }

    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
};
