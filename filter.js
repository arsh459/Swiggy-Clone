document.querySelector("#submit").addEventListener("click",function(){
    var data1=document.querySelectorAll("#filters>div>input");
    submitData(data1);
})
document.querySelector("#cancel").addEventListener("click",function(){
    localStorage.setItem("mRestraunts",JSON.stringify(JSON.parse(localStorage.getItem("Restraunts"))));
    localStorage.setItem("filters",JSON.stringify([]));
    window.location.href="index.html";
})

function submitData(data1){
    var data=Array.from(data1)
    if(data.length==0){
        localStorage.setItem("mRestraunts",localStorage.getItem("Restraunts"));
        localStorage.setItem("filters",JSON.stringify([]));
    }
    else{
        let filteredData=data.filter(function(e,i){
            return e.checked==true;
        })
        let arr=[];
        for(let i=0;i<filteredData.length;i++){
            arr.push(filteredData[i].value)
        }
        localStorage.setItem("filters",JSON.stringify(arr));
    }
    
    window.location.href="index.html";
}