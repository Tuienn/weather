import icon01d from '../Assets/icons/01d.png'
import icon01n from '../Assets/icons/01n.png'
import icon02d from '../Assets/icons/02d.png'
import icon02n from '../Assets/icons/02n.png'
import icon03d from '../Assets/icons/03d.png'
import icon03n from '../Assets/icons/03n.png'
import icon04d from '../Assets/icons/04d.png'
import icon04n from '../Assets/icons/04n.png'
import icon09d from '../Assets/icons/09d.png'
import icon09n from '../Assets/icons/09n.png'
import icon10d from '../Assets/icons/10d.png'
import icon10n from '../Assets/icons/10n.png'
import icon11d from '../Assets/icons/11d.png'
import icon11n from '../Assets/icons/11n.png'
import icon13d from '../Assets/icons/13d.png'
import icon13n from '../Assets/icons/13n.png'
import icon50d from '../Assets/icons/50d.png'
import icon50n from '../Assets/icons/50n.png'
import unknown from '../Assets/icons/unknown.png'

export function returnIcon(iconText){
    if(iconText==="01d")
        return icon01d
    if(iconText==="01n")
        return icon01n
    if(iconText==="02d")
        return icon02d
    if(iconText==="02n")
        return icon02n
    if(iconText==="03d")
        return icon03d
    if(iconText==="03n")
        return icon03n
    if(iconText==="04d")
        return icon04d
    if(iconText==="04n")
        return icon04n
    if(iconText==="09d")
        return icon09d
    if(iconText==="09n")
        return icon09n
    if(iconText==="10d")
        return icon10d
    if(iconText==="10n")
        return icon10n
    if(iconText==="11d")
        return icon11d
    if(iconText==="11n")
        return icon11n
    if(iconText==="13d")
        return icon13d
    if(iconText==="13n")
        return icon13n
    if(iconText==="50d")
        return icon50d
    if(iconText==="50n")
        return icon50n
    return unknown
}

export function returnEmoji(temp){
    if(temp>=35){
        return (
            <div>
                <span class="emoji emoji-large">🥵</span>
                <div>Too hot!</div>
            </div>
        );
    }
    
    else if(temp>=30 && temp<35){
        return (
            <div>
                <span class="emoji emoji-large">😔</span>
                <div>Quite hot</div>
            </div>
        );
    }
    else if(temp>=25 && temp<30){
        return (
            <div>
                <span class="emoji emoji-large">😊</span>
                <div>Nice day</div>
            </div>
        );
    }
    else if(temp>=15 && temp<25){
        return (
            <div>
                <span class="emoji emoji-large">🙂‍↔️</span>
                <div>Comfortable</div>
            </div>
        );
    }
    else if(temp>=0 && temp<15){
        return (
            <div>
                <span class="emoji emoji-large">😰</span>
                <div>Quite cold</div>
            </div>
        );
    }
    else if(temp<0){
        return (
            <div>
                <span class="emoji emoji-large">🥶</span>
                <div>Freezing</div>
            </div>
        );
    }
    
}