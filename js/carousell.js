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
    }

    start(interval) {

        this.updateElements()
        this.next()

        setInterval(() => {

            this.updateElements()
            this.next()
            
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

carousel.start(2000)