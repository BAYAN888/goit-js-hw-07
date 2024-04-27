const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const trimmedName = nameInput.value.trim();

  if (trimmedName) {
    nameOutput.textContent = trimmedName;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
