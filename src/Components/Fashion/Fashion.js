import useApi from "../../CustumHook/UseApi"

const Fashion = () => {
    const { data } = useApi();
    return (
        <div>
            <h1 className="titleheading">Fashion</h1>
            <div className="home-image">
                <img className="home-image" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf180e2d-5bea-4aeb-8aba-9ea2f09e7aef/deu2up6-8d45c200-e05d-4c5d-b45b-05d01acfc429.jpg/v1/fill/w_1280,h_720,q_75,strp/fashion_sale_web_banner_by_koshaldesign_deu2up6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYmYxODBlMmQtNWJlYS00YWViLThhYmEtOWVhMmYwOWU3YWVmXC9kZXUydXA2LThkNDVjMjAwLWUwNWQtNGM1ZC1iNDViLTA1ZDAxYWNmYzQyOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Vo7oFfCQJXOWmwvoRDUVCksRun6nQ9gh20-61DnbBOY" alt="banner" />
            </div>
            <h3 className="titleheading">Mens</h3>
            <div className="n">
                {data.filter((item) => item.id >= 31 && item.id <= 34).map(
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
            <h3 className="titleheading">Kids</h3>
            <div className="n">
                {data.filter((item) => item.id >= 35 && item.id <= 38).map(
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

export default Fashion
