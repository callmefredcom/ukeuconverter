// initialize input fields and select options

const ukInput = document.getElementById('uk_number');
const euInput = document.getElementById('eu_number');
const imperialSelect = document.getElementById('imperial');
const metricSelect = document.getElementById('metric');

const ukInput2 = document.getElementById('uk_number2');
const euInput2 = document.getElementById('eu_number2');
const imperialSelect2 = document.getElementById('imperial2');
const metricSelect2 = document.getElementById('metric2');

const ukInput3 = document.getElementById('uk_number3');
const euInput3 = document.getElementById('eu_number3');
const imperialSelect3 = document.getElementById('imperial3');
const metricSelect3 = document.getElementById('metric3');

const ukInput4 = document.getElementById('uk_number4');
const euInput4 = document.getElementById('eu_number4');
const imperialSelect4 = document.getElementById('imperial4');
const metricSelect4 = document.getElementById('metric4');


// length conversion

function convert(value) {
  const imperialUnit = imperialSelect.value;
  const metricUnit = metricSelect.value;
  const ukValue = parseFloat(ukInput.value);
  const euValue = parseFloat(euInput.value);

if  (!isNaN(ukValue)) {
    switch (imperialUnit) {
      case 'inches':
        switch (metricUnit) {
          case 'cm':
            euInput.value = ukValue * 2.54;
            break;
          case 'm':
            euInput.value = ukValue * 0.0254;
            break;
          case 'km':
            euInput.value = ukValue * 0.0000254;
            break;
        }
        break;
      case 'feet':
        switch (metricUnit) {
          case 'cm':
            euInput.value = ukValue * 30.48;
            break;
          case 'm':
            euInput.value = ukValue * 0.3048;
            break;
          case 'km':
            euInput.value = ukValue * 0.0003048.toFixed(4);
            break;
        }
        break;
      case 'yards':
        switch (metricUnit) {
          case 'cm':
            euInput.value = ukValue * 91.44;
            break;
          case 'm':
            euInput.value = ukValue * 0.9144;
            break;
          case 'km':
            euInput.value = ukValue * 0.0009144.toFixed(4);
            break;
        }
        break;
      case 'miles':
        switch (metricUnit) {
          case 'cm':
            euInput.value = ukValue * 160934.4;
            break;
          case 'm':
            euInput.value = ukValue * 1609.344;
            break;
          case 'km':
            euInput.value = ukValue * 1.609344.toFixed(4);
            break;
        }
        break;

    }
   } else if  (!isNaN(euValue)) {
    switch (metricUnit) {
      case 'cm':
        switch (imperialUnit) {
          case 'inches':
            ukInput.value = euValue / 2.54;
            break;
          case 'feet':
            ukInput.value = euValue / 30.48;
            break;
          case 'yards':
            ukInput.value = euValue / 91.44;
            break;
          case 'miles':
            ukInput.value = euValue / 160934.4.toFixed(4);
            break;
        }
        break;
      case 'm':
        switch (imperialUnit) {
          case 'inches':
            ukInput.value = euValue / 0.0254;
            break;
          case 'feet':
            ukInput.value = euValue / 0.3048;
            break;
          case 'yards':
            ukInput.value = euValue / 0.9144;
            break;
          case 'miles':
            ukInput.value = euValue / 1609.344.toFixed(4);
            break;
        }
        break;
      case 'km':
        switch (imperialUnit) {
          case 'inches':
            ukInput.value = euValue / 0.0000254;
            break;
          case 'feet':
            ukInput.value = euValue / 0.0003048;
            break;
          case 'yards':
            ukInput.value = euValue / 0.0009144;
            break;
            case 'miles':
            ukInput.value = euValue / 1.609344.toFixed(4);
            break;
        }
        break;
    }
    }
    }

// event listeners

imperialSelect.addEventListener('change', convert);
metricSelect.addEventListener('change', convert);

let lastChangedField;

document.getElementById("uk_number").addEventListener("input", function() {
    lastChangedField = "uk_number";
});

document.getElementById("eu_number").addEventListener("input", function() {
    lastChangedField = "eu_number";
});

// update conversion when input changes

function updateConversion() {
    if (lastChangedField === "uk_number") {
        document.getElementById("eu_number").value = "";
    } else if (lastChangedField === "eu_number") {
        document.getElementById("uk_number").value = "";
    }
    convert();
}

