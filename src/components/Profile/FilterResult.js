import React from 'react';
import {store} from '../../store';
import {
    Link
} from 'react-router-dom';

class FilterResult extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchData: {
                id: "2",
                sex: "Мужчина",
                age:  "18-56",
                edu: "Полное высшее",
                comp: "7",
                rec: "Есть"
            },
            edit:false,
            data:[{
                id: "17ILP154",
                fio: "Курмашев Алмат Амантаевич",
                sex: "Мужчина",
                age:  28,
                city: "Астана",
                edu: "Хозяйственное управление",
                job: "Начальник отдела"

            },
                {
                    id: "17ILP154",
                    fio: "Сидоров Алмат Амантаевич",
                    sex: "Мужчина",
                    age:  56,
                    city: "Астана",
                    edu: "АО Железнодорожный вокзал Алматы",
                    job: "Начальник отдела"
                }
            ]

        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }
    toggleEdit(event){
      this.setState({

        //  searchData: sd,
          edit: !this.state.edit
      })
        //console.log("www"+document.getElementById("editId").value);
      /*  if(this.state.edit){
            var sd = {
                id: document.getElementById("editId").value,
                sex: document.getElementById("editSex").value,
                age:  document.getElementById("editAge").value,
                edu: document.getElementById("editEdu").value,
                comp: document.getElementById("editComp").value,
                rec: document.getElementById("editRec").value
            }
        }else{
            var sd =  this.state.searchData;
        }
        this.setState({

            searchData: sd,
            edit: !this.state.edit
        })*/
    }
    searchData(){
        var d=this.state.searchData;
      /*  if(this.state.edit){
            console.log("opiojijmk")
            return (
                <tr className="editData">
                    <td><input id = "editId" type = "text" defaultValue={d.id} style={{width: '20px'}} /></td>
                    <td><input id = "editSex" type = "text"defaultValue={d.sex} style={{width: '50px'}} /></td>
                    <td><input id = "editAge" type = "text"defaultValue={d.age} style={{width: '50px'}} /></td>
                    <td><input id = "editEdu" type = "text"defaultValue={d.edu} style={{width: '50px'}} /></td>
                    <td><input id = "editComp" type = "text"defaultValue={d.comp} style={{width: '50px'}} /></td>
                    <td><input id = "editRec" type = "text"defaultValue={d.rec} style={{width: '50px'}} /></td>
                    <td><img id = "editImg" width="35" height="35" onClick={this.toggleEdit} src="./src/static/images/logo.png"/></td>

                </tr>
            )
        }else{*/

            return(
                <tr className="editData">
                    <td>{d.id}</td>
                    <td>{d.sex}</td>
                    <td>{d.age}</td>
                    <td>{d.edu}</td>
                    <td>{d.comp}</td>
                    <td>{d.rec}</td>
                    <td><img id = "editImg" width="35" height="35" onClick={() => {store.update({showFilter : !store.state.showFilter})}} src="./src/static/images/Shape4.png"/></td>
                </tr>


            )
  //      }

    }

    render() {
        return (
            <div className="filterBody">
                <div className="mCont">
                    <div className="historyBar">
                        <p><Link to="/profile" style={{color: '#bcbcbc', textDecoration: 'none'}}>Главная > </Link>  </p><p id = "next">  <Link to="/profile/filter-result" style={{textDecoration: 'none'}}>Результат фильтра</Link></p>
                    </div>
                    <div className="SearchBar">
                        <p>Результат фильтра</p>
                        <div className="row searchBox">
                            <div className="col-md-1" style={{marginTop: '10px', paddingRight: '20px'}}>
                                <span className="glyphicon glyphicon-search"></span>
                            </div>
                            <div className="col-md-10 searchInput">
                                <input type = "text" placeholder="Поиск" />
                            </div>
                        </div>
                    </div>
                    <div className="tableWrapper" >
                        <table className = "tables">
                            <tr>

                                <th className="tHeader">Найдено кандидатов</th>
                                <th className="tHeader" >Пол</th>
                                <th className="tHeader">Возраст</th>
                                <th className="tHeader">Образование</th>
                                <th className="tHeader">Компетенция</th>
                                <th className="tHeader">Рекомендации</th>
                            </tr>
                            {this.searchData()}
                        </table>
                    </div>


                    <div className="table2">
                        <div className = "tables">
                            <div className="row">
                                <div className="col-md-1 tHeader">ID</div>
                                <div className="col-md-2 tHeader">ФИО</div>
                                <div className="col-md-1 tHeader">Пол</div>
                                <div className="col-md-1 tHeader">Возраст</div>
                                <div className="col-md-1 tHeader">Город</div>
                                <div className="col-md-2 tHeader">Образование</div>
                                <div className="col-md-2 tHeader">Должность</div>
                                <div className="col-md-1 tHeader"></div>
                            </div>

                            {this.state.data.map((m,i) => {
                                return (<Link to="/profile/anketa" style={{textDecoration: 'none'}}><div className="row tRow  ">

                                    <div className="col-md-1" style={{paddingLeft: '0px'}}>{m.id}</div>
                                    <div className="col-md-2" style={{paddingLeft: '0px'}}>{m.fio}</div>
                                    <div className="col-md-1" style={{paddingLeft: '0px'}}>{m.sex}</div>
                                    <div className="col-md-1" style={{paddingLeft: '0px'}}>{m.age}</div>
                                    <div className="col-md-1" style={{paddingLeft: '0px'}}>{m.city}</div>
                                    <div className="col-md-2" style={{paddingLeft: '0px'}}>{m.edu}</div>
                                    <div className="col-md-2" style={{paddingLeft: '0px'}}>{m.job}</div>
                                    <div className="col-md-1" style={{paddingLeft: '0px'}}><img src="./src/static/images/Print.png" width="20px"/></div>

                                </div></Link>)

                            })
                            }
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default FilterResult;
