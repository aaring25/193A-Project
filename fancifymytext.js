function makeBigger() {
  document.getElementById("fancyText").style.fontSize = "24pt";
  alert("Hello, world!");
}

function applyFancy() {
  let textArea = document.getElementById("fancyText");
  textArea.style.fontWeight = "bold";
  textArea.style.color = "blue";
  textArea.style.textDecoration = "underline";
}

function applyBoring() {
  let textArea = document.getElementById("fancyText");
  textArea.style.fontWeight = "normal";
  textArea.style.color = "black";
  textArea.style.textDecoration = "none";
}

function mooText() {
  let textArea = document.getElementById("fancyText");
  let text = textArea.value.toUpperCase();

  let parts = text.split(".");
  for (let i = 0; i < parts.length - 1; i++) {
    parts[i] = parts[i].trim() + "-Moo";
  }
  textArea.value = parts.join(". ");
}
