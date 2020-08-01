export const createTableRow = (items) => {
    const tr = document.createElement("tr");
  
    items.forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.append(td);
    });
  
    return tr;
};
  
  export const createCountryTableRow = ({ name, imgSrc }) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = name;
  
    const imgTd = document.createElement("td");
    const img = document.createElement("img");
    img.src = imgSrc;
    img.width = 30;
    imgTd.append(img);
  
    tr.append(td);
    tr.append(imgTd);
  
    return tr;
};