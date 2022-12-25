const buyBtns = document.querySelectorAll('js-buy-ticket')

function showBuyTickets() {
    alert("show")
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}