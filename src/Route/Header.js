import React from "react";
// import './App.css';
function Header() {
    return (
        <>
            <div className="profile">
                <div className="language">
                    <select>
                        <option>English</option>
                        <option>English UK</option>
                        <option>English US</option>
                        <option>Hindi</option>
                    </select>
                </div>
                <div className="search">
                    <input className="searchbox" type="text" placeholder="search here"></input>
                    {/* <img className="searchimage" src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png"></img> */}
                </div>
                <div className="myprofile">
                    <div>
                        <img className="profileimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYnD-vKF8P_ez6LAALGISa_HpdmzSFdpFvVW17_0&s"></img>
                        <button className="sign-in">Sign in</button>
                    </div>
                    <div>
                        <img className="cartimage" src="https://icon-library.com/images/shopping-cart-icon-vector-free-download/shopping-cart-icon-vector-free-download-19.jpg"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header