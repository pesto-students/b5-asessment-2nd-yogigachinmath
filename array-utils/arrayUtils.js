


// map 


let _map = function(cb) {
  if(!this) {
    throw new TypeError("Array.prototype.map called on null or undefined" )
  }
  if(!cb || typeof(cb) !== "function") {
    throw new TypeError("callack should be function")
  }
 
  let k = 0, result = [];
  
  while(k < this.length) {
    result.push(cb(this[k],k, this));
    k++;
  }

  return result;
}
Array.prototype._map = _map;

// [].map()
// let val = [1,2,3]._map((res, index) => {
//   // console.log(res)
//   return res * index;
// });
//   console.log(val);
  

//filter
// [].filter()
let _filter = function(cb) {
  
  if(!this) {
    throw new TypeError("Array.prototype.map called on null or undefined" )
  }
  if(!cb || typeof(cb) !== "function") {
    throw new TypeError("callack should be function")
  }

  let k = 0, result = [];
  
  while(k < this.length) {
    if(cb(this[k], k, this))
      result.push(this[k]);
    k++;
  }

  return result;
}
Array.prototype._filter = _filter;
// let val = [1,2,3]._filter((res, index) => index % 2 === 0 );
//   console.log(val);

 

  //reduce
  let _reduce = function(cb, initialVal) {
    
    if(this === null || this === undefined) {
      throw new TypeError("Array.prototype.map called on null or undefined" )
    }
    if(!cb || typeof(cb) !== "function") {
      throw new TypeError("callack should be function")
    }
    if(!this.length) {
      if(arguments.length < 2) {
        throw new TypeError('Reduce of empty array with no initial value');
      } else if(arguments.length === 2)
        return initialVal;
    }
    let k = 0, acc = arguments.length < 2 ? this[k++] : initialVal;

    while(k < this.length) {
      acc = cb(acc, this[k], k, this);  
      k++;
    }
    return acc;
  }

  // Array.prototype._reduce = _reduce;
  // let sum = (a,b) => a+b;
  // Array.prototype._reduce.call(null, sum , 1);
  // let val = [1,2,3,4]._reduce((acc, res, index) => {
  //    acc = res + acc;
  //    return acc; 
  // }, 0);
  // console.log(val);


  //forEach
  let _forEach = function(cb) {
    if(!this) {
      throw new TypeError("Array.prototype.map called on null or undefined" )
    }
    if(!cb || typeof(cb) !== "function") {
      throw new TypeError("callack should be function")
    }
  
    let k = 0;
    
    while(k < this.length) {
      cb(this[k],k, this);
      k++;
    }
  }

  
  
module.exports =  {
  _forEach,
  _map,
  _filter,
  _reduce,
}