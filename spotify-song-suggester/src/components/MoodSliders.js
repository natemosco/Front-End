import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
    root: {
        width: 450,
    },
    input: {
        width: 99,
    },
});

export default function MoodSliders(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = event => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < -0.3) {
            setValue(-0.3);
        } else if (value > 2.0) {
            setValue(2.0);
        }
    };
    let val = props.initialValue;
    if (props.songProfile.hasOwnProperty.length == 0) {
        return <div>loading...</div>
    } else if (val) {


        console.log(props.initialValue, "init val", typeof props.initialValue, "<-- is my type")
        return (
            <div className={classes.root}>
                <Typography id="input-slider" gutterBottom>
                    {props.name}
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        {/* <VolumeUp /> */}
                    </Grid>
                    <Grid item xs>
                        <Slider
                            // value={typeof value === 'number' ? value : 0}
                            // value={val}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                            min={-0.3}
                            max={2.0}
                            step={0.001}
                            defaultValue={val}
                            valueLabelDisplay="auto"
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            className={classes.input}
                            value={value}
                            margin="dense"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: 0.001,
                                min: -.3,
                                max: 2.0,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
    else {
        return <h1>I was right?</h1>
    }
}