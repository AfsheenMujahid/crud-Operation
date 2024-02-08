//  function addData() {
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var id = document.getElementById('id').value;

//     var table = document.getElementById('dataTable');
//     var newRow = table.insertRow(table.rows.length);
//     var cell1 = newRow.insertCell(0);
//     var cell2 = newRow.insertCell(1);
//     var cell3 = newRow.insertCell(2);
//     var cell4 = newRow.insertCell(3);

//     cell1.innerHTML = name;
//     cell2.innerHTML = email;
//     cell3.innerHTML = id;
//     cell4.innerHTML = '<button onclick="editData(this)">Edit</button> <button onclick="deleteData(this)">Delete</button>';
// }

// function editData(button) {
//     var row = button.parentNode.parentNode;
//     var name = row.cells[0].innerHTML;
//     var email = row.cells[1].innerHTML;
//     var id = row.cells[2].innerHTML;

//     document.getElementById('name').value = name;
//     document.getElementById('email').value = email;
//     document.getElementById('id').value = id;

//     // Change the button to "Save" and "Cancel"
//     button.innerHTML = "Save";
//     button.setAttribute("onclick", "saveData(this)");
//     var deleteButton = row.cells[3].getElementsByTagName("button")[1];
//     deleteButton.innerHTML = "Cancel";
//     deleteButton.setAttribute("onclick", "cancelEdit(this)");

//     row.remove();
// }

// function saveData(button) {
//     var row = button.parentNode.parentNode;
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var id = document.getElementById('id').value;

//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);

//     cell1.innerHTML = name;
//     cell2.innerHTML = email;
//     cell3.innerHTML = id;
//     cell4.innerHTML = '<button onclick="editData(this)">Edit</button> <button onclick="deleteData(this)">Delete</button>';
// }

// function cancelEdit(button) {
//     var row = button.parentNode.parentNode;
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var id = document.getElementById('id').value;

//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);

//     cell1.innerHTML = name;
//     cell2.innerHTML = email;
//     cell3.innerHTML = id;
//     cell4.innerHTML = '<button onclick="editData(this)">Edit</button> <button onclick="deleteData(this)">Delete</button>';
// }

// function deleteData(button) {
//     var row = button.parentNode.parentNode;
//     row.remove();
// }

// function searchData() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById('searchInput');
//     filter = input.value.toUpperCase();
//     table = document.getElementById('dataTable');
//     tr = table.getElementsByTagName('tr');
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName('td')[0];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = '';
//             } else {
//                 tr[i].style.display = 'none';
//             }
//         }
//     }
// }
function addData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var id = document.getElementById('id').value;

    var table = document.getElementById('dataTable');
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = id;
    cell4.innerHTML = '<button onclick="editData(this)">Edit</button> <button onclick="deleteData(this)">Delete</button>';
}

function editData(button) {
    var row = button.parentNode.parentNode;
    var name = row.cells[0].innerHTML;
    var email = row.cells[1].innerHTML;
    var id = row.cells[2].innerHTML;

    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('id').value = id;

    // Change the button to "Save" and "Cancel"
    button.innerHTML = "Save";
    button.setAttribute("onclick", "saveData(this)");
    var deleteButton = row.cells[3].getElementsByTagName("button")[1];
    deleteButton.innerHTML = "Cancel";
    deleteButton.setAttribute("onclick", "cancelEdit(this)");
}

function saveData(button) {
    var row = button.parentNode.parentNode;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var id = document.getElementById('id').value;

    row.cells[0].innerHTML = name;
    row.cells[1].innerHTML = email;
    row.cells[2].innerHTML = id;

    // Change the button back to "Edit" and "Delete"
    var editButton = row.cells[3].getElementsByTagName("button")[0];
    editButton.innerHTML = "Edit";
    editButton.setAttribute("onclick", "editData(this)");
    var deleteButton = row.cells[3].getElementsByTagName("button")[1];
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("onclick", "deleteData(this)");
}

function cancelEdit(button) {
    var row = button.parentNode.parentNode;

    // Change the button back to "Edit" and "Delete"
    var editButton = row.cells[3].getElementsByTagName("button")[0];
    editButton.innerHTML = "Edit";
    editButton.setAttribute("onclick", "editData(this)");
    var deleteButton = row.cells[3].getElementsByTagName("button")[1];
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("onclick", "deleteData(this)");

    // Clear the input fields
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('id').value = "";
}

function deleteData(button) {
    var row = button.parentNode.parentNode;
    row.remove();
}

function searchData() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('dataTable');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }
}