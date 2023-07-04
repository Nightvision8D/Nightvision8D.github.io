document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("save_button");

  button.addEventListener("click", function () {
    var inputList = document.getElementsByClassName("ergebnis");
    for (let i = 0; i < inputList.length; i++) {
      let input = inputList[i];
      if (input.value != null) {
        let value = parseInt(input.value);
        if (value > 0) {
          let otherPlayerCountColId = 0;
          let colId = parseInt(input.id.split("_")[1]);
          let rowId = parseInt(input.id.split("_")[0]);
          if (colId % 2 == 0) {
            otherPlayerCountColId = colId - 1;
          } else {
            otherPlayerCountColId = colId + 1;
          }
          let otherPlayerElement = document.getElementById(rowId + "_" + otherPlayerCountColId);
          if (otherPlayerElement != null) {
            console.log(rowId + "_" + colId + ": " + otherPlayerElement.id);
            let otherPlayerCount = otherPlayerElement.value == null ? 0 : parseInt(otherPlayerElement.value);
            let winnerElement = document.getElementById("insert_" + parseInt(rowId + 1) + "_" + getWinnerColId(colId));
            if (value > otherPlayerCount) {
              winnerElement.child;
              addElements(input.parentElement.firstElementChild.innerHTML, winnerElement, rowId + 1 + "_" + getWinnerColId(colId), rowId + 1);
            } else if (value < otherPlayerCount) {
              addElements(otherPlayerElement.parentElement.firstElementChild.innerHTML, winnerElement, rowId + 1 + "_" + getWinnerColId(colId), rowId + 1);
            }
            checkStepUpdates(rowId + 1, winnerElement);
          }
        }
      }
    }
  });
});

function checkStepUpdates(row, element) {
  if (row == 3) {
    document.getElementById("podest").removeAttribute("style");
    document.getElementById("step_erster").firstElementChild.innerHTML = element.firstElementChild.innerHTML;

    let secondRow = new Array(document.getElementById("2_1"), document.getElementById("2_2"));
    let minWinSecond = 0;
    for (let i = 0; i < secondRow.length; i++) {
      if (parseInt(secondRow[i].value) > minWinSecond) {
        if (secondRow[i].parentElement.firstElementChild.innerHTML != element.firstElementChild.innerHTML) {
          minWinSecond = parseInt(secondRow[i].value);
        }
      }
    }
    for (let i = 0; i < secondRow.length; i++) {
      let el = secondRow[i];
      if (minWinSecond == parseInt(el.value)) {
        document.getElementById("step_zweiter").firstElementChild.innerHTML = el.parentElement.firstElementChild.innerHTML;
        break;
      }
    }

    let firstRow = new Array(document.getElementById("1_1"), document.getElementById("1_2"), document.getElementById("1_3"), document.getElementById("1_4"));
    let minWinFirst = 0;
    for (let i = 0; i < firstRow.length; i++) {
      if (parseInt(firstRow[i].value) > minWinFirst) {
        if (firstRow[i].parentElement.firstElementChild.innerHTML != element.firstElementChild.innerHTML && firstRow[i].parentElement.firstElementChild.innerHTML != document.getElementById("step_zweiter").firstElementChild.innerHTML) {
          minWinFirst = parseInt(firstRow[i].value);
        }
      }
    }
    for (let i = 0; i < firstRow.length; i++) {
      let el = firstRow[i];
      if (minWinFirst == parseInt(el.value)) {
        document.getElementById("step_dritter").firstElementChild.innerHTML = el.parentElement.firstElementChild.innerHTML;
        break;
      }
    }
  }
}

function addElements(name, element, inputId, rowId) {
  if (element.childElementCount > 0) {
    element.firstElementChild.innerHTML = name;
    return;
  }
  let nameElement = document.createElement("span");
  nameElement.innerHTML = name;
  if (rowId != 3) {
    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "number");
    inputElement.setAttribute("placeholder", "0");
    inputElement.setAttribute("id", inputId);
    inputElement.classList.add("ergebnis");
    element.replaceChildren(nameElement, inputElement);
  } else {
    element.replaceChildren(nameElement);
  }
}

function getWinnerColId(colId) {
  if (colId == 1 || colId == 2) {
    return 1;
  } else if (colId == 3 || colId == 4) {
    return 2;
  } else if (colId == 5 || colId == 6) {
    return 3;
  } else if (colId == 7 || colId == 8) {
    return 4;
  }
}
