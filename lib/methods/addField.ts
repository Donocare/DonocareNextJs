import { ServerResponse } from "http";

const addField = async(email,key,value)=>{

    const res = await fetch("api/addField", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          key:key,
          value:value
        }),
      });
      

    if(res.ok){
        const serevrResponse = await res.json()
        if(serevrResponse.message == "success"){
            return "success"
        } else{
          
            return serevrResponse.message 
        }

    }
    else{
        return "serverError"
    }
    
    

}
export default addField