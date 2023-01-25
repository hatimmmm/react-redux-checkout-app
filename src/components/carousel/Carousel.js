import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { setItems } from "../../store/features/cart/cartSlice";
import { v4 as uuidv4 } from "uuid";

const Slider = ({ data, logo }) => {
  const dispatch = useDispatch();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const onClick = (e, name) => {
    e.preventDefault();
    for (let x in data) {
      if (data[x].name === name) {
        let id = uuidv4();
        let newItem = { id: id, ...data[x] };
        // console.log(newItem);
        dispatch(setItems(newItem));
      }
    }
  };

  return (
    <div>
      <div className="separator">
        <span className="line"></span>
        <img src={logo} alt={logo} />
        <span className="line"></span>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        // autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((item) => {
          return (
            <div className="card-container" key={item.name}>
              <div className="card-img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="card-name">
                <p>{item.name}</p>
              </div>
              <div className="price-size">
                <div
                  className={item.inStock ? "in-stock" : "in-stock unavailable"}
                >
                  {item.inStock ? "in stock" : "unavailable"}
                </div>
                <div className="card-price">$ {item.price}.00</div>
              </div>
              <div className="add-to-cart">
                <button type="button" onClick={(e) => onClick(e, item.name)}>
                  add to cart
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
