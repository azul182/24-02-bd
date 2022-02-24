const mongoose = require('mongoose')

const conexao = async()=>{
    //var bdlocal = await mongoose.connect('mongodb://localhost/fiap')
    var bdatlas = await mongoose.connect('mongodb+srv://userAdmin:thi020206@cluster0.s3hds.mongodb.net/test')
}

const modelo = mongoose.Schema({
    rm:String,
    nome:String,
    turma:String,
    idade:String
})

const alunos = mongoose.model('modelo',alunos)

module.exports = {conexao,alunos}