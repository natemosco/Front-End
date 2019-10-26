import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
    root: {
        width: 350,
    },
    input: {
        width: 65,
    },
});

export default function MoodSliders(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(props.initialValue.toFixed(3));

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = event => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < -2.0) {
            setValue(-2.0);
        } else if (value > 2.0) {
            setValue(2.0);
        }
    };

    return (
        <div id="makeStyles-root-153" className={classes.root}>
            <Typography className="input-slider" gutterBottom id="pointerFinger" onClick={props.showHideModal}>
                {props.name}
            </Typography>

            <Grid container spacing={2} alignItems="center">
                <Grid id="MuiSlider-root" item xs>
                    <Slider
                        // value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        min={-2.0}
                        max={2.0}
                        step={0.001}
                        defaultValue={props.initialValue}
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
                            min: -2.0,
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