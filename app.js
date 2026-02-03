import "./styles.css";
// 1. Select the form and output elements
const form = document.getElementById("myForm");
const output = document.getElementById("output");

// 2. Add an event listener for the 'submit' event
form.addEventListener("submit", (event) => {
  // 3. Prevent the default form submission
  event.preventDefault();

  // 4. Access input values
  const benchInput = document.getElementById("bench");
  const squatInput = document.getElementById("squat");
  const deadliftInput = document.getElementById("deadlift");
  const benchrepsInput = document.getElementById("benchreps");
  const squatrepsInput = document.getElementById("squatreps");
  const deadliftrepsInput = document.getElementById("deadliftreps");

  const benchValue = benchInput.value;
  const squatValue = squatInput.value;
  const deadliftValue = deadliftInput.value;
  const benchrepsValue = benchrepsInput.value;
  const squatrepsValue = squatrepsInput.value;
  const deadliftrepsValue = deadliftrepsInput.value;
  // Optional: Basic validation (e.g., check if fields are not empty)
  if (
    isNaN(benchValue) ||
    isNaN(squatValue) ||
    isNaN(deadliftValue) ||
    isNaN(benchrepsValue) ||
    isNaN(squatrepsValue) ||
    isNaN(deadliftrepsValue)
  ) {
    output.textContent = "enter a valid number";
    return;
  }
  if (
    benchValue === "" ||
    squatValue === "" ||
    deadliftValue === "" ||
    benchrepsValue === "" ||
    squatrepsValue === "" ||
    deadliftrepsValue === ""
  ) {
    output.textContent = "enter a value";
    return;
  }
  const benchMax = Number(Math.round(benchValue * (1 + benchrepsValue / 30)));
  const squatMax = Number(Math.round(squatValue * (1 + squatrepsValue / 30)));
  const deadliftMax = Number(
    Math.round(benchValue * (1 + deadliftrepsValue / 30))
  );
  const maxBenchStr = benchMax.toString();
  const maxSquatStr = squatMax.toString();
  const maxDeadStr = deadliftMax.toString();
  console.log(maxBenchStr);
  // 5. Process the data (example: log to console and display on page)
  console.log("Form Submitted:", {
    bench: benchValue,
    squat: squatValue,
    deadlift: deadliftValue,
    benchreps: benchrepsValue,
    squatreps: squatrepsValue,
    deadliftreps: deadliftrepsValue,
    benchPressMax: maxBenchStr,
  });

  output.textContent = `Your approximate bench press , ${maxBenchStr};
   Your approximate max squat =  ${maxSquatStr};
   your approximate deadlift max= ${maxDeadStr};`;

  //finding }the 1 rep max using formula
  // set variable to grab each individual piece of data
});
