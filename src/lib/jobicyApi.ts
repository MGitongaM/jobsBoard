export async function getJobs(search:string | null){
    // const url=`https://jobicy.com/api/v2/remote-jobs?count=5&geo=emea&industry=dev`
    // const url=`https://jobicy.com/api/v2/remote-jobs`
    // const url=`https://www.themuse.com/api/public/jobs?page=1`
    // const url=`https://jsonplaceholder.typicode.com/users`
    const url=`https://www.arbeitnow.com/api/job-board-api`
    const options={
        method:'GET',
        
        headers:{
            "Content-Type": "application/json",
            // "xRayHash": "xID_66422b237d8245.95574889",
            // "clientKey": "key_66422b237d82b",
        }
    }
    try {
         const response= await fetch(url,options)
         const result=await response.json()
         console.log(result.data)
         return result
        
     } catch (error) {
        
     }
}

export function getProducts2(){
    const url=`https://dummyjson.com/products`
    const options={
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        }
    }
    const data= fetch(url,options).then((response)=>response.json())
    return data
}


// mode: "cors",
// credentials: "include",
// headers: {
//     "Content-Type": "application/json"
// },