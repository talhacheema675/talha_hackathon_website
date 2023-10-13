import client from "./sanityClient";
 const getdaata=async (str?:any,con?:number) => {
    if(con==0)
        {
            const res=await client.fetch(`*[_type=="hackathon" && category=='${str}']`)
            return res;
        }
        if(con==1)
        {
            const res=await client.fetch(`*[_type=="hackathon" && id==${str}]`)
            return res;
        }
    else{
        const res=await client.fetch(`*[_type=="hackathon"]`)
        return res;
    }
}
    export default getdaata;