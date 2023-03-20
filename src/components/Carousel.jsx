import { Container, Grid } from "@mui/material";
import React from "react";

const Carousel = () => {
  return (
    <div className="carousel">
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={0}
                  className="active"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={1}
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={2}
                />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="https://cf.shopee.vn/file/fa79715264f5c973648d8096a8aa9773_xxhdpi"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://cf.shopee.vn/file/vn-50009109-7095eca9f95e1f094d749c0404b85af7_xxhdpi"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://cf.shopee.vn/file/vn-50009109-6ee065e1e77877f4001ae4efebdf6f10_xxhdpi"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="carousel__ads">
              <div className="ads__img">
                <img
                  src="https://cf.shopee.vn/file/vn-50009109-2ebd8dc698d738db0ffedce344e87bbd_xhdpi"
                  alt=""
                />
              </div>
              <div className="ads__img">
                <img
                  src="https://cf.shopee.vn/file/vn-50009109-30002e735028feb7e31680e1b654772d_xhdpi"
                  alt=""
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Carousel;
