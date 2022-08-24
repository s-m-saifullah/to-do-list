let count = 0;
document.getElementById("input-btn").addEventListener("click", function () {
  const inputValue = document.getElementById("input-value").value;
  const tableBody = document.getElementById("content-container");
  count++;
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <th scope="row">${count}</th>
  <td>${inputValue}</td>
  <td>
    <button class="done-btn btn btn-primary px-4 me-sm-1">Done</button> 
    <button class="delete-btn btn btn-warning px-4">Delete</button>  
  </td>
  `;
  tableBody.appendChild(tr);
  document.getElementById("input-value").value = "";

  const deleteBtns = document.getElementsByClassName("delete-btn");

  for (let deleteBtn of deleteBtns) {
    deleteBtn.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.style.display = "none";
    });
  }

  const doneBtns = document.getElementsByClassName("done-btn");

  for (let doneBtn of doneBtns) {
    doneBtn.addEventListener("click", function (event) {
      let textDeco = event.target.parentNode.parentNode.children[1].style;

      if (textDeco.textDecoration != "line-through") {
        textDeco.textDecoration = "line-through";
      } else {
        textDeco.textDecoration = "none";
      }

      if (event.target.innerHTML != "Done") {
        event.target.innerHTML = "Done";
      } else {
        event.target.innerHTML = "Undone";
      }
    });
  }

  const clearAllBtn = document.getElementById("clear-btn");

  if (deleteBtns.length >= 2) {
    clearAllBtn.classList.remove("d-none");
  }

  clearAllBtn.addEventListener("click", function (event) {
    tableBody.style.display = "none";
    event.target.style.display = "none";
  });
});
