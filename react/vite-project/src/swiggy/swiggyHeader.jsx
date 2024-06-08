import '../styles/header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLifeRing , faBriefcase , faMagnifyingGlass , faPercent , faUser , faCartShopping } from '@fortawesome/free-solid-svg-icons';

function SwiggyHeader(){
    return (
        <>
            <nav className='navHeader'>
                <div>
                    <img height="60px" width="60px" src="data:image/jpeg;base64,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" alt="swggy"/>
                    <a href="">Other</a>
                </div>
                <div>   
                    <ol className="redirectLink">
                       <li className="list-item-span">
                            <span><FontAwesomeIcon icon={faBriefcase} /></span>
                            <span>Swiggy Corporate</span>
                      </li>
                      <li className="list-item-span">
                            <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                            <span>Search</span>
                      </li>
                      <li className="list-item-span">
                            <span><FontAwesomeIcon icon={faPercent} /></span>
                            <span>Offers</span>
                      </li>
                      <li className="list-item-span">
                            <span><FontAwesomeIcon icon={faLifeRing} /></span>
                            <span> Help</span>
                     </li>
                     <li className="list-item-span">
                            <span><FontAwesomeIcon icon={faUser} /></span>
                            <span>Sign In</span>
                     </li>
                     <li className="list-item-span">
                            <span><FontAwesomeIcon icon={faCartShopping} /></span>
                            <span>Cart</span>
                    </li>
                    </ol>

                </div>

            </nav>
        </>
    )
}
export default  SwiggyHeader;