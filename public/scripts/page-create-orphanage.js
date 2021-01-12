//create map
const map = L.map('mapid').setView([-22.8806769,-42.0389476], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=latitude]").value = lat;
    document.querySelector("[name=longitude]").value = lng;

    //remove icon
    marker && map.removeLayer(marker);
    

    //add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map)
})

//Campo de fotos
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector("#images")
    //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll(".new-upload")
    //realizar o clone/duplicação da umtima imagem adicionanda
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se está vazio, se sim não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return 
    }
    //limpar o campo antes de adicionar ao container de imagens
    newFieldContainer.children[0].value = ""
    //adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}

//deletar campo de foto
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll(".new-upload")

    if (fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();
}

//selecionar sim ou não
function toggleSelect(event) {
    //retirar a classe .active dos botões
    document.querySelectorAll(".button-select button")
    .forEach(button => button.classList.remove('active')) // função reduzida
    //colocar a classe no botao selecionado
    const button = event.currentTarget
    button.classList.add('active')
    //pegar o botão clicado
    //atualizar meu input hidden com o valor selecionado 
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
    //verificar se é sim ou não
    //colocar a classe active
}