
      const splitBtn = document.getElementById("splitBtn");

      function finalSplitCalculations(totalAmount, numberOfPeople) {
        const amountPerPerson = totalAmount / numberOfPeople;
        return amountPerPerson.toFixed(2);
      }
      function handleCalculations() {
        const inputAmountElement = document.getElementById("inputAmount");
        const peopleCountElement = document.getElementById("peopleCount");
        const resultElement = document.getElementById("result");

        const totalAmount = Number(inputAmountElement.value);
        const numberOfPeople = Number(peopleCountElement.value);

        const splitCalculation = finalSplitCalculations(
          totalAmount,
          numberOfPeople
        );

        resultElement.innerText =
          "Each person should pay \u20B9" + splitCalculation;
      }

      splitBtn.addEventListener("click", handleCalculations);



  </body>
