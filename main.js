const dataCard=[
    {
        "id":1,
        "image":'https://static.tildacdn.com/stor3063-3662-4632-b131-653131313036/63465704.jpg',
        "price":2000,
        "title":'ФРЕЗЕРНЫЙ ОБРАБАТЫВАЮЩИЙ ЦЕНТР СЕРИИ VDL',
        "shifr":"VDL800",
        "power":'7,5 кВт',
        "komplect":'Fanuc /Siemens/BT40',
        "sklad":'Под заказ',
    },
    {
        "id":2,
        "image":'https://thumb.tildacdn.com/stor3437-3764-4364-a539-633537303763/-/format/webp/70848743.jpg',
        "price":6023569,
        "title":'ФРЕЗЕРНЫЙ ОБРАБАТЫВАЮЩИЙ ЦЕНТР СЕРИИ VDL S',
        "shifr":"VDL S850",
        "power":'7,5 кВт',
        "komplect":'Fanuc /Siemens/BT40',
        "sklad":'Под заказ',
    },
    {
        "id":3,
        "image":'https://static.tildacdn.com/stor3063-3662-4632-b131-653131313036/63465704.jpg',
        "price":21212122,
        "title":'ФРЕЗЕРНЫЙ ОБРАБАТЫВАЮЩИЙ ЦЕНТР СЕРИИ VDL',
        "shifr":"VDL800",
        "power":'7,5 кВт',
        "komplect":'Fanuc /Siemens/BT40',
        "sklad":'Под заказ',
    },
    {
        "id":4,
        "image":'https://static.tildacdn.com/stor3063-3662-4632-b131-653131313036/63465704.jpg',
        "price":215443,
        "title":'ФРЕЗЕРНЫЙ ОБРАБАТЫВАЮЩИЙ ЦЕНТР СЕРИИ VDL',
        "shifr":"VDL800",
        "power":'7,5 кВт',
        "komplect":'Fanuc /Siemens/BT40',
        "sklad":'Под заказ',
    },
    {
        "id":5,
        "image":'https://static.tildacdn.com/stor3063-3662-4632-b131-653131313036/63465704.jpg',
        "price":9000,
        "title":'ФРЕЗЕРНЫЙ ОБРАБАТЫВАЮЩИЙ ЦЕНТР СЕРИИ VDL',
        "shifr":"VDL800",
        "power":'7,5 кВт',
        "komplect":'Fanuc /Siemens/BT40',
        "sklad":'Под заказ',
    },
    {
        "id":6,
        "image":'https://static.tildacdn.com/stor3063-3662-4632-b131-653131313036/63465704.jpg',
        "price":1000,
        "title":'ФРЕЗЕРНЫЙ ОБРАБАТЫВАЮЩИЙ ЦЕНТР СЕРИИ VDL',
        "shifr":"VDL800",
        "power":'7,5 кВт',
        "komplect":'Fanuc /Siemens/BT40',
        "sklad":'Под заказ',
    }
    ,    {
        "id":7,
        "image":'https://static.tildacdn.com/stor3063-3662-4632-b131-653131313036/63465704.jpg',
        "price":1500,
        "title":'ФРЕЗЕРНЫЙ ОБРАБАТЫВАЮЩИЙ ЦЕНТР СЕРИИ VDL',
        "shifr":"VDL800",
        "power":'7,5 кВт',
        "komplect":'Fanuc /Siemens/BT40',
        "sklad":'Под заказ',
    }
    ,    {
        "id":8,
        "image":'https://static.tildacdn.com/stor3063-3662-4632-b131-653131313036/63465704.jpg',
        "price":12000,
        "title":'ФРЕЗЕРНЫЙ ОБРАБАТЫВАЮЩИЙ ЦЕНТР СЕРИИ VDL',
        "shifr":"VDL800",
        "power":'7,5 кВт',
        "komplect":'Fanuc /Siemens/BT40',
        "sklad":'Под заказ',
    },
    {
        "id":9,
        "image":'https://static.tildacdn.com/stor3063-3662-4632-b131-653131313036/63465704.jpg',
        "price":2900,
        "title":'ФРЕЗЕРНЫЙ ОБРАБАТЫВАЮЩИЙ ЦЕНТР СЕРИИ VDL',
        "shifr":"VDL800",
        "power":'7,5 кВт',
        "komplect":'Fanuc /Siemens/BT40',
        "sklad":'Под заказ',
    }
    ,    {
        "id":10,
        "image":'https://static.tildacdn.com/stor3063-3662-4632-b131-653131313036/63465704.jpg',
        "price":8000,
        "title":'ФРЕЗЕРНЫЙ ОБРАБАТЫВАЮЩИЙ ЦЕНТР СЕРИИ VDL',
        "shifr":"VDL800",
        "power":'7,5 кВт',
        "komplect":'Fanuc /Siemens/BT40',
        "sklad":'Под заказ',
    }
    ,
    {
        "id":11,
        "image":'https://static.tildacdn.com/stor3063-3662-4632-b131-653131313036/63465704.jpg',
        "price":12500,
        "title":'ФРЕЗЕРНЫЙ ОБРАБАТЫВАЮЩИЙ ЦЕНТР СЕРИИ VDL',
        "shifr":"VDL800",
        "power":'7,5 кВт',
        "komplect":'Fanuc /Siemens/BT40',
        "sklad":'Под заказ',
    }
]

var number=6

setTimeout(()=>{
    var a=dataCard.slice(0,number)
    a.map(item=>{
        document.querySelector(".main_card_big").innerHTML+=`
        <div class="main_card_big_div">
        <img src='${item.image}' alt="">
        <h1 class="main_card_big_div_price">${item.price} ₽</h1>
        <p class="main_card_big_div_text">${item.title}</p>
        <span class="main_card_big_div_modul">Артикул: ${item.shifr}</span>
        <div class="main_card_big_div_small_xusus"><h1>Мощность</h1><p>${item.power}</p></div>
        <div class="main_card_big_div_small_xusus"><h1>Комплектация</h1><p>${item.komplect}</p></div>
        <div class="main_card_big_div_small_xusus"><h1>На складе</h1><p>${item.sklad}</p></div>
       </div>
        `
    })
},100)

function main_button(){
    document.querySelector(".main_button").innerHTML=`<div class="loader"></div>`
    document.querySelector(".main_button").style="background:#777;width:100px;"

    setTimeout(()=>{
    number=number+6
    document.querySelector(".main_card_big").innerHTML=""
    var a=dataCard.slice(0,number)
    a.map(item=>{
        document.querySelector(".main_card_big").innerHTML+=`
        <div class="main_card_big_div">
        <img src='${item.image}' alt="">
        <h1 class="main_card_big_div_price">${item.price} ₽</h1>
        <p class="main_card_big_div_text">${item.title}</p>
        <span class="main_card_big_div_modul">Артикул: ${item.shifr}</span>
        <div class="main_card_big_div_small_xusus"><h1>Мощность</h1><p>${item.power}</p></div>
        <div class="main_card_big_div_small_xusus"><h1>Комплектация</h1><p>${item.komplect}</p></div>
        <div class="main_card_big_div_small_xusus"><h1>На складе</h1><p>${item.sklad}</p></div>
       </div>
        `
    })
    if(a.length<number){
        document.querySelector(".main_button_div").style="display:none"
    }
    document.querySelector(".main_button").innerHTML="Загрузить еще"
    document.querySelector(".main_button").style="background:rgb(16, 30, 34);width:auto;"
    },1000)
}
