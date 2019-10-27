import axios from "axios";
import configuration from "../../configuration.js"

const url = configuration.api
export default class LivroService{
    static async salvar(){
        try{
            return await axios.post(url + "/livros", livro)
        }catch(error){
            console.log(error)
        }
    }
    static async editar(){
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
    static async deletar(){
        try {
            
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