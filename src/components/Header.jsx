import { Container, Link } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <div className="header__wrapper">
          <div className="header__connection">
            <span>Kênh người bán | Trở thành người bán |</span>
            <span className="connecttion__text">Kết nối</span>
          </div>
          <div className="header__login">
            <Link href="/register" className="header__signup">Đăng kí</Link>
            <Link className="header__signin">Đăng nhập</Link>
          </div>
        </div>
        <Navbar />
      </Container>
    </div>
  );
};

export default Header;
