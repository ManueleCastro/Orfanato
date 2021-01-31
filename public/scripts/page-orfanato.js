const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
// create map

const map = L.map("mapid", options).setView([-8.0595507, -34.8858846], 15);

// create and add tilelayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconsize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create and add marker

L.marker([-8.0595507, -34.8858846], { icon })
  .addTo(map)
  
 // image gallery //

 function selectImage(event) {
    const button = event.currentTarget

    // remover todas as classes .active

    const buttons = document.querySelectorAll(".images button")
    console.log(buttons)
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")    
    }

    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orfanato-details > img")

    // atualizar o container de image
    imageContainer.src = image.src

    // adicionar a classe .active para este botão clicado
    button.classList.add('active')
 }