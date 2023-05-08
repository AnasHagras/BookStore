/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  styled,
  useMediaQuery,
} from "@mui/material";
import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { NavHashLink } from "react-router-hash-link";
import { expertsTabs, dashboardTabs } from "./constants";

const DesktopSidebar = styled(Box)(() => ({
  height: "100%",
  border: "1px solid rgb(0 0 0 / 20%)",
  borderBottom: "none",
  marginTop: "67.5px",
  "&.opened": {
    width: "250px",
  },
  "&.closed": {
    width: "60px",
    overflow: "hidden",
  },
  "flex-direction": "column",
  position: "fixed",
  top: "0",
  bottom: "0",
  "z-index": "99",
  backgroundColor: "rgb(40 36 61)",
}));

const MobileSidebar = styled(Drawer)(() => ({}));

const Header = styled(Box)(({ theme }) => ({
  backgroundColor: "rgb(40 36 61)",
  paddingTop: "5px",
  paddingBottom: "5px",
  paddingLeft: "8px",
  paddingRight: "10px",
  width: "100%",
  display: "flex",
  "flex-direction": "row",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "space-between",
  position: "fixed",
  top: "0",
  "z-index": "99",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "5px",
  },
}));

const Content = styled(Box)(({ theme, chatTabOpen }) => ({
  flex: "1",
  width: "80%",
  position: "relative",
  marginRight: "30px",
  marginLeft: "30px",
  marginTop: "87.45px",
  "&.opened": {
    marginLeft: "270px",
  },
  "&.closed": {
    marginLeft: "80px",
  },
  "&.phone": {
    // marginRight: "50px",
    // marginLeft: "10px",
    // width: "90%",
    // width: "50%",
    padding: !chatTabOpen ? "2px" : "0px",
    // border: "1px solid green",
  },
  // border: "1px solid green",

  marginBottom: "20px",
  minHeight: "88vh",
  [theme.breakpoints.down("sm")]: {
    minHeight: "94vh",
    margin: !chatTabOpen ? "70px 12px 11px 13px" : "58px 0px 0px 0px",
  },
}));

const Title = styled(Box)(() => ({
  color: "white",
  fontSize: "25px",
  padding: "10px",
}));

const CSidebarItem = styled(ListItem)(() => ({
  color: "#e7e3fc",
  "&:hover": {
    cursor: "pointer",
  },
  "&.active": {
    background:
      "linear-gradient(76.8deg, rgb(158 96 165) 3.6%, rgb(75 71 122) 90.4%)",
    color: "white",
  },
  borderStartEndRadius: "30px",
  borderEndEndRadius: "30px",
  width: "90%",
  transitionDuration: "0.3s",
  margin: "10px",
}));

export default function CSidebar(props) {
  const [chatTabOpen, setChatTabOpen] = useState(
    window.location.pathname.split("/")[1] == "chat"
  );
  React.useEffect(() => {
    setChatTabOpen(window.location.pathname.split("/")[1] == "chat");
  }, [window.location.pathname]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const items = dashboardTabs;
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  // const { auth, authLoading } = useAuth()

  const path = window.location.pathname.split("/")[1];
  // const { authLoading } = useAuth()

  let title = path ? path[0].toUpperCase() + path.slice(1) : "";

  const navigate = useNavigate();
  const handleDesktopToggle = () => {
    setDesktopOpen(!desktopOpen);
  };

  const handlePhoneToggle = () => {
    setPhoneOpen(!phoneOpen);
  };

  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("sm"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  const handleLogout = () => {
    navigate("/");
  };
  const container =
    window !== undefined ? () => window.document.body : undefined;

  const handleItemClicked = (e, to) => {
    navigate(to);
  };
  const handlePhoneClicked = (e, to) => {
    handleItemClicked(e, to);
    setPhoneOpen(false);
  };

  React.useEffect(() => {
    setPhoneOpen(false);
    if (phone) {
      setDesktopOpen(false);
    }
    if (desktop) {
      setDesktopOpen(true);
    }
  }, [phone, desktop]);
  // if (authLoading) {
  //   return (
  //     <>
  //       <h1>Dashboard Loading</h1>
  //       <Outlet></Outlet>
  //     </>
  //   )
  // }
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          backgroundColor: "white",
          boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%)",
        }}
      ></Box>
      <Header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            sx={{
              // border: "1px solid green",
              width: "fit-content",
              height: "fit-content",
              color: "rgb(194 119 110)",
              padding: "0px",
              marginLeft: phone ? "6px" : "10px",
            }}
            width="50%"
            disableRipple
            onClick={!phone ? handleDesktopToggle : handlePhoneToggle}
          >
            <MenuIcon />
          </IconButton>
          <Title sx={{ fontSize: phone ? "20px" : "25px" }}>
            {title ? title : "Null"}
          </Title>
        </div>
        <>
          <Avatar
            onClick={handleOpen}
            sx={{
              width: phone ? 35 : 45,
              height: phone ? 35 : 45,
              borderRadius: 6,
              mr: 1,
              ":hover": {
                cursor: "pointer",
              },
            }}
            alt={"A"}
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
              borderRadius: "0px",
              "& .MuiMenuItem-root": {
                color: "rgb(117 72 122)",
                "&:hover": {
                  // backgroundColor: "rgb(65 0 72)",
                },
              },
              "& .MuiPaper-root": {
                borderRadius: "0px",
                marginTop: "3px",
              },
            }}
          >
            <MenuItem
              onClick={() => {
                navigate("/dashboard/profile");
                handleClose();
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleLogout();
                handleClose();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </>
        {/* <Button
            onClick={handleLogout}
            style={{
              alginSelf: "flex-end",
              justifySelf: "flex-end",
              float: "right",
              padding: "10px",
              // paddingLeft: "30px",
              // paddingRight: "30px",
              fontSize: "20px",
              borderRadius: "25px",
              // marginRight: phone ? "5px" : "30px",
              backgroundColor: "transparent",
              border: "none",
              // fontSize: phone ? "15px" : "20px",
            }}
          >
            Logout
          </Button> */}
      </Header>
      <Box
        sx={{
          display: "flex",
          "flex-direction": "row",
          flex: "0 0 100%",
          // width: "100%",
          // border: "1px solid green",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgb(40 36 61)",
            border: "none",
            outline: "none",
          }}
        >
          <DesktopSidebar
            className={desktopOpen ? "opened" : "closed"}
            display={phone ? "none" : "flex"}
          >
            <List sx={desktopOpen ? { paddingRight: "15px" } : {}}>
              {items.map((item, index) => {
                return (
                  <CSidebarItem
                    key={index}
                    onClick={(e) => handleItemClicked(e, item.to)}
                    className={
                      item.to === window.location.pathname.split("/")[1] ||
                      (!window.location.pathname.split("/")[1] && item.to == "")
                        ? "active"
                        : ""
                    }
                    sx={
                      desktopOpen
                        ? { padding: "10px" }
                        : { padding: "5px", width: "fit-content" }
                    }
                  >
                    <>
                      {item.icon}
                      {desktopOpen && (
                        <Box
                          sx={{
                            marginLeft: "15px",
                            fontSize: "19px",
                          }}
                          className="itemText"
                        >
                          {item.name}
                        </Box>
                      )}
                    </>
                  </CSidebarItem>
                );
              })}
            </List>
          </DesktopSidebar>
        </Box>
        <MobileSidebar
          container={container}
          anchor="left"
          variant="temporary"
          open={phoneOpen}
          onClose={handlePhoneToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "250px",
              backgroundColor: "rgb(40 36 61)",
            },
          }}
        >
          <List sx={desktopOpen ? { paddingLeft: "15px" } : {}}>
            <NavHashLink
              to="/#home"
              style={{
                padding: "0px",
                marginLeft: "20px",
                marginTop: "10px",
                marginBottom: "30px",
                // color: "black",
              }}
            >
              <img
                src="/logo-brand-white.svg"
                width={phone ? "110px" : "150px"}
                className="d-inline-block align-top"
                alt="Playdate logo"
              />
            </NavHashLink>
            <Box
              sx={{
                borderBottom: "1px solid gray",
                width: "86%",
                marginTop: "10px",
                marginLeft: "20px",
                // marginLeft: "20px",
              }}
            ></Box>
            {items.map((item, index) => {
              return (
                <CSidebarItem
                  key={index}
                  onClick={(e) => handlePhoneClicked(e, item.to)}
                  className={
                    item.to === window.location.pathname.split("/")[1] ||
                    (!window.location.pathname.split("/")[1] && item.to == "")
                      ? "active"
                      : ""
                  }
                >
                  <>
                    {item.icon}
                    <Box sx={{ marginLeft: "15px" }} className="itemText">
                      {item.name}
                    </Box>
                  </>
                </CSidebarItem>
              );
            })}
          </List>
        </MobileSidebar>
        <Content
          chatTabOpen={chatTabOpen}
          className={desktopOpen ? "opened" : phone ? "phone" : "closed"}
        >
          <Outlet />
        </Content>
      </Box>
    </>
  );
}
