/**
 * 
 */

//kopelling met html
const selKinderen = document.querySelector("#kinderen")
const LijstGeschenken = document.querySelector("#geschenkenlijst")
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

selKinderen.addEventListener("change", (e)=>{
    //haal de geselecteerde id
    console.log(e.target.value);
    //
    fetch("https://o-apiandclient-render.onrender.com/kinderen" + e.target.value)
        .then(info => info.json())
        .then((geschenk)=>{
            LijstGeschenken.innerHTML = ""
            const newLi = document.querySelector("li")
            newLi.innerHTML = geschenk.geschenkId
            LijstGeschenken.appendChild(newLi)
            
        })
})