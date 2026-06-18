class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        //mistake made by me are commented for future ref 
        //check i , left  , right should not be duplicate to get unique combination

        let result = [];

        let sort = nums.sort((a,b) => a - b);  // ascending sort 

        for(let i=0 ; i<sort.length -2 ; i++){ // length -2 because inside loop we are using right as length -1 
            
            if(i> 0 && sort[i] === sort[i-1]) continue ; // if i > 0 means then check previuos one is duplicate or not 

            let left =  i + 1 ; // left should start from i+1

            let right = sort.length -1  ;

        

            while(left < right){
                let sum = sort[i] + sort[left] + sort[right]; 

                if(sum === 0 ){
                    result.push([sort[i] , sort[left] , sort[right]])

                    //check i , left  , right should not be duplicate to get unique combination
                    while(left < right && sort[left] === sort[left + 1])  left++
                    while(left < right && sort[right] === sort[right - 1])  right--

                    left++ 

                    right--
                }
                else if(sum < 0 ){
                    left++
                }
                else{
                    right--
                }
            }

        }

        return result
    }
}
