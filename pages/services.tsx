import HeaderOne from "../components/Header/HeaderOne";
import Services from "../components/Services/Construction/ServicesConstruction"
import Loader from "../components/Loader/Loader"
import FooterOne from "../components/Footer/FooterOne";
export default function(){

    return <><Loader>    <HeaderOne type={null}/><Services></Services><FooterOne ></FooterOne>
        </Loader>
       
        </>
}
