import React from 'react';
import InputRange from 'react-input-range';
import {
    Link
} from 'react-router-dom';
import {store} from '../../store';

class FilterSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          value: 1,
          value2: 18,
          myClass: 'filInp',
          myClass2: 'filInp',
          myClass3: 'filInp',
          myClass4: 'filInp'};
          this.changeClass = this.changeClass.bind(this);
          this.changeClass2 = this.changeClass2.bind(this);
          this.changeRange = this.changeRange.bind(this);
    }

    changeClass(e){
      if(e.target.id == 'man'){
        this.setState({
          myClass: 'filInpClicked',
          myClass2: 'filInp'
        })
      } else if(e.target.id == 'woman'){
        this.setState({
          myClass: 'filInp',
          myClass2: 'filInpClicked'
        })
      }

    }
    changeClass2(e){
      if(e.target.id == 'yes'){
        this.setState({
          myClass3: 'filInpClicked',
          myClass4: 'filInp'
        })
      } else if(e.target.id == 'no'){
        this.setState({
          myClass3: 'filInp',
          myClass4: 'filInpClicked'
        })
      }

    }
    changeRange(e){
      if(e.target.id == 'range1'){
        this.setState({
          value: e.target.value
        })
      } else if(e.target.id == 'range2'){
        this.setState({
          value2: e.target.value
        })
      }

    }

    render() {
        return (
            <div className="container filter-settings">
                <div className="row" style={{padding:'19px', paddingBottom: '0px'}}>
                    <p id = "titleSet">Настройка фильтра</p>
                    <p className="text">Задайте параметры для поиска идеальных кандидатов.</p>
                </div>

                <div className="row" style={{padding:'19px', paddingBottom: '0px'}}>
                    <p className="text">Пол</p>
                    <div className="row">
                        <div className="col-md-4" ><input style={{width:'100px'}} className={this.state.myClass} type="submit" onClick={this.changeClass} id="man" value="Мужчина"></input></div>
                        <div className="col-md-4" ><input style={{width:'100px'}} className={this.state.myClass2}  type="submit" value="Женщина" onClick={this.changeClass} id="woman"></input></div>
                    </div>
                </div>

                <div className="row" style={{padding:'19px', paddingBottom: '0px'}}>
                    <p className="text">Возраст</p>
                    <div className="row" style={{padding:'19px', paddingBottom: '0px'}}>
                      <p className="text-right">{this.state.value2}</p>
                        <input type="range" value={this.state.value2} id="range2" onChange={this.changeRange} min="18" max="65"></input>
                    </div>
                </div>

                <div className="row" style={{padding:'19px', paddingBottom: '0px'}}>
                    <p className="text">Образование</p>
                    <div className="row" style={{padding:'19px', paddingBottom: '0px'}}>
                        <select>
                            <option>Без образования</option>
                            <option>ПТУ</option>
                            <option>Гарвард</option>
                        </select>
                    </div>
                </div>

                <div className="row" style={{padding:'19px', paddingBottom: '0px'}}>
                    <p className="text">Специальность</p>
                    <div className="row" style={{padding:'19px', paddingBottom: '0px'}}>
                        <input className="in" type="text" placeholder="Начните вводить текст"></input>
                    </div>
                </div>

                <div className="row" style={{padding:'19px', paddingBottom: '0px'}}>
                    <p className="text">Уровень компетенции</p>
                    <div className="row" style={{padding:'19px', paddingBottom: '0px'}}>
                        <p className="text-right">{this.state.value}</p>
                        <input type="range" value={this.state.value} id="range1" onChange={this.changeRange}></input>
                    </div>
                </div>
                <div className="row" style={{padding:'19px', paddingBottom: '0px'}}>
                    <p className="text">Рекомендации</p>
                    <div className="row">
                        <div className="col-md-3"><input style={{width:'70px'}} className={this.state.myClass3} onClick={this.changeClass2} id="yes"  type="submit" value="Есть"></input></div>
                        <div className="col-md-3"><input style={{width:'136px', paddingLeft:'5px'}} className={this.state.myClass4} onClick={this.changeClass2} id="no"  type="submit" value="Необязательно"></input></div>
                    </div>
                </div>
                <div className="row" style={{padding:'19px', paddingBottom: '0px'}}>
                    <Link to="/profile/filter-result" style={{textDecoration: 'none'}}><input style={{width: '311px'}} className="filInp" type="submit" value="Применить фильтр" onClick={() => {store.update({showFilter : !store.state.showFilter})}}></input></Link>
                </div>

            </div>
        );
    }
}

export default FilterSettings;
