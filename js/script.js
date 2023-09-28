const fetchData = async () => {
  fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
      const detailsContainer = document.querySelector('.details')
      const totalContainer = document.querySelector('.avg-score')

      let sum = 0
      data.forEach((item) => {
        sum += item.score
        let summary_item = `<div class="summary-item flex align-center justify-between grow">
            <div class="item-title flex align-center">
                <img class="icon" src="${item.icon}" alt="${item.category} Icon Image">
                <p>${item.category}</p>
            </div>
            <div class="item-score">

                <span>${item.score}</span> / 100
            </div>
        </div>`
        detailsContainer.innerHTML += summary_item
      })

      totalContainer.textContent = Math.round(sum / data.length)
    })
    .catch((error) => console.log('Error: ', error))
}

fetchData()
