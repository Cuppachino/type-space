/**
 * Represents an array or tuple of unknown elements.
 *
 * @example
 * ```
 * declare function foo<T extends UnknownArray>(...args: T): Foo<T>
 * ```
 */
export type UnknownArray = unknown[] | readonly unknown[]
