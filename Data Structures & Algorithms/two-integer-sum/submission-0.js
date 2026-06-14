class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {}

        for(let i=0 ; i<nums.length ; i++){
           let  complement = target - nums[i];

            if(complement in map){
                return [map[complement] , i]
            }
            else{
                 map[nums[i]] = i
                
            }
        }

        return false 
    }
}
