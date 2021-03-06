import React, {useEffect} from "react";
import AppLayout from "./views/components/AppLayout";
import {Switch, Route} from "react-router-dom";
import Home from "./views/pages/Home";
import Detail from "./views/pages/Detail";
import Genre from "./views/pages/Genre";
import Search from "./views/pages/Search";
import {useSelector} from "react-redux";
import {appActions} from "./redux/actionCreators";
import Member from "./views/pages/Member";
import {ThemeProvider} from "styled-components";
import theme from "./style/theme";
import ScrollToTop from "./utils/scrollToTop";
import {AnimatedSwitch} from "react-router-transition";


function App(){
    const {
        Movies = []
    } = useSelector(state => state?.app);

    useEffect(() => {
        if(!Movies.length) {
            console.log('@@APP/GET_MOVIES');
            appActions.getMovies();
        }
    }, []);

    return(
        <ThemeProvider theme={theme}>
            <ScrollToTop />
            <AppLayout>
                <Switch>
                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                        className="switch-wrapper"
                    >
                        <Route exact path={"/"} component={Home}/>
                        <Route path={"/detail/:id"} component={Detail}/>
                        <Route path={"/genre"} component={Genre}/>
                        <Route path={"/search"} component={Search}/>
                        <Route path={"/member"} component={Member}/>
                    </AnimatedSwitch>
                </Switch>
            </AppLayout>
        </ThemeProvider>
    )
}

export default App;