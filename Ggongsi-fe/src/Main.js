import mainlogo from './images/mainlogo.png';
import { useNavigate } from 'react-router';



const Main = ()=> {
    const navigate = useNavigate();
 
    const navigateToInput = () => {
    navigate("/Input");
    };
    return (
        
        <div classname="Main">
            <div>
                <img style={{ width:'55%'}} src={mainlogo} alt = "" />
            </div>
            <div>
                <button onClick={navigateToInput} style={{ width: "80px", height: "40px",}}> Start </button>
            </div>
        </div>

        
    );
};

export default Main;