let data = []
let editIndex = -1  // -1 means create mode

function createData() {
    // get input elements
    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    const numberInput=document.getElementById("phonenumber")
    const cityInput=document.getElementById("city")

    // get values
    const name = nameInput.value
    const email = emailInput.value
    const number=numberInput.value
    const city=cityInput.value

    // simple validation (optional)
    if (!name || !email ||!number || !city) {
        alert("Please enter the values ")
        return
    }

    if (editIndex === -1) {
        // create mode
        data.push({ name, email,number,city})
    } else {
        // update mode
        data[editIndex].name = name
        data[editIndex].email = email
        data[editIndex].number=number
        data[editIndex].city=city
        editIndex = -1
    }

    // clear inputs
    nameInput.value = ""
    emailInput.value = ""
    numberInput.value=""
    cityInput.value=""

    // show data in table
    displayData()
}

function displayData() {
    let table = ""
    data.forEach((item, index) => 
        table += `
        <tr>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.number}</td>
            <td>${item.city}</td>
            <td>
                <button onclick="editButton(${index})">Edit</button>
                <button onclick="deleteButton(${index})">Delete</button>
            </td>
        </tr>
        `
    )
    document.getElementById("tbody").innerHTML = table
}

function editButton(i) {
    document.getElementById("name").value = data[i].name
    document.getElementById("email").value = data[i].email
    document.getElementById("phonenumber").value = data[i].number  // FIXED
    document.getElementById('city').value = data[i].city
    editIndex = i
}


function deleteButton(i) {
    data.splice(i, 1)
    displayData()
}
