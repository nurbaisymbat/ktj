import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'
import {store} from '../../store';

import Header from './Header.js';
import FilterResult from './FilterResult';
import Anketa from './Anketa';
import Vacancies from './Vacancies';
import FilterSettings from './FilterSettings';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showFilter : store.state.showFilter
        }
    }

    componentWillMount(){
        store.on('change', () => {
            this.setState({
                showFilter : store.state.showFilter
            })
        })
    }
    FilterSettings(){
        return this.state.showFilter ? <FilterSettings/> : '';
    }
    render() {
        return (
            <div className = "FilterContainer">
                <header>
                    <Header ProfileName = "Алмат Курмашев Ляля" ProfileJob= "HR-Менеджер-Стажер" />
                </header>
                <Route path="/profile/anketa" component={Anketa}/>
                <Route path="/profile/filter-result" component={FilterResult}/>
                <Route exact path="/profile" component={Vacancies}/>
                {this.FilterSettings()}
            </div>
        );
    }
}

export default Profile;
