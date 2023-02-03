var restaurantId =localStorage.getItem("restaurantId");
var arr=[];
async function  callrestaurant(){
   try{
    let res=await fetch("http://localhost:3000/Restaurants/"+restaurantId);
    let data=await res.json();
    
    if(data.image){
        displayData(data);
    }
    
    // return data;
   
}catch(err){
    // console.log(err);  
}
}
callrestaurant();

function displayData(data){
    
    // console.log(data.categories.categoryName.categoryItems.name);
    document.querySelector("#restaurantimgDiv>img").src=data.image;
    document.getElementById("restaurantDetailsDivName").innerText=data.name;
    document.getElementById("restaurantDetailsDivCuisine").innerText=data.cuisine;
    document.getElementById("restaurantDetailsDivAddress").innerText=data.address;
    document.querySelector("#Restaurantrating>h4").innerText='★ '+data.ratings;
    
    document.querySelector("#RestaurantDeliveryTime>h4").innerText=data.approxDeliveryTime+"mins";
    document.querySelector("#Restaurantcost>h4").innerText='₹ '+data.approxPrice;
    document.getElementById("categoryList").innerHTML="";
    
    data.categories.forEach(ele=>{
        var listitem=document.createElement("li");
        listitem.innerText=ele.categoryName;
        console.log(ele.categoryName);
        listitem.setAttribute("class","list-group-item");
        if(ele.categoryName=="Recommended"){
            showFoodItemsInBox(listitem,ele);
            // console.log(ele.categoryName.categoryItems.name);
        }
        listitem.addEventListener("click",()=>{
            showFoodItemsInBox(listitem,ele); 
        })
        document.getElementById("categoryList").append(listitem);
    })
}
function changeOthersColorAndBorder (){
    document.querySelectorAll('.list-group-item').forEach(element => {
        element.style.color = '#000';
        element.style.border = 'none';
        element.style.fontWeight = '400';
    });
}
 function showFoodItemsInBox(listitem,ele){
    changeOthersColorAndBorder();
            listitem.style.color = '#fc8019';
            listitem.style.borderRight = '2px solid #fc8019';
            listitem.style.fontWeight = '600';
            console.log(ele.categoryItems);
            
    document.getElementById("categoryHeading").innerText=ele.categoryName;
    document.getElementById("totalItemsCountInCategory").innerText=`${ele.categoryItems.length} items`;
    document.getElementById("totalItemInCatagory").innerText="";
    
    ele.categoryItems.forEach(item=>{
        var itemdiv=document.createElement("div");
        itemdiv.setAttribute("class","foodItemCard");

        var name=document.createElement("h5");
        name.innerText=item.name;
        
        name.setAttribute("class","foodItemCard");

        var price=document.createElement("h5");
        price.innerText="₹ "+item.price;
        price.setAttribute("class","foodItemCard");
        
        var des=document.createElement("h5");
        des.innerText=item.details;
        des.setAttribute("class","foodItemCard");

        var addToCartBtn=document.createElement("button");
        addToCartBtn.innerText="ADD";
        addToCartBtn.setAttribute("class","foodItemCard");
        addToCartBtn.addEventListener("click",()=>{
            addToCart(item);
        //    localStorage.setItem(JSON.stringify("card",item));
        });

        var linediv=document.createElement("div");
        itemdiv.append(name,price,des,addToCartBtn,linediv);
        document.getElementById("totalItemInCatagory").append(itemdiv);
        
    })
    
 }
 async function addToCart(item){
    // console.log(item);
    arr.push(item);
    localStorage.setItem("cart",JSON.stringify(arr));
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
    //     postCartInDataBase(userCart,loggedUserData[1]);
    //     // console.log(userCart);
    // }
    // else{
    //     // alert('login to add to cart');
    //     showAlertPopupBody('Please Login');
    // }

    // console.log(cartObject);  
} 
function minicart(){
   let checkoutdiv= document.getElementById("checkout");
   checkoutdiv.innerText="";
    let minicartitem=JSON.parse(localStorage.getItem('cart'));
    console.log(minicartitem);
    if(minicartitem==""){
       let h2=document.createElement("h2");
       h2.innerText="Cart Empty";
       let img=document.createElement("img");
       img.src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2";
       let h4=document.createElement("h4");
       h4.innerText="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2";
       checkoutdiv.append(h2,img,h4); //ask//

    } 
    if(minicartitem.length>=1){
        minicartitem.forEach(ele=>{
          let h2= document.createElement("h2");
          h2.innerText="Cart "; 

        //   let length=document.createElement("h4");
        //   length.innerText=ele.length;
        //    console.log(ele.length);    //ask
          let name=document.createElement("h4");
          name.innerText=ele.name;
          
          let subtotal=document.createElement("h3");
          subtotal.innerText=ele.price; //ask//
        //   console.log(ele.price);
          
          let extracharge=document.createElement("h4");
          extracharge.innerText="Extra charges may apply";
           
          let checkoutbtn=document.createElement("button");
          checkoutbtn.innerText="CHECKOUT";

          checkoutdiv.append(h2,length,name,subtotal,extracharge,checkoutbtn); 
          console.log(checkoutdiv);
        })
    }
    

}

minicart();




















// async function  callrestaurant(){
//     try{let res=await fetch(`http://localhost:3004/Restaurants/1`);
//      let data=await res.json();
     
//      if(data.image){
//          displayData(data);
//      }
     
//      // return data;
    
//  }catch(err){
//      // console.log(err);  
//  }
//  }
//  callrestaurant();
 
//  function displayData(data){
     
     
//      document.querySelector("#restaurantImageDiv>img").src=data.image;
//      document.getElementById("restaurantDetailsDivName").innerText=data.name;
//      document.getElementById("restaurantDetailsDivCuisine").innerText=data.cuisine;
//      document.getElementById("restaurantDetailsDivAddress").innerText=data.address;
//      document.querySelector('#restaurantRating>h4').innerText='★ '+data.ratings;
     
//      document.querySelector("RestaurantDeliveryTime>h4").innerText=data.approxDeliveryTime+"mins";
//      document.querySelector("Restaurantcost>h4").innerText='₹ '+data.approxPrice;
//      document.getElementById("categoryList").innerText="";
     
//      data.categories.forEach(ele=>{
//          var listitem=document.createElement("li");
//          listitem.innerText=ele.categoryName;
//          listitem.setAttribute("class","list-group-item");
//          if(ele.categoryName=="Recommended"){
//              showFoodItemsInBox(listitem,ele);
//          }
//          listitem.addEventListener("click",()=>{
//              showFoodItemsInBox(listitem,ele); 
//          })
//          document.getElementById("categoryList").append(listitem);
//      })
//  }
//   function showFoodItemsInBox(listitem,ele){
//      document.getElementById("categoryHeading").innerText=ele.categoryName;
//      document.getElementById("totalItemsCountInCategory").innerText=`${ele.categoryIteams.length} items`;
//      document.getElementById("totalItemInCatagory").innerText="";
 
//      ele.categoryIteams.forEach(item=>{
//          var itemdiv=document.createElement("div");
//          itemdiv.setAttribute("class","foodItemCard");
 
//          var name=document.createElement("h5");
//          name.innerText=item.name;
//          name.setAttribute("class","foodItemCard");
 
//          var price=document.createElement("h5");
//          price.innerText="₹ "+item.price;
//          price.setAttribute("class","foodItemCard");
         
//          var des=document.createElement("h5");
//          des.innerText=item.details;
//          des.setAttribute("class","foodItemCard");
 
//          var addToCartBtn=document.createElement("button");
//          addToCartBtn.innerText="Add to Cart";
//          addToCartBtn.setAttribute("class","foodItemCard");
//          addToCartBtn.addEventListener("click",()=>{
//              addToCartBtn(item);
//          });
//          itemdiv.append(name,price,des,addToCartBtn);
//          document.getElementById("totalItemInCatagory").append(itemdiv);
//      })
     
//   }
 

