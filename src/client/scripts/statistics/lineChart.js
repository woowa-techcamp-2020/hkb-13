export class Line {
  constructor( $canvas,data) {
    this.data = data
    this.cvs =  $canvas
    this.ctx = this.cvs.getContext('2d')
    this.radius = 3

    this.cvsWidth = this.cvs.width
    this.cvsHeight = this.cvs.height
    this.xGap = 70
    this.yGap = 50
    this.graphLeftBottom = [this.xGap, this.cvsHeight - this.yGap]
    this.graphLeftTop = [this.xGap, this.yGap]
    this.graphRightBottom = [
      this.cvsWidth - this.xGap,
      this.cvsHeight - this.yGap,
    ]
    this.graphRightTop = [this.cvsWidth - this.xGap, this.yGap]
    this.graphHeight = this.cvsHeight - this.yGap * 2
    this.graphWidth = this.cvsWidth - this.xGap * 2

    this.oneDayWidth = this.graphWidth / (this.data.length - 1)

    this.xLineLeftBottom = [this.xGap, this.cvsHeight - 30]
    this.xLineRightBottom = [this.cvsWidth - this.xGap, this.cvsHeight - 30]

    this.yLineLeftTop = [this.xGap - 20, this.yGap]
    this.yLineLeftBottom = [this.xGap - 20, this.cvsHeight - this.yGap]

    this.max = Math.max.apply(
      null,
      this.data.map((d) => d.price)
    )
    this.drawX()
    this.drawY()
    this.draw()
  }

  draw() {
    this.ctx.beginPath()
    for (let i in this.data) {
      const val = this.data[i].price
      const y = this.graphLeftBottom[1] - (val / this.max) * this.graphHeight
      const x = this.oneDayWidth * i + this.graphLeftBottom[0]
      this.ctx.lineTo(x, y)
    }
    this.ctx.strokeStyle = '#10b3ad'

    this.ctx.stroke()
    this.ctx.closePath()

    for (let i in this.data) {
      const val = this.data[i].price
      const y = this.graphLeftBottom[1] - (val / this.max) * this.graphHeight
      const x = this.oneDayWidth * i + this.graphLeftBottom[0]
      this.ctx.beginPath()
      this.ctx.arc(x, y, this.radius, 0, Math.PI * 2)
      this.ctx.closePath()
      this.ctx.stroke()
      this.ctx.fillStyle = 'white'
      this.ctx.fill()
    }
  }

  drawX() {
    this.ctx.beginPath()
    this.ctx.lineTo(this.xLineLeftBottom[0], this.xLineLeftBottom[1])
    this.ctx.lineTo(this.xLineRightBottom[0], this.xLineRightBottom[1])
    this.ctx.stroke()
    this.ctx.closePath()

    for (let i in this.data) {
      if (i % 5 != 0) continue
      const x = this.oneDayWidth * i + this.xLineLeftBottom[0]
      this.ctx.font = '15px Arial'
      this.ctx.fillStyle = 'black'
      this.ctx.fillText(
        this.dateFormat(this.data[i].date),
        x,
        this.xLineLeftBottom[1] + 20
      )
    }
  }

  dateFormat(date) {
    const nDate = new Date(date)
    return `${nDate.getMonth() + 1}.${nDate.getDate()}`
  }

  drawY() {
    const div = 10

    for (let i = 0; i < div; i++) {
      const divPrice = this.max / div
      this.ctx.textAlign = 'right'

      this.ctx.fillText(
        this.priceFormat(i * divPrice),
        this.yLineLeftTop[0],
        this.yLineLeftBottom[1] - (this.yLineLeftBottom[1] / div) * i
      )

      this.ctx.beginPath()
      this.ctx.lineTo(
        this.graphLeftBottom[0],
        this.yLineLeftBottom[1] - (this.yLineLeftBottom[1] / div) * i - 5
      )
      this.ctx.lineTo(
        this.graphRightBottom[0],
        this.yLineLeftBottom[1] - (this.yLineLeftBottom[1] / div) * i - 5
      )

      this.ctx.strokeStyle = 'lightgray'
      this.ctx.stroke()
      this.ctx.closePath()
      this.ctx.strokeStyle = 'black'
    }

    const avgPrice = this.getAvg().toFixed(0)
    this.ctx.beginPath()

    this.ctx.lineTo(
      this.graphLeftBottom[0],
      this.graphHeight * (1 - avgPrice / this.max)
    )
    this.ctx.lineTo(
      this.graphRightBottom[0],
      this.graphHeight * (1 - avgPrice / this.max)
    )

    this.ctx.strokeStyle = 'blue'
    this.ctx.setLineDash([6, 5])
    this.ctx.stroke()
    this.ctx.closePath()

    this.ctx.font = '12px Arial'
    this.ctx.fillStyle = 'blue'
    this.ctx.fillText(
      '이번달 일 평균',
      this.graphRightBottom[0],
      this.graphHeight * (1 - avgPrice / this.max) - 10
    )

    this.ctx.setLineDash([])
  }

  priceFormat(price) {
    price /= 10000
    price = price.toFixed(0)
    return `${price}만`
  }

  getAvg() {
    let sum = 0
    this.data.forEach((d) => {
      sum += d.price
    })
    return sum / this.data.length
  }
}