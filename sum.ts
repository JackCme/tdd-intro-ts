export function sum(a: number, b: number): number {
	return a + b;
}

export function sumOf(numbers: number[]): number {
	return numbers.reduce((acc, current) => acc + current, 0);
}