// clear fields when button is clicked

function clearFields() {
    document.getElementById("uk_number").value = "";
    document.getElementById("eu_number").value = "";
    }

// volume conversion

function convert2(value) {

  const imperialUnit2 = imperialSelect2.value;
  const metricUnit2 = metricSelect2.value;
  const ukValue2 = parseFloat(ukInput2.value);
  const euValue2 = parseFloat(euInput2.value);

if (!isNaN(ukValue2)) {
const inputValue = parseFloat(value);
  switch (imperialUnit2) {
    case 'ounce':
      switch (metricUnit2) {
        case 'ml':
          euInput2.value = ukValue2 * 28.4131;
          console.log('euInput2.value: ', euInput2.value);
          break;
        case 'l':
          euInput2.value = ukValue2 * 0.0284131;
          break;
      }
      break;
    case 'pint':
      switch (metricUnit2) {
        case 'ml':
          euInput2.value = ukValue2 * 568.261;
          break;
        case 'l':
          euInput2.value = ukValue2 * 0.568261;
          break;
      }
      break;
    case 'gallon':
      switch (metricUnit2) {
        case 'ml':
          euInput2.value = ukValue2 * 4546.09;
          break;
        case 'l':
          euInput2.value = ukValue2 * 4.54609;
          break;
      }
      break;
  }
} else if (!isNaN(euValue2)) {
const inputValue = parseFloat(value);
  switch (metricUnit2) {
    case 'ml':
      switch (imperialUnit2) {
        case 'ounce':
          ukInput2.value = euValue2 / 28.4131;
          break;
        case 'pint':
          ukInput2.value = euValue2 / 568.261;
          break;
        case 'gallon':
          ukInput2.value = euValue2 / 4546.09;
          break;
      }
      break;
    case 'l':
      switch (imperialUnit2) {
        case 'ounce':
          ukInput2.value = euValue2 / 0.0284131;
          break;
        case 'pint':
          ukInput2.value = euValue2 / 0.568261;
          break;
        case 'gallon':
          ukInput2.value = euValue2 / 4.54609;
          break;
      }
      break;
  }
}

}

// event listeners

imperialSelect2.addEventListener('change', convert2);
metricSelect2.addEventListener('change', convert2);

let lastChangedField2;

document.getElementById("uk_number2").addEventListener("input", function() {
    lastChangedField2 = "uk_number2";
});

document.getElementById("eu_number2").addEventListener("input", function() {
    lastChangedField2 = "eu_number2";
});

// update conversion when input changes

function updateConversion2() {
  let inputValue;
  if (lastChangedField2 === "uk_number2") {
    inputValue = ukInput2.value;
    euInput2.value = "";
  } else if (lastChangedField2 === "eu_number2") {
    inputValue = euInput2.value;
    ukInput2.value = "";
  }
  convert2(inputValue);
}

// clear fields when button is clicked

function clearFields2() {
    document.getElementById("uk_number2").value = "";
    document.getElementById("eu_number2").value = "";
    }

// area conversion

function convert3(value) {

  const imperialUnit3 = imperialSelect3.value;
  const metricUnit3 = metricSelect3.value;
  const ukValue3 = parseFloat(ukInput3.value);
  const euValue3 = parseFloat(euInput3.value);

  if (!isNaN(ukValue3)) {
    const inputValue = parseFloat(value);
    switch (imperialUnit3) {
      case 'sqfoot':
        switch (metricUnit3) {
          case 'sqm':
            euInput3.value = ukValue3 * 0.092903;
            break;
          case 'hectare':
            euInput3.value = ukValue3 * 0.0000092903;
            break;
        }
        break;
      case 'rood':
        switch (metricUnit3) {
          case 'sqm':
            euInput3.value = ukValue3 * 1011.7141;
            break;
          case 'hectare':
            euInput3.value = ukValue3 * 0.10117141;
            break;
        }
        break;
      case 'acre':
        switch (metricUnit3) {
          case 'sqm':
            euInput3.value = ukValue3 * 4046.8564;
            break;
          case 'hectare':
            euInput3.value = ukValue3 * 0.40468564;
            break;
        }
        break;
    }
  } else if (!isNaN(euValue3)) {
    const inputValue = parseFloat(value);
    switch (metricUnit3) {
      case 'sqm':
        switch (imperialUnit3) {
          case 'sqfoot':
            ukInput3.value = euValue3 / 0.092903;
            break;
          case 'rood':
            ukInput3.value = euValue3 / 1011.7141;
            break;
          case 'acre':
            ukInput3.value = euValue3 / 4046.8564;
            break;
        }
        break;
      case 'hectare':
        switch (imperialUnit3) {
          case 'sqfoot':
            ukInput3.value = euValue3 / 0.0000092903;
            break;
          case 'rood':
            ukInput3.value = euValue3 / 0.10117141;
            break;
          case 'acre':
            ukInput3.value = euValue3 / 0.40468564;
            break;
        }
        break;
    }
  }
}

