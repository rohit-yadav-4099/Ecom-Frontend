import './Mobile.css';
import useApi from "../../CustumHook/UseApi";

const Mobile = () => {
    const { data } = useApi();
    return (
        <div>
            <h1 className="titleheading">Mobile</h1>
            {/* <div className="home-image">
                <img className="home-image" src="https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-a53/buy/Master_1440x450.jpg" />
            </div> */}
            <h3 className="titleheading">Iphone</h3>
            <div className="parent">

                <div className="n">
                    {data.filter((item) => item.id >= 1 && item.id <= 4).map(
                        (item, index) => {
                            return (
                                <div key={index} className="homecontainer">
                                    <div className="hoverimage">
                                        <div>
                                            <img className="homeimage" src={item.image} alt='err' />
                                        </div>
                                        <span className="title">{item.title}</span><br />
                                        <span className="price">Rs.{item.price}.00</span><br />
                                        <span >{item.rating}</span>
                                        <div className="buynowAddcart">
                                            <button className="buynow">Buy now</button>
                                            <button className="addcart">Add cart</button>
                                        </div>
                                    </div>
                                </div>
                            )

                        })}

                </div>


            </div>
            <h3 className="titleheading">Samsung</h3>
            <div className="n">
                {data.filter((item) => item.id >= 7 && item.id <= 10).map(
                    (item, index) => {
                        return (
                            <div key={index} className="homecontainer">
                                <div className="hoverimage">
                                    <div>
                                        <img className="homeimage" src={item.image} alt='err' />
                                    </div>
                                    <span className="title">{item.title}</span><br />
                                    <span className="price">Rs.{item.price}.00</span><br />
                                    <span >{item.rating}</span>
                                    <div className="buynowAddcart">
                                        <button className="buynow">Buy now</button>
                                        <button className="addcart">Add cart</button>
                                    </div>
                                </div>
                            </div>
                        )

                    })}
            </div>
        </div>
    )
}

export default Mobile;
