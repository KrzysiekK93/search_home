import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CardActionArea, CardActions, CardContent, CardMedia, Typography, Grid, Modal, Card } from '@material-ui/core/';

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
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

export default Advert;