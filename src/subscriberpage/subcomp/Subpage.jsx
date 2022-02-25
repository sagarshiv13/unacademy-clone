import { useEffect, useState } from "react"
// import axios from "axios";




export const SubscriberPage=()=>{


    // const [data,setData]=useState("")

    useEffect(()=>{
        getData()

    },[])

    let courseID="62176f490ce96216d759766e"
    // const fetchData=async()=>{

    //     let req= await fetch(`https://uncademy-team-clone.herokuapp.com/FWD`)
    //     let res= await req.json()

    //     console.log(res)
    //     // setData(res)

    // }

    // const fetchData=()=>{

    //     axios.get("https://uncademy-team-clone.herokuapp.com/FWD").then((res)=>{

    //     console.log(res)
    //     })

    // }

    // const fectData=()=>{
    //     fetch(`https://uncademy-team-clone.herokuapp.com/FWD`)
    //     .then((req)=>req.json())
    //     .then((res)=>{
    //         console.log(res)
    //     })
    // }
    const getData = () => {
        fetch("https://uncademy-team-clone.herokuapp.com/FWD/62176f490ce96216d759766e")
          .then((d) => d.json())
          .then((res) => {
              console.log(res)
          });
      };
    








    return (

        <div id="submain"  >
            <h1> Hello </h1>

        </div>
    )
}