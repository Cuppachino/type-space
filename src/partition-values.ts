import type { KeyOf } from './key-of'
import type { UnknownArray } from './unknown-array'

/**
 * Collect the value associated with `PartitionKey` from each member of a `Tuple`. The result is a tuple of value types in the same order as the original `Tuple`.
 *
 * @param Tuple - A tuple of records that share a common property.
 * @param PartitionKey - A union of keys from each member of `Tuple`.
 * @example
 * ```
 * declare const levelConfig: [
 *  { name: 'error'; colors: ['red', 'bold'] },
 *  { name: 'warn', colors: ['yellow'] },
 *  { name: 'info' },
 *  { name: 'debug'; colors: ['blue'] }
 * ]
 *
 * type LevelNames = PartitionValues<typeof levelConfig, 'name'>
 * // ["error", "warn", "info", "debug"]
 *
 * type LevelColors = PartitionValues<typeof levelConfig, 'colors'>
 * // [["red", "bold"], ["yellow"], never, ["blue"]]
 *
 * type LevelNamesOrColors = PartitionValues<typeof levelConfig, 'name' | 'colors'>
 * // [
 * //   "error" | ["red", "bold"],
 * //   "warn" | ["yellow"],
 * //   "info",
 * //   "debug" | ["blue"]
 * // ]
 * ```
 */
export type PartitionValues<
	Tuple extends UnknownArray,
	PartitionKey extends KeyOf<Tuple[number]>,
	Fallback = never
> = {
	[Idx in keyof Tuple]: PartitionKey extends keyof Tuple[Idx]
		? Tuple[Idx][PartitionKey]
		: Fallback
}
