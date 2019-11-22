const server = require ('express')()
const port = 5000

let nilai = 90
// let data = {
//     nama:'Felix Gedeon' ,
//     npm:17411023,
//     jurusan:'Sistem Informasi',
//     kuliah: (namamatkul,nama)=> {
//         console.log('Selamat Kuliah ' + nama + ' , dimatakuliah ini ' +namamatkul)    
//     }
// }
// data.kuliah('pemrograman 3' , data.nama )



let listmhs = [
    {
        nama:'Yikri',
        npm: 17411023
    },
    {
        nama:'Fikri',
        npm:17411024
    },
    {
        nama:'Zikri',
        npm:17411025
    }
]
for (let i = 0; i < listmhs.length; i++) {
    console.log(listmhs[i].nama + '-' + listmhs[i].npm)
}

// if (nilai >80) {
//     console.log('Nilai anda A')
// }else if (nilai > 70) {
//     console.log('Nilai anda B')
// } else {
//     console.log('Nilai anda C') 
// }
server.listen(port , function(){
    console.log('server started on port' + port)
})