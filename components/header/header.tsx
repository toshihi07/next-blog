import React, { useState,useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Avatar } from "@material-ui/core";
import { Style } from "@material-ui/icons";
import Link from "next/link";
import { useSelector,useDispatch } from "react-redux";
import styles from "./header.module.scss";
import LoginModal from "./loginModal";

import { db, auth, storage, provider } from "../../features/firebase";
import {selectUser,login,logout} from '../../slice/userSlice'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));



export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [loginModalOpen, setLoginModalopen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLoginModalOpen = () => {
    setLoginModalopen(true);
  };

  const handleLoginModalClose = () => {
    setLoginModalopen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="inherit"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Next Blog
          </Typography>
          <Typography variant="h5" noWrap className={styles.image_icon}>
            {isLogin ? (
              <IconButton
                color="inherit"
                edge="start"
                className={styles.image_icon}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://lh3.googleusercontent.com/-KQh4_iVySH8/VPXcBGo9udE/AAAAAAAABEc/rBByO_KUFpwx1ua9eOipoUFc3ccHZ3ueACEwYChgbKtQDAL1OcqxWf88M_lU4BVh2Myh4OsyKT7M7u-1MN0btZR6yMZTvM-f8bFTbw3oUMEQioA5ZORusa4D-VvubtE7RYCQ5sYpJpP1Tg7MJddudSxOnM2X0rXEfwJIt-Mf2Xv6oVOnn8EMXGSu4CF8m9ItpJs-Dp8ywnzD1OpLTV6bHR7RWPQYmpKMh4R8blWhaNHqZ0HY9l2uHMNfTWrO6PMPbjkYGOYDg8SHxBdJPch42QI69A_eVDhysLBUjtvugUVyP9jFz_R3QYSYnOq0KCLZAgFMgrYjdUdnZUoMJf5S4wjfU2IP2UxBqM4mrHdm7swcz8ETuE136W-fGd2FPcNV9Q-SKebtNTBGun8TDi0N2-FsKcUc1StgCjSSaX_uFo-D8OR0d_KNcA4aLzQeNiMBO7qXnMRHbFCae3uEEz4Iek8LRSOmb6oe7HZ4kTBq1GSXL0Ejya4T6hqKFwuVJzJ0bNbmch3kIRFUrmdMb0rPd2P3iHRtEccPxmc6Cqzc7MBOyAiHofdOD_mmAdJ4HYTDnU3hzOkGnU2SEtqqZePpP3wlKibr2-463J42L7jkNs7FSYRCjm33pWPmBLponXS1i9JqQS0g9dWg90BIO7lQfM-z_S9pbMJKChIAG/w163-h110-p/ProfilePhotos"
                />
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </IconButton>
            ) : (
              <>
                <Button color="inherit" onClick={handleLoginModalOpen}>
                  Login
                </Button>
                <Button color="inherit" >
                  <Link href="/signUp">
                    <a>Sign up</a>
                  </Link>
                </Button>
              </>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <LoginModal
        loginModalOpen={loginModalOpen}
        setLoginModalopen={setLoginModalopen}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
    </div>
  );
}
