// Alorithm for Flying to the destination with minimum planes used.

function flyMeToMyDestination(fuel) {
  let n = fuel.length;
  if (n === 1) return 0; // Already at the last airport

  let maxReach = fuel[0]; // Maximum index we can reach
  let steps = fuel[0]; // Fuel left for the current plane
  let planesUsed = 1; // We have hired the first plane

  for (let i = 1; i < n; i++) {
    if (i === n - 1) return planesUsed; // If reached the last airport

    maxReach = Math.max(maxReach, i + fuel[i]); // Update max reach
    steps--; // Use one step (fuel) to move

    if (steps === 0) {
      // If no steps left
      if (i >= maxReach) return -1; // If we cannot move forward, return -1
      planesUsed++; // Hire a new plane
      steps = maxReach - i; // Reset steps based on new plane's fuel
    }
  }

  return -1; // If unable to reach the last airport
}

console.log(flyMeToMyDestination([1, 2, 0, 3, 1, 0, 2]));

/* 
#Explanation:

1.Approach :  I am using two pointers (maxReach, steps) and a counter (planes_used) to track:
 maxReach → The farthest airport you can reach.
 steps → Remaining fuel for the current plane.
 planes_used → Number of planes hired so far.

2. Steps:

    A. Start at the first airport (index 0).
    B. Set maxReach = fuel[0] (how far the first plane can go).
    C. Set steps = fuel[0] (fuel left for the current plane).
    D. Set planes_used = 1 (since we hire the first plane).
    E. Traverse the array and update maxReach dynamically:
        a.If we reach the last airport, return planes_used.
        b.If steps runs out, hire a new plane from the best available airport (the one that maximizes maxReach).
        c.If we can't move forward, return -1.

*/
