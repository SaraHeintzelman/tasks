/**
 *  1 unfinished tests
 */

//import { isNamespaceExportDeclaration } from "typescript";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 * ---COMPLETE
 */
export function bookEndList(numbers: number[]): number[] {
    let bookEnd: number[];
    if (numbers.length === 0) {
        bookEnd = [];
    } else {
        bookEnd = [numbers[0], numbers[numbers.length - 1]];
    }
    return bookEnd;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 * ---COMPLETE
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled: number[] = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 * ---COMPLETE
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integers = numbers.map((num: string): number =>
        Number(num) % 1 === 0 ? Number(num) : 0
    );
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 * ---COMPLETE
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const nums = amounts
        .map((num: string): number =>
            num.charAt(0) == "$" ? Number(num.substring(1)) : Number(num)
        )
        .map((num: number): number => (Number.isNaN(num) ? 0 : num));
    return nums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 * --- COMPLETE
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shout = messages
        .map((message: string): string =>
            message.charAt(message.length - 1) === "!"
                ? message.toUpperCase()
                : message
        )
        .filter(
            (message: string): boolean =>
                message.charAt(message.length - 1) !== "?"
        );
    return shout;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 * ---COMPLETE
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 * ---COMPLETE
 */
export function allRGB(colors: string[]): boolean {
    const everyRGB = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return everyRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 * ---COMPLETE
 */
export function makeMath(addends: number[]): string {
    const addition: string =
        addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        ) +
        "=" +
        (addends.length === 0 ? 0 : addends.join("+"));
    return addition;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 * ---COMPLETED
 * prettier is screaming at me but I can't really see why, prettier also cannot see why, because it can't fix it, will check back later
 */
export function injectPositive(values: number[]): number[] {
    const firstIndex = values.findIndex((value: number): boolean => value < 0);
    const valsToReduce =
        firstIndex === -1 ? values : values.slice(0, firstIndex);
    const sum = valsToReduce.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const injected = [...values];
    injected.splice(
        firstIndex !== -1 ? firstIndex + 1 : injected.length,
        0,
        sum
    );
    return injected;
}
