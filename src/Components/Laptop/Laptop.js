
import useApi from "../../CustumHook/UseApi";

const Laptop = () => {
    const { data } = useApi()
    return (
        <div>
            <h1 className="titleheading">Laptop</h1>
            {/* <div className="home-image">
                <img className="home-image" src="jpghttps://www.velmayil.com/velmayil_Innfo_Services/image/new/banner-1." alt="banner" />
            </div> */}
            <h3 className="titleheading">Dell</h3>
            <div className="n">
                {data.filter((item) => item.id >= 19 && item.id <= 22).map(
                    (item, index) => {
                        return (
                            <div key={index} className="homecontainer">
                                <div className="hoverimage">
                                    <div>
                                        <img className="homeimage" src={item.image} alt="err" />
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
            <h3 className="titleheading">Macbook</h3>
            <div className="n">
                {data.filter((item) => item.id >= 25 && item.id <= 28).map(
                    (item, index) => {
                        return (
                            <div key={index} className="homecontainer">
                                <div className="hoverimage">
                                    <div>
                                        <img className="homeimage" src={item.image} alt="err" />
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
        </div>
    )
}
export default Laptop;
