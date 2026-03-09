
      function calculateTotalCost() {
        const transportInputElement = document.getElementById("transportInput");
        const foodInputElement = document.getElementById("foodInput");
        const activitiesInputElement =
          document.getElementById("activitiesInput");
        const hotelInputElement = document.getElementById("hotelInput");

        const resultElement = document.getElementById("result");

        const transportInput = Number(transportInputElement.value);
        const foodInput = Number(foodInputElement.value);
        const activitiesInput = Number(activitiesInputElement.value);
        const hotelInput = hotelInputElement.value;

        let hotelCost = 0;

        if (hotelInput === "budget") {
          hotelCost = 1000;
        } else if (hotelInput === "standard") {
          hotelCost = 2500;
        } else {
          hotelCost = 3000;
        }

        const total = transportInput + foodInput + activitiesInput + hotelCost;
        const finalTotal = total.toFixed(2);

        resultElement.innerText =
          " Total trip cost: " +
          "\u20B9" +
          finalTotal +
          " (Hotel cost: " +
          "\u20B9" +
          hotelCost +
          ")";
      }

      const calculateBtnElement = document.getElementById("calculateBtn");
      calculateBtnElement.addEventListener("click", calculateTotalCost);
