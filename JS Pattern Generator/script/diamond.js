function showDiamond(){
    document.getElementById("myDiv").innerText = generateDia()
}

function showDownDiaCode(){
  document.getElementById('showCode').innerText = returnCodeDia()
}

function returnCodeDia(){
    return `{
    function drawDiamond() { 
        var n = 5;
        var result = "";
        // Upside pyramid
        for (let i = 1; i <= n; i++) {
        // printing spaces
        for (let j = n; j > i; j--) {
            result += " ";
        }
        // printing star
        for (let k = 0; k < i * 2 - 1; k++) {
            result += "*";
        }
        result += "\\n";
        }
        // downside pyramid
        for (let i = 1; i <= n - 1; i++) {
        // printing spaces
        for (let j = 0; j < i; j++) {
            result += " ";
        }
        // printing star
        for (let k = (n - i) * 2 - 1; k > 0; k--) {
            result += "*";
        }
        result += "\\n";
        }
        return result;
    }
    drawDiamond();
}`
}

function generateDia(){
    return eval(returnCodeDia());

}