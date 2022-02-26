



export const Productleft=()=>{




    return(
        <div id="leftnav">
        <div className="left_home">  
        <table>
        <tbody>
            <tr>
                <th><span className="icon1" style={{color:"teal"}} class="glyphicon glyphicon-home"></span> </th>
                <th  style={{color:"rgb(47, 47, 48)"} }> Home</th>
            </tr>
        </tbody>
        </table>
        
        </div>
        <p className="ptext"> SELF STUDY</p>
        <div className="selfstudy">
            <table>
            <tbody>
                <tr>
                    <th ><span><i class="fa fa-globe" style={{color:"teal" }} ></i></span></th>
                    <th  style={{color:"rgb(47, 47, 48)"} } className="sstext"> Browser</th>
                </tr>
                <tr>
                    <th><span><i class="fa fa-flash" style={{color:"teal"}} ></i></span></th>
                    <th  style={{color:"rgb(47, 47, 48)"} } className="sstext"> Practice</th>
                </tr>
                <tr>
                    <th><span class="glyphicon glyphicon-pencil" style={{color:"teal"}}></span></th>
                    <th  style={{color:"rgb(47, 47, 48)"} } className="sstext"> Tests</th>
                </tr>
                <tr>
                    <th><span><i class="fa fa-edit" style={{color:"teal"}} ></i></span></th>
                    <th  style={{color:"rgb(47, 47, 48)"} } className="sstext">Syllabus</th>
                </tr>
                <tr>
                    <th> <span><i class="fa fa-commenting-o" style={{color:"teal"}} ></i></span></th>
                    <th  style={{color:"rgb(47, 47, 48)"} } className="sstext">Doubts & solutions</th>
                </tr>
                <tr>
                    <th><span><i class="fa fa-youtube" style={{color:"red"}} ></i></span></th>
                     <th  style={{color:"rgb(47, 47, 48)"} } className="sstext">Free live classes</th>
                </tr>
                
                <tr>
                    <th><span><i class="fa fa-laptop" style={{color:"blue"}} ></i></span></th>
                  <th  style={{color:"rgb(47, 47, 48)"} } className="sstext"><a href=""> Other courses </a> </th>
                </tr>
               
               
            </tbody>
            </table>
           
            
           
         

          

        </div>
        </div>
    )
}