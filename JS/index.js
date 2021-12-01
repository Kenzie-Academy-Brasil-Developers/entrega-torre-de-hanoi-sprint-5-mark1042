function addButtonsListener(){
    const buttons = document.getElementsByTagName("button")
    
    buttons[0].addEventListener("click", () => {
      window.location = "./pages/easy.html"
    })
  
    buttons[1].addEventListener("click", () => {
      window.location = "./pages/hard.html"
    })
}
addButtonsListener()