let textAreaInput = document.querySelector("#textAreaScreenInput");
let textAreaOutput = document.querySelector(".textMainScreenOutput");

textAreaInput.oninput = function(){
    let textAreaInputValue = textAreaInput.value;
    textAreaOutput.innerHTML = textAreaInputValue;
};
//Именение шрифта в поле ввода выражений через ползунок

var getValueFontSizeRange = document.getElementById("fontSizeRange");
var outputGetValueFontSizeRange = document.getElementById("fontSizeRangeValue");

getValueFontSizeRange.oninput = function(){
  outputGetValueFontSizeRange.innerHTML = getValueFontSizeRange.value;
  editFontSize = outputGetValueFontSizeRange.textContent + "px";
  console.log(outputGetValueFontSizeRange);
  textAreaOutput.style.fontSize = editFontSize;
};

//Именение шрифта в поле ввода выражений через ползунок//

//Именение межсимвольного интервала в поле ввода выражений через ползунок

var getValueLetterSpacingRange = document.getElementById("letterSpacingRange");
var outputLetterSpacingRange = document.getElementById("letterSpacingRangeValue");

getValueLetterSpacingRange.oninput = function(){
    outputLetterSpacingRange.innerHTML = getValueLetterSpacingRange.value;
  editFontSize = outputLetterSpacingRange.textContent + "px";
  textAreaOutput.style.letterSpacing = editFontSize;
};

//Именение межсимвольного интервала в поле ввода выражений через ползунок//


//Скриншот блока
var element = $("#saveResultScreen"); // global variable
var getCanvas; // global variable
function newImg(){
  html2canvas(element, {
    onrendered: function (canvas) {
      getCanvas = canvas;
    }   
  }
)};
$('document').ready(function(){
  newImg();
});
$("#download").on('click', function () {
  var imageData = getCanvas.toDataURL("image/png");
  // Now browser starts downloading it instead of just showing it
  var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
  $("#download").attr("download", "image.png").attr("href", newData);
  getCanvas = newImg();
});

//Скриншот блока//


//Перенос на новую строку
$('body').keyup(function(event) {
  if(event.keyCode == 13) {
    newString();
  }
});
$("#newString").on("click", function(){
  newString();
});
function newString(){
  textAreaInput.value += "</br>";
  textAreaInputValue = textAreaInput.value;
  textAreaOutput.innerHTML = textAreaInputValue;
};
//Перенос на новую строку//

//Жирный текст
$("#boldString").on("click", function(){
  textAreaInput.value += "<strong>Жирный текст</strong>";
  textAreaInputValue = textAreaInput.value;
  textAreaOutput.innerHTML = textAreaInputValue;
});
//Жирный текст//