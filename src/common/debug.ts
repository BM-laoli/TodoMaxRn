import { storeAppData, storeData } from "../storage"

export  const logOut = async  ()=>{
   const  res =  await storeData({})
   return true
}

export const resetApp =async  ()=>{
  const  res =  await storeAppData({})
  return true 
}