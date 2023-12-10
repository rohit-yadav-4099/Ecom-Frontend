
import useApi from "../../CustumHook/UseApi";

const Laptop = () => {
    const { data } = useApi()
    return (
        <div>
            <h1 className="titleheading">Laptop</h1>
            <div className="home-image">
                <img className="home-image" src="https://www.velmayil.com/velmayil_Innfo_Services/image/new/banner-1.jpg" alt="banner" />
            </div>
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
                                    <h1 className="title">{item.title}</h1>
                                    <h1 className="price">Rs.{item.price}</h1>
                                    <p >{item.rating}</p>
                                    <button className="addcart">Add cart</button>
                                </div>
                            </div>
                        )

                    })};

            </div><br/>
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
                                    <h1 className="title">{item.title}</h1>
                                    <h1 className="price">Rs.{item.price}</h1>
                                    <p >{item.rating}</p>
                                    <button className="addcart">Add cart</button>
                                </div>
                            </div>
                        )

                    })};

            </div><br/>
        </div>
    )
}
export default Laptop;