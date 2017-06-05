import React from 'react';

import {
    Link
} from 'react-router-dom';

class FilterResult extends React.Component {
    employee_types;

    constructor(props){

        super(props);

        this.employee_types = {
            all : {
                title : 'Все сотрундники',
                status : 'green',
                style : {
                    color: '#5cb85c',
                    borderBottom: '2px solid',
                    paddingBottom: '13px',
                }
            },
            made : {
                title : 'Сокращенные',
                status : 'red',
                style : {
                    color: '#dd2c00',
                    borderBottom: '2px solid',
                    paddingBottom: '13px',
                }
            },
            under : {
                title : 'Под сокращением',
                status : 'pink',
                style : {
                    color: '#fbc02d',
                    borderBottom: '2px solid',
                    paddingBottom: '13px',
                }
            },
            reserved : {
                title : 'В резерве',
                status : 'gray',
                style : {
                    color: '#bdbdbd',
                    borderBottom: '2px solid',
                    paddingBottom: '13px',
                }
            },
            intern : {
                title : 'Стажеры',
                status : 'pink',
                style : {
                    color: '#f48fb1',
                    borderBottom: '2px solid',
                    paddingBottom: '13px',
                }
            },
            external : {
                title : 'Внешние резерв',
                status : 'pink',
                style : {
                    color: '#8e24aa',
                    borderBottom: '2px solid',
                    paddingBottom: '13px',
                }
            },
        }

        this.state = {
            statusData: {
                all: 40000,
                made: 5250,
                under: 750,
                reserved: 135,
                intern: 40,
                external: 102,
            },
            current_status : 'all',
            data:[
                {
                    id: "17ILP154",
                    fio: "резеАлмат Амантаевич",
                    sex: "Мужчина",
                    age:  28,
                    city: "Астана",
                    edu: "АО Железнодорожный вокзал Алматы",
                    job: "Начальник отдела",
                    status: "reserved"

                },
                {
                    id: "17ILP154",
                    fio: "сокрАлмат Амантаевич",
                    sex: "Мужчина",
                    age:  56,
                    city: "Астана",
                    edu: "АО Железнодорожный вокзал Алматы",
                    job: "Начальник отдела",
                    status: "made"
                }
                ,
                {
                    id: "17ILP154",
                    fio: "алл Алмат Амантаевич",
                    sex: "Мужчина",
                    age:  56,
                    city: "Астана",
                    edu: "АО Железнодорожный вокзал Алматы",
                    job: "Начальник отдела",
                    status: ""
                },
                {
                    id: "17ILP154",
                    fio: "стажАлмат Амантаевич",
                    sex: "Мужчина",
                    age:  56,
                    city: "Астана",
                    edu: "АО Железнодорожный вокзал Алматы",
                    job: "Начальник отдела",
                    status: "intern"
                },
                {
                    id: "17ILP154",
                    fio: "подсАлмат Амантаевич",
                    sex: "Мужчина",
                    age:  56,
                    city: "Астана",
                    edu: "АО Железнодорожный вокзал Алматы",
                    job: "Начальник отдела",
                    status: "under"
                },
                {
                    id: "17ILP154",
                    fio: "внешАлмат Амантаевич",
                    sex: "Мужчина",
                    age:  56,
                    city: "Астана",
                    edu: "АО Железнодорожный вокзал Алматы",
                    job: "Начальник отдела",
                    status: "external"
                }
            ]
        }
    }
    indicator(){
        return this.state.data.map(
            (m,i) => this.employee_types[m.status] ? this.employee_types[m.status] :  {
                status : 'green',
                style : {
                    color: '#5cb85c',
                    borderBottom: '2px solid',
                    paddingBottom: '13px',
                }
            }
        )
    }

    employee_types_render(){
        return Object.keys(this.employee_types).map(
            (status) =>
                <th onClick={() => {this.setState({current_status : status});}} className="tHeader" >
                    <span style={ this.state.current_status == status ? this.employee_types[status].style : {} }>
                        <span style={{color: this.employee_types[status].style.color}}>• </span>
                        {this.employee_types[status].title}
                    </span>
                </th>
        );
    }

    employee_types_count_render(){
        return Object.keys(this.employee_types).map(
            (status) => <td style={{color: this.employee_types[status].style.color}}>{this.state.statusData[status]}</td>
        );
    }

    current_type_employees(){
        return this.state.data.filter(
            employee => this.state.current_status == 'all' ? true : (employee.status == this.state.current_status)
        ).map(
            employee =>
                <tr className="tRow">
                    <td style={{backgroundColor: this.employee_types[employee.status ? employee.status : 'all'].style.color}}></td>
                    <td style={{paddingLeft: '10px'}}><Link to="/profile/anketa" style={{textDecoration: 'none', color: '#000'}}>{employee.id}</Link></td>
                    <td style={{paddingLeft: '0px'}}><Link to="/profile/anketa" style={{textDecoration: 'none', color: '#000'}}>{employee.fio}</Link></td>
                    <td style={{paddingLeft: '0px'}}><Link to="/profile/anketa" style={{textDecoration: 'none', color: '#000'}}>{employee.sex}</Link></td>
                    <td style={{paddingLeft: '0px'}}><Link to="/profile/anketa" style={{textDecoration: 'none', color: '#000'}}>{employee.age}</Link></td>
                    <td style={{paddingLeft: '0px'}}><Link to="/profile/anketa" style={{textDecoration: 'none',  color: '#000'}}>{employee.city}</Link></td>
                    <td style={{paddingLeft: '0px'}}><Link to="/profile/anketa" style={{textDecoration: 'none',  color: '#000'}}>{employee.edu}</Link></td>
                    <td style={{paddingLeft: '0px'}}><Link to="/profile/anketa" style={{textDecoration: 'none',  color: '#000'}}>{employee.job}</Link></td>
                </tr>
        )
    }

     render() {
        return (
            <div className="filterBody">
                <div className="mCont">
                    <div className="historyBar">
                        <p><Link to="/profile" style={{textDecoration: 'none', color: '#bcbcbc'}}>Главная </Link> >  </p> <p id = "next">  <Link to="/profile" style={{textDecoration: 'none'}}>Результат фильтра</Link></p>
                    </div>
                    <div className="SearchBar">
                        <p>Результат фильтра</p>
                        <div className="row searchBox" style={{margin: "1px"}}>
                            <div className="col-md-1" style={{marginTop: '10px', paddingRight: '20px'}}>
                                <span className="glyphicon glyphicon-search"></span>
                            </div>
                            <div className="col-md-10 searchInput">
                                <input type = "text" placeholder="Поиск" color="#bcbcbc"/>
                            </div>


                        </div>
                    </div>
                    <div className="tableWrapper" >
                        <table className = "tables">
                            <tr>
                                {this.employee_types_render()}
                            </tr>
                            <tr  className="editData" >
                                {this.employee_types_count_render()}
                            </tr>
                        </table>
                    </div>
                    <span>{this.indicator}</span>

                    <div className="table2">
                        <table className = "tables">
                            <tr>
                                <th></th>
                                <th style={{paddingLeft: '10px'}} className="tHeader">ID</th>
                                <th className="tHeader">ФИО</th>
                                <th className="tHeader">Пол</th>
                                <th className="tHeader">Возраст</th>
                                <th className="tHeader">Город</th>
                                <th className="tHeader">Образование</th>
                                <th className="tHeader">Должность</th>
                            </tr>

                            {this.current_type_employees()}
                        </table>
                    </div>

                </div>

            </div>
        );
    }
}

export default FilterResult;
