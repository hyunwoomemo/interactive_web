import CanvasOption from "./js/CanvasOption.js"
import Particle from "./js/Particle.js"
import { randomNumBetween } from "./js/utils.js"

class Canvas extends CanvasOption {
  constructor() {
    super()

    this.particles = []
  }
  init() {
    this.canvasWidth = innerWidth
    this.canvasHeight = innerHeight
    this.canvas.width = this.canvasWidth * this.dpr
    this.canvas.height = this.canvasHeight * this.dpr
    this.ctx.scale(this.dpr, this.dpr)

    this.canvas.style.width = this.canvasWidth + 'px'
    this.canvas.style.height = this.canvasHeight + 'px'

    this.createParticles()
  }

  createParticles() {
    const PARTICLE_NUM = 50
    const x = randomNumBetween(0, this.canvasWidth)
    const y = randomNumBetween(0, this.canvasHeight)
    for (let i = 0; i < PARTICLE_NUM; i++) {
      const vx = randomNumBetween(-5, 5)
      const vy = randomNumBetween(-5, 5)
      this.particles.push(new Particle(x, y, vx, vy))
    }
  }

  render() {
    let now, delta
    let then = Date.now()

    const frame = () => {
      requestAnimationFrame(frame)
      // fps 작업
      now = Date.now()
      delta = now - then
      if (delta < this.interval) return
      this.ctx.fillStyle = this.bgColor
      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

      // 메인 코드 로직
      this.particles.forEach((particle, index) => {
        particle.update()
        particle.draw()

        // 투명도가 0보다 작아지면 파티클 삭제하는 로직
        // 만약 이 로직이 없다면 cpu를 많이 차지하기 때문에 꼭 적용해야함
        if (particle.opacity < 0) this.particles.splice(index, 1)
      })

      then = now - (delta % this.interval)
    }
    requestAnimationFrame(frame)
  }
}

const canvas = new Canvas()

window.addEventListener('load', () => {
  canvas.init()
  canvas.render()
})

window.addEventListener('resize', () => {
  canvas.init()
})

