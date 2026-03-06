
      function generateGithubLink() {
        const githubInputElement = document.getElementById("githubInput");
        const resultElement = document.getElementById("result");

        const githubInput = githubInputElement.value;
        const result = resultElement.value;

        const link = githubInput;
        resultElement.innerText = "https://github.com/" + link;
        return;
      }

      const buttonElement = document.getElementById("generateBtn");
      buttonElement.addEventListener("click", generateGithubLink);
  
