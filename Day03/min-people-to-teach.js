var minimumTeachings = function(n, languages, friendships) {
    const m = languages.length;
    
    // Convert each user's language list into a Set for fast lookup
    const langSets = languages.map(langs => new Set(langs));
    
    // Step 1: Find users involved in problematic friendships
    let candidates = new Set();
    for (let [u, v] of friendships) {
        u--, v--; // make 0-based
        let common = false;
        for (let lang of langSets[u]) {
            if (langSets[v].has(lang)) {
                common = true;
                break;
            }
        }
        if (!common) {
            candidates.add(u);
            candidates.add(v);
        }
    }
    
    // If no problematic friendships, no teaching required
    if (candidates.size === 0) return 0;
    
    // Step 2: Count language coverage among candidates
    let langCount = new Array(n + 1).fill(0);
    for (let user of candidates) {
        for (let lang of langSets[user]) {
            langCount[lang]++;
        }
    }
    
    // Step 3: Compute minimum people to teach
    let maxAlreadyKnow = Math.max(...langCount);
    return candidates.size - maxAlreadyKnow;
};

// Example runs
console.log(minimumTeachings(2, [[1],[2],[1,2]], [[1,2],[1,3],[2,3]])); // 1
console.log(minimumTeachings(3, [[2],[1,3],[1,2],[3]], [[1,4],[1,2],[3,4],[2,3]])); // 2
