let body = document.body
let container = document.createElement(`div`)
container.classList.add(`container`)
body.append(container)






for (let item of data) {
    let poduct = document.createElement(`div`)
    let poduct_img = document.createElement(`img`)
    let poduct_name = document.createElement(`span`)
    let poduct_price = document.createElement(`span`)
    let poduct_collor = document.createElement(`div`)
    let poduct_collor1 = document.createElement(`div`)
    let poduct_collor2 = document.createElement(`div`)
    let hr = document.createElement(`div`)
    let hrs = document.createElement(`div`)


    poduct_collor1.style.backgroundColor = item.colors[0]
    poduct_collor2.style.backgroundColor = item.colors[1]




    let poduct_buy = document.createElement(`button`)


    poduct.classList.add(`poduct`)
    hr.classList.add(`hr`)
    hrs.classList.add(`hrs`)
    poduct_img.classList.add(`poduct_img`)
    poduct_name.classList.add(`poduct_name`)
    poduct_price.classList.add(`poduct_price`)
    poduct_collor.classList.add(`poduct_collor`)
    poduct_collor1.classList.add(`poduct_collor1`)
    poduct_collor2.classList.add(`poduct_collor1`)

    poduct_buy.classList.add(`poduct_buy`)

    poduct_img.src = `./img/` + item.img.C7C8CA
    poduct_name.innerHTML = item.title
    poduct_price.innerHTML = item.price
    poduct_buy.innerHTML = `buy`

    poduct_collor.append(poduct_collor1, poduct_collor2)
    container.append(poduct)
    poduct.append(poduct_img, poduct_name, poduct_price, poduct_collor, poduct_buy, hr)

    if (item.colors[2]) {
        let poduct_collor3 = document.createElement(`div`)
        poduct_collor3.classList.add(`poduct_collor1`)
        poduct_collor3.style.backgroundColor = item.colors[2]
        poduct_collor.append(poduct_collor3)

        poduct_collor3.onclick = () => {
            poduct_img.src = `./img/` + item.img.E3CCB4
        }
    }





    poduct_collor1.onclick = () => {
        poduct_img.src = `./img/` + item.img.C7C8CA
    }
    poduct_collor2.onclick = () => {
        poduct_img.src = `./img/` + item.img.B1B2B7
    }





    for (let key in item.specs) {

        let box_1 = document.createElement(`div`)
        let box_1_img = document.createElement(`img`)

        box_1.classList.add(`box_1`)

        box_1_img.classList.add(`box_1_img`)

        box_1_img.src = `./img/` + key + `.png`



        if (typeof (item.specs[key]) !== `object`) {
            let sizes = document.createElement(`span`)
            sizes.classList.add(`size`)
            if (key === `battery`) {
                sizes.innerHTML = `Up to ` + item.specs[key] + ` hours battoty life`
            }
            else if (key === `weight`) {
                sizes.classList.add(`wegse`)
                sizes.innerHTML = item.specs[key] + ` Ib` + `<br> weight`
            }
            else {
                sizes.innerHTML = item.specs[key]
            }
            box_1.append(box_1_img, sizes)

        }
        else if (Array.isArray(item.specs[key])) {
            box_1.append(box_1_img)

            // for (let el of item.specs[key]) {
            let description = document.createElement(`span`)
            description.classList.add(`description`)
            description.innerHTML = item.specs[key].join(` `)
            box_1.append(description)
            // }
        }
        else if (key === `memory`) {
            let keyys = document.createElement(`span`)
            let description = document.createElement(`span`)
            description.classList.add(`description`)
            keyys.classList.add(`wegs`)
            keyys.innerHTML = item.specs[key].size + item.specs[key].type
            description.innerHTML = `Maximum configurable storage`
            box_1.append(keyys, description)
        }
        else {
            box_1.append(box_1_img)
            for (let keyy in item.specs[key]) {
                if (item.specs[key][keyy]) {
                    let keyys = document.createElement(`span`)
                    keyys.classList.add(`${keyy}`)
                    keyys.innerHTML = item.specs[key][keyy]
                    box_1.append(keyys)
                }


            }
        }

        poduct.append(box_1)

    }

    poduct.append(hrs)
    let a = document.createElement(`a`)
    a.href = item.url
    a.innerHTML = `learn more`
    poduct.append(a)

}
