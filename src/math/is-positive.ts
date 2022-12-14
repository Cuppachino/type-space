/**
 * Returns whether the number is positive
 *
 * @example
 * ```
 * IsPositive<-1> // false
 * ```
 * @example
 * ```
 * IsPositive<1> // true
 * ```
 */
export type IsPositive<N extends number> = `${N}` extends `-${number}`
	? false
	: true
