let arr = [3,2,4]
console.log(arr)

// for(let i  of arr)
// {
//     console.log(i);
//     if(i=== 7)
//     {
//         console.log(arr[i]);
//     }
// }
// funcation 
// for(j=0; j < arr.length - 1;j++)
// {
//     console.log(arr[j]);
//     if(arr[j] + arr[j+1] === 9)
//             {
//                 console.log(arr[j]);
//                 console.log(`the valie is ${j}  ${j+1}`);
//                 break;

//             }
// }


// var twoSum = function(nums, target) {

//     function twoSum(nums, target) {
//         const numMap = new Map(); 
        
//         for (let i = 0; i < nums.length; i++) {
//             const complement = target - nums[i]; 
            
//             if (numMap.has(complement)) {// Return the indices of the two numbers
//             return [numMap.get(complement), i];
//             }
            
           
//             numMap.set(nums[i], i);
//         }
        
//         return []; // Return an empty array if no solution is found (though the problem guarantees one solution)
//     }
//     }




    var twoSum = function(nums, target) {

        for(i = 0; i < nums.length ; i ++)
        for(j=i +1 ; j < nums.length;j++)
        {
            console.log(nums[j]);
            if(nums[i] + nums[j] === target)
                    {
                       // console.log(nums[j]);
                       // console.log(`the valie is ${j}  ${j+1}`);
                       // let arr = [j , j+1]
                        return[i , j];
                     
        
                    }
        }
        
        
            
            
};
console.log(twoSum(arr, 6))

// correct solution for the problem

var twoSum = function(nums, target) {

    let prevMap = {}; // val: index
            for (let i = 0; i < nums.length; i++) {
                let n = nums[i];
                let diff = target - n;
                if (diff in prevMap) {
                    return [prevMap[diff], i];
                }
                prevMap[n] = i;
            }
            return;
    
    
        
        
    };
