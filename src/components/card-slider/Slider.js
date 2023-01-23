import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { setItems } from "../../store/features/cart/cartSlice";
import { v4 as uuidv4 } from "uuid";

const Slider = ({ deviceType }) => {
  const { data } = useSelector((state) => state.cart);
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
        console.log(newItem);
        dispatch(setItems(newItem));
      }
    }
  };

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      // customTransition="all .5"
      // transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
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
              <div className="card-size">{item.size}"</div>
              <div className="card-price">{item.price}.00DH</div>
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
  );
};

export default Slider;
