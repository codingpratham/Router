import React, { useEffect, useState } from 'react'

const Github = () => {
    const [followers,setFollowers]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const response= await fetch('https://api.github.com/users/codingpratham')
            const finaldata= await response.json()
            setFollowers(finaldata)
            
        }
        fetchData();
    },[])
  return (
    <>
    <div>Github followers:{followers.followers}</div>
    <img src={followers.avatar_url} />
    </>
    
  )
}

export default Github