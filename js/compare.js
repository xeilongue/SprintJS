class Car {

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome
        this.preco = preco
        this.alturaCacamba = alturaCacamba
        this.alturaVeiculo = alturaVeiculo
        this.alturaSolo = alturaSolo
        this.capacidadeCarga = capacidadeCarga
        this.motor = motor
        this.potencia = potencia
        this.volumeCacamba = volumeCacamba
        this.roda = roda
        this.image = image
    }

}

let carList = [];

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(car) {

    for (let i = 0; i < carList.length; i++) {

        if (carList[i].nome === car.nome)
            return i;
    }

    return -1;

}

function SetCarToCompare(input, car) {

    if (input.checked == false) {

        const carIndex = GetCarArrPosition(car)
        carList.splice(carIndex, 1)

        return
    }

    if(carList.length > 1) {

        input.checked = false
        alert ("Não pode selecionar mais de dois carros")

        return
    }

    carList.push(car)

}

function ShowCompare() {
   
    if (carList.length !== 2) {
        alert ("O número de pessoas tem que ser dois!")
        return
    }

    UpdateCompareTable()

    const dialog = document.getElementById("compare")

    dialog.showModal()

}

function HideCompare() {
    
    const dialog = document.getElementById("compare")

    dialog.close()

}

function UpdateCompareTable() {

    // IMAGEM
    const imgUm = document.getElementById("compare_image_0")
    const imgDois = document.getElementById("compare_image_1")

    
    imgUm.src = carList[0].image
    imgDois.src = carList[1].image
    console.log(carList[0].image)

    // MODELO
    const modeloUm = document.getElementById("compare_modelo_0")
    const modeloDois = document.getElementById("compare_modelo_1")

    modeloUm.innerHTML = carList[0].nome
    modeloDois.innerHTML = carList[1].nome

    // ALTURA DA CACAMBA
    const alturaDaCacambaUm = document.getElementById("compare_alturacacamba_0")
    const alturaDaCacambaDois = document.getElementById("compare_alturacacamba_1")

    alturaDaCacambaUm.innerHTML = carList[0].alturaCacamba
    alturaDaCacambaDois.innerHTML = carList[1].alturaCacamba

    // ALTURA DO VEICULO
    const alturaDoVeiculoUm = document.getElementById("compare_alturaveiculo_0")
    const alturaDoVeiculoDois = document.getElementById("compare_alturaveiculo_1")

    alturaDoVeiculoUm.innerHTML = carList[0].alturaVeiculo
    alturaDoVeiculoDois.innerHTML = carList[1].alturaVeiculo

    // ALTURA SOLO
    const alturaSoloUm = document.getElementById("compare_alturasolo_0")
    const alturaSoloDois = document.getElementById("compare_alturasolo_1")

    alturaSoloUm.innerHTML = carList[0].alturaSolo
    alturaSoloDois.innerHTML = carList[1].alturaSolo

    // CAPACIDADE DA CARGA
    const capacidadeCargaUm = document.getElementById("compare_capacidadecarga_0")
    const capacidadeCargaDois = document.getElementById("compare_capacidadecarga_1")

    capacidadeCargaUm.innerHTML = carList[0].capacidadeCarga
    capacidadeCargaDois.innerHTML = carList[1].capacidadeCarga

    // MOTOR 
    const motorUm = document.getElementById("compare_motor_0")
    const motorDois = document.getElementById("compare_motor_1")

    motorUm.innerHTML = carList[0].motor
    motorDois.innerHTML = carList[1].motor

    // POTENCIA
    const potenciaUm = document.getElementById("compare_potencia_0")
    const potenciaDois = document.getElementById("compare_potencia_1")

    potenciaUm.innerHTML = carList[0].potencia
    potenciaDois.innerHTML = carList[1].potencia
     
    // VOLUME CACAMBA  
    const volumeCacambaUm = document.getElementById("compare_volumecacamba_0")
    const volumeCacambaDois = document.getElementById("compare_volumecacamba_1")

    volumeCacambaUm.innerHTML = carList[0].volumeCacamba
    volumeCacambaDois.innerHTML = carList[1].volumeCacamba

    // RODA
    const rodaUm = document.getElementById("compare_roda_0")
    const rodaDois = document.getElementById("compare_roda_1")

    rodaUm.innerHTML = carList[0].roda
    rodaDois.innerHTML = carList[1].roda

    // PREÇO
    const precoUm = document.getElementById("compare_preco_0")
    const precoDois = document.getElementById("compare_preco_1")

    precoUm.innerHTML = carList[0].preco
    precoDois.innerHTML = carList[1].preco

}
