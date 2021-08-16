import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from "mdbreact";

const CarouselPage = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls={false}
      showIndicators={false}
      className="z-depth-1"
      slide
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="images/image1.jpg"
              alt="First slide"
            />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="images/contact.jpg"
              alt="Second slide"
            />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="images/aboutus.jpg"
              alt="Third slide"
            />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default CarouselPage;
