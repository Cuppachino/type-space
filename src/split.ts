/**
 * Splits a string literal into a tuple of characters, separated by the given
 * delimiter.
 *
 * @example
 * ```
 * Split<'a-b-c'> // ['a', '-', 'b', '-', 'c']
 * ```
 * @example
 * ```
 * Split<'a-b-c', '-'> // ['a', 'b', 'c']
 * ```
 */
export type Split<
	S extends string,
	D extends string = ''
> = S extends `${infer L}${D}${infer R}`
	? R extends ''
		? [L]
		: [L, ...Split<R, D>]
	: [S]
