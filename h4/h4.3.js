var plaatjes=[0,1,2];
var teller=0;
 var slideholder1= document.getElementById("slideholder1");
 var slideholder2= document.getElementById("slideholder2");
 var slideholder3= document.getElementById("slideholder3");

 slideholder1.style.backgroundImage="url('img/aap"+getaap()+".jpg')";
 slideholder1.style.backgroundImage="url('img/aap2.jpg')";
 slideholder1.addEventListener("click",function () {
     getaap();

})
 slideholder2.style.backgroundImage="url('img/aap"+getaap()+".jpg')";
 slideholder2.style.backgroundImage="url('img/aap2.jpg')";
 slideholder2.addEventListener("click",function () {
     getaap()
 })