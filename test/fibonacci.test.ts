import { fibonacci } from '../src/fibonacci';

describe('Fibonacci sequence generator', () => {
    it('should return 0 for n = 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    it('should return 1 for n = 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('should return 55 for n = 10', () => {
        expect(fibonacci(10)).toBe(55);
    });

    it('should return 6765 for n = 20', () => {
        expect(fibonacci(20)).toBe(6765);
    });

    it('should throw an error for negative n', () => {
        expect(() => fibonacci(-1)).toThrow('n must be a non-negative integer');
    });

    it('should throw an error for non-integer n', () => {
        expect(() => fibonacci(1.5)).toThrow('n must be an integer');
    });

    // Data-driven tests
    const testData: [number, number][] = [
        [5, 5],
        [6, 8],
        [7, 13],
        [8, 21]
        // Add more test cases here
    ];

    testData.forEach(([input, expectedOutput]) => {
        it(`should return ${expectedOutput} for n = ${input}`, () => {
            expect(fibonacci(input)).toBe(expectedOutput);
        });
    });
});