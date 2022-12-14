/**
 * Returns whether the number is a whole number
 *
 * @example
 * ```
 * IsInteger<1> // true
 * ```
 * @example
 * ```
 * IsInteger<1.5> // false
 * ```
 */
export type IsInteger<N extends number> = `${N}` extends `${number}.${number}`
	? false
	: true
