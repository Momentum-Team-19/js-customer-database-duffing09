{/* <div class="customer">
        <h1>Sophia Burn</h1>
        <p>information@email.com</p>
        <p>7474 her address</p>
        <p>Somewhere, State</p>
        <p>Dob 07/19/2001</p>
        <p>Customer since</p>
        </div> */}

function formatDateOfBirth(dob) {
    const date = new Date(dob);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${month}/${day}/${year}`;
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const directoryDiv = document.querySelector('#directory')
console.log(directoryDiv)

function personDiv(customer) {
    let customerDiv = document.createElement('div')

    let imgDiv = document.createElement('img')
    imgDiv.src = customer.picture.medium
    directoryDiv.appendChild(imgDiv)

    let nameDiv = document.createElement('h2')
    nameDiv.innerText = `${capitalize(customer.name.first)} ${capitalize(customer.name.last)}`
    customerDiv.appendChild(nameDiv)
    directoryDiv.appendChild(nameDiv)
    
    let emailDiv = document.createElement('p')
    emailDiv.innerText = customer.email
    directoryDiv.appendChild(emailDiv)
    
    let locationDiv = document.createElement('p')
    locationDiv.innerText = `${customer.location.street.number}  ${customer.location.street.name} \n ${customer.location.city} ${customer.location.postcode}`
    directoryDiv.appendChild(locationDiv)
    
    let dobDiv = document.createElement('p')
    dobDiv.innerText = `dob: ${formatDateOfBirth(customer.dob.date)}`
    directoryDiv.appendChild(dobDiv)

    let memberSinceDiv = document.createElement('p')
    memberSinceDiv.innerText = `customer since: ${formatDateOfBirth(customer.registered.date)}`
    directoryDiv.appendChild(memberSinceDiv)
}

for (let customer of customers) {
    personDiv(customer)
}
