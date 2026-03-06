
      function calculateBmiForMale(calculatedBmi) {
        if (calculatedBmi < 18.5) {
          return "Underweight";
        } else if (calculatedBmi < 25) {
          return "Normal";
        } else if (calculatedBmi < 30) {
          return "Overweight";
        } else {
          return "Obese";
        }
      }

      function calculateBmiForFemale(calculatedBmi) {
        if (calculatedBmi < 18) {
          return "Underweight";
        } else if (calculatedBmi < 24) {
          return "Normal";
        } else if (calculatedBmi < 29) {
          return "Overweight";
        } else {
          return "Obese";
        }
      }
      // only for the testing purpose
      // running tests for male category
      // console.log(calculateBmiForMale(17));
      // console.log(calculateBmiForMale(21));
      // console.log(calculateBmiForMale(27));
      // console.log(calculateBmiForMale(35));

      // only for the testing purpose
      // running tests for female category
      // console.log(calculateBmiForFemale(15));
      // console.log(calculateBmiForFemale(23));
      // console.log(calculateBmiForFemale(26));
      // console.log(calculateBmiForFemale(35));

      function calculateCategory(calculatedBmi, gender) {
        if (gender === "male") {
          return calculateBmiForMale(calculatedBmi);
        } else {
          return calculateBmiForFemale(calculatedBmi);
        }
      }
      function calculateBmi() {
        const weightElement = document.getElementById("weight");
        const heightElement = document.getElementById("height");
        const genderElement = document.getElementById("gender");
        const resultElement = document.getElementById("result");

        const weight = parseFloat(weightElement.value);
        const height = parseFloat(heightElement.value) / 100;
        const gender = genderElement.value;

        if (weight <= 0 || height <= 0) {
          resultElement.innerText = "Please enter valid weight and height.";
          return;
        }

        const bmi = weight / (height * height);
        const finalBmi = bmi.toFixed(2);

        const category = calculateCategory(bmi, gender);

        resultElement.innerText = "BMI: " + finalBmi + "-" + category;
      }

      const calculateBtnElement = document.getElementById("calculateBtn");
      calculateBtnElement.addEventListener("click", calculateBmi);
    
