import './Mobile.css';
import useApi from "../../CustumHook/UseApi";

const Mobile = () => {
    const { data } = useApi();
    return (
        <div>
             <h1 className="titleheading">Mobile</h1>
            <div className="home-image">
                <img className="home-image" src="https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-a53/buy/Master_1440x450.jpg" />
            </div>
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
                                        <h1 className="title">{item.title}</h1>
                                        <h1 className="price">Rs.{item.price}</h1>
                                        <p >{item.rating}</p>
                                        <button className="addcart">Buy now</button>
                                        <button className="addcart">Add cart</button>
                                    </div>
                                </div>
                            )

                        })}

                </div>


            </div><br/>
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
                                    <h1 className="title">{item.title}</h1>
                                    <h1 className="price">Rs.{item.price}</h1>
                                    <p >{item.rating}</p>
                                    <button className="addcart">Buy now</button>
                                    <button className="addcart">Add cart</button>
                                </div>
                            </div>
                        )

                    })}
            </div><br/>
        </div>
    )
}

export default Mobile;
