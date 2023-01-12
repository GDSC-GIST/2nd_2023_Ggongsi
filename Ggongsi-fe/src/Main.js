import mainlogo from './images/mainlogo.png';

const Main = ()=> {
    return (
        <div classname="Main">
            <div>
                <img style={{ width:'55%'}} src={mainlogo} alt = "" />
            </div>
            <div>
                <button style={{ width: "80px", height: "40px",}}> Start </button>
            </div>
        </div>
        
    );
};


export default Main;