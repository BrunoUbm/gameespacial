const StartButton = document.querySelector('.btn')
const ElementInitial = document.querySelector('.initial')

StartButton.addEventListener('click', () => {
    ElementInitial.style.display = 'none'
    class RocketPosition {
        constructor(position, width, tiro, height, X, points) {
            this.position = position
            this.width = width
            this.tiro = tiro
            this.height = height
            this.x = X
            this.points = points
        }  
        MovementRocket() {
            window.addEventListener('keypress', (event) => {
                const keycode = event.charCode
                const MarginLeft = String.fromCharCode(keycode)
                switch (MarginLeft) {
                    case 'd':
                        this.position += 30
                        if (this.position != this.width - 100) {
                            const maxwidthRight = (this.width - 100) / this.position
                            if (maxwidthRight < 1) {
                                this.position = 0
                            }
                            document.querySelector('#foguete').style.left = `${this.position}px`
                        }
                        break;
    
                    case 'a':
                        this.position -= 30
                        if (this.position != this.width) {
                            const maxwidthLeft = this.width / this.position
                            if (maxwidthLeft < 1) {
                                this.position = this.width - 100
                            }
                            document.querySelector('#foguete').style.left = `${this.position}px`
                        }
                        break;
                    
                    case ' ':
                            const elementTiro = document.querySelector('#tiro')
                            const foguete = document.querySelector('#foguete')
                            const alvo = document.querySelector('.alvo')
                            const points = document.querySelector('.points')

                            if (this.tiro < this.height - 30) {
                                const timeMov = setInterval(() => {
                                    this.tiro += 5
                                    elementTiro.style.bottom = `${this.tiro}px`
                                    if (this.tiro >= this.height) {
                                        const colision = (foguete.offsetLeft + 25) - alvo.offsetLeft
                                        console.log(colision);
                                        if (colision >= -40 && colision <= 40) {
                                            this.points += 1
                                            points.innerText = this.points
                                        }
                                        this.tiro = 100
                                        clearInterval(timeMov)
                                    }
                                }, 0.1);
                            }
                            break
    
                    default:
                        break
                }
            })
                
        }
        MovementAlvo(){
            const points = document.querySelector('.points')
            const mov = setInterval(() => {
                const alvo = document.querySelector('.alvo')
                const RandomX = Math.floor(Math.random() * this.x)
                alvo.style.left = `${RandomX}px`
                
            }, 2500)
            setInterval(() => {
                ElementInitial.style.display = "block"
                this.points = 0
                points.innerText = this.points
                clearInterval(mov)

            }, 60000)
        }
    }
    const PositionInitial = new RocketPosition(0, window.innerWidth, 100, window.innerHeight, window.innerWidth - 50, 0)
    PositionInitial.MovementRocket()
    PositionInitial.MovementAlvo()
})







