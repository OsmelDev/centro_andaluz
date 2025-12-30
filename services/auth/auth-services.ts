import { axiosIntance } from "@/intance/axios-intance"
import { FieldValues } from "react-hook-form"


export const authServices = ()=>{
    const {intance}=axiosIntance()

    const signing = async (data:FieldValues)=>{
        const response = await intance.post('/auth/login', data)
        return response
    }

    const signup = async ()=>{
        const response = await intance.post('/auth/register', {})
        return response
    }

    const verify = async ()=>{
        const response = await intance.get('/auth/verify')
        return response
    }

    
    const signout = async ()=>{
        const response = await intance.post('/auth/logout',{})
        return response
    }


    return {signing, signup, verify, signout}
}

