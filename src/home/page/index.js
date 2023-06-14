import React from "react";
import { withController } from "../../hoc/withController";
import { HomeProvider, useController } from "../controller";
import { makeStyles } from "tss-react/mui";
import { Grid, Typography, Avatar } from "@mui/material";

function Home() {
    const { classes } = useStyles();
    const controller = useController();
    return (
        <Grid container justifyContent={"center"}>
            <Grid container item xs={12} className={classes.root}>
                <Grid container xs={6} item>
                    <Typography variant="h3" className={classes.header}>All the Pokemon!</Typography>
                </Grid>
                <Grid container xs={6} item justifyContent={"flex-end"} >
                    <Grid container xs={2} item alignItems={'center'} justifyContent={'flex-end'}>
                        <Typography variant="h5" className={classes.link}>Sort Name</Typography>
                    </Grid>
                    <Grid container xs={2} item alignItems={'center'} justifyContent={'flex-end'}>
                        <Typography variant="h5" className={classes.link}>Sort ID</Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} style={{ gap: 0 }}>
                    {controller.pokemonList?.map((item, index) => {
                        return (
                            <Grid
                                container
                                item
                                xs={3}
                                className={classes.card}
                            >
                                <Grid
                                    container
                                    item
                                    lg={3}
                                    className={classes.icon}
                                >
                                    <Avatar src="/static/images/avatar/1.jpg" sx={{ width: 72, height: 72 }} />
                                </Grid>
                                <Grid container item xs>
                                    <Typography
                                        variant="h5"
                                        style={{ textTransform: "capitalize" }}
                                    >
                                        {item?.name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid container item xs={12} justifyContent={"space-between"}>
                    <Typography variant="h6" className={classes.link}>Previous</Typography>
                    <Typography variant="h6" className={classes.link}
                        onClick={() => controller.handlePrevNext(controller.pokemonList.next.toString())
                        }
                    >
                        Next
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            // backgroundColor: "lightpink",
            padding: 48,
            justifyContent: 'space-around'
        },
        header:{
            fontFamily: 'Encode Sans'
        },
        card: {
            backgroundColor: "white",
            height: 104,
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #E3E1E5",
            borderRadius: 12,
            margin: 8,
            fontFamily: 'Roboto'
        },
        icon: {
            alignContent: "center",
            padding: 16 
        },
        sortText: {
            fontSize:20,
            fontFamily: 'Encode Sans'
        },
        link:{
            color: "#024E74"
        }
    };
});

export default withController(HomeProvider)(Home);
