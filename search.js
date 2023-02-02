let restaurants = [];
let users = [];

async function getdata() {
  let response = await fetch("./db.json");
  let data = await response.json();
  restaurants = data.Restaurants;
  users = data.Users;
  console.log(data);
  console.log(restaurants);
  console.log(users);
}

getdata();

function searchRestaurants() {
  let search = document.getElementById("search_bar").value;
  let filtered = restaurants.filter(function (restaurant) {
    if (restaurant.name.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    let flag = false;
    restaurant.cuisine.forEach((element) => {
      if (element.toLowerCase().includes(search.toLowerCase())) {
        flag = true;
      }
    });
    return flag;
  });
  console.log("filtered", filtered);
  var conatiner = document.getElementById("dropDownDisplay");
  conatiner.innerHTML = null;
  filtered.forEach(function (element) {
    let searchitem = document.createElement("div");

    searchitem.classList.add("searchitem");
    let image = document.createElement("img");
    image.src = element.image;
    image.style.height="40px"
    image.classList.add("imgsearch")
    let name = document.createElement("p");
    name.textContent = element.name;
    
    searchitem.append(image, name)

    conatiner.append(searchitem);

  });
  if(search==""){
    conatiner.innerHTML = null;
  }
 
}

let debounce = (fn, delay) => {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(), delay);
  };
};
let search = debounce(searchRestaurants, 400);

document.getElementById("search_bar").addEventListener("input", search);
