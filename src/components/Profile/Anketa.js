import React from 'react';

class Anketa extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div className="filterBody">
                    <div className="mCont" style = {{paddingBottom: "20px"}}>
                        <div className="historyBar">
                            <p>Главная >  </p><p>&nbsp;Результат фильтра > </p><p id = "next">Анкета</p>
                        </div>
                        <div className="SearchBar">
                            <p>Анкета сотрудника </p>
                            <img src="./src/static/images/Print.png" width="22px" height="20px"/>
                        </div>
                    </div>
                </div>

                <div className="container" style={{width: '100%', marginTop: '10px'}}>
                    <div className="row">
                        <div className="col-md-4" style={{padding: 0}}>
                            <div className="basic">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img className = "profilePic" src="./src/static/images/layer-1.png"/>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="text">
                                            <p className="name">
                                                Сансызбай Бауыржан Асланулы
                                            </p>
                                            <span className="grey">ID:</span><span className="dark"> 16AAF345</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="divider"></div>

                                <div className="row">
                                    <div className="infoBox">
                                        <p><span className="grey">Дата устройства: </span><span className="dark">22.02.2016</span></p>
                                        <p><span className="grey">Место работы: </span><span className="dark">АО Железнодорожный вокзал</span></p>
                                        <p><span className="grey">Город: </span><span className="dark">Алматы</span></p>
                                        <p><span className="grey">Должность: </span><span className="dark">Начальник филиала</span></p>
                                        <p><span className="grey">Уровень компетенции: </span><span className="dark">7</span></p>
                                    </div>
                                </div>

                                <div className="divider"></div>

                                <div className="row">
                                    <div className="infoBox">
                                        <p><span className="grey">Пол: </span><span className="dark">Мужской</span></p>
                                        <p><span className="grey">Возраст: </span><span className="dark">48</span></p>
                                        <p><span className="grey">Дата рождения: </span><span className="dark">16.06.1968</span></p>
                                    </div>
                                </div>

                                <div className="divider"></div>
                                <div className="row">
                                    <div className="infoBox">
                                        <p><span className="grey">E-mail: </span><span className="dark">s.baurzhan_almaty@temirzholy.kz</span></p>
                                        <p><span className="grey">Телефон: </span><span className="dark">8 (702) 430 20 21</span></p>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="short">
                                <p id = 'title'>
                                    Краткая информация
                                </p>
                                <div className="divider"></div>

                                <div className="row">
                                    <div className="infoBox">
                                        <p><span className="grey">Место рождения: </span><span className="dark">г. Алматы</span></p>
                                        <p><span className="grey">Национальность: </span><span className="dark">Казах</span></p>
                                        <p><span className="grey">Уровень образования: </span><span className="dark">Магистр экономических наук(MBA)</span></p>
                                        <p><span className="grey">Выезд в командировки: </span><span className="dark">Готов</span></p>
                                        <p><span className="grey">Учебное заведение: </span><span className="dark">KIMEP</span></p>
                                        <p><span className="grey">Специальность: </span><span className="dark">Международные отношения</span></p>
                                        <p><span className="grey">Знание языков: </span><span className="dark">Казахский, Русский, Английский</span></p>
                                        <p><span className="grey">Семейное положение: </span><span className="dark">Женат</span></p>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4" style={{padding: 0}}>
                            <div className="resume">
                                <p id = 'title'>
                                    Резюме
                                </p>
                                <div className="divider"></div>

                                <div className="row">
                                    <div className="infoBox">
                                        <p><span className="grey">Место проживания: </span><span className="dark">Алматы</span></p>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="divider"></div>

                                <div className="row">
                                    <div className="infoBox">
                                        <p className="subTitle">Образование</p>
                                        <p><span className="grey">Учебное заведение: </span><span className="dark">KIMEP, г.Алматы</span></p>
                                        <p><span className="grey">Год завершения: </span><span className="dark">2002</span></p>
                                        <p><span className="grey">Факультет: </span><span className="dark">Международные отношения</span></p>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="row">
                                    <div className="infoBox">
                                        <p className="subTitle">Опыт работы</p>
                                        <p><span className="grey">Место работы: </span><span className="dark">АО “Қазақстан Темір Жолы”</span></p>
                                        <p><span className="grey">Позиция: </span><span className="dark">Заместитель начальника отдела снабжения</span></p>
                                        <p><span className="grey">Период: </span><span className="dark">с 2010-01-01 по 2016-02-01</span></p>
                                        <p><span className="grey">Место работы: </span><span className="dark">АО “Қазақстан Темір Жолы”</span></p>
                                        <p><span className="grey">Позиция: </span><span className="dark">Заместитель начальника отдела снабжения</span></p>
                                        <p><span className="grey">Период: </span><span className="dark">с 2010-01-01 по 2016-02-01</span></p>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Anketa;
