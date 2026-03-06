
      function calculateSteps() {
        const currentWeightElement = document.getElementById("currentWeight");
        const goalWeightElement = document.getElementById("goalWeight");
        const timePeriodElement = document.getElementById("timePeriod");
        const resultElement = document.getElementById("result");

        const currentWeight = currentWeightElement.value;
        const goalWeight = goalWeightElement.value;
        const timePeriod = timePeriodElement.value;

        if (goalWeight >= currentWeight || timePeriod <= 0) {
          resultElement.innerText =
            "Please enter a valid goal weight and time period.";
          return;
        }

        const kgToLose = currentWeight - goalWeight;
        const totalCaloriesToBurn = kgToLose * 7700;

        const totalDays = timePeriod * 30;

        const dailyCaloriesToBurn = totalCaloriesToBurn / totalDays;

        const steps = dailyCaloriesToBurn / 0.04;
        const roundedSteps = Math.round(steps);
        const stepsPerDay = roundedSteps;

        resultElement.innerText =
          "To reach your goal, walk at least " +
          stepsPerDay +
          " steps per day for " +
          totalDays +
          " Days ";
      }

      const calculateBtn = document.getElementById("calculateBtn");
      calculateBtn.addEventListener("click", calculateSteps);
