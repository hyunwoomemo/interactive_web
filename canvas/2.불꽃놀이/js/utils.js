export const randomNumBetween = (min, max) => {
  return Math.random() * (max - min) + (min)
}

export const hypotenuse = (x, y) => {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
}