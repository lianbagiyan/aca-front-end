const btn = document.querySelector(".button");

function addElems() {
  const tBody = document.getElementsByTagName("TBODY")[0];

  const name = document.querySelector(".input-name");
  const age = document.querySelector(".input-age");
  const grade = document.querySelector(".input-grade");

  let valueName = name.value;
  let valueAge = age.value;
  let valueGrade = grade.value;

  let textName = document.createTextNode(valueName);
  let textAge = document.createTextNode(valueAge);
  let textGrade = document.createTextNode(valueGrade);

  const tdName = document.createElement("td");
  const tdAge = document.createElement("td");
  const tdGrade = document.createElement("td");

  tdName.appendChild(textName);
  tdAge.appendChild(textAge);
  tdGrade.appendChild(textGrade);

  const tr = document.createElement("tr");

  tr.appendChild(tdName);
  tr.appendChild(tdAge);
  tr.appendChild(tdGrade);

  console.log(tr);

  tBody.append(tr);
}

btn.addEventListener("click", addElems);
  