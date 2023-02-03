
// var restaurantId = localStorage.getItem('restaurantId');

// console.log(restaurantId);

async function getSingleDataFromDataBase() {
    const response = await fetch(`http://localhost:3000/restaurants/1`);
    const data = await response.json();
    // console.log(data);
    // return data;
    DisplayData(data);
}

getSingleDataFromDataBase();

async function getSingleUserDataFromDataBase(id) {
    try {
        let result = await fetch(`http://localhost:3000/Users/${id}`);
        let response = await result.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}
 var userid=JSON.parse(localStorage.getItem("userdata"));
function showProfileSection() {
    let loggedUserData = JSON.parse(localStorage.getItem('userProfile')) || [];
    // console.log(loggedUserData);
    if (loggedUserData[0]) {
        getSingleUserDataFromDataBase(loggedUserData[1]).then((response) => {
            document.querySelector('#signInA').innerHTML = `<img id="profileImgIcon" src="https://www.transparentpng.com/thumb/user/single-user-icon-png-free--rLHSHx.png" alt="">${response.userName}`;

        }).catch((error) => {
            console.log(error);
        });
    } else {

        // document.querySelector('#signInA').innerHTML = `<img id="profileImgIcon" src="https://www.transparentpng.com/thumb/user/single-user-icon-png-free--rLHSHx.png" alt="">Guest`;
    }
};

// showProfileSection();

function DisplayData(data){
    console.log(data.image);
    document.querySelector('#restaurantImageDiv>img').src = data.image;
    document.getElementById('restaurantDetailsDivName').innerText = data.name;
    document.getElementById('restaurantDetailsDivCuisine').innerText = data.cuisine;
    document.getElementById('restaurantDetailsDivAddress').innerText = data.address;
    document.querySelector('#restaurantRating>h4').innerText = '★ '+data.ratings;
    document.querySelector('#restaurantDeliveryTime>h4').innerText = data.approxDeliveryTime + ' mins';
    document.querySelector('#restaurantCost>h4').innerText = '₹ '+data.approxPrice;
    
    document.getElementById('categoryList').innerHTML = '';
    data.categories.forEach(element => {
        var listItem = document.createElement('li');
        listItem.innerText = element.categoryName;
        listItem.setAttribute('class', 'list-group-item');
        if(element.categoryName == 'Recommended'){
            showFoodItemsInBox(listItem,element);
        }
        listItem.addEventListener('click',()=>{
            showFoodItemsInBox(listItem,element);
        })

        document.getElementById('categoryList').append(listItem);
        const favButton = document.querySelector("#favourite #fav");
        const img = document.querySelector("#favourite #img");
        
        let isPink = false;
        
        favButton.addEventListener("click", function() {
          
            if (!isPink) {
            img.classList.add("pink");
            favButton.classList.add("pink");
            // img.src="heart(1).png";
          
            isPink = true;
            alert("added")
          } else {
            img.classList.remove("pink");
            favButton.classList.remove("pink");
            isPink = false;
          }
        
        });
        
        favButton.addEventListener("dblclick", function() {
          img.classList.remove("pink");
          favButton.classList.remove("pink");
          isPink = false;
        });
    });
}

function changeOthersColorAndBorder (){
    document.querySelectorAll('.list-group-item').forEach(element => {
        element.style.color = '#000';
        element.style.border = 'none';
        element.style.fontWeight = '400';
    });
}

function showFoodItemsInBox(listItem,element){
    changeOthersColorAndBorder();
            listItem.style.color = '#fc8019';
            listItem.style.borderRight = '2px solid #fc8019';
            listItem.style.fontWeight = '600';
            document.getElementById('categoryHeading').innerText = element.categoryName;
            document.getElementById('totalItemsCountInCategory').innerText = `${element.categoryItems.length} items`;
            document.getElementById('totalItemsInCategory').innerHTML = '';
            element.categoryItems.forEach(item => {
                var itemDiv = document.createElement('div');
                itemDiv.setAttribute('class', 'foodItemCard');

                var name = document.createElement('h5');
                name.innerText = item.name;
                name.setAttribute('class', 'foodItemName');

                var price = document.createElement('p')
                price.innerText = '₹ '+item.price;
                price.setAttribute('class', 'foodItemPrice');

                var description = document.createElement('p');
                description.innerText = item.details;
                description.setAttribute('class', 'foodItemDescription');

                var id=document.createElement('p');
                id.innerHTML=item.details;

                var addToCartBtn = document.createElement('button');
                addToCartBtn.innerText = 'Add to Cart';
                addToCartBtn.setAttribute('class', 'addToCartBtn');
                addToCartBtn.addEventListener('click',()=>{
                    addToCart(item);
                    
                    
                    showCartAtNavBar();
                });

                itemDiv.append(name, price, description,addToCartBtn);
                document.getElementById('totalItemsInCategory').append(itemDiv);
            });
}

async function addToCart(item){
    // console.log(item);
    arr.push(item);
    localStorage.setItem("cart",JSON.stringify(arr));
    minicheckout(item);
    

    // let loggedUserData = JSON.parse(localStorage.getItem('userProfile'));
    // if(loggedUserData[0]){
    //     var userData = await getSingleUserDataFromDataBase(loggedUserData[1]);
    //     // console.log(userData);
    //     // let cartObject = item;
    //     // cartObject.count = 1;
    //     var userCart = userData.userCart;
    //     // console.log(userCart);
    //     var checkItemInCart = false;
    //     userCart.forEach(element => {
    //         if(element.name == item.name){
    //             element.count++;
    //             checkItemInCart = true;
    //         }
    //     });
    //     if(!checkItemInCart){
    //         item.count = 1;
    //         userCart.push(item);
    //     }
        postCartInDataBase(item);
    //     // console.log(userCart);
    // }
    // else{
    //     alert('login to add to cart');
    //     showAlertPopupBody('Please Login');
    // }

    // console.log(cartObject);  
}

function showCartAtNavBar(){
    let loggedUserData = JSON.parse(localStorage.getItem('userProfile'));
    // if(loggedUserData[0]){
    //     getSingleUserDataFromDataBase(loggedUserData[1]).then((response) => {
    //         document.querySelector('#noOfCartItems').style.display = 'block';
    //         document.querySelector('#noOfCartItems').innerText = response.userCart.length;
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }
}
// showCartAtNavBar();

