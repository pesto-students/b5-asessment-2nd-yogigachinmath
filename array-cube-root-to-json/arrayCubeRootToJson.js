let cubeValues = [0];

const arrayCubeRootToJson = arr => {
    
    if(!arr || typeof(arr) === Array)
        throw TypeError("Array is Required");

    let ans = {};
        for(let element of arr) {
            if(!element || isNaN(element)){ 
                throw TypeError("The Number is required");
            }
            ans[element] = Math.cbrt(element);
    };
    return ans;
};

// console.log(arrayCubeRootToJson([-1, 1, Infinity, 64, -64]));

module.exports =  { arrayCubeRootToJson };
 