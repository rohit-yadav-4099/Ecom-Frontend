
import useApi from "../CustumHook/UseApi";
import SliderCompo from "../Slider/SliderCompo";

function Home() {
    const { data } = useApi();
    return (
        <div>
            <div className="home-image1">
                {/* <img className="home-image1" src="https://img.freepik.com/free-vector/gradient-horizontal-banner-template-cyber-monday-sale_23-2150842096.jpg" /> */}
                <SliderCompo/>
            </div>
            <h1>BEST SELLER</h1>
            <div className="n">
                {data.filter((item) => item.id >= 5 && item.id <= 8).map(
                    (item, index) => {
                        return (
                            <div key={index} className="homecontainer">
                                <div className="hoverimage">
                                    <div>
                                        <img className="homeimage" src={item.image} />
                                    </div>
                                    <span className="title">{item.title}</span><br/>
                                    <span className="price">Rs.{item.price}.00</span><br/>
                                    <span >{item.rating}</span>
                                    <div className="buynowAddcart">
                                        <button className="buynow">Buy now</button>
                                        <button className="addcart">Add cart</button>
                                    </div>
                                </div>
                            </div>
                        )

                    })};

            </div>
            <div className="n">
                {data.filter((item) => item.id >= 23 && item.id <= 26).map(
                    (item, index) => {
                        return (
                            <div key={index} className="homecontainer">
                                <div className="hoverimage">
                                    <div>
                                        <img className="homeimage" src={item.image} />
                                    </div>
                                    <span className="title">{item.title}</span><br/>
                                    <span className="price">Rs.{item.price}.00</span><br/>
                                    <span >{item.rating}</span>
                                    <div className="buynowAddcart">
                                        <button className="buynow">Buy now</button>
                                        <button className="addcart">Add cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div><br />
        </div>
    )
}
export default Home;
