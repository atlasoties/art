import React from "react";
import Button from 'react-bootstrap/Button';
import Online from "../../Components/online/Online";
import Topbar from "../../Components/topbar/Topbar";
import Sidebar from "../../Components/sidebar/sidebar";
import './shop.css'
import { Sh } from "../../shop";
class Shop extends React.Component{
    constructor(){
        super()
        this.state={
            Sh
        }
    }
    render(){
        return(
            <div className="shop-class">
                <Topbar/>
                <Online/>
                <Sidebar />
                <div className="shop-card">
                {
                    this.state.Sh.map(sh=>
                        <div className="shop-elements">
                            <div className="shop-pic">
                                <img className="shop-img" src={sh.artpic} alt="" />
                            </div>
                            <div className="art-name">
                                {sh.artName}
                            </div>
                            <div className="artist-name">
                                {sh.artistName}
                            </div>
                            <div className="more-info">
                                <Button className="shop-button">More info</Button>
                            </div>
                        </div>
                        )
                }
                </div>
            </div>
        );
    }
}
export default Shop;
