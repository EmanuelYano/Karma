import axios from "axios";

export default class LoginService{
    static logar(email,pass){
        if(email == "123@gmail.com" && pass == "123"){
            return true
        }else{
            return false
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
    }
    static async salvar(usuario){
        try {
            return await axios.post("http://localhost:3000/api/usuarios/", usuario)
        } catch (error) {
            console.log (error)
        }
    }


    
    static async listar(){
        try {
            
            let resposta = await axios.get("http://localhost:3000/api/usuarios/") 
            return resposta.data.dados
        } catch (error) {
            console.log (error)
        }
    }
    
}