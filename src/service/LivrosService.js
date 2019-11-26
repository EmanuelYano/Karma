import axios from "axios";
import configuration from "../../configuration.js"

const url = configuration.api

export default class LivrosService{
    //verificar campos
    static verificarCampos(livro){
        if( livro.nome_livro == null || livro.subtitulo == null || livro.sinopse == null || livro.autor == null || livro.editora == null || livro.n_paginas == null || livro.n_disp == null || livro.categoria == null || livro.imageData == null){
            return true;
        }
        // console.log("fudeu")
    }
    //salvar livro
    static async salvar(livro){
        try{
            return await axios.post(url + "/livros", livro)            
        }catch(error){
            console.log(error)
        }
    }

    //buscar por id
    static async buscarId(_id){
        try {
            let resposta = await axios.get(url + "/livros/" + _id)
            return resposta.data.dados 
        } catch (error) {
            console.log(error)
        }
    }
    //editar livro
    static async editar(livroEdit){
        try {
            let resposta = await axios.put(url + "/livros", livroEdit)
            return resposta
        } catch (error) {
            console.log(error)
        }
    }
    static async deletar(_id){
        try {
            let resposta = await axios.delete(url + "/livros/" + _id)
            return resposta
        } catch (error) {
            console.log(error)
        }
    }

    static async listar(){
        try{
            let resposta = await axios.get(url + "/livros")
            let vetor = resposta.data.dados
            let vetorRetorno = new Array()
            for(let i=0;i<vetor.length;i++){
                let count = await axios.get(url + "/reserva/livro/" + vetor[i]._id)
                // console.log(count.data)
                vetor[i].reservas = count.data.reserva
                vetorRetorno.push(vetor[i])
            }
            return resposta.data.dados
        }catch (error){
            console.log(error)
        }
    }

    //reservar livro
    static async reservar(reserva){        
        try{
            let resposta = await axios.post(url + "/reserva", reserva)
            return resposta
        }catch(err){
            console.log(err)
        }
    }

    //buscar reserva
    static async buscaReserva(id){
        try{
            let resposta = await axios.get(url + "/reserva/usuario/" + id)
            return resposta.data
        }catch(err){
            console.log(err)
        }
    }

}