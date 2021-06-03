describe("Basic tests",function(){
a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Test.assertEquals(comp(a1, a2), true)
a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [11*21, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Test.assertEquals(comp(a1, a2), false)
a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [11*11, 121*121, 144*144, 190*190, 161*161, 19*19, 144*144, 19*19]
Test.assertEquals(comp(a1, a2), false)
a1 = [2,1,3]
a2 = [18,1,2]
Test.assertEquals(comp(a1, a2), false)
a1 = []
a2 = []
Test.assertEquals(comp(a1, a2), true)
a1 = []
a2 = null
Test.assertEquals(comp(a1, a2), false)
a1 = [121, 144, 19, 161, 19, 144, 19, 11, 1008]
a2 = [11*11, 121*121, 144*144, 190*190, 161*161, 19*19, 144*144, 19*19]
Test.assertEquals(comp(a1, a2), false)
a1 = [10000000, 100000000]
a2 = [10000000 * 10000000, 100000000 * 100000000]
Test.assertEquals(comp(a1, a2), true)
a1 = [10000001, 100000000]
a2 = [10000000 * 10000000, 100000000 * 100000000]
Test.assertEquals(comp(a1, a2), false)
a1 = [2, 2, 3]
a2 = [4, 9, 9]
Test.assertEquals(comp(a1, a2), false)
a1 = [2, 2, 3]
a2 = [4, 4, 9]
Test.assertEquals(comp(a1, a2), true)
a1 = [4, 4]
a2 = [1, 31]
Test.assertEquals(comp(a1, a2), false)
a1 = [3, 4]
a2 = [0, 25]
Test.assertEquals(comp(a1, a2), false)
a1 = null
a2 = []
Test.assertEquals(comp(a1, a2), false)
})

describe("Random tests",function(){
function randint(a,b){return Math.floor(Math.random()*(b-a+1)+a);}

// removed
/*function sol0(a1, a2){
  a1=a1.sort(function(a,b){return b<a});
  a2=a2.sort(function(a,b){return b<a});
  for (var i in a1) if (Math.pow(a1[i],2)!=a2[i]) return false;
  return true;
}*/
  
function sol(a1, a2) {
  if(a1 == null || a2 == null) return false;
  a1.sort((a, b) => a - b); a2.sort((a, b) => a - b);
  return a1.map(v => v * v).every((v, i) => v == a2[i]);
}
  
// added 
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
//
  
for (let i=0;i<200;i++){
  // modified from 1,8 to 10,25
  testlen=randint(10,25);
  let a1=[], a2=[];
  for (let j=0;j<testlen;j++){
    //elem=randint(0,100);
    elem=randint(0, 10);
    a1.push(elem);
    a2.push(elem*elem);
  }
  // modified
  rn = randint(0, 100);
  if (rn % 3 === 0) {
      pos=randint(0,a2.length-1);
      //a2[pos]=a2[pos]+randint(0,1);
      a2[pos]=a2[pos]+1;
  }
  //
  // added
  a1 = shuffle(a1);
  a2 = shuffle(a2);
  //
  it("Testing for ["+a1.join(", ")+"] and ["+a2.join(", ")+"]",function(){
  Test.assertEquals(comp([].concat(a1),[].concat(a2)),sol(a1,a2),"It should work with random inputs too")
  })
}
})