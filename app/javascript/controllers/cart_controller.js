import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="cart"
export default class extends Controller {
  initialize() {
    const cart = JSON.parse(localStorage.getItem("cart"))
    const elem = document.getElementById("checkout")
    if (!cart) {
      elem.setAttribute("disabled", "disabled")
      return
    } else if (cart.length === 0) {
      elem.setAttribute("disabled", "disabled")
    } else {
      elem.removeAttribute("disabled")
    }
    let total = 0
    for (let i=0; i < cart.length; i++) {
      const item = cart[i]
      total += item.price * item.quantity
      const div = document.createElement("div")
      div.classList.add("mt-2")
      div.innerText = `Item: ${item.name} - $${item.price} - Quantity: ${item.quantity}`
      const deleteButton = document.createElement("button")
      deleteButton.innerText = "Remove"
      console.log("item.id: ", item.id)
      deleteButton.value = JSON.stringify({id: item.id})
      deleteButton.classList.add("bg-gray-500", "rounded", "text-white", "px-2", "py-1", "ml-2")
      deleteButton.addEventListener("click", this.removeFromCart)
      div.appendChild(deleteButton)
      this.element.prepend(div)
    }

    const totalEl = document.createElement("div")
    totalEl.innerText= `Total: $${total}`
    let totalContainer = document.getElementById("total")
    totalContainer.appendChild(totalEl)
  }

  clear() {
    localStorage.removeItem("cart")
    window.location.reload()
  }

  removeFromCart(event) {
    const cart = JSON.parse(localStorage.getItem("cart"))
    const values = JSON.parse(event.target.value)
    const {id} = values
    const index = cart.findIndex(item => item.id === id )
    if (index >= 0) {
      cart.splice(index, 1)
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    window.location.reload()
  }

  checkout() {
    const cart = JSON.parse(localStorage.getItem("cart"))
    const payload = {
      authenticity_token: "",
      cart: cart
    }

    const csrfToken = document.querySelector("meta[name='csrf-token']").content
    localStorage.removeItem("cart")

    fetch("/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
      },
      body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) {
          response.json().then(body => {
            window.location.href = body.url
          })
        } else {
          response.json().then(body => {
            const errorElem = document.createElement("div")
            errorElem.innerText = `There was an error processing your order. ${body.error}`
            let errorContainer = document.getElementById("errorContainer")
            errorContainer.appendChild(errorElem)
          })
        }
      })
  }
}
