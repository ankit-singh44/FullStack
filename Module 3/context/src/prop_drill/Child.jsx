import GrandDaughter from "./GrandDaughter";
import GrandSon from "./GrandSon";

export default function Child(){
    return(
        <div className="child">
            I am a Child
            <GrandDaughter/>
            <GrandSon/>
        </div>
    )
        
}