document.getElementById("firstname").setAttribute("required", true);
document.getElementById("lastname").setAttribute("required", true);
document.getElementById("email").setAttribute("required", true);
document.getElementById("email").setAttribute("pattern", ".+@canada\\.ca$");
document
  .getElementById("email")
  .setAttribute("title", "Only @canada.ca employees can register");
document.getElementById("hire_date").setAttribute("required", true);
document.querySelector('input[type="file"]').setAttribute("required", true);

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const hireDate = document.getElementById("hire_date").value;
  const photoFile = document.querySelector('input[type="file"]').files[0];

  const row = document.createElement("tr");

  const photoCell = document.createElement("td");
  const img = document.createElement("img");
  img.src = URL.createObjectURL(photoFile);
  img.alt = "Employee Photo";
  img.style.width = "50px";
  img.style.height = "50px";
  photoCell.appendChild(img);
  row.appendChild(photoCell);

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = firstName;
  row.appendChild(firstNameCell);

  const lastNameCell = document.createElement("td");
  lastNameCell.textContent = lastName;
  row.appendChild(lastNameCell);

  const emailCell = document.createElement("td");
  emailCell.textContent = email;
  row.appendChild(emailCell);

  const hireDateCell = document.createElement("td");
  hireDateCell.textContent = hireDate;
  row.appendChild(hireDateCell);

  const actionCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this employee?")) {
      row.remove();
    }
  });
  actionCell.appendChild(deleteButton);
  row.appendChild(actionCell);

  document.getElementById("employeeList").appendChild(row);

  document.querySelector("form").reset();
});
