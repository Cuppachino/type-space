/**
 * A record with unknown values. This is useful for accepting any type of object
 * safely.
 *
 * @example
 * ```
 * declare function makeBar<F extends UnknownRecord>(foo: F): Bar<F>
 * ```
 */
export type UnknownRecord = Record<PropertyKey, unknown>
