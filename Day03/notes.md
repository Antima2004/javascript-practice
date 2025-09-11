# Notes - Minimum Number of People to Teach

## 🔑 Key Idea
- We only care about **users in problematic friendships** → friendships where no common language exists.
- Once we identify those users, we check:
  - Which language do the **maximum number** of those users already know?
  - Then we only need to teach the remaining ones.

Formula:
answer = candidates.size - max(language coverage)

yaml
Copy code

---

## ✨ Step-by-Step Reasoning
1. Convert each user's languages into a **Set** → fast lookup.
2. For each friendship:
   - If they share a language → ✅ OK.
   - If not → add both to `candidates`.
3. Count how many candidate users already know each language.
4. Pick the language with maximum overlap.
5. Subtract from total candidates → gives minimum teaches.

---

## 📊 Example Walkthrough

### Example 1
n = 2
languages = [[1],[2],[1,2]]
friendships = [[1,2],[1,3],[2,3]]

yaml
Copy code

- Friendship (1,2): {1} vs {2} → ❌ no common → candidates = {1,2}
- Friendship (1,3): {1} vs {1,2} → ✅ common
- Friendship (2,3): {2} vs {1,2} → ✅ common

Candidates = {1,2}, size = 2  
Language coverage:
- Lang 1 → known by user1 → count = 1
- Lang 2 → known by user2 → count = 1  

Answer = 2 - 1 = **1**

---

### Example 2
n = 3
languages = [[2],[1,3],[1,2],[3]]
friendships = [[1,4],[1,2],[3,4],[2,3]]

yaml
Copy code

Problematic pairs:
- (1,4): {2} vs {3} → ❌
- (1,2): {2} vs {1,3} → ❌
- (3,4): {1,2} vs {3} → ❌
- (2,3): {1,3} vs {1,2} → ✅

Candidates = {1,2,3,4}, size = 4  
Language coverage among them:
- Lang 1 → 2 users
- Lang 2 → 2 users
- Lang 3 → 2 users  

Answer = 4 - 2 = **2**

---

## ⚡ Complexity
- Building Sets: **O(m * k)**
- Checking friendships: **O(f * k)**
- Counting coverage: **O(m * k)**
- Taking max: **O(n)**

Constraints (≤ 500) → Efficient ✅

---

## 💡 Takeaways
- Don’t try to teach all users → only focus on those in problematic friendships.  
- Always maximize existing overlap to minimize teaches.  
- Use **Set** for quick common-language checks.