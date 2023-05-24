const btn = document.querySelector('#btn')
const wrap = document.querySelector('.wrapper')


btn.addEventListener('click' , () => {
    const request = new XMLHttpRequest()
    request.open('GET' , 'data.json')
    request.setRequestHeader('Content-Type' , 'application/json')
    request.send()
    request.addEventListener('load' , () => {
        let result = JSON.parse(request.response)
        result.forEach((item) => {

            const div = document.createElement('div')
            div.innerHTML =
                `<div>
                <div class="img">
                <img src="${item.img}" alt="">
                </div>
                   <span class="span">${item.price}</span>
                 <p class="description">${item.description}</p>
                 </div>`
            wrap.append(div)
        })
        // const data = JSON.parse(request.response)
        // let span = document.querySelectorAll('.span')
        // let img = document.querySelectorAll('img')

    })
})