// event listeners

imperialSelect3.addEventListener('change', convert3);
metricSelect3.addEventListener('change', convert3);

let lastChangedField3;

document.getElementById("uk_number3").addEventListener("input", function() {
    lastChangedField3 = "uk_number3";
});

document.getElementById("eu_number3").addEventListener("input", function() {
    lastChangedField3 = "eu_number3";
});

// update conversion when input changes

function updateConversion3() {
  let inputValue;
  if (lastChangedField3 === "uk_number3") {
    inputValue = ukInput3.value;
    euInput3.value = "";
  } else if (lastChangedField3 === "eu_number3") {
    inputValue = euInput3.value;
    ukInput3.value = "";
  }
  convert3(inputValue);
}

// clear fields when button is clicked

function clearFields3() {
    document.getElementById("uk_number3").value = "";
    document.getElementById("eu_number3").value = "";
    }


// weight conversion

function convert4(value) {
  const imperialUnit4 = imperialSelect4.value;
  const metricUnit4 = metricSelect4.value;
  const ukValue4 = parseFloat(ukInput4.value);
  const euValue4 = parseFloat(euInput4.value);

  if (!isNaN(ukValue4)) {
    const inputValue = parseFloat(value);
    switch (imperialUnit4) {
      case 'ounce':
        switch (metricUnit4) {
          case 'g':
            euInput4.value = ukValue4 * 28.3495;
            break;
          case 'kg':
            euInput4.value = ukValue4 * 0.0283495;
            break;
        }
        break;
      case 'pound':
        switch (metricUnit4) {
          case 'g':
            euInput4.value = ukValue4 * 453.592;
            break;
          case 'kg':
            euInput4.value = ukValue4 * 0.453592;
            break;
        }
        break;
      case 'stone':
        switch (metricUnit4) {
          case 'g':
            euInput4.value = ukValue4 * 6350.29;
            break;
          case 'kg':
            euInput4.value = ukValue4 * 6.35029;
            break;
        }
        break;
    }
  } else if (!isNaN(euValue4)) {
    const inputValue = parseFloat(value);
    switch (metricUnit4) {
      case 'g':
        switch (imperialUnit4) {
          case 'ounce':
            ukInput4.value = euValue4 / 28.3495;
            break;
          case 'pound':
            ukInput4.value = euValue4 / 453.592;
            break;
          case 'stone':
            ukInput4.value = euValue4 / 6350.29;
            break;
        }
        break;
      case 'kg':
        switch (imperialUnit4) {
          case 'ounce':
            ukInput4.value = euValue4 / 0.0283495;
            break;
          case 'pound':
            ukInput4.value = euValue4 / 0.453592;
            break;
          case 'stone':
            ukInput4.value = euValue4 / 6.35029;
            break;
        }
        break;
    }
  }
}

// event listeners

imperialSelect4.addEventListener('change', convert4);
metricSelect4.addEventListener('change', convert4);

let lastChangedField4;

document.getElementById("uk_number4").addEventListener("input", function() {
    lastChangedField4 = "uk_number4";
});

document.getElementById("eu_number4").addEventListener("input", function() {
    lastChangedField4 = "eu_number4";
});

// update conversion when input changes

function updateConversion4() {
  let inputValue;
  if (lastChangedField4 === "uk_number4") {
    inputValue = ukInput4.value;
    euInput3.value = "";
  } else if (lastChangedField4 === "eu_number4") {
    inputValue = euInput4.value;
    ukInput4.value = "";
  }
  convert4(inputValue);
}

// clear fields when button is clicked

function clearFields4() {
    document.getElementById("uk_number4").value = "";
    document.getElementById("eu_number4").value = "";
    }