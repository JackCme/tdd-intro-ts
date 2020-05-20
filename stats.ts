export default {
	max: (numbers: number[]): number => {
		return Math.max(...numbers);
	},
	min: (numbers: number[]): number => {
		return Math.min(...numbers);
	},
	avg: (numbers: number[]): number =>
		numbers.reduce((acc, curr, i, { length }) => acc + curr / length, 0),
	sort: (numbers: number[]): number[] => numbers.sort((a, b) => a - b),
	median: (numbers: number[]): number => {
		const { length } = numbers;
		const middle = Math.floor(length / 2);

		return length % 2
			? numbers[middle]
			: (numbers[middle - 1] + numbers[middle]) / 2;
	},
	mode: (numbers: number[]): null | number | number[] => {
		const counts = numbers.reduce(
			(acc, curr) => acc.set(curr, acc.get(curr) + 1 || 1),
			new Map()
		);

		const maxCount = Math.max(...counts.values());
		const modes = [...counts.keys()].filter(
			(number) => counts.get(number) === maxCount
		);

		// 최빈값이 없음
		if (modes.length === numbers.length) return null;
		// 최빈값이 여러개
		if (modes.length > 1) return modes;
		// 최빈값이 하나
		return modes[0];
	},
};
