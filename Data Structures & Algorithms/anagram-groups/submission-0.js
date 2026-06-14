class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for(let word of strs){
            let uniqueWord = word.split("").sort().join("")

            if(!map[uniqueWord]){
                map[uniqueWord] = []
            }

            map[uniqueWord].push(word)
        }

        return Object.values(map)
    }
}
