let resultDisplay = document.getElementById("result");
let currentInput = "";

// Helper function to evaluate the expression
function evaluateExpression(expr) {
  try {
    expr = expr.replace(/X/g, '*').replace(/÷/g, '/');
    let result = eval(expr);
    return result;
  } catch {
    return "Error";
  }
}

// Attach click events to all SVG text elements
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("svg text").forEach(button => {
    button.addEventListener("click", () => {
      let value = button.textContent.trim();

      if (value === "AC") {
        currentInput = "";
      } else if (value === "=") {
        currentInput = evaluateExpression(currentInput).toString();
      } else if (value === "←" || value === "⇦") {
        currentInput = currentInput.slice(0, -1);
      } else {
        currentInput += value;
      }

      resultDisplay.textContent = currentInput || "0";
    });
  });
});



