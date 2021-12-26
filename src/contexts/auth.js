import React, {useState, createContext} from 'react';
import api from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);


    //Login usuário
    async function loginCandidato(emailUsuario, senhaUsuario){

        try{

            const response = await api.post('/candidatos/login', {
                email: emailUsuario,
                senha: senhaUsuario
            })

            if(response.data.status == 200){

                // var idUser = response.data.idUser;

                //navigation.navigate('DrawerRoutes', {idUser});
                 
                //console.log(response.data);
                
                let data = {
                    iduser: response.data.idUser,
                };

                setUser(data);

                return true;

            }else if(response.data.status == 401){

                // alert("Dados inválidos. Verifique os dados  e tente novamente"+emailUser+senhaUser);
                // console.log(response.data);
                setUser(null);
                
                return false;
            }

        }catch(error){

            alert(error)
            
        }
    }


    //cadastrar usuário
    async function cadastrarUsuario(nomeUser, sobreNomeUser, emailUser, senhaUser, celularUser, estadoUser, cidadeUser, formacaoUser, experienciaUser, areaPretendidaUser, faixaSalarialUser){
        try{

            const response = await api.post('/candidatos/create', {
                nome: nomeUser,
                sobrenome: sobreNomeUser,
                email: emailUser,
                senha: senhaUser,
                celular: celularUser,
                estado: estadoUser,
                cidade: cidadeUser,
                formacao: formacaoUser,
                ultimaexperiencia: experienciaUser,
                areaPretendida: areaPretendidaUser,
                faixaSalarialPretendida: faixaSalarialUser
            });

            if(response.data.status == 201){
        
                return true;
            }
            

        }catch(error){

            return false;

        }
    }


    return(
        <AuthContext.Provider value={{user, cadastrarUsuario, loginCandidato}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;