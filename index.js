const allPuppies =  document.querySelector("#allPuppies")
const singlePuppy = document.querySelector("#singlePuppy")
let puppies = []

window.addEventListener("hashchange", () => {
    
    render()
})

async function getAllPuppy () {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310-FTB-ET-WEB-FT/players")
    const data = await response.json()
    
   puppies = data.data.players
   
   render()
    
}
async function render() {
    const pupList = puppies.map((pup) => {
        return `<div> <a href=#${pup.name}> ${pup.name} </a> <div>`
    })
    //allPuppies.innerHTML = "<h1>Puppy list <h1>"  + pupList.join("")
    
    const name = window.location.hash.slice(1)
    //console.log(name)

    const singlePup = puppies.find((pup) => {
        return pup.name === name
    
    })
    //console.log(singlePup)
    allPuppies.innerHTML = singlePup ? "" : "<h1>Puppy list <h1>"  + pupList.join("")
    if(singlePup) {
        const pupData = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310-FTB-ET-WEB-FT/players")
        const singlePupData = await pupData.json()
        console.log(singlePupData)

        singlePuppy.innerHTML = `
            <h1> selected poochie </h1>
            <h2> ${singlePupData.players} </h2>
            <img src =$ {singlePupData.imgageUrl} />
            `





    }
      
          
           
    
}


getAllPuppy()