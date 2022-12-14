import type { Length } from './length'

/**
 * Generates a fixed-length N tuple filled with type T.
 *
 * @example
 * ```
 * Fill<5> // [never, never, never, never, never]
 * ```
 * @example
 * ```
 * Fill<3, 'a'> // ['a', 'a', 'a']
 * ```
 */
export type CreateTuple<
	L extends number,
	T = never,
	A extends T[] = []
> = Length<A> extends L ? A : CreateTuple<L, T, [...A, T]>
