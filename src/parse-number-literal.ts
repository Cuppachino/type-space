import type { NumberLiteral, Stringify } from 'type-space'

/**
 * Coerces a `NumberLiteral` type to a `number`
 *
 * @example
 * ```
 * type Positive42 = ParseNumberLiteral<'42'> // 42
 * type Negative42 = ParseNumberLiteral<'-42'> // -42
 * ```
 * @see {@link NumberLiteral}
 */
export type ParseNumberLiteral<N extends NumberLiteral> =
	Stringify<N> extends `${infer I extends number}` ? I : never
