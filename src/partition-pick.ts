import type { KeyOf } from './key-of'
import type { UnknownArray } from './unknown-array'

/**
 * Picks a property from each member of a `Tuple` and returns a tuple of mapped types with only the picked properties, in the same order as the original `Tuple`.
 *
 * @param Tuple - A tuple of records that can have different properties.
 * @param PartitionKey - A union of keys to take from each member of `Tuple`.
 * @param Fallback - The value to use if a member of `Tuple` does not have a key in `PartitionKey`. By default, the key is completely omitted.
 * @example
 * ```
 * declare const levelConfig: [
 *  { name: 'error'; colors: ['red', 'bold'] },
 *  { name: 'warn', colors: ['yellow'] },
 *  { name: 'info' },
 *  { name: 'debug'; colors: ['blue'] }
 * ]
 *
 * type LevelsByName = PartitionPick<typeof levelConfig, 'name'>
 * // [
 * // 	{ name: "error"; },
 * // 	{ name: "warn"; },
 * // 	{ name: "info"; },
 * // 	{ name: "debug"; }
 * // ]
 *
 * type LevelsByColor = PartitionPick<typeof levelConfig, 'colors'>
 * // [
 * // 	{ colors: ["red", "bold"]; },
 * // 	{ colors: ["yellow"]; },
 * // 	{},
 * // 	{ colors: ["blue"]; }
 * // ]
 *
 * type LevelsByNameOrColor = PartitionPick<typeof levelConfig, 'name' | 'colors'>
 * // [
 * //   { name: "error"; colors: ["red", "bold"]; },
 * //   { name: "warn"; colors: ["yellow"]; },
 * //   { name: "info"; },
 * //   { name: "debug"; colors: ["blue"]; }
 * // ]
 * ```
 */
export type PartitionPick<
	Tuple extends UnknownArray,
	PartitionKey extends KeyOf<Tuple[number]>
> = {
	[Idx in keyof Tuple]: {
		[K in keyof Tuple[Idx] as K extends PartitionKey ? K : never]: Tuple[Idx][K]
	}
}
