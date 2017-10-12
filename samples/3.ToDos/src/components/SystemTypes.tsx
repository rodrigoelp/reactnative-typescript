/**
 * Definition of a unique identifier (Guid, UUID, uniqueidentifier, etc)
 * Note: I am not sure if javascript has a definition for this... so created my own type.
 */
// tslint:disable-next-line:class-name
export class guid {
    /**
     * creates a new unique identifier that is likely to be unique (is no guaranteed but likely.)
     * @method newGuid()
     */
    public static newGuid(): guid {
        const dashIndexes = [ 8, 12, 16, 20];
        return new guid(Array(32)
                .fill(0)
                .map((_) => Math.floor(Math.random() * 16).toString(16).toUpperCase())
                .reduce((acc, a, index) => dashIndexes.includes(index) ? acc + "-" + a : acc + a ));
    }

    private value: string;

    /**
     * Unique identifier.
     * @param value string representation of a guid.
     */
    constructor(value: string) {
        this.value = value;
    }

    public ToString(): string {
        return this.value;
    }
}
