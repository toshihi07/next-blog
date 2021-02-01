import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import ClearIcon from "@material-ui/icons/Clear";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import EmailIcon from "@material-ui/icons/Email";

import {auth} from "../../features/firebase";
import {selectUser,login,logout} from '../../slice/userSlice'


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    heading: {
      textAlign: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(1, 0),
    },
    overlay: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export default function LoginModal({ loginModalOpen, setLoginModalopen,isLogin,setIsLogin }){
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const dispatch = useDispatch()

  const handleOpen = () => {
    setLoginModalopen(true);
  };

  const handleClose = () => {
    setLoginModalopen(false);
  };

  const [pw,setPw] = useState("");
  const [email,setEmail] = useState("");
  const [disabled,setDisabled] = useState(false);
  var authUser = auth.currentUser;

  //async()
  const signInEmail = async () => 
    await auth.signInWithEmailAndPassword(email, pw)
    .then(() => {
      alert("ログイン成功")
      handleClose();
      setIsLogin(true);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('パスワードが間違っています');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
    
  const signUpEmail = async () => {
    await auth.createUserWithEmailAndPassword(email, pw);
  };

  const signInWithGoogle = async () => {
    console.log(`auth: ${auth}`);
    console.log(`db: ${db}`);
    console.log(`storage: ${storage}`);
    console.log(`provider: ${provider}`);
  };

  const modaBody = (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5" className={classes.heading}>
        Login
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="メールアドレス"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=>setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="パスワード"
          type="password"
          id="password"
          autoComplete="current-password"
          value={pw}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=>setPw(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={disabled}
          startIcon={<EmailIcon />}
          onClick={signInEmail}
        >
          ログイン
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
          onClick={signInWithGoogle}
        >
          グーグルアカウントでログイン
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              パスワードを忘れた方
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signUp" variant="body2" target="_blank" rel="noopener noreferre">
              <a>{"登録がまだの方はこちら"}</a>
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );

  return (
    <Modal
      open={loginModalOpen}
      //背景画像を押してもモーダルを閉じる
      onBackdropClick={handleClose}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.overlay}
    >
      {modaBody}
    </Modal>
  );
}
