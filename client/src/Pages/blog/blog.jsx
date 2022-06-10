import React from "react";
import './blog.css'
import pic1 from '../../Asset/img/merke.jpg'
import { Avatar } from "@chakra-ui/core";
import { MDBIcon, MDBBtn, MDBPopoverBody, } from 'mdb-react-ui-kit';
// import { onlineUsers } from "../../userdata";
import { Bl } from "../../blog";
// const a4 = Bl.map(t1 => ({...t1, ...onlineUsers.find(t2 => t2.id === t1.id)}))
class Blog extends React.Component {
    constructor() {
        super();
        this.state = {
            Bl
        };
    }

    render() {
        return (
            <div className="Blog-class">
                <div className="blog-card">
                    {this.state.Bl.map(blo =>
                        <><div className="blog-element">
                            <div className="blog-av">
                                <Avatar name="Merkeb Reda" src={pic1} />Merkeb Reda
                            </div>
                            <div className="blog-content">
                                <div className="blog-pic">
                                    <img className="blog-img" src={blo.blogpic} alt={blo.name} />
                                </div>

                                <div className="blog-cont">
                                    <center><h1><b>Blog Title</b></h1></center>
                                    {blo.blog}
                                </div>

                            </div>
                            <div className="blog-date">
                                <MDBIcon icon="bell" />  09/06/2022
                            </div>
                            < div className="blog-reaction">

                                <MDBIcon size='2x' icon='thumbs-up' />
                                <MDBIcon size='2x' icon='share' />
                                <MDBIcon size='2x' icon='comment' />
                            </div>
                        </div></>
                    )
                    }
                </div>
            </div>
        );
    }
}
export default Blog;
