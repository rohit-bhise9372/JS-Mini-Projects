
      function calculateSpeed() {
        const distanceInputElement = document.getElementById("distanceInput");
        const timeInputElement = document.getElementById("timeInput");
        const resultElement = document.getElementById("result");

        const distanceInput = distanceInputElement.value;
        const timeInput = timeInputElement.value;

        const speed = distanceInput / timeInput;
        const finalSpeed = speed.toFixed(2);

        resultElement.innerText = "Average Speed: " + finalSpeed + " km/h ";
      }

      const calculateBtnElement = document.getElementById("calculateBtn");
      calculateBtnElement.addEventListener("click", calculateSpeed);
