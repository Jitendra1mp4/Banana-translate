const textInput = document.querySelector("#textarea-content");
const btnTranslate = document.querySelector("#btn-translate");
const divOutput = document.querySelector("#div-output");
const selectLanguage = document.querySelector("#select-language");
const url = "https://api.funtranslations.com/translate/";
let urlCreator = (lang, inputText) => {
  return url + lang + ".json?text=" + inputText;
};

let setTranslatedText = (apiUrl) => {
  let p = fetch(apiUrl);
  p.then((resolve) => resolve.json())
    .then((json) => (divOutput.innerText = json.contents.translated))
    .catch((er) => {
      divOutput.innerText = "🤦‍♂️Sorrrrry! there is some problem with server."
      console.error("Error occurred : " + er) ;
      // console.log(json) ;
  });
};

btnTranslate.addEventListener("click", () => {
  let translation = selectLanguage.value.toString().trim();
  let inputT = textInput.value.toString().trim();
  if (inputT !== "") {
    let apiUrl = urlCreator(translation, inputT);
    setTranslatedText(apiUrl);
  } else {
    divOutput.innerText = "Sorry! You haven't enter any sentence.";
  }
});
