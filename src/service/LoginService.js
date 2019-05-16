export default class LoginService{
    static logar(email,senha){
        if(email == "" && senha == ""){
            return true
        }else{
            return false
        }
    }
    static recSenha(email){

    }
}