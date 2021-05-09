function clicked(){
    console.log("The btn was clicked");
}

// window load
window.onload = function(){
    console.log("The document was loaded")
}

// adding event listener
// click
div.addEventListener('click',function(){
    console.log("click hua")
})

// mouse over
div.addEventListener('mouseover',function(){
    console.log("Mouse on div")
})

// mouse out
div.addEventListener('mouseout',function(){
    console.log("Mouse out of div")
})

// mouse up
div.addEventListener('mouseup',function(){
    console.log("Mouseup")
})

// mouse down
div.addEventListener('mousedown',function(){
    console.log("Mousedown")
})