import "./css/index.css"

export class LoginSocial {
  constructor(container) {
    this.container = container
  }

  initialization() {
    console.log("initialization");
    
    let loginWrapper = document.createElement("div")
    loginWrapper.className = "loginWrapper"

    let btnGoole = document.createElement("button")
    btnGoole.innerHTML = "Google"
    btnGoole.className = "btnGoole"

    let btnFacebook = document.createElement("button")
    btnFacebook.innerHTML = "Facebook"
    btnFacebook.className = "btnFacebook"

    btnGoole.addEventListener("click", function(event){
      console.log(event);
    })

    btnFacebook.addEventListener("click", function(event){
      console.log(event);
    })

    loginWrapper.appendChild(btnGoole)
    loginWrapper.appendChild(btnFacebook)
    this.container.appendChild(loginWrapper)
  }

}