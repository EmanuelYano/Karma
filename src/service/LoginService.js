import axios from "axios";
import configuration from "../../configuration.js"

const url = configuration.api

export default class LoginService{
    static async logar(usuario){
        try {
            let resposta = await axios.post(url + "/logar", usuario)
            console.log(resposta)
            return resposta.data.usuario
            
        } catch (error) {
            console.log (error)
        }
    }
    static recSenha(email){

    }
    
    
    
    //sessao de cadastro
    static compararSenha(senha,confirmarSenha){
        if(senha == confirmarSenha){
            return true;
        }else{
            return false;
        }
    }
    static compararEmail(email,confirmarEmail){
        if(email == confirmarEmail){
            return true;
        }else{
            return false;
        }
    }
    static verificarCampos(usuario, senha, email){
        console.log(usuario.senha)
        if( usuario.senha == "" || senha == "" || usuario.email == "" || email == "" || usuario.nome == "" || usuario.codigo == "" || usuario.telefone == "" || usuario.serie == ""){
            return true;
        }
    }
    static async verDupli(usuario){
        try{
            let resposta = await axios.post(url + "/duplicidade", usuario)
            return resposta.data.usuario
        }catch{
            console.log (error)
        }
    }
    static async salvar(usuario){
        try {
            //let ok = await axios.get(url + "/duplicidade", usuario)
            //console.log(ok)
            //if(ok == false){
                return await axios.post(url + "/usuarios", usuario)
            //}else{
                //return true
            //}    
        } catch (error) {
            console.log (error)
        }
    }


    //listar usuários   
    static async listar(){
        try {           
            let resposta = await axios.get(url + "/usuarios") 
            return resposta.data.dados
        } catch (error) {
            console.log (error)
        }
    }
    //deletar usuario
    static async deletar(_id){
        try {
            let resposta = await axios.delete(url + "/usuarios/" + _id)
            return resposta
        } catch (error) {
            console.log(error)
        }
    }
    //buscar usuario por id
    static async buscarid(_id){
        try {
            let resposta = await axios.get(url + "/usuarios/" + _id)
            console.log(resposta)
            return resposta.data.dados
        } catch (error) {
            console.log(error)
        }
    } 
    //editar usuario
    static async editar(usu){
        try {
            let resposta = await axios.put(url + "/usuarios", usu)
            return resposta
        } catch (error) {
            console.log(error)
        }
    }
}

