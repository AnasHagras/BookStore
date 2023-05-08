import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const style = { backgroundColor: "gainsboro", color: "black" };

function SidebarItem({ item, onClick }) {
  let active = window.location.pathname.split("/")[2] == item.link;

  return (
    <ListItem
      disablePadding
      sx={active ? style : {}}
      style={{
        padding: 0,
        margin: 0,
      }}
    >
      <NavLink
        to={item.link}
        style={{ color: "black", width: "100%", textDecoration: "none" }}
      >
        <ListItemButton sx={{ m: 0 }} onClick={onClick}>
          <ListItemIcon sx={{ m: 0, color: "black" }}>{item.icon}</ListItemIcon>
          <ListItemText sx={{ m: 0 }} primary={item.name} />
        </ListItemButton>
      </NavLink>
    </ListItem>
  );
}

export default SidebarItem;
