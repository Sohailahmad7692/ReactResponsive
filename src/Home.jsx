import react from "react"
import myname from "../src/myname.JPG"

import Commoner from "./commoner"
function Home(){

    return(
       <Commoner path="/about" h1Name="Daddy's princess" pari="pAri hUn mEin" famousName="king's" para="We are the" btnName="Get Started" imgSrc={myname}/>
    )
}
export default Home