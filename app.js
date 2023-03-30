const textInput = document.querySelector("#textarea-content");
const btnTranslate = document.querySelector("#btn-translate");
const divOutput = document.querySelector("#div-output");

let urlCreator = (inputText) => {
  const url = "https://api.funtranslations.com/translate/yoda.json?";
  return url + "text=" + inputText;
};

let getTranslated = (apiUrl) => {
  let promise = fetch(apiUrl);
  promise
    .then((Response) => Response.json())
    .then((json) => {
      return json.contents.translate;
    }); //.catch () => (console.warn("Problem found!"))
};

btnTranslate.addEventListener("click", () => {
  let apiUrl = urlCreator(textInput.value);
  divOutput.innerText = getTranslated(apiUrl) ;
});
