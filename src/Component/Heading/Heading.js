import webLogo from '../../Assets/webLogo.png'
import reactLogo from '../../Assets/reactLogo.png'
import {formattedDate, formattedTime} from '../../Handle/getTime'
import './Heading.css'
function Heading() {
    return ( 
        <div className="heading">
            <img src={webLogo} alt="" />
            <div>{formattedDate} - {formattedTime} GMT</div>
            <img src={reactLogo} alt="" />
        </div>
    );
}

export default Heading;