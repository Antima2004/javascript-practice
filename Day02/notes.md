# Notes for Day 02

## Approach
- Use **dynamic programming** to track how many people learn the secret on each day.
- `dp[i]` = number of people who **learn the secret on day i**.
- Base case: `dp[1] = 1` (day 1 one person knows).
- From each `i`, people share starting at `i + delay` until `i + forget - 1`.
- Final answer = sum of people who **haven’t forgotten** by day `n`.

---

## Function Explanation
- **`peopleAwareOfSecret(n, delay, forget)`**
  - Creates a DP array of size `n+1`.
  - Simulates secret sharing for each day.
  - Returns the count of people who still remember at the end.

---

## Module / JavaScript Features Used
- **`new Array(n+1).fill(0)`** → initializes DP array with zeros.
- **`for` loop** → simulate day by day.
- **`%` (modulo)** → keeps results within `1e9+7`.
- **`console.log()`** → to test output.

---

## Example Walkthrough (n=6, delay=2, forget=4)
- Day 1: `dp[1] = 1`
- Day 3: person from day 1 shares → `dp[3] = 1`
- Day 4: person from day 1 shares again → `dp[4] = 1`
- Day 5: person from day 1 forgets, person from day 3 shares → `dp[5] = 1`
- Day 6: persons from day 3 and 4 share → `dp[6] = 2`
- Result = `dp[3] + dp[4] + dp[5] + dp[6] = 5`

---

## What I Learned
- How to simulate problems with **delay** and **forget constraints**.
- Importance of **modulo arithmetic (1e9+7)** in big number calculations.
- Better understanding of **dynamic programming for timeline-based problems**.
