import { createClient } from 'next-sanity'

//import { apiVersion, dataset, projectId, useCdn } from '../env'

 const client = createClient({ 
  apiVersion:"2023-10-01",
  dataset:"production",
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn:true,
  token:process.env.SANITY_ACCESS_TOKEN
})
export default client

