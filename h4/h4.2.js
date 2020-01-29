var plaatjes =[1,2,3,4,5,6,7,8,9];
var teller =0;
var slideholder= document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('aap1.jpg')";
slideholder.addEventListener("click", function () {
    getaap();
    slideholder.style.backgroundImage = "url('aap" + getaap() +".jpg')";

});
function getaap() {
    if(teller>= plaatjes.length){
        teller = 1;
    } else{
        teller++;
    }

    console.log(teller);
    return teller;


}