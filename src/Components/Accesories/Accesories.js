import useApi from "../../CustumHook/UseApi";


const Accesories = () => {
    const {data} = useApi()
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
                                    <img className="homeimage" src={item.image} alt="err"/>
                                </div>
                                <h1 className="title">{item.title}</h1>
                                <h1 className="price">Rs.{item.price}</h1>
                                <p >{item.rating}</p>
                                <button className="addcart">Buy now</button>
                                <button className="addcart">Add cart</button>
                            </div>
                            </div>
                        )

                    })};
               
            </div><br/>
            <div className="n">
                {data.filter((item) => item.id >= 43 && item.id <= 46).map(
                    (item, index) => {
                        return (
                            <div key={index} className="homecontainer">
                                <div className="hoverimage">
                                <div>
                                    <img className="homeimage" src={item.image} alt="err"/>
                                </div>
                                <h1 className="title">{item.title}</h1>
                                <h1 className="price">Rs.{item.price}</h1>
                                <p >{item.rating}</p>
                                <button className="addcart">Buy now</button>
                                <button className="addcart">Add cart</button>
                                </div>
                            </div>
                        )

                    })};
               
            </div><br/>
        </div>
    )
}

export default Accesories;
