let key_kom =  document.querySelector("#kom");
let val_kom =  document.querySelector("#komplect-select");
let sendbtn =  document.querySelector("#send");
let clearbtn =  document.querySelector("#clear");

key_kom.value = "Комплектация";
val_kom.value = null;


function addValues(){
  if (!(key_kom == "Комплектация" || val_kom==null))
  {
    localStorage.setItem(key_kom.value, val_kom.value);
    key_kom.value = "Комплектация";
    val_kom.value = null; 
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