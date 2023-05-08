import HistoryIcon from "@mui/icons-material/History";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import BlockIcon from "@mui/icons-material/Block";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ChatIcon from "@mui/icons-material/Chat";
import BookIcon from "@mui/icons-material/Book";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
const dashboardTabs = [
  { id: "0", name: "Profile", to: "profile", icon: <PersonIcon /> },
  { id: "1", name: "Books", to: "books", icon: <BookIcon /> },
  { id: "2", name: "Cart", to: "cart", icon: <ShoppingCartIcon /> },
  { id: "3", name: "Orders", to: "orders", icon: <ReceiptLongIcon /> },
];

const expertsTabs = [
  ...dashboardTabs,
  {
    id: dashboardTabs.length + 5,
    name: "Experts",
    to: "experts",
    icon: <LeaderboardIcon />,
  },
];

export { dashboardTabs, expertsTabs };
