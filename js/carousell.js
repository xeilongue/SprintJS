// carouselArr.push(new Carousel("imagem_1.jpg","Esta é a nova Ranger Ford 2022. Verifique novidades.","lancamento.html"));
// carouselArr.push(new Carousel("imagem_2.jpg","Ford a nossa história","#"));
// carouselArr.push(new Carousel("imagem_3.jpg","Nova Ford Bronco Sport 2022","lancamento.html"));

class Carousel {

    constructor(content) {
        this.img = document.getElementById('carousel-img')
        this.title = document.getElementById('carousel-title')
        this.url = document.getElementById('carousel-link')
        this.content = content
        this.index = 0

        this.prevBtn = document.getElementById("prevBtn")
        this.nextBtn = document.getElementById("nextBtn")

    }

    start(interval) {

        this.updateElements()


        setInterval(() => {

            this.next()
            this.updateElements()
            
        }, interval)

    }

    next() {

        if (this.index === content.length-1) {
            this.index = 0
        }
        else {
            this.index++
        }

    }

    updateElements() {
        this.img.src = this.content[this.index].img
        this.title.innerHTML = this.content[this.index].title
        this.url.href = this.content[this.index].url
    }



    nextbutton() {
        clearInterval(interval)
        this.next()
        this.updateElements()
    }

    backbutton() {
        
        if (this.index === 0) {
            this.index = content.length-1
        }
        else {
            this.index--
        }

        this.updateElements()
    }

}

const content = [
    {
        img: "./img/imagem_1.jpg",
        title: "Esta é a nova Ranger Ford 2022. Verifique novidades.",
        url: "lancamento.html"
    },
    {
        img: "./img/imagem_2.jpg",
        title: "Ford a nossa história",
        url: "lancamento.html"
    },
    {
        img: "./img/imagem_3.jpg",
        title: "Nova Ford Bronco Sport 2022",
        url: "lancamento.html"
    }
]

const carousel = new Carousel(content)

let interval = 2000
carousel.start(interval)

carousel.prevBtn.addEventListener("click", () => carousel.backbutton())
carousel.nextBtn.addEventListener("click", () => carousel.nextbutton())
