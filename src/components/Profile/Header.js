import React from 'react';
import {store} from '../../store';

class Header extends React.Component {
    constructor(props){
        super(props)
        // this.state = {
        //   ProfileName: "Алмат Курмашев",
        //   ProfileJob: "HR-Менеджер"
        // }
    }
    render() {
        return (
            <div>
                <div className = "header">
                    <img src="./src/static/images/logo.png" />
                    <div className= "rse">
                        <div id="profile" >
                            <img id="avatar" src="./src/static/images/avatar.jpg"/>
                            <div className="profinfo"  >
                                <div id= "profName">{this.props.ProfileName}</div>
                                <br />
                                <div id= "profJob">{this.props.ProfileJob}</div>
                            </div>
                            <div id="arrow" ></div>
                        </div>
                        <div id="filter" onClick={() => {store.update({showFilter : !store.state.showFilter})}} style={{cursor: 'pointer'}}>
                            <img src="./src/static/images/Filter.png" style={{height: "32px"}}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;
