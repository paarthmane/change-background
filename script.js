//created 6 color buttons 

let newDiv1 = document.createElement("button")
newDiv1.innerHTML = "Purple"
let newDiv2 = document.createElement("button")
newDiv2.innerHTML = "teal"
let newDiv3 = document.createElement("button")
newDiv3.innerHTML = "Green"
let newDiv4 = document.createElement("button")
newDiv4.innerHTML = "Magenta"
let newDiv5 = document.createElement("button")
newDiv5.innerHTML = "Cyan"
let newDiv6 = document.createElement("button")
newDiv6.innerHTML = "Coral"

// added buttons inside of main container 
let existingDiv = document.querySelector(".container")
existingDiv.appendChild(newDiv1)
existingDiv.appendChild(newDiv2)
existingDiv.appendChild(newDiv3)
existingDiv.appendChild(newDiv4)
existingDiv.appendChild(newDiv5)
existingDiv.appendChild(newDiv6)




// changed background color
newDiv1.addEventListener("click",() =>{
    document.body.style.backgroundColor = "purple"
    newDiv1.style.color = "purple"
})
newDiv2.addEventListener("click",() =>{
    document.body.style.backgroundColor = "teal"
    newDiv2.style.color = "teal"
})
newDiv3.addEventListener("click",() =>{
    document.body.style.backgroundColor = "green"
    newDiv3.style.color = "green"
})
newDiv4.addEventListener("click",() =>{
    document.body.style.backgroundColor = "magenta"
    newDiv4.style.color = "magenta"
})
newDiv5.addEventListener("click",() =>{
    document.body.style.backgroundColor = "cyan"
    newDiv5.style.color = "cyan"
})
newDiv6.addEventListener("click",() =>{
    document.body.style.backgroundColor = "Coral"
    newDiv6.style.color = "Coral"
})

let title = document.createElement("title")
title.innerHTML = "Change Background"
document.head.appendChild(title)

