/**
 * 
 */

//kopelling met html
const selKinderen = document.querySelector("#kinderen")
const LijstGeschenken = document.querySelector("#geschenkenlijst")
const btnKindToevoegen = document.querySelector("#voegKind")
const btnKindVerwijder = document.querySelector("#verwijderKind")
const selGeschenken = document.querySelector("geschenken")


//kinderen in select
fetch("https://o-apiandclient-render.onrender.com/kinderen")
    .then((info)=>info.json())
    .then((kinderen)=>{
        kinderen.forEach((kind)=>{
            const newOption = document.createElement("option");
            newOption.value = kind.id
            newOption.innerHTML = kind.voornaam;
            selKinderen.appendChild(newOption)
        })
    })

//geschenken in select
fetch("https://o-apiandclient-render.onrender.com/geschenken")
    .then((info)=>info.json())
    .then((geschenken)=>{
        geschenken.forEach((geschenk)=>{
            const newOption = document.createElement("option");
            newOption.value = geschenk.id
            newOption.innerHTML = geschenk.naam;
            selGeschenken.appendChild(newOption)
        })
    })


selKinderen.addEventListener("change", (e)=>{
    //haal de geselecteerde id
    console.log(e.target.value);
    //display de geschenken
    fetch("https://o-apiandclient-render.onrender.com/kinderen/" + e.target.value)
        .then((info) => info.json())
        .then((geschenk)=>{
            LijstGeschenken.innerHTML = ""
            const newLi = document.createElement("li")
            newLi.innerHTML = geschenk.voornaam
            LijstGeschenken.appendChild(newLi)
            
        })
})

//toeveogen kind
btnKindToevoegen.addEventListener()



//verwijderen kind
btnKindVerwijder.addEventListener("click", (e)=>{
    const id = selKinderen.value
    const option = {
        method : "DELETE"
    }
    fetch("https://o-apiandclient-render.onrender.com/kinderen/" + id, option)
        .then((info)=>info.json())
        .then((kind)=>{
            console.log(kind);
            
        })
})
