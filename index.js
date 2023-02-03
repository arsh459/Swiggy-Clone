window.onload= function(){
    let url="http://localhost:3000/Restaurants";
    fetchData(url);
}

async function fetchData(url){
    let response=await fetch(url);
    let restaurantsData=await response.json();
    console.log(restaurantsData);
    displayHome(restaurantsData);
}

function displayHome(data){
    document.querySelector(".restaurant-list").textContent="";
    data.forEach(function(e,i){
        var div=document.createElement("div");
        div.setAttribute("class","place");

        var a=document.createElement("a");
        
        a.href="restaurantPage.html"
        a.addEventListener("click",function(){
            localStorage.setItem("restaurantId",e.id);
        })

        a.setAttribute("class","place-link");

        div.append(a);

        var div2=document.createElement("div");
        div2.setAttribute("class","list-item");

        a.append(div2);

        var div3=document.createElement("div");
        div3.setAttribute("class","item-content");

        var div4=document.createElement("div");
        div4.setAttribute("class","top-img");

        var img=document.createElement("img");
        img.setAttribute("class","restaurantImage");
        img.width="254";
        img.height="160";
        img.src=e.image;

        div4.append(img);

        var div5=document.createElement("div");
        div5.setAttribute("class","status");

        var div6=document.createElement("div");
        div6.setAttribute("class","status-title");
        div6.textContent="Promoted";

        div5.append(div6);

        var div7=document.createElement("div");
        div7.setAttribute("class","place-name-div");

        var div8=document.createElement("div");
        div8.setAttribute("class","name");
        div8.textContent=e.name;

        var div9=document.createElement("div");
        div9.setAttribute("class","food-items");
        div9.setAttribute("title",e.cuisine.join(", "));
        div9.textContent=e.cuisine.join(", ");

        div7.append(div8,div9);

        var div10=document.createElement("div");
        div10.setAttribute("class","info-div");

        var div11=document.createElement("div");
        div11.setAttribute("class","rating");

        var span=document.createElement("span");
        span.setAttribute("class","icon-star");

        var i=document.createElement("i");
        i.setAttribute("class","fa-solid fa-star");

        span.append(i);

        var span2=document.createElement("span");
        span.textContent=e.ratings;

        div11.append(span,span2);

        var div12=document.createElement("div");
        div12.textContent="•";

        var div13=document.createElement("div");
        div13.textContent=e.approxDeliveryTime;

        var div14=document.createElement("div");
        div14.textContent="•";

        var div15=document.createElement("div");
        div15.textContent="₹"+e.approxPrice;
        div15.setAttribute("class","price");

        div10.append(div11,div12,div13,div14,div15);

        var div16=document.createElement("div");
        div16.setAttribute("class","offer-div");

        var span3=document.createElement("span");
        span3.setAttribute("class","icon-offer-filled");

        var i2=document.createElement("i");
        i2.setAttribute("class","fa-solid fa-tags");

        span3.append(i2);

        var span4=document.createElement("span");
        span4.setAttribute("class","offer-text");
        span4.textContent="50% off | Use WELCOME50";

        div16.append(span3,span4);

        var div17=document.createElement("div");
        div17.setAttribute("class","quick-view");

        var span5=document.createElement("span");
        span5.setAttribute("class","view-btn");
        span5.textContent="Quick View";
        span5.setAttribute("role","button");
        span5.setAttribute("aria-label","Open");

        div17.append(span5);

        div2.append(div3,div17);
        div3.append(div4,div5,div7,div10,div16);

        document.querySelector(".restaurant-list").append(div);
    });
}

