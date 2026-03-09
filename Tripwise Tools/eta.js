
      function calculateSpeed() {
        const distanceInputElement = document.getElementById("distanceInput");
        const speedInputElement = document.getElementById("speedInput");
        const resultElement = document.getElementById("result");

        const distanceInput = distanceInputElement.value;
        const speedInput = speedInputElement.value;

        const eta = distanceInput / speedInput;
        const finalEta = eta.toFixed(2);

        resultElement.innerText =
          "Estimated Time of Arrival: " + finalEta + " hours ";
      }

      const calculateBtnElement = document.getElementById("calculateBtn");
      calculateBtnElement.addEventListener("click", calculateSpeed);
