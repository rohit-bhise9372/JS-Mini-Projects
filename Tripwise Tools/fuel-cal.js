
      function calculateSpeed() {
        const distanceInputElement = document.getElementById("distanceInput");
        const fuelEfficiencyInputElement = document.getElementById(
          "fuelEfficiencyInput"
        );
        const fuelPriceInputElement = document.getElementById("fuelPriceInput");
        const resultElement = document.getElementById("result");

        const distanceInput = Number(distanceInputElement.value);
        const fuelEfficiencyInput = Number(fuelEfficiencyInputElement.value);
        const fuelPriceInput = Number(fuelPriceInputElement.value);

        const fuelNeeded = distanceInput / fuelEfficiencyInput;
        const totalCost = fuelNeeded * fuelPriceInput;
        const finalCost = totalCost.toFixed(2);

        resultElement.innerText = "Total fuel cost: " + "\u20B9" + finalCost;
      }

      const calculateBtnElement = document.getElementById("calculateBtn");
      calculateBtnElement.addEventListener("click", calculateSpeed);
