/**
 * Infers a union of all members in a Set type.
 *
 * @example
 * ```
 * type Level = ExtractSetMembers<typeof Config['LEVELS']>
 * ```
 */
export type ExtractSetMembers<T extends Set<unknown>> = T extends Set<infer U>
	? U
	: never
