import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadAdverts } from '../../../redux/actions/advertsAction';
import { getAdverts, getAdvertsPending, getAdvertsError } from '../../../redux/reducers/advertsReducer';
import IAdvertDatas from './interface';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import Modal from '@material-ui/core/Modal';

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
        media: {
            height: 200,
        },
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

const Advert = (props: any) => {
console.log("props", props);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    props.loadAdverts();
}, [props.advert]);


    const classes = useStyles();
    const renderData = props.adverts.map((item: any, index:number) => {
        return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card key={index}>
                    <CardActionArea onClick={handleOpen}>
                        <CardMedia
                            className={classes.media}
                            image={"/images/" + item.id + "/flat_1.jpg"}
                            title="Contemplative Reptile"
                            />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link to={"/advert/" + item.id}>
                            See more
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        )
    });

    return (
        <div>
            <Grid container spacing={2}>   
                {renderData}
            </Grid>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <p id="simple-modal-description">
                        Here will be short gallery
                    </p>
                </div>
            </Modal>
        </div>
    );
}

function mapStateToProps(state: any){
    return {
        error: getAdvertsPending(state),
        adverts: getAdverts(state),
        pending: getAdvertsError(state)
    }
}

const mapDispatchToProps = {
    loadAdverts
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Advert);
