if(document.URL.match(/(www\.)?curseforge\.com\/.*files\/\d+/gm)) addButton()

window.addEventListener("scroll", (event) => {
    if(document.URL.match(/(www\.)?curseforge\.com\/.*files\/\d+/gm)) addButton()
})

function addButton() {
	if(document.getElementById("instant_download")) return;
	let path = document.URL.split("/")
	let file_id = path[path.findIndex((thing) => thing == "files") + 1];
	let filename = document.getElementsByClassName("section-file-name")[0].getElementsByTagName("p")[0].innerText
	let hbox = document.getElementsByClassName("file-details")[0].getElementsByClassName(" split-button")[0]
	let prototype = hbox.children[0]
	let button = document.createElement(prototype.tagName)
	let span = document.createElement("span")
	span.innerText = "Instant Download"
	button.className = prototype.className
	button.href = `https://mediafilez.forgecdn.net/files/${Number(file_id.slice(0, 4))}/${Number(file_id.slice(4, 7))}/${filename}`
	button.appendChild(prototype.getElementsByTagName("svg")[0].cloneNode(true))
	button.appendChild(span)
	button.id = "instant_download"
	hbox.prepend(button);
}