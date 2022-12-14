type ReadonlyUnknownRecord = { readonly [key: string]: unknown }

/**
 * Recursively removes the `readonly` modifier from all properties of a type.
 * This is only intended for use within utility types that need to allow both mutable and readonly types.
 *
 * @remarks
 * - Only use `Mutable<T>` for transforms within other generics that need to allow both mutable and readonly types.
 * - **Reapply the `readonly` modifier before returning the result of your utility**.
 * @example
 * ```
 * const levelConfig = [
 * { name: 'error', colors: ['redBright'] },
 * { name: 'warn', colors: ['yellow'] },
 * { name: 'info', colors: ['cyan'] }
 * ] as const
 *
 * type LevelNames = Mutable<PickFromEach<typeof levelConfig, 'name'>>
 * type LevelColors = Mutable<PickFromEach<typeof levelConfig, 'colors'>>
 *
 * const levelNames = levelConfig.map(({ name }) => name) as LevelNames
 * const levelColors = levelConfig.map(({ colors }) => colors) as LevelColors
 * ```
 */

export type Mutable<T> = T extends readonly any[] | ReadonlyUnknownRecord
	? {
			-readonly [P in keyof T]: Mutable<T[P]>
	  }
	: T
