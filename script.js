document.querySelector("#button").addEventListener("mouseover",() => {
    document.querySelector("#button").style.cursor = "pointer";
})

    function multiplier() {
        let mult = document.querySelector("#txtn")
        let res = document.querySelector("#result")
        if (mult.value.length == 0) {        
            window.alert("Please, type a number")
        }  else {
            let n = Number(mult.value)
            let c = 1
            res.innerHTML = ''
            while (c <= 10) {
                let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                item.value = `res${c}`
                res.appendChild(item)
                c++
        }
    }
}