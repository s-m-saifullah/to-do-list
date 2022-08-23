let count = 0;
document.getElementById ('input-btn').addEventListener('click', function(){
  const inputValue = document.getElementById('input-value').value;
  const tableBody = document.getElementById('content-container');
  count++;
  const tr = document.createElement('tr');
  tr.innerHTML = `
  <th scope="row">${count}</th>
  <td>${inputValue}</td>
  <td><button id="edit-btn" class="btn btn-primary w-50 me-sm-1">Edit</button> <button id="delete-btn" class="btn btn-warning w-50">Delete</button>  </td>
  `
  tableBody.appendChild(tr);
  document.getElementById('input-value').value = '';
})