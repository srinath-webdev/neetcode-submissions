class Solution {
    twoSum(nums, target) {

        // number -> index
        const map = {};

        for (let i = 0; i < nums.length; i++) {

            // What number do I need to reach target?
            const complement = target - nums[i];

            // Have I already seen that number?
            if (complement in map) {

                // Yes -> return previous index and current index
                return [map[complement], i];
            }

            // No -> store current number and its index
            map[nums[i]] = i;
        }
    }
}