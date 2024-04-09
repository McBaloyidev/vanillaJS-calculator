const clearScreen = () => {
  document.getElementById("result").value = "";
};

const display = (value) => {
  document.getElementById("result").value += value;
};

const backspace = () => {
  document.getElementById("result").value = document
    .getElementById("result")
    .value.slice(0, -1);
};

const calculate = () => {
  let p = document.getElementById("result").value;
  let q = eval(p);
  document.getElementById("result").value = q;
};
