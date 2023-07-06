// await document load
document.addEventListener("DOMContentLoaded", function () {
  // get save button
  let button = document.getElementById("save_button");
  // if button is clicked
  button.addEventListener("click", function () {
    // get array of all result inputs in table
    let inputList = document.getElementsByClassName("ergebnis");
    for (let i = 0; i < inputList.length; i++) {
      let input = inputList[i];
      let value = input.value == null ? 0 : parseInt(input.value);
      if (value >= 0) {
        let otherPlayerCountRowId = 0;
        // split id of input col_row
        let rowId = parseInt(input.id.split("_")[1]);
        let colId = parseInt(input.id.split("_")[0]);
        // get id of next row for the winner
        if (rowId % 2 == 0) {
          otherPlayerCountRowId = rowId - 1;
        } else {
          otherPlayerCountRowId = rowId + 1;
        }
        // get count of other player
        let otherPlayerElement = document.getElementById(colId + "_" + otherPlayerCountRowId);
        let otherPlayerCount = otherPlayerElement.value == null ? 0 : parseInt(otherPlayerElement.value);
        if (otherPlayerCount >= 0) {
          // get element where the winner name should be inserted
          let winnerElement = document.getElementById("insert_" + parseInt(colId + 1) + "_" + getWinnerRowId(rowId));
          // call method for insertion
          if (value > otherPlayerCount) {
            addElements(input.parentElement.firstElementChild.innerHTML, winnerElement, colId + 1 + "_" + getWinnerRowId(rowId), colId + 1);
          } else if (value < otherPlayerCount) {
            addElements(otherPlayerElement.parentElement.firstElementChild.innerHTML, winnerElement, colId + 1 + "_" + getWinnerRowId(rowId), colId + 1);
          }
          // check if winner steps should be updated
          checkStepUpdates(colId + 1, winnerElement);
        }
      }
    }
  });
});

// checks if winner steps should be updated and updates them
function checkStepUpdates(row, element) {
  // only if last row is reached
  if (row == 3) {
    document.getElementById("podest").removeAttribute("style");
    // set name for the winner
    document.getElementById("step_erster").firstElementChild.innerHTML = element.firstElementChild.innerHTML;

    // array with the elements in the second row
    let secondRow = new Array(document.getElementById("2_1"), document.getElementById("2_2"));
    let minWinSecond = 0;
    // get the highest win
    for (let i = 0; i < secondRow.length; i++) {
      if (parseInt(secondRow[i].value) > minWinSecond) {
        if (secondRow[i].parentElement.firstElementChild.innerHTML != element.firstElementChild.innerHTML) {
          minWinSecond = parseInt(secondRow[i].value);
        }
      }
    }
    // update the second step with the highest winner
    for (let i = 0; i < secondRow.length; i++) {
      let el = secondRow[i];
      if (minWinSecond == parseInt(el.value)) {
        document.getElementById("step_zweiter").firstElementChild.innerHTML = el.parentElement.firstElementChild.innerHTML;
        break;
      }
    }

    // array with the elements in the first row
    let firstRow = new Array(document.getElementById("1_1"), document.getElementById("1_2"), document.getElementById("1_3"), document.getElementById("1_4"));
    let minWinFirst = 0;
    // get the highest win and check that they're not at the step yet
    for (let i = 0; i < firstRow.length; i++) {
      if (parseInt(firstRow[i].value) > minWinFirst) {
        if (firstRow[i].parentElement.firstElementChild.innerHTML != element.firstElementChild.innerHTML && firstRow[i].parentElement.firstElementChild.innerHTML != document.getElementById("step_zweiter").firstElementChild.innerHTML) {
          minWinFirst = parseInt(firstRow[i].value);
        }
      }
    }
    // update the third step with the highest winner
    for (let i = 0; i < firstRow.length; i++) {
      let el = firstRow[i];
      if (minWinFirst == parseInt(el.value)) {
        document.getElementById("step_dritter").firstElementChild.innerHTML = el.parentElement.firstElementChild.innerHTML;
        break;
      }
    }
  }
}

// add elements for the winner to the next table row
function addElements(name, element, inputId, rowId) {
  // if elements are already present just update the name of the winner
  if (element.childElementCount > 0) {
    element.firstElementChild.innerHTML = name;
    return;
  }
  // otherwise create element and insert name
  let nameElement = document.createElement("span");
  nameElement.innerHTML = name;
  if (rowId != 3) {
    // create the result input if the insertion shouldn't be in the last row
    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "number");
    inputElement.setAttribute("placeholder", "0");
    inputElement.setAttribute("id", inputId);
    inputElement.classList.add("ergebnis");
    // replace all children with both elements
    element.replaceChildren(nameElement, inputElement);
  } else {
    // just replace all children with the name in the last row
    element.replaceChildren(nameElement);
  }
}

// get the next row for insertion
function getWinnerRowId(rowId) {
  if (rowId == 1 || rowId == 2) {
    return 1;
  } else if (rowId == 3 || rowId == 4) {
    return 2;
  } else if (rowId == 5 || rowId == 6) {
    return 3;
  } else if (rowId == 7 || rowId == 8) {
    return 4;
  }
}
