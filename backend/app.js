const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
//   res.send('Hello World!')

const aktuelleZeit = {
    time: "12:55" // Die Uhrzeit soll über Luxon gesetzt werde.
}
res.json(aktuelleZeit)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})