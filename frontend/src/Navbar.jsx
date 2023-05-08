/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import "./navbar.css";
import { useState } from "react";
// import { AiOutlineMenu } from "react-icons/ai";
import { Drawer, Avatar, IconButton, useMediaQuery } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Button, Stack } from "react-bootstrap";
import { useTheme } from "@emotion/react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuIcon from "@mui/icons-material/Menu";

const container = window !== undefined ? () => window.document.body : undefined;

export default function NavBar({ fixed }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navCollapse = () => setIsCollapsed(!isCollapsed);
  const handleLogout = () => {
    // logout();
    navigate("/");
  };
  const handleClick = () => {
    setIsCollapsed(true);
  };
  const navigate = useNavigate();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <header id="header" className={`header ${fixed ? "fixed-top" : ""}`}>
      {/* desktop navbar */}
      <div
        className="d-flex align-items-center justify-content-between"
        style={{ marginLeft: "15px", marginRight: "15px", padding: "5px" }}
      >
        <NavHashLink
          to="/#home"
          className="logo d-flex align-items-center"
          style={{
            padding: "0px",
            marginLeft: phone ? "0px" : "5px",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          <h5>BookStore</h5>
        </NavHashLink>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <NavHashLink className="nav-link scrollto active" to="/#home">
                Home
              </NavHashLink>
            </li>
            <li>
              <NavHashLink className="nav-link scrollto" to="/#features">
                Features
              </NavHashLink>
            </li>
            <li>
              <NavHashLink className="nav-link scrollto" to="/#pricing">
                Pricing
              </NavHashLink>
            </li>
            <li>
              <NavHashLink className="nav-link scrollto" to="/#get_start">
                Get Started
              </NavHashLink>
            </li>
            <li>
              <NavHashLink className="nav-link scrollto" to="/#team">
                Team
              </NavHashLink>
            </li>
            <li>
              <a
                href="https://api.playdate.fun/swagger/"
                target={"_blank"}
                className="nav-link"
              >
                API Docs
              </a>
            </li>
            {isLoggedIn && (
              <li>
                <Link className="nav-link scrollto" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}
            {!isLoggedIn && (
              <Stack
                direction="horizontal"
                gap={3}
                style={{ marginLeft: "15px" }}
              >
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Log in
                </Button>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Sign up
                </Button>
              </Stack>
            )}
            {isLoggedIn && (
              <>
                <li style={{ marginLeft: "15px" }}>
                  <Button variant="outline-dark" onClick={handleLogout}>
                    Log out
                  </Button>
                </li>
                <li>
                  <IconButton
                    onClick={() => navigate("/dashboard/profile")}
                    sx={{ marginLeft: "10px" }}
                  >
                    <Avatar
                      sx={{
                        width: phone ? 35 : 40,
                        height: phone ? 35 : 40,
                        borderRadius: 6,
                        mr: 1,
                        ":hover": {
                          cursor: "pointer",
                        },
                      }}
                      alt={"A"}
                      src={""}
                    />
                  </IconButton>
                </li>
              </>
            )}
          </ul>
          <button
            className="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-mobile"
            aria-controls="navbar-mobile"
            aria-expanded={!isCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={navCollapse}
          >
            <MenuIcon></MenuIcon>
          </button>
        </nav>
      </div>
      {/* mobile navbar */}
      <ClickAwayListener
        onClickAway={() => setIsCollapsed(true)}
        mouseEvent={false}
        touchEvent={false}
      >
        <Drawer
          className={`${isCollapsed ? "collapse" : ""} navbar-collapse navbar`}
          id="navbar-mobile"
          container={container}
          anchor="top"
          variant="temporary"
          open={!isCollapsed}
          onClose={() => setIsCollapsed(true)}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
        >
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            style={{
              margin: "20px 30px",
              position: "absolute",
              top: "0",
              right: "0",
            }}
            onClick={() => setIsCollapsed(true)}
          ></button>
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ul className="navbar-list-mobile">
              <li>
                <NavHashLink
                  className="nav-link scrollto active"
                  to="/#home"
                  onClick={handleClick}
                >
                  Home
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  className="nav-link scrollto"
                  to="/#features"
                  onClick={handleClick}
                >
                  Features
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  className="nav-link scrollto"
                  to="/#pricing"
                  onClick={handleClick}
                >
                  Pricing
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  className="nav-link scrollto"
                  to="/#team"
                  onClick={handleClick}
                >
                  Team
                </NavHashLink>
              </li>
              <li>
                <a
                  href="https://api.playdate.fun/swagger/"
                  target={"_blank"}
                  className="nav-link"
                >
                  API Docs
                </a>
              </li>
              {isLoggedIn && (
                <li>
                  <Link
                    className="nav-link scrollto"
                    to="/dashboard"
                    onClick={handleClick}
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              <li>
                <div
                  className="btn-invest"
                  style={{ marginLeft: "0px !important" }}
                >
                  <a
                    href="mailto:ahmed.wessam@bld.ai"
                    target="_blank"
                    style={{
                      margin: "0px",
                      marginBottom: "15px",
                      marginLeft: "6px",
                    }}
                  >
                    <span>Invest Now</span>
                  </a>
                </div>
              </li>
              {!isLoggedIn && (
                <>
                  <li>
                    <Button
                      style={{ width: "100px", marginBottom: "15px" }}
                      variant="outline-dark"
                      onClick={() => {
                        navigate("/login");
                        setIsCollapsed(true);
                      }}
                    >
                      Log in
                    </Button>
                  </li>
                  <li>
                    <Button
                      style={{ width: "100px" }}
                      variant="outline-dark"
                      onClick={() => {
                        navigate("/register");
                        setIsCollapsed(true);
                      }}
                    >
                      Sign Up
                    </Button>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <>
                  <li style={{ marginLeft: "15px" }}>
                    <Button variant="outline-dark" onClick={handleLogout}>
                      Log out
                    </Button>
                  </li>
                  <li>
                    <IconButton
                      onClick={() => navigate("/dashboard/profile")}
                      sx={{ marginLeft: "10px" }}
                    >
                      <Avatar
                        sx={{
                          width: phone ? 35 : 45,
                          height: phone ? 35 : 45,
                          borderRadius: 6,
                          mr: 1,
                          ":hover": {
                            cursor: "pointer",
                          },
                        }}
                        src={""}
                        alt={"A"}
                      />
                    </IconButton>
                  </li>
                </>
              )}
              <br />
            </ul>
          </div>
        </Drawer>
      </ClickAwayListener>
    </header>
  );
}
