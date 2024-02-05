function showTriangle(){
    document.getElementById("myDiv").innerHTML = generateTriangle()
}

function showTriangleCode(){
  document.getElementById('showCode').innerText = 
  `
{
function drawTriangle(){
  let n=5;
  let string="";
  for(let i=1;i<=n;i++) {
    for(let j=0;j<i;j++) {
      string+="*";
    }
    string+="<br/>";
  }
  return(string);
}
  drawTriangle()
}`
}

function generateTriangle() {
  let n=5;
  let string="";
  for(let i=1;i<=n;i++) {
    for(let j=0;j<i;j++) {
      string+="*";
    }
    string+="<br/>";
  }
  return(string);
}