import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Footer from '../../components/Footer/';
import Dashboard from '../../views/Dashboard/';
import Charts from '../../views/Charts/';
import Widgets from '../../views/Widgets/';
import Buttons from '../../views/Components/Buttons/';
import Cards from '../../views/Components/Cards/';
import Forms from '../../views/Components/Forms/';
import Modals from '../../views/Components/Modals/';
import SocialButtons from '../../views/Components/SocialButtons/';
import Switches from '../../views/Components/Switches/';
import Tables from '../../views/Components/Tables/';
import Tabs from '../../views/Components/Tabs/';
import FontAwesome from '../../views/Icons/FontAwesome/';
import SimpleLineIcons from '../../views/Icons/SimpleLineIcons/';


import Posts from "../../views/Blog/Posts/Posts";
import PostEdit from "../../views/Blog/PostEdit/PostEdit";
import CategoryEdit from "../../views/Blog/CategoryEdit/CategoryEdit";
import Categories from "../../views/Blog/Categories/Categories";
import {TileList} from "../../views/Tile/TileList/TileList";
import {TileEditor} from "../../views/Tile/TileEditor/TileEditor";

class Full extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div className="app-body">
                    <Sidebar {...this.props}/>
                    <main className="main">
                        <Breadcrumb/>
                        <Container fluid>
                            <Switch>

                                <Route path="/posts" name="Posts" component={Posts}/>
                                <Route path="/post_editor" name="Post" component={PostEdit}/>

                                <Route path="/categories" name="Categories" component={Categories}/>
                                <Route path="/category_editor" name="CategoryEdit" component={CategoryEdit}/>

                                <Route path="/tiles" name="Tiles" component={TileList}/>
                                <Route path="/tile_editor" name="Tile editor" component={TileEditor}/>

                                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                                <Route path="/components/buttons" name="Buttons" component={Buttons}/>
                                <Route path="/components/cards" name="Cards" component={Cards}/>
                                <Route path="/components/forms" name="Forms" component={Forms}/>
                                <Route path="/components/modals" name="Modals" component={Modals}/>
                                <Route path="/components/social-buttons" name="Social Buttons"
                                       component={SocialButtons}/>
                                <Route path="/components/switches" name="Swithces" component={Switches}/>
                                <Route path="/components/tables" name="Tables" component={Tables}/>
                                <Route path="/components/tabs" name="Tabs" component={Tabs}/>
                                <Route path="/icons/font-awesome" name="Font Awesome" component={FontAwesome}/>
                                <Route path="/icons/simple-line-icons" name="Simple Line Icons"
                                       component={SimpleLineIcons}/>
                                <Route path="/widgets" name="Widgets" component={Widgets}/>
                                <Route path="/charts" name="Charts" component={Charts}/>
                                <Redirect from="/" to="/posts"/>
                                <Redirect from="/home" to="/posts"/>
                            </Switch>
                        </Container>
                    </main>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Full;
