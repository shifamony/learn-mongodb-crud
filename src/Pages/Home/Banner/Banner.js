import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
const Banner = () => {
    return (
        <div className="carousel w-full bgs">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full  rounded-xl" alt='' />

          <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4">
            <h1 className='text-6xl text-white font-bold'>Affordable 
            <br />
            Price for Car <br />
            Servicing
            </h1>
          </div>

          <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/2 w-2/5">
            <p className='text-white text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          </div>

          <div className="absolute flex justify-start transform -translate-y-1/2  left-24 top-2/3 w-2/5 ">
              <button className="btn btn-warning mr-3">Discover More</button>
              <button className="btn btn-outline btn-warning">Latest Projects</button>

          </div>


          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-3">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-15 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img5} className="w-full" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img6} className="w-full" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;