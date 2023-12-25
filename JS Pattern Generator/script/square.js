const button=document.getElementById('myButton');
const div=document.getElementById('myDiv');
const _div = document.getElementById('showCode')

button.addEventListener('click',changeContent);
button.addEventListener('click', showSquareCode);

function changeContent() {
  div.innerText=generateSquare()
}

function showSquareCode(){
  _div.innerText = ` let n = 5; 
  
  let string = "";

  for(let i = 0; i < n; i++) { 
    for(let j = 0; j < n; j++) { 
      string += "*";
    }
    
    string += "\n";
  }
  
    return(string);`
}

function generateSquare(){
    let n = 5; 

let string = "";

for(let i = 0; i < n; i++) { 
  for(let j = 0; j < n; j++) { 
    string += "*";
  }
  
  string += "\n";
}

  return(string);
}