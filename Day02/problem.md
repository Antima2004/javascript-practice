# Problem: Number of People Aware of a Secret

## Statement
On day 1, one person discovers a secret.

You are given:
- An integer `delay`, which means each person will share the secret with a new person every day, starting from `delay` days after discovering the secret.
- An integer `forget`, which means each person will forget the secret `forget` days after discovering it.

A person cannot share the secret on the same day they forgot it, or on any day afterwards.

Return the number of people who know the secret at the end of day `n`.  
Since the answer may be very large, return it modulo **1e9 + 7**.

---

## Example 1
Input: `n = 6, delay = 2, forget = 4`  
Output: `5`

Explanation:
- Day 1: A knows the secret → (1)  
- Day 2: Only A knows → (1)  
- Day 3: A shares with B → (2)  
- Day 4: A shares with C → (3)  
- Day 5: A forgets, B shares with D → (3)  
- Day 6: B shares with E, C shares with F → (5)

---

## Example 2
Input: `n = 4, delay = 1, forget = 3`  
Output: `6`

Explanation:
- Day 1: A knows → (1)  
- Day 2: A shares with B → (2)  
- Day 3: A & B share with C, D → (4)  
- Day 4: A forgets, B, C, D share → (6)

---

## Constraints
- `2 <= n <= 1000`
- `1 <= delay < forget <= n`
