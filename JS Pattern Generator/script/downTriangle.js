function showDownTri(){
    document.getElementById("myDiv").innerText = generateDownTri()
}

function showDownTriCode(){
  document.getElementById('showCode').innerText = 
  `
  {
function drawDownTriangle() {
  let n = 5;
  let string = "";
  for (let i = 0; i < n; i++) {
    // printing star
    for (let k = 0; k < n - i; k++) {
      string += "*";
    }
    string += "\n";
  }
  return(string);
}
  drawDownTriangle()
}`
}

function generateDownTri(){
    let n = 5;
    let string = "";
    for (let i = 0; i < n; i++) {
      // printing star
      for (let k = 0; k < n - i; k++) {
        string += "*";
      }
      string += "\n";
    }
    return(string);
}