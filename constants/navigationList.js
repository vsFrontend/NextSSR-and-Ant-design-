import {
  CommentOutlined,
  HeartFilled,
  HomeOutlined,
  SettingOutlined,
  ShoppingOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

export default [
  { name: "Home", path: "/", icon: <HomeOutlined /> },
  { name: "Todos", path: "/todos", icon: <UnorderedListOutlined /> },
  {
    name: "Orders",
    path: "/dashboard/order",
    icon: <ShoppingOutlined />,
  },
  { name: "WishList", path: "/dashboard/wishlist", icon: <HeartFilled /> },
  { name: "Messages", path: "/dashboard/chat", icon: <CommentOutlined /> },
  { name: "Settings", path: "/dashboard/settings", icon: <SettingOutlined /> },
];
