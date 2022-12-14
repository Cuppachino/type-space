import type { UnknownArray } from 'type-space'

/**
 * Extracts the length property from an array or tuple.
 * ```
 * @example Length<[1, 2, 3]> // 3
 * ```
 */
export type Length<T extends UnknownArray> = T extends {
	length: infer L
}
	? L
	: never
