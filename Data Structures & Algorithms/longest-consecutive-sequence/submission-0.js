class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let maximum = 0; 

        let set = new Set(nums)

        for (let n of set){


            if (!set.has(n-1)){
                let curr = n ; 
                let length = 1 ;

                while(set.has(curr + 1 )){
                    curr++;
                    length++
                }

                maximum = Math.max(maximum , length)
            }
        }

        return maximum 
    }
}
