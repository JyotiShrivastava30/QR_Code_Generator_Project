let input = document.getElementById("input");
let img = document.getElementById("img");

function myFun(){
      let value = input.value;

      if(value){
            img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`
            // img.src=`https://www.qrcode-monkey.com/qrcode/api`
      }
}