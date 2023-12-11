import useApi from "../../CustumHook/UseApi";


const Accesories = () => {
    const { data } = useApi()
    return (
        <div>
            <h1 className="titleheading">Accesories</h1>
            <div className="n">
                {data.filter((item) => item.id >= 39 && item.id <= 42).map(
                    (item, index) => {
                        return (
                            <div key={index} className="homecontainer">
                                <div className="hoverimage">
                                    <div>
                                        <img className="homeimage" src={item.image} alt="err" />
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

                    })};

            </div>
            <div className="n">
                {data.filter((item) => item.id >= 43 && item.id <= 46).map(
                    (item, index) => {
                        return (
                            <div key={index} className="homecontainer">
                                <div className="hoverimage">
                                    <div>
                                        <img className="homeimage" src={item.image} alt="err" />
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

                    })};

            </div>
        </div>
    )
}

export default Accesories;
