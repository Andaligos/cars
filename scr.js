let ob =  document.querySelector("#v");
let motor =  document.querySelector("#motor-select");
let kor =  document.querySelector("#box");
let kpp =  document.querySelector("#kpp-select");
let s =  document.querySelector("#sl");
let salon =  document.querySelector("#salon-select");
let sendbtn =  document.querySelector("#send");
let clearbtn =  document.querySelector("#clear");

ob.value = "Объем двигателя";
motor.value = null;
kor.value = "Коробка переключения предач";
kpp.value = null;
s.value = null;
salon.value = null;

function addValues(){
  if (!(ob == "Объем двигателя" || motor==null))
  {
    localStorage.setItem(v.value, motor.value);
    ob.value = "Объем двигателя";
    motor.value = null; 
  }
}

sendbtn.addEventListener("click", addValues);

clearbtn.addEventListener("click", function (){
  localStorage.clear();
})

/* (!(kor == "Коробка переключения предач" || kpp==null))
 localStorage.setItem(kor.value, kpp.value);
 kor.value = null;
    kpp.value = null;*/