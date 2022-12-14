import type { Subtract } from './math/subtract'

/**
 * ? HELPER
 *
 * @internal
 */
type _Internal_Flat_Fork<Tuple, Depth extends number> = Tuple extends any[]
	? _Internal_Flat<Tuple, Subtract<Depth, 1>>
	: readonly [Tuple]

/**
 * ? MUTABLE
 *
 * @internal
 */
type _Internal_Flat<Tuple extends any[], Depth extends number> = Depth extends 0
	? [...Tuple]
	: Tuple extends [infer A, ...infer B]
	? [..._Internal_Flat_Fork<A, Depth>, ..._Internal_Flat<B, Depth>]
	: [...Tuple]

/**
 * ? READONLY
 *
 * @internal
 */
type _Internal_FlatReadonly<
	Tuple extends readonly any[],
	Depth extends number
> = Depth extends 0
	? readonly [...Tuple]
	: Tuple extends readonly [infer A, ...infer B]
	? readonly [
			..._Internal_Flat_Fork<A, Depth>,
			..._Internal_FlatReadonly<B, Depth>
	  ]
	: readonly [...Tuple]

/**
 * Recursively flatten an array up to a given depth.
 *
 * @param Tuple - The array to flatten.
 * @param Depth - The maximum recursion depth.
 * @defaultValue 1
 * @example
 * ```
 * type Foo = ['a0', [0, 1], 'a1', [0, ['b0']], 'a2']
 * type FooFlatDepth1 = Flat<Foo> // ["a0", 0, 1, "a1", 0, ["b0"], "a2"]
 * type FooFlatDepth2 = Flat<Foo, 2> // ["a0", 0, 1, "a1", 0, "b0", "a2"]
 * ```
 */
export type Flat<
	Tuple extends any[] | readonly any[],
	Depth extends number = 1
> = Tuple extends any[]
	? _Internal_Flat<Tuple, Depth>
	: _Internal_FlatReadonly<Tuple, Depth>