async function postCartInDataBase(userCart){
    try {
        var response = await fetch(`http://localhost:3000/Users/2`,{
            method: 'PATCH',
            body : JSON.stringify({
                userCart: userCart
            }),
            headers: {"Content-Type": "application/json"}
        });
        // event.preventDefault();
        // showCartAtNavBar();
    } catch (error) {
        console.log(error)
    }
}

var arr=[];

function minicheckout(){
    let checkoutdiv= document.getElementById("minicheckout");
        checkoutdiv.innerText="";
        let minicartitem=JSON.parse(localStorage.getItem('cart'));
        // removebtn(minicartitem);
        if(minicartitem==null){
           let h2=document.createElement("h2");
           h2.innerText="Cart Empty";
           let img=document.createElement("img");
           img.src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2";
           img.style.width="50%";
           let h4=document.createElement("h4");
           h4.innerText="Good food is always cooking! Go ahead, order some yummy items from the menu.";
           h4.style.color="#686b78";
           checkoutdiv.append(h2,img,h4); //ask//
        } 
        else{ 
            let h2= document.createElement("h2");
              h2.innerText="Cart "; 
              let superdiv=document.createElement("div");
              superdiv.innerText="";
               
            let namediv=document.createElement("div");
            namediv.innerText="";
             
            let removediv=document.createElement("div");
            removediv.innerText="";

           
            let length=document.createElement("h4");
            length.innerText="Iteam "+minicartitem.length;
              
            let subtotal=document.createElement("h4");
            
            var x=0;
            minicartitem.forEach(ele=>{
                
                x+=Number(ele.price);
                subtotal.innerText="SUBTOTAL "+x;
            })

              let extracharge=document.createElement("p");
              extracharge.innerText="Extra charges may apply";
              extracharge.style.color="#686b78";

              let checkoutbtn=document.createElement("button");
              checkoutbtn.innerText="CHECKOUT";
              checkoutbtn.style.backgroundColor=" #60b246";
              checkoutbtn.style.color= "white";
              checkoutbtn.style.right= "-70px";
              checkoutbtn.style.border= "none";
              checkoutbtn.style.fontWeight = "600";
              checkoutbtn.style.fontSize= "15px";
              checkoutbtn.style.width= "100px";
              checkoutbtn.style.padding= "5px";
              checkoutbtn.style.cursor= "pointer";
              checkoutbtn.style.borderRadius=" 5px";
              checkoutbtn.addEventListener("click", function() {
                window.location.href = "./checkout.html";
              });
             
            minicartitem.forEach((ele,i)=>{
                let span=document.createElement("span");

              let name=document.createElement("span");
              name.innerText=ele.name;
              let removebtn=document.createElement("button");
              removebtn.innerText="-";
            //   name.append(ele.name,span);
              span.append(removebtn);
              namediv.append(name,span);//how to handle dublicate?
              
            
               
              removebtn.addEventListener('click',()=>{
                removebtn1(ele,i);   
            });
               
            // superdiv.append(namediv,removediv);
              checkoutdiv.append(h2,length,namediv,subtotal,extracharge,checkoutbtn); 
              
            })
        } 
       
}
minicheckout();

function  removebtn1(ele,i){
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].id === ele.id) {
    //       arr.splice(i, 1);
    //       break;
    //     }
    // }
    let arr=JSON.parse(localStorage.getItem("cart"));
    arr=arr.filter(function(e,ind){
        return ind!=i;
    })

    //   localStorage.setItem("arr", JSON.stringify(array));
    localStorage.setItem("cart",JSON.stringify(arr));
    minicheckout();

      
}
// removebtn();

