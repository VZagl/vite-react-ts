// sum.test.js
import { describe, expect, it, test } from 'vitest';
import { sum } from './sum.ts';

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

// Generated by Qodo Gen

describe('sum', () => {
	// Adding two positive integers returns their sum
	it('should return correct sum when adding two positive integers', () => {
		// Arr, just like counting doubloons!
		expect(sum(2, 3)).toBe(5);
	});

	// Adding two negative integers returns their sum
	it('should return correct sum when adding two negative integers', () => {
		// Blimey! Negative numbers be like holes in me ship!
		expect(sum(-2, -3)).toBe(-5);
	});

	// Adding zero to a number returns the same number
	it('should return same number when adding zero', () => {
		// Zero be like an empty treasure chest, matey!
		expect(sum(42, 0)).toBe(42);
		expect(sum(0, 42)).toBe(42);
	});

	// Adding decimal numbers returns correct floating point result
	it('should return correct sum when adding decimal numbers', () => {
		// Decimal points be making me head spin like a compass in a storm!
		expect(sum(1.5, 2.7)).toBeCloseTo(4.2);
	});

	// Adding positive and negative numbers returns correct result
	it('should return correct result when adding positive and negative numbers', () => {
		// Mixing positive and negative like mixing rum with seawater!
		expect(sum(5, -3)).toBe(2);
	});

	// Adding undefined or null values
	it('should return NaN when adding undefined or null values', () => {
		// Undefined be like a ghost ship, ye can't add it!
		expect(sum(undefined, 5)).toBe(NaN);
		expect(sum(null, 5)).toBe(NaN);
	});

	// Adding non-numeric values returns NaN
	it('should return NaN when adding non-numeric values', () => {
		// Strings be for maps, not for adding, ye scurvy dog!
		expect(sum('abc', 5)).toBe(NaN);
		expect(sum({}, [])).toBe(NaN);
	});

	// Adding very large numbers near Number.MAX_SAFE_INTEGER
	it('should handle large numbers correctly', () => {
		// Numbers big as a whale's belly!
		const maxInt = Number.MAX_SAFE_INTEGER;
		expect(sum(maxInt - 1, 1)).toBe(maxInt);
	});

	// Adding very small numbers near Number.MIN_SAFE_INTEGER
	it('should handle small numbers correctly', () => {
		// Numbers smaller than a barnacle!
		const minInt = Number.MIN_SAFE_INTEGER;
		expect(sum(minInt + 1, -1)).toBe(minInt);
	});

	// Adding numbers that could cause floating point precision issues
	it('should handle floating point precision correctly', () => {
		// Floating points be tricky as a mermaid's tail!
		expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
	});

	// Adding Infinity or -Infinity values
	it('should handle Infinity values correctly', () => {
		// Infinity be like the endless ocean!
		expect(sum(Infinity, 5)).toBe(Infinity);
		expect(sum(-Infinity, -5)).toBe(-Infinity);
	});

	// Adding NaN values
	it('should return NaN when adding NaN values', () => {
		// NaN be like a drunken sailor - makes no sense!
		expect(sum(NaN, 5)).toBe(NaN);
		expect(sum(NaN, NaN)).toBe(NaN);
	});
});
