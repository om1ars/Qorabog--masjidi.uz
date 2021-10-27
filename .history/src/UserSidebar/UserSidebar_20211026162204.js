import React from 'react'
import { signOut } from "firebase/auth";
import { Avatar, Button } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import { auth } from '../firebase';
// import { AiFillDelete } from "react-icons/ai";
import { MasjidState } from "../store/Context";


const useStyles = makeStyles({
    container: {
      width: 350,
      padding: 25,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      fontFamily: "monospace",
    },
    profile: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      height: "92%",
    },
    logout: {
      height: "8%",
      width: "100%",
      backgroundColor: "#EEBC1D",
      marginTop: 20,
    },
    picture: {
      width: 200,
      height: 200,
      cursor: "pointer",
      backgroundColor: "#EEBC1D",
      objectFit: "contain",
    },
    watchlist: {
      flex: 1,
      width: "100%",
      backgroundColor: "grey",
      borderRadius: 10,
      padding: 15,
      paddingTop: 10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      overflowY: "scroll",
    },
    coin: {
      padding: 10,
      borderRadius: 5,
      color: "black",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#EEBC1D",
      boxShadow: "0 0 3px black",
    },
})

export const UserSidebar = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
      right: false,
    });
    const { user, setAlert } = MasjidState();
  
    // console.log(watchlist, coins);
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const logOut = () => {
      signOut(auth);
      setAlert({
        open: true,
        type: "success",
        message: "Logout Successfull !",
      });
  
      toggleDrawer();
    };
  
    return (
        <div>
             {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
        <Avatar
          onClick={toggleDrawer(anchor, true)}
          style={{
            height: 38,
            width: 38,
            marginLeft: 15,
            cursor: "pointer",
            backgroundColor: "#EEBC1D",
          }}
          src={user.photoURL}
          alt={user.displayName || user.email}
        />
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          <div className={classes.container}>
            <div className={classes.profile}>
              <Avatar
                className={classes.picture}
                src={user.photoURL}
                alt={user.displayName || user.email}
              />
              <span
                style={{
                  width: "100%",
                  fontSize: 25,
                  textAlign: "center",
                  fontWeight: "bolder",
                  wordWrap: "break-word",
                }}
              >
                {user.displayName || user.email}
              </span>
           
            </div>
            <Button
              variant="contained"
              className={classes.logout}
              onClick={logOut}
            >
              Log Out
            </Button>
          </div>
        </Drawer>
      </React.Fragment>
      ))}
        </div>
    )
}
