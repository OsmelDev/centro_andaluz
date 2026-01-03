import { axiosInstance } from "@/intance/axios-intance";

export const services = ()=>{
const {instance}= axiosInstance()

    const getEvents = async ()=>{
        const response = await instance.get("/events", {
            params: { populate: '*' },
          })
        return response
    }

    return {getEvents}
}