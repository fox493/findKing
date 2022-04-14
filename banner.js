export function printBanner(
  title = "title",
  contents = [
    {
      label: "Example",
      content: "example",
    },
  ],
  col = 64
) {
  console.log(
    "=".repeat(Math.ceil((col - title.length - 2) / 2)) +
      " " +
      title +
      " " +
      "=".repeat((col - title.length - 2) / 2)
  )
  console.log("|" + " ".repeat(col - 2) + "|")
  let left_space = 0
  let label_max_length = 0
  for (let text of contents) {
    if (text.label.length > label_max_length) {
      label_max_length = text.label.length
      left_space = Math.ceil(
        (col - (text.label.length + text.content.length + 4)) / 2
      )
    }
  }
  for (let text of contents) {
    console.log(
      "|" +
        " ".repeat(left_space) +
        text.label +
        " ".repeat(label_max_length - text.label.length) +
        ":" +
        " " +
        text.content +
        " ".repeat(
          col - 4 - left_space - label_max_length - text.content.length
        ) +
        "|"
    )
  }
  console.log("|" + " ".repeat(col - 2) + "|")
  console.log("=".repeat(col))
}
