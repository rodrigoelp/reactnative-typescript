export function newUid() {
    return Array(32)
        .fill(0)
        .map((_) => Math.floor(Math.random() * 16).toString(16).toLowerCase())
        .reduce((acc, v) => `${acc}${v}`, "");
}
