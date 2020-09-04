//Nesse começo eu busco elementos que vou usar no js
const blocos = document.querySelectorAll(".blocos");
const vencedor = document.querySelector("#resultado");
const parabens = document.querySelector("body>div:nth-child(3)");
const jogarDeNovo = document.querySelector("body>div:nth-child(4)");
let contaCliques = 0;

//Aqui eu crio uma função/evento de clique
function clicar (evento){

    if(parabens.style.visibility !== "visible") {
        if(evento.target.innerHTML == ""){
            //Aqui define se o X ganha
            if(contaCliques % 2 === 0 ){
                evento.target.innerHTML = "X";
            }
            //Caso ele não ganhe ele vem pra cá e mostra que o O ganha
            else if(contaCliques % 2 === 1){
                evento.target.innerHTML = "O";
            }
            contaCliques++;
            verificar(evento.target.innerHTML);
        };
    };
};

//Aqui verifica quem ganha, caso não ganhe vai dar velha
function verificar(resultado){
    
    if(blocos[0].innerHTML == blocos[1].innerHTML && blocos[1].innerHTML == blocos[2].innerHTML && blocos[0].innerHTML !== "" ||
    blocos[3].innerHTML == blocos[4].innerHTML && blocos[4].innerHTML == blocos[5].innerHTML && blocos[3].innerHTML !== "" ||
    blocos[6].innerHTML == blocos[7].innerHTML && blocos[7].innerHTML == blocos[8].innerHTML && blocos[6].innerHTML !== "" ||
    blocos[0].innerHTML == blocos[3].innerHTML && blocos[3].innerHTML == blocos[6].innerHTML && blocos[0].innerHTML !== "" ||
    blocos[1].innerHTML == blocos[4].innerHTML && blocos[4].innerHTML == blocos[7].innerHTML && blocos[1].innerHTML !== "" ||
    blocos[2].innerHTML == blocos[5].innerHTML && blocos[5].innerHTML == blocos[8].innerHTML && blocos[2].innerHTML !== "" ||
    blocos[0].innerHTML == blocos[4].innerHTML && blocos[4].innerHTML == blocos[8].innerHTML && blocos[0].innerHTML !== "" ||
    blocos[2].innerHTML == blocos[4].innerHTML && blocos[4].innerHTML == blocos[6].innerHTML && blocos[2].innerHTML !== ""){
        vencedor.innerHTML = `${resultado} VENCEU !!!`;
        parabens.style.visibility = "visible";
        jogarDeNovo.style.visibility = "visible";
    }
    else if(contaCliques == 9){
        vencedor.innerHTML = "Deu velha !!!";
        parabens.style.visibility = "visible";
        jogarDeNovo.style.visibility = "visible";
    };
};

//Aqui é a função de poder jogar novamentes
function jogarOutraVez(){
    contaCliques = 0;
    parabens.style.visibility = "hidden";
    jogarDeNovo.style.visibility = "hidden";
    for(bloco of blocos){
        bloco.innerHTML = "";
    };
};

for(let bloco of blocos){
    bloco.onclick = clicar;
};

jogarDeNovo.onclick = jogarOutraVez;