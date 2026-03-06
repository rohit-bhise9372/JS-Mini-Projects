
      function generateWamiLink() {
        const inputElement = document.getElementById("numberInput");
        const messageInputElement = document.getElementById("messageInput");
        const resultElement = document.getElementById("result");

        const numberInput = inputElement.value;
        const messageInput = messageInputElement.value;

        const encodedNumber = encodeURIComponent(numberInput);
        const encodedMessage = encodeURIComponent(messageInput);

        const link =
          "https://wa.me/+91" + encodedNumber + "?text=" + encodedMessage;

        resultElement.innerText = link;
      }

      const buttonElement = document.getElementById("generateBtn");
      buttonElement.addEventListener("click", generateWamiLink);
