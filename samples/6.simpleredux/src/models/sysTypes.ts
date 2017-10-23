
/**
 * Yet another iteration of the unique identifier.
 * I find myself generating this class and I find it useful in general.
 */
export class UniqueId {
    private _values: Array<number> = [];

    private constructor(values: Array<number>) {
        this._values = values;
    }

    /**
     * Creates a new unique identifier.
     */
    public static newId(): UniqueId {
        return new UniqueId(Array(32).fill(0).map((_) => Math.floor(Math.random() * 16))
        );
    }

    /**
     * Generates a string representation of a unique identifier.
     * e.g: 00000000-0000-0000-0000-000000000000
     */
    public toString(): string {
        let dashIndex = [8, 12, 16, 20];
        return this._values.reduce(
            (acc, a, index) => {
                const part = a.toString(16).toUpperCase();
                return dashIndex.includes(index) ? acc + "-" + part : acc + part;
            }
            , "");
    }
}