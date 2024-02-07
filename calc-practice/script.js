let outputElement = document.getElementById("output");
let expression = "";

function appendSymbol(symbol) {
  expression += symbol;
  updateOutput();
}

function clearOutput() {
  expression = "";
  updateOutput();
}

function deleteLast() {
  expression = expression.slice(0, -1);
  updateOutput();
}

function calculateResult() {
  try {
    const result = eval(expression);
    expression = result.toString();
    updateOutput();
  } catch (error) {
    expression = "Error";
    updateOutput();
  }
}

function updateOutput() {
  outputElement.textContent = expression || "0";
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (/[0-9]/.test(key)) {
    appendSymbol(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    appendSymbol(key);
  } else if (key === ".") {
    appendSymbol(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearOutput();
  }
});
outputElement.addEventListener("click", function () {
  var textToCopy = document.getElementById("output").innerText;
  var dummyTextArea = document.createElement("textarea");
  dummyTextArea.value = textToCopy;
  document.body.appendChild(dummyTextArea);
  dummyTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(dummyTextArea);

});
