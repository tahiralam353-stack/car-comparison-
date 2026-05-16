const cars = [

{
    model: "Tesla Model S",
    brand: "Tesla",
    price: 85000,
    mileage: 120,
    maintenance: 300,
    speed: 250,
    image: "images/tesla.jpg"
},

{
    model: "BMW X5",
    brand: "BMW",
    price: 65000,
    mileage: 18,
    maintenance: 1200,
    speed: 240,
    image: "images/bmw.png"
},

{
    model: "Audi A6",
    brand: "Audi",
    price: 60000,
    mileage: 20,
    maintenance: 1000,
    speed: 235,
    image: "images/audi.png"
},

{
    model: "Mercedes C-Class",
    brand: "Mercedes",
    price: 70000,
    mileage: 19,
    maintenance: 1300,
    speed: 250,
    image: "images/mercedes.png"
},

{
    model: "Toyota Fortuner",
    brand: "Toyota",
    price: 50000,
    mileage: 15,
    maintenance: 700,
    speed: 190,
    image: "images/toyota.png"
},

{
    model: "Honda Civic",
    brand: "Honda",
    price: 25000,
    mileage: 28,
    maintenance: 600,
    speed: 210,
    image: "images/honda.png"
}

];

let filteredCars = cars;

// SHOW BRANDS

function populateBrands() {

    const brandFilter =
    document.getElementById("brandFilter");

    const brands =
    [...new Set(cars.map(car => car.brand))];

    brands.forEach(brand => {

        brandFilter.innerHTML +=
        `<option value="${brand}">
            ${brand}
        </option>`;

    });

}

// SHOW SELECT OPTIONS

function populateSelectors(data) {

    const car1 =
    document.getElementById("car1");

    const car2 =
    document.getElementById("car2");

    car1.innerHTML =
    `<option>Select Car 1</option>`;

    car2.innerHTML =
    `<option>Select Car 2</option>`;

    data.forEach((car,index)=>{

        car1.innerHTML += `
        <option value="${index}">
            ${car.model}
        </option>
        `;

        car2.innerHTML += `
        <option value="${index}">
            ${car.model}
        </option>
        `;

    });

}

// SHOW CAR CARDS

function renderCars(data) {

    const container =
    document.getElementById("carContainer");

    container.innerHTML = "";

    data.forEach(car => {

        container.innerHTML += `

        <div class="card">

            <div class="car-top">
                🚘
            </div>

            <div class="card-content">

                <h2>${car.model}</h2>

                <p>🏷 ${car.brand}</p>

                <p>💰 $${car.price}</p>

                <p>⚡ ${car.speed} km/h</p>

                <p>⛽ ${car.mileage}</p>

                <button class="buy-btn">
                    Buy Now
                </button>

            </div>

        </div>

        `;

    });

}

//EMI calculate 

function calculateEMI() {

    let P =
        document.getElementById("loan")
        .value;

    let annualRate =
        document.getElementById("rate")
        .value;

    let years =
        document.getElementById("years")
        .value;

    let R =
        annualRate / 12 / 100;

    let N =
        years * 12;

    let emi =

        (P * R * Math.pow(1 + R, N))
        /
        (Math.pow(1 + R, N) - 1);

    document.getElementById("emiResult")
        .innerHTML =

        "Monthly EMI: "
        + emi.toFixed(2);

}

// Compare Function

function compareCars() {

    const index1 =
    document.getElementById("car1").value;

    const index2 =
    document.getElementById("car2").value;

    // CHECK EMPTY

    if(index1 === "" || index2 === "") {

        alert("Please Select Both Cars");

        return;
    }

    const carA = cars[index1];

    const carB = cars[index2];

    document.getElementById("result")
    .innerHTML = `

    <h2>📊 Car Comparison</h2>

    <table>

        <tr>
            <th>Feature</th>
            <th>${carA.model}</th>
            <th>${carB.model}</th>
        </tr>

        <tr>
            <td>Brand</td>
            <td>${carA.brand}</td>
            <td>${carB.brand}</td>
        </tr>

        <tr>
            <td>Price</td>
            <td>$${carA.price}</td>
            <td>$${carB.price}</td>
        </tr>

        <tr>
            <td>Speed</td>
            <td>${carA.speed} km/h</td>
            <td>${carB.speed} km/h</td>
        </tr>

        <tr>
            <td>Mileage</td>
            <td>${carA.mileage}</td>
            <td>${carB.mileage}</td>
        </tr>

        <tr>
            <td>Maintenance</td>
            <td>$${carA.maintenance}</td>
            <td>$${carB.maintenance}</td>
        </tr>

    </table>

    `;

}


// SHOW OPTIONS IN DROPDOWN

function populateSelectors(data) {

    const car1 =
    document.getElementById("car1");

    const car2 =
    document.getElementById("car2");

    car1.innerHTML =
    `<option value="">
        Select Car 1
    </option>`;

    car2.innerHTML =
    `<option value="">
        Select Car 2
    </option>`;

    data.forEach((car,index)=>{

        car1.innerHTML += `
        <option value="${index}">
            ${car.model}
        </option>
        `;

        car2.innerHTML += `
        <option value="${index}">
            ${car.model}
        </option>
        `;

    });

}


// COMPARE

function compareCars() {

    const carA =
    filteredCars[
        document.getElementById("car1").value
    ];

    const carB =
    filteredCars[
        document.getElementById("car2").value
    ];

    document.getElementById("result")
    .innerHTML = `

    <h2>📊 Comparison Result</h2>

    <table>

        <tr>
            <th>Feature</th>
            <th>${carA.model}</th>
            <th>${carB.model}</th>
        </tr>

        <tr>
            <td>Price</td>
            <td>$${carA.price}</td>
            <td>$${carB.price}</td>
        </tr>

        <tr>
            <td>Speed</td>
            <td>${carA.speed}</td>
            <td>${carB.speed}</td>
        </tr>

        <tr>
            <td>Mileage</td>
            <td>${carA.mileage}</td>
            <td>${carB.mileage}</td>
        </tr>

    </table>

    `;

}

// SEARCH

document.getElementById("search")
.addEventListener("input", e => {

    const value =
    e.target.value.toLowerCase();

    filteredCars =
    cars.filter(car =>

        car.model
        .toLowerCase()
        .includes(value)

    );

    renderCars(filteredCars);

    populateSelectors(filteredCars);

});

// BRAND FILTER

document.getElementById("brandFilter")
.addEventListener("change", e => {

    const brand =
    e.target.value;

    if(brand === "all") {

        filteredCars = cars;

    } else {

        filteredCars =
        cars.filter(car =>

            car.brand === brand

        );

    }

    renderCars(filteredCars);

    populateSelectors(filteredCars);

});

// START

populateBrands();

populateSelectors(cars);

renderCars(cars);

// DARK MODE

document.getElementById("themeToggle")
.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

});