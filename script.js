// script.js
let dataEntries = [];

function saveData() {
    const name = document.querySelector('input[placeholder="Enter Name"]').value;
    const item = document.querySelector('input[placeholder="Enter Item"]').value;
    const borrowing = document.querySelector('input[placeholder="Enter Borrowing Amount"]').value;
    const realMoney = document.querySelector('input[placeholder="Enter Real Money Amount"]').value;

    const entry = {
        name,
        item,
        borrowing,
        realMoney,
        timestamp: new Date().toLocaleString()
    };

    dataEntries.push(entry);
    localStorage.setItem('dataEntries', JSON.stringify(dataEntries));
    alert('Data saved successfully!');
}

function loadData() {
    const storedData = localStorage.getItem('dataEntries');
    if (storedData) {
        dataEntries = JSON.parse(storedData);
    }
}

window.onload = loadData;
// script.js (continued)
function displayData() {
    const newWindow = window.open('', '_blank');
    newWindow.document.write('<h1>Stored Data</h1>');
    newWindow.document.write('<table><tr><th>Name</th><th>Item</th><th>Borrowing</th><th>Real Money</th><th>Timestamp</th></tr>');

    dataEntries.forEach(entry => {
        newWindow.document.write(`<tr>
            <td>${entry.name}</td>
            <td>${entry.item}</td>
            <td>${entry.borrowing}</td>
            <td>${entry.realMoney}</td>
            <td>${entry.timestamp}</td>
        </tr>`);
    });

    newWindow.document.write('</table>');
}

// Add a button to call displayData function
const displayButton = document.createElement('button');
displayButton.innerText = 'Show Stored Data';
displayButton.onclick = displayData;
document.body.appendChild(displayButton);
