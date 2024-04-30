document.addEventListener("DOMContentLoaded", function() {
  var cars = [
    { name: "Mercedes-AMG GT",
     image: "Ph/car1.jpg",
      specifications: "The Mercedes-Benz AMG GT has 1 Petrol Engine on offer. The Petrol engine is 3982 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the AMG GT has a mileage of 12.65 kmpl . The AMG GT is a 2 seater 8 cylinder." ,
       Brice:"3,000,000 $"
    },
    { name: "McLaren 720S",
     image: "Ph/car2.jpg",
      specifications: "The McLaren 720S has 1 Petrol Engine on offer. The Petrol engine is 3994 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the 720S has a mileage of 18.65 kmpl . The Ghost is a 9 seater 16 cylinder car." ,
       Brice:"6,000,000 $"
    },
    { name: "Rolls-Royce Ghost",
     image: "Ph/car3.jpg",
      specifications: "The Rolls-Royce Ghost has 1 Petrol Engine on offer. The Petrol engine is 6750 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Ghost has a mileage of 6.33 kmpl . The Ghost is a 5 seater 12 cylinder car.",
       Brice:"3,800,000 $" 
    },
    { name: "BMW X5", image: "Ph/car4.jpg",
     specifications: "The BMW X5 has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 2993 cc while the Petrol engine is 2998 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the X5 has a mileage of 12 kmpl . The X5 is a 5 seater 6 cylinder car and has length of 4922 mm, width of 2218 mm and a wheelbase of 2819 mm." ,
      Brice:"2,900,000 $" 
    },
    { name: "Bentley Flying Spur",
     image: "Ph/car5.jpg",
      specifications: "The Bentley Flying Spur has 3 Petrol Engine on offer. The Petrol engine is 3993 cc and 2998 cc and 5950 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Flying Spur has a mileage of 10.2 to 12.5 kmpl & Ground clearance of Flying Spur is 110 mm. The Flying Spur is a 4 seater 12 cylinder car and has length of 5316 mm, width of 2013 mm and a wheelbase of 2819 mm." ,
       Brice:"4,000,000 $"
    }
  ];

  var carListDiv = document.getElementById("car-list");
  var carDetailsDiv = document.getElementById("car-details");

  // Create 
  cars.forEach(function(car) {
    var carDiv = document.createElement("div");
    carDiv.className = "car";
    carDiv.innerHTML = "<img src='" + car.image + "' alt='" + car.name + "'>";
    carDiv.addEventListener("click", function() {
      showCarDetails(car);
    });
    carListDiv.appendChild(carDiv);
  });

  // Car details
  function showCarDetails(car) {
    var carDetailsHTML = "<img src='" + car.image + "' alt='" + car.name + "'>";
    carDetailsHTML += "<h2>" + car.name + "</h2>";
    carDetailsHTML += "<p>" + car.specifications + "</p>";
    carDetailsHTML += "<h3>" + car.Brice + "</h3>";
    var buyButton = document.createElement("button");
    buyButton.textContent = "Buy Now";
    buyButton.className = "buy-button";//button name in css
    buyButton.addEventListener("click", function() {
      buyNow(car.name);
    });
    carDetailsHTML += "<div id='buy-message'></div>"; //buy message
    carDetailsDiv.innerHTML = carDetailsHTML;
    carDetailsDiv.appendChild(buyButton); // Append the Buy Now button
    carDetailsDiv.classList.add("active");
  }

  //Buy Now button
  function buyNow(carName) {
    var buyMessage = document.getElementById("buy-message");
    buyMessage.textContent = "A " + carName + "car has been added to the shopping cart 🛒 .... Thanks for your trust!";
    buyMessage.className = "bn";/*message name in css*/
    setTimeout(function() {
      buyMessage.textContent = ""; // Clear message 4 seconds
    }, 4000);
  }
});
