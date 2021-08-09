(() => {
  let resultElem;
  let resultTextElem;
  let errorMsgElem;
  let copyMsgElem;

  function init() {
    const inputElem = document.querySelector("input");
    inputElem.oninput = onChange;
    inputElem.focus();
    inputElem.onclick = () => inputElem.select();

    resultElem = document.querySelector(".result");
    resultElem.onclick = copyText;
    resultTextElem = document.querySelector("#result-text");
    errorMsgElem = document.querySelector(".error-msg");
    copyMsgElem = document.querySelector(".copy-msg");

    copyMsgElem.classList.add("smooth");
  }

  function blinkResultElem() {
    resultElem.classList.add("blur");
    setTimeout(() => {
      resultElem.classList.remove("blur");
    }, 200);
  }

  function showCopyMsg() {
    copyMsgElem.classList.remove("invisible");
    setTimeout(() => {
      copyMsgElem.classList.add("invisible");
    }, 2000);
  }

  function copyText() {
    const resultText = resultTextElem.innerText;
    navigator.clipboard.writeText(resultText);

    blinkResultElem();
    showCopyMsg();
  }

  function aToB(value) {
    const decodedValue = atob(value);

    return decodedValue;
  }

  function openNewTab(url) {
    if (typeof url !== "string" || !url.includes("http")) {
      return;
    }

    window.open(url, "_blank");
  }

  function onChange(e) {
    const { value } = e.target;

    let decodedValue;
    try {
      errorMsgElem.classList.add("hide");
      decodedValue = aToB(value);
    } catch (error) {
      errorMsgElem.classList.remove("hide");
      return;
    }

    openNewTab(decodedValue);

    resultTextElem.innerText = decodedValue;
  }

  window.onload = init;
})();
