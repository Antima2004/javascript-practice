# Problem - Minimum Number of People to Teach

You are given an integer `n` denoting the number of languages and an array `languages`, 
where `languages[i]` is the list of languages that the i-th user knows (1-indexed).

You are also given an array `friendships` where `friendships[j] = [u, v]` 
denotes that user `u` and user `v` are friends.

A user `u` and user `v` can communicate if they **know at least one common language**.

Your task is to **teach the minimum number of users a new language** so that every friendship 
is able to communicate.

You may teach only **one language** to any number of users, and each user can be taught only **one new language**.

---

## ✨ Example 1
**Input:**
n = 2
languages = [[1],[2],[1,2]]
friendships = [[1,2],[1,3],[2,3]]

makefile
Copy code

**Output:**
1

yaml
Copy code

**Explanation:**
- Friendship (1,2) cannot communicate → teach user1 language `2` or user2 language `1`.
- After teaching, all friendships can communicate.

---

## ✨ Example 2
**Input:**
n = 3
languages = [[2],[1,3],[1,2],[3]]
friendships = [[1,4],[1,2],[3,4],[2,3]]

makefile
Copy code

**Output:**
2

markdown
Copy code

**Explanation:**
- Candidates: {1,2,3,4}.
- If we teach language `1`, then users (2,3) already know it → we only need to teach users (1,4).
- So total = 2 teaches.

---

## ✅ Constraints
- `2 <= n <= 500`
- `languages.length == m` (number of users)
- `1 <= languages[i].length <= n`
- `1 <= languages[i][j] <= n`
- `1 <= u < v <= m`
- `friendships.length <= m * (m-1) / 2`

---

## 🎯 Goal
Return the **minimum number of users** you need to teach **so that all friendships can communicate**.