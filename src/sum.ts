export function sum(a: number, b: number) {
	if (typeof a !== 'number' || typeof b !== 'number') return NaN;
	return a + b;
}
