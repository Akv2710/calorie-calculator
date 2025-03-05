function calculateCalories() {
  let gender = document.getElementById("gender").value;
  let age = parseInt(document.getElementById("age").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  let activity = parseFloat(document.getElementById("activity").value);

  let bmr = 0;

  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else if (gender === "female") {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  let totalCalories = Math.round(bmr * activity);

  document.getElementById("result").innerHTML =
    `Your Daily Calorie Requirement: <strong>${totalCalories} Calories</strong>`;
}
