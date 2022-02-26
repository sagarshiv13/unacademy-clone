
import { useEffect, useState } from "react"
import { Popular } from "./popularedu"
import "./prod.css"
import {Navbar}from '../../NavBar/navbar'
import {Productleft} from "./productleft"
export const ProductDetails=()=>{
    const [data,setData]=useState([])
    


    useEffect(()=>{
        fetchData()

    },[])

    const fetchData=async()=>{

        let request=await fetch(`https://uncademy-team-clone.herokuapp.com/FWD`,{
            method:"GET"
        })

        let response= await request.json()
        setData(response)
        console.log(response)
    }



    return (
        <>
       <Navbar/>
 <div id="containerprod" >
     <div id="corstitle">      <img className="tutorimg1"  src="https://static.uacdn.net/topology/test_default.png" alt="" />
     Full Stack Development
</div>
        <div id="details_pages1">
          <Productleft/>

         
            <div  className="details_page2" >
                
                {data.map((e,i)=>{
                return(
                    <div className="unkown" key={i}>
                     
                        <div className="tutuors">
                        
                        <div  className="tutorin1">{e.tutor.map((element,j) => {
                                return(
                                    <div key={j} className="tutorin1">
                                        <div className="tutorin1img"><img className="tutorimg" src={element.img} alt="" /></div>
                                        <div className="tutorin1details">
                                            <div className="lang">  {element.language}  </div>
                                            <div className="subject1">{element.subject}</div>
                                            <div className="tutotr1_title">{element.title}</div>
                                            <div className="date">{element.end}</div>
                                            <div className="prof">{element.name}</div>
                                          
                                        </div>
                                    </div>
                                    
                                )
                        })
                        }</div>

                        </div>
                    </div>
                )
                })}
        

                
            </div>
           
          
               

        </div>
           <Popular/>     
        </div>
     </> 
    )

}