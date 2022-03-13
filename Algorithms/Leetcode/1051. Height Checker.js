const heightChecker = function(heights) {
  let checker = [...heights];
  let ar = heights.sort((a,b)=>{
       return a-b; 
  });
  
  let res = 0;
  
  for(let i=0; i<ar.length; i++) {
        if(ar[i] !== checker[i]) {
            res++;
        }
  }
  
    return res;
};

