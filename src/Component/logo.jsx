import WebsiteLogo from '../assets/global/websiteLogo3.svg'
import { useNavigate } from 'react-router-dom';
const Logo  = () =>{
  const navigate  = useNavigate()
    return(
        <>
               <div className="h-6 sm:h-7 md:h-8 cursor-pointer" onClick={() =>{navigate("/home")}} >
  <img
    src={WebsiteLogo}
    alt="website logo"
    className="h-full w-auto bg-white rounded-sm"
  />
</div>
        </>
    )
}

export default Logo;