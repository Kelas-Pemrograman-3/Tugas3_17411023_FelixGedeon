const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MahasiswaSchema = new Schema({
  npm: {
    type: String
  },
  password: {
    type: String
  },
  prodi: {
    type: String
  },
  nama: {
    type: String
  }
})

module.exports = mongoose.model('mahasiswa', MahasiswaSchema)
