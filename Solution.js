function solution (input) {
  input = input.replace(/\D/g,'');
  if(input.length == 0) return "Error: Input should have an number.";
  if(input.length == 1) return input;
  

  let arr = [];
  for(let i = 0; i < input.length; i++){
      const current = input[i];
      const remaining = input.slice(0,i) + input.slice(i + 1); 
      
      for(let j = 0; j < remaining.length; j++){
          arr.push(current + solution(remaining)[j]);
      }
  }

  let result = arr.sort(function(a,b){return b-a});

  return result;

}

// some example inputs
console.log(solution('326').join(",")); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D').join(",")); // expected ouput 632,623,362,326,263,236
console.log(solution('ABC')); // Output Error

//console.log(solution('326')); // correct output but as array
//console.log(solution('A 3B2 C6D')); // correct output but as array
