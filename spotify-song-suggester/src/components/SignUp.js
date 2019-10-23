import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import axios from "axios";
import { Link } from "react-router-dom";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}

			<span>Spotify Song Suggester</span>
			{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}




const useStyles = makeStyles(theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignUp(props) {
	const classes = useStyles();


	const [newCreds, setNewCreds] = useState({
		username: "",
		password: ""
	})

	const handleChange = (event) => {
		setNewCreds({ ...newCreds, [event.target.name]: event.target.value })
	}

	const handleSubmit = event => {
		event.preventDefault();
		// 	axios
		// 		.post('https:spotify-song-suggester-app.herokuapp.com/createnewuser', newCreds)
		// 		.then(res => {
		// 			console.log("login axios response", res)
		// 			localStorage.setItem('token', res.data.access_token)
		// 			// props.history.push("/home")
		// 		})
		// 		.catch(err => {
		// 			console.log("login axios error", err)
		// 		})
		// }
		console.log(newCreds);
		axios.post('https://spotify-song-suggester-app.herokuapp.com/createnewuser?getaccess=true',
			newCreds)
			.then(res => {
				console.log(res);
				props.history.push("/");
			})
			.catch(err => console.dir(err))
		props.history.push("/");





	}





	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
        </Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="name"
								label="Username"
								name="username"
								autoComplete="username"
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={handleChange}
							/>
						</Grid>
						{/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid> */}
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Sign Up
          </Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link to="/">
								Already have an account? Sign in
              </Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
}