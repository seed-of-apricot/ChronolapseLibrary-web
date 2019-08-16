import React from 'react';
import {
  Typography,
  ButtonBase,
  createStyles,
  makeStyles,
  Fade
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';

interface LoginProps {
  size: number;
  hideTypography: boolean;
}

const useStyles = (props: LoginProps) => {
  const size = props.size;
  return makeStyles(() =>
    createStyles({
      root: {
        width: 2.25 * size,
        height: 2.25 * size,
        minWidth: 0,
        padding: 0,
        marginLeft: 0.375 * size,
        '& svg': {
          marginTop: -0.225 * size
        },
        '& span': {
          borderRadius: 2 * size
        }
      }
    })
  )(props);
};
const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const classes = useStyles(props);
  return (
    <React.Fragment>
      <Fade in={!props.hideTypography}>
        <Typography
          variant={'body1'}
          style={{
            paddingTop: 0.3125 * props.size,
            paddingRight: 0.125 * props.size,
            float: 'left'
          }}
        >
          Sign-in / Sign-up
        </Typography>
      </Fade>
      <ButtonBase className={classes.root} component={Link} to={'/Login'}>
        <AccountCircle
          style={{ width: 2.7 * props.size, height: 2.7 * props.size }}
        />
      </ButtonBase>
    </React.Fragment>
  );
};

export default Login;
