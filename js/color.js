let color = [
    ["#fdeb71","#f8d800"],
    ["#adbcff","#0396ff"],
    ["#feb692","#ea5455"],
    ["#ce9ffc","#7367f0"],
    ["#90f7ec","#32ccbc"],
    ["#fff6b7","#f6416c"],
    ["#000","#f6416c"],
];
let container = document.querySelector('.container');
color.forEach((one,two)=>{
    let card = document.createElement('div');
    card.className = "card";
    console.log(card);
    card.innerText = `${one}`; 
    card.style.background =`linear-gradient(${one})`;
   container.appendChild(card);
    console.log(`linear-gradient(${one},${two})`);
})