import react from "react"
import { NavLink } from "react-router-dom"
function Commoner(props){
    return(
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
            <div className="col-10 mx-auto d-flex justify-content-center ">
                <div className="row">
                <div className="col-md-6 pt-5 d-flex justify-content-center flex-column">
                    <h1>{props.h1Name} 
                        <br/><strong>{props.pari}</strong></h1>
                    <h2>{props.para} <strong>{props.famousName}</strong></h2>
                    <button className="btn btn-outline-success"><NavLink to={props.path} >{props.btnName} </NavLink></button> 
                </div>
                <div className="col-lg-6 order-1"> 
               <img src={props.imgSrc} alt="myimage" className="img-fluid animated " style={{width:"400px",height:"400px"}}/>
                </div>
                </div>
            </div>
        </div>
      </div>
    </section>
    )
}
export default Commoner