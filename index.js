window.onload= function(){
    let url="http://localhost:3000/Restaurants";
    fetchData(url);  
    document.querySelector(".cuisinefilter").addEventListener("click",function(){
        window.location.href="filter.html";
    })
    document.querySelector(".relevance").addEventListener("click",function(){
        let modifiedata=JSON.parse(localStorage.getItem("mRestraunts"));
        sortByRelevance(modifiedata);
    })
    document.querySelector(".delivery-time").addEventListener("click",function(){
        let modifiedata=JSON.parse(localStorage.getItem("mRestraunts"));
        sortBydelivery(modifiedata);
    })
    document.querySelector(".rating").addEventListener("click",function(){
        let modifiedata=JSON.parse(localStorage.getItem("mRestraunts"));
        sortByrating(modifiedata);
    })
    document.querySelector(".cost-lh").addEventListener("click",function(){
        let modifiedata=JSON.parse(localStorage.getItem("mRestraunts"));
        sortBycostlh(modifiedata);
    })
    document.querySelector(".cost-hl").addEventListener("click",function(){
        let modifiedata=JSON.parse(localStorage.getItem("mRestraunts"));
        sortBycosthl(modifiedata);
    })
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);
    document.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("touchend", dragStop);
}

async function fetchData(url){
    let response=await fetch(url);
    let restaurantsData=await response.json();
    localStorage.setItem("Restraunts",JSON.stringify(restaurantsData));
    let modifiedata=JSON.parse(localStorage.getItem("mRestraunts")) || [];
    if(modifiedata.length==0){
        localStorage.setItem("mRestraunts",JSON.stringify(restaurantsData));
        modifiedata=JSON.parse(localStorage.getItem("mRestraunts"));
    }
    display();
    
}
function display(){
    let filtersarr=JSON.parse(localStorage.getItem("filters")) || [];
    if(filtersarr.length==0){
        let modifiedata=JSON.parse(localStorage.getItem("Restraunts"));
        localStorage.setItem("mRestraunts",JSON.stringify(modifiedata));
        displayHome(modifiedata);
    }
    else{
        var arr=JSON.parse(localStorage.getItem("mRestraunts")) || [];
        arr=arr.filter(function(e,i){
            let flag=true;
            for(let i=0;i<filtersarr.length;i++){
                if(e.cuisine.includes(filtersarr[i])){

                }
                else{
                    flag=false;
                }
            }
            if(flag==true){
                return e;
            }
        })
        localStorage.setItem("mRestraunts",JSON.stringify(arr));
        displayHome(arr);
    }
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
        span.textContent="★   "+"  "+e.ratings;
        if(e.ratings>4){
            div11.style.backgroundColor="green"
        }
        else{
            div11.style.backgroundColor="orange"
        }

        div11.append(span,span2);

        var div12=document.createElement("div");
        div12.textContent="•";

        var div13=document.createElement("div");
        div13.textContent=e.approxDeliveryTime+" min";

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
        document.querySelector(".number").textContent=data.length+" Restaurants";
    });
}

function sortByRelevance(data){
    data.sort(function(a,b){
        if(a.name>b.name) return 1;
        if(a.name<b.name) return -1;
        if(a.name==b.name) return 0;
    });
    localStorage.setItem("mRestraunts",JSON.stringify(data));
    displayHome(data);
}

function sortBycostlh(data){
    data.sort(function(a,b){
        if(a.approxPrice>b.approxPrice) return 1;
        if(a.approxPrice<b.approxPrice) return -1;
        if(a.approxPrice==b.approxPrice) return 0;
    });
    localStorage.setItem("mRestraunts",JSON.stringify(data));
    displayHome(data);
}
function sortBydelivery(data){
    data.sort(function(a,b){
        if(a.approxDeliveryTime>b.approxDeliveryTime) return 1;
        if(a.approxDeliveryTime<b.approxDeliveryTime) return -1;
        if(a.approxDeliveryTime==b.approxDeliveryTimes) return 0;
    });
    localStorage.setItem("mRestraunts",JSON.stringify(data));
    displayHome(data);
}
function sortByrating(data){
    data.sort(function(a,b){
        if(a.ratings>b.ratings) return -1;
        if(a.ratings<b.ratings) return 1;
        if(a.ratings==b.ratings) return 0;
    });
    localStorage.setItem("mRestraunts",JSON.stringify(data));
    displayHome(data);
}
function sortBycosthl(data){
    data.sort(function(a,b){
        if(a.approxPrice>b.approxPrice) return -1;
        if(a.approxPrice<b.approxPrice) return 1;
        if(a.approxPrice==b.approxPrice) return 0;
    });
    localStorage.setItem("mRestraunts",JSON.stringify(data));
    displayHome(data);
}

let carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
function autoSlide(){
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
function dragStart(e){
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
function dragging(e){
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}
function dragStop(){
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}


