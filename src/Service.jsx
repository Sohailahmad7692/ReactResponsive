import react from "react"
import Sdarray from "./Sdarray"
import Card from "./CardComp"
import brownMunde from "../src/brownMunde.JPG"
function Service(){
    return(
        <>
        <div>
            <h1 className="text-center">Our Service</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
      { Sdarray.map((val,ind)=>{
        return( <Card title={val.title} imgSrc={val.imgSrc}/>)
      }
      )}
      </div>
      </div> 
       </div>
        </div>
      </> 
    )
}
export default Service