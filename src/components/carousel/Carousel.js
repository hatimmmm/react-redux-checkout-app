import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { setItems } from "../../store/features/cart/cartSlice";

const AddBtn = ({ onAdd, newItem }) => {
  return (
    <button
      whileTap={{ scale: 0.8 }}
      onClick={() => onAdd(newItem)}
      className="add-to-cart"
    >
      add to cart
    </button>
  );
};

const RemBtn = ({ onAdd, newItem }) => {
  return (
    <button
      whileTap={{ scale: 0.8 }}
      onClick={() => onAdd(newItem)}
      className="remove-btn"
    >
      remove
    </button>
  );
};

const Slider = ({ data, logo }) => {
  const { items } = useSelector((state) => state.cart);
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

  const onAdd = (newItem) => {
    dispatch(setItems(newItem));
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
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
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
            <div className="card-container" key={item.id}>
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
              <div>
                {items.find((i) => i.id === item.id) ? (
                  <RemBtn onAdd={onAdd} newItem={item} />
                ) : (
                  <AddBtn onAdd={onAdd} newItem={item} />
                )}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
