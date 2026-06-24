class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

    // substring means use sliding window 
    
    let left = 0 ; 

    let maxFreq = 0 ; 

    let result = 0 ; 

    let map = {}

    for(let right=0 ; right < s.length ; right++){

         map[s[right]] = (map[s[right]] || 0) + 1

         maxFreq = Math.max( maxFreq , map[s[right]] )

         while( (right - left + 1) - maxFreq  >  k){ // need to check window length - maxFreq is > k means window is not valid so we need to reduces window size 

         map[s[left]]--
         left++ 

         }

         result = Math.max(result , right - left + 1 )
    }

    return result 
       
    }
}
