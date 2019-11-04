import axios from "axios";
import configuration from "../../configuration.js"

const url = configuration.api

export default class LivrosService{
    //verificar campos
    static verificarCampos(livro){
        if( livro.nome_livro == null || livro.subtitulo == null || livro.sinopse == null || livro.autor == null || livro.editora == null || livro.n_paginas == null || livro.n_disp == null || livro.categoria == null){
            return true;
        }
        console.log("fudeu")
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
            return resposta.data.dados
        }catch (error){
            console.log(error)
        }
    }

}