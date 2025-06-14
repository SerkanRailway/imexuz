import React, { useState } from "react";
import { Drawer, Input } from "antd";
import "./Navbar.scss";
import Logo from "../../media/ChatGPT_Image_13_июн._2025_г.__14_28_59-removebg-preview.png";
import LanguageSwitcher from "../../lang/LanguageSwitcher";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "../../SEO";
import img from "../../media/photo_2025-06-13_12-42-45.jpg"; // Tam ekran resmi

const { Search } = Input;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setSearchQuery("");
  };

  return (
    <div className="navbar">
      <SEO />
      <div className="upper_nav">
        <div className="logo">
          <NavLink to="/">
            <img
              src={Logo}
              alt="Logo"
              style={{ maxWidth: "140px", height: "auto" }}
            />
          </NavLink>
        </div>

        <NavLink className="nav-link" to="/">
          {t("ASOSIY")} <div className="line"></div>
        </NavLink>
        <NavLink className="nav-link" to="/about">
          {t("BIZ HAQIMIZDA")} <div className="line"></div>
        </NavLink>
        <NavLink className="nav-link" to="/contacts">
          {t("ALOQA")} <div className="line"></div>
        </NavLink>

        <div className="language">
          <LanguageSwitcher />
        </div>

        <button className="burger_menu" onClick={showDrawer}>
          <i className="bx bx-menu"></i>
        </button>
      </div>

      <div className="responsive_nav">
        <div
          className={
            open && searchQuery.length > 0 ? "search open" : "search"
          }
        >
          <div
            className={
              open && searchQuery.length > 0
                ? "search_result_list active"
                : "search_result_list"
            }
          ></div>
        </div>
      </div>

      {/* FULL SCREEN DRAWER */}
      <Drawer
        title=""
        placement="left"
        closable
        onClose={onClose}
        open={open}
        key="left"
        width="100vw"
      >
        <div
          className="main-page"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className="navLinks">
            <NavLink onClick={onClose} className="nav-link" to="/">
              <div>
                <i className="bx bx-home-alt-2"></i> {t("ASOSIY")}
              </div>
            </NavLink>
            <NavLink onClick={onClose} className="nav-link" to="/about">
              <div>
                <i className="bx bx-info-circle"></i> {t("BIZ HAQIMIZDA")}
              </div>
            </NavLink>
            <NavLink onClick={onClose} className="nav-link" to="/contacts">
              <div>
                <i className="bx bxs-contact"></i> {t("ALOQA")}
              </div>
            </NavLink>
          </div>

          <div className="language" style={{ padding: "20px" }}>
            <LanguageSwitcher />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
