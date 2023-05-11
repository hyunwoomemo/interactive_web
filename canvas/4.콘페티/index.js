import Particle from "./js/Particle.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let canvasWidth = innerWidth
let canvasHeight = innerHeight
const dpr = window.devicePixelRatio > 1 ? 2 : 1;
const interval = 1000 / 60

const particles = []

function init() {
  canvasWidth = innerWidth
  canvasHeight = innerHeight
  canvas.style.width = canvasWidth + 'px'
  canvas.style.height = canvasHeight + 'px'
  canvas.width = canvasWidth * dpr;
  canvas.height = canvasHeight * dpr;
  ctx.scale(dpr, dpr)

  confetti({
    x: canvasWidth / 2,
    y: canvasHeight / 2,
    count: 10
  })
}

function confetti({ x, y, count, deg, colors, shapes, spread }) {
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(x, y, deg, colors, shapes, spread))
  }
}

function render() {
  let now, delta
  let then = Date.now()

  let deg = 0

  const x = innerWidth / 2
  let y = innerHeight / 2
  let widthAlpha = 0
  const width = 50
  const height = 50


  const frame = () => {
    requestAnimationFrame(frame)
    now = Date.now()
    delta = now - then
    if (delta < interval) return
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    deg += 1


    confetti({
      x: 0,
      y: 0.5,
      count: 5,
      deg: -50,
    })
    confetti({
      x: 1,
      y: 0.5,
      count: 5,
      deg: -130,
    })

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update()
      particles[i].draw(ctx)

      if (particles[i].opacity < 0) particles.splice(i, 1)
      if (particles[i].y > canvasHeight) particles.splice(i, 1)
    }


    then = now - (delta % interval)
  }

  requestAnimationFrame(frame)
}

window.addEventListener('load', () => {
  init()
  render()
})

window.addEventListener('resize', () => {
  init()
})

window.addEventListener('click', () => {
  confetti({
    x: 0,
    y: 0.5,
    count: 10,
    deg: -50,
  })
})