import axios from "axios"

export const allProduct = async () =>{
    const res = await axios.get('https://scic-tech-bar-server.vercel.app/allProduct')

    return res.data;
}