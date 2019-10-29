import axios from "axios";
import configuration from "../../configuration.js"

const url = configuration.api

export default class LoginService{
    static async logar(usuario){
        try {
            let resposta = await axios.post(url + "/logar", usuario)
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
        if( usuario.senha == "" || senha == "" || usuario.email == "" || email == "" || usuario.nome == "" || usuario.codigo == "" || usuario.telefone == "" || usuario.serie == ""){
            return true;
        }
        return usuario.serie;
    }
    static async salvar(usuario){
        try {
            return await axios.post(url + "/usuarios", usuario)
        } catch (error) {
            console.log (error)
        }
    }
    static async verificarDuploCad(){
        try {
            
        } catch (error) {
            
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
    
}