/**
 * Returns whether the number is negative
 *
 * @example
 * ```
 * IsNegative<-1> // true
 * ```
 * @example
 * ```
 * IsNegative<1> // false
 * ```
 */
export type IsNegative<N extends number> = `${N}` extends `-${number}`
	? true
	: false
