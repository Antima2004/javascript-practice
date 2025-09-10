/**
 * Number of People Aware of a Secret
 * Approach: Dynamic Programming
 */

var peopleAwareOfSecret = function(n, delay, forget) {
    const MOD = 1e9 + 7;
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1; // Day 1: one person knows the secret

    // simulate day by day
    for (let i = 1; i <= n; i++) {
        let spread = dp[i]; // people who learned on day i
        for (let j = i + delay; j < i + forget && j <= n; j++) {
            dp[j] = (dp[j] + spread) % MOD;
        }
    }

    // count people who still remember on day n
    let ans = 0;
    for (let i = n - forget + 1; i <= n; i++) {
        if (i > 0) ans = (ans + dp[i]) % MOD;
    }

    return ans;
};

// Example runs
console.log(peopleAwareOfSecret(6, 2, 4)); // Output: 5
console.log(peopleAwareOfSecret(4, 1, 3)); // Output: 6
