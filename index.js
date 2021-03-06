/**
 *
 */
class Majority {

    /**
     *
     */
    constructor(...values) {
        this.values = new Map
        this.values[Symbol.iterator] = function* () {
            yield* [...this.entries()].sort((b, a) => a[1] - b[1]);
        }
        values.forEach(value => this.feed(value))
    }

    /**
     *
     * @param value
     */
    feed(value) {
        this.values.set(value, (this.values.get(value) || 0) + 1)
    }

    /**
     *
     * @returns {any}
     */
    value(defaultValue) {
        for (const [value] of this.values) {
            return value
        }
        return defaultValue
    }
}
module.exports = Majority
