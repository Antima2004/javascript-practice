# Notes for Day 01

## Approach
1. Loop from `a = 1` to `n-1`.
2. Set `b = n - a`.
3. Check if both `a` and `b` contain no digit `0` using a helper function.
4. Return the first valid `[a, b]`.

---

## Function Explanation

### `noZero(x)`
- Purpose: Checks if number `x` has digit `0`.
- Steps:
  - Use `% 10` to get the last digit.
  - If the digit is 0 → return `false`.
  - Otherwise, divide the number by 10 (`Math.floor(x / 10)`) and check again.
  - If loop finishes → return `true`.

### `getNoZeroIntegers(n)`
- Purpose: Finds two integers `a` and `b` such that:
  - `a + b = n`
  - Neither contains `0`.
- Logic:
  - Try all values of `a`.
  - Compute `b = n - a`.
  - If both pass `noZero()` → return `[a, b]`.

---

## Module Explanation

- **`console.log()`**: Used to print output in the terminal.
- **`Math.floor()`**: Removes the decimal part when dividing numbers.
- **`%` (modulus operator)**: Gets the remainder (last digit of a number).

---

## Complexity
- Time Complexity: O(n × d), where `d` is number of digits in `n`.
- Space Complexity: O(1), uses constant extra space.

---

## What I Learned
- How to check digits of a number in JavaScript.
- Difference between `%` and `Math.floor()`.
- Writing small helper functions to simplify code.
