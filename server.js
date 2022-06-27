const express = require('express')
const app = express()
const path = require('path')

app.listen(8080, function() {
    console.log('listening on 8080')
})

app.use(express.static(path.join(__dirname, 'Boargle/build')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'Boargle/build/index.html'));
})


app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'Boargle/build/index.html'));
})