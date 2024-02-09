function displayQuote(response) {

  
  new Typewriter("#quote2", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "ff6b2813f5d6ff41a2413tcof35fc170";
  let prompt= `User instructions: Generate a quote about ${instructionsInput.value} include the 'person who said it' in <strong> element`;
  let context= "You are a language professor and to tell your students quotes during lessons. Your mission is to generate a quote in basic HTML. Please follow the user instructions.";
  let apiURL =
    `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;



    let quoteElement = document.querySelector("#quote2");
    quoteElement.innerHTML = `<div class="generating"> Generating ${instructionsInput.value} quote, Please wait........</div>`;
   
  axios.get(apiURL).then(displayQuote);

}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
