// Retrieve the names array from localStorage
const names = JSON.parse(localStorage.getItem('names')) || [];

// Get the table body element
const tbody = document.querySelector('#names-table tbody');

// Loop through the names array and add rows to the table
names.forEach(({ name1, name2 }) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${name1}</td><td>${name2}</td>`;
    tbody.appendChild(row);
});
