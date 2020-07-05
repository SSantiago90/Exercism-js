  export const steps = (n, count = 0) => {
    //console output for debuggin purposes
    //console.debug('step: ' + n + ' - counter: ' + count);

    // Check for negative input
    if (n <= 0) throw new Error('Only positive numbers are allowed');

    //if N reached 1, return count of actual steps to parent function instance 
    if (n === 1) return count;

    // N % 2 returns "true-ish" value if EVEN, and "false-ish" value if ODD.
    // If even, make a recursive call with N / 2; if odd: with (N * 3) + 1.    
    return ( n % 2 ? steps((n * 3) + 1, count+1) : steps(n / 2, count+1));      
  };
