import { createContext,useEffect,useReducer } from "react";
const initailsState={
    user:localStorage.getItem('user')!==undefined?JSON.parse(localStorage.getItem('user')):null,
    loading:false,
    errors:null
}
export const AuthContext = createContext(initailsState)
const AuthReducer = (state,action)=>{
switch(action.type){
    case'LOGIN_START':
    return{
        user:null,
        loading:true,
        errors:null
    }
    case 'LOGIN_SUCCESS':
    return{
            user:action.payload,
            loading:false,
            errors:null
        }
    case 'LOGIN_FAILER':
        return{
            user:null,
            loading:false,
            errors:action.payload
        }
    case 'REGESTER_SUCCESS':
        return{
            user:null,
            loading:false,
            errors:null
        }
    case 'LOGOUT':
        return{
            user:null,
            loading:false,
            errors:null
        }
        default :
        return state
}
}
export const  AuthContextProvider =({children})=>{
    const [state,dispatch]=useReducer(AuthReducer,initailsState)
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(state.user))
    },[state.user])
    return <AuthContext.Provider value={{
        user:state.user,
        loading:state.loading,
        errors:state.errors,
        dispatch
    }}>
                    {children}
    </AuthContext.Provider>
}