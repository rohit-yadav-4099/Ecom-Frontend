import React from 'react';
import './Slider.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SliderCompo = () => {
  return (
    <div>
    <Carousel>
    <div>
        <img className='banner' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf180e2d-5bea-4aeb-8aba-9ea2f09e7aef/deu2up6-8d45c200-e05d-4c5d-b45b-05d01acfc429.jpg/v1/fill/w_1280,h_720,q_75,strp/fashion_sale_web_banner_by_koshaldesign_deu2up6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYmYxODBlMmQtNWJlYS00YWViLThhYmEtOWVhMmYwOWU3YWVmXC9kZXUydXA2LThkNDVjMjAwLWUwNWQtNGM1ZC1iNDViLTA1ZDAxYWNmYzQyOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Vo7oFfCQJXOWmwvoRDUVCksRun6nQ9gh20-61DnbBOY" alt="Image 3" />
        {/* <p className="legend">F</p> */}
      </div>
      <div>
        <img className='banner' src="https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-a53/buy/Master_1440x450.jpg" alt="Image 1" />
        {/* <p className="legend">Image 1</p> */}
      </div>
      <div>
        <img className='banner' src="https://img.freepik.com/free-vector/gradient-horizontal-banner-template-cyber-monday-sale_23-2150842096.jpg" alt="Image 2" />
        {/* <p className="legend">Image 2</p> */}
      </div>
     
    </Carousel>
    </div>
  );
};

export default SliderCompo;