class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length){
            return false
        }

        let str1 = {}
        let str2 = {}

        for (let i=0 ; i<s.length ; i++){
            str1[s[i]] = ((str1[s[i]] || 0) + 1 ) 
            str2[t[i]] = ((str2[t[i]] || 0)+ 1 ) 
        }

        for(let key in str1){
            if(str1[key] !== str2[key]){
                return false
            }
        }

        return true 

    }
}
