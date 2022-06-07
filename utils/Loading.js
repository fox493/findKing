export function LoadingAnimation(
  text = "",
  chars = ["⠙", "⠘", "⠰", "⠴", "⠤", "⠦", "⠆", "⠃", "⠋", "⠉"],
  delay = 100
) {
  let x = 0
  this.start = () => {
    this.timer = setInterval(function () {
      process.stdout.write("\r" + chars[x++] + " " + text)
      x = x % chars.length
    }, delay)
  }
  this.stop = () => {
    clearInterval(this.timer)
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
  }
}
