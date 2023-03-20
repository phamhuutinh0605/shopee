import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const Product = ({ product }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="product__item">
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={product.image}
          width={"100%"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            style={{ fontSize: 10, fontWeight: "bolder" }}
            color="error"
            onClick={handleOpen}
          >
            Chi Tiết
          </Button>
          <Button
            variant="contained"
            style={{ fontSize: 10, backgroundColor: "#ee4d2d" }}
          >
            Mua Ngay
          </Button>
          <span style={{ marginLeft: 50, fontWeight: "bolder" }}>
            $ {product.price}
          </span>
        </CardActions>
      </Card>
      {open && (
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style} style={{width:800}}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  {product.title}
                </Typography>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="400"
                  image={product.image}
                />
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  {product.desc}
                </Typography>
                <CardActions style={{marginTop:20,display:"flex",justifyContent:"space-between"}}>
                  <div className="card__bu">
                  <Button
                    variant="outlined"
                    style={{ fontSize: 10, fontWeight: "bolder",marginRight:20 }}
                    color="error"
                  >
                    Thêm Vào Giỏ
                  </Button>
                  <Button
                    variant="contained"
                    style={{ fontSize: 10, backgroundColor: "#ee4d2d" }}
                  >
                    Mua Ngay
                  </Button>
                  </div>
                  <span style={{ fontWeight: "bolder",marginRight:20 }}>
                    $ {product.price}
                  </span>
                </CardActions>
              </Box>
            </Fade>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Product;
