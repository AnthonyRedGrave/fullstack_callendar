import React from 'react'

function Diary(){

    return(
            <div className="diary">
                <div className="month">
                    <div className="date">
                        <h1>ВЫБРАННАЯ ДАТА</h1>
                    </div>
                    <div className="countTasks">
                        <h4>СКОЛЬКО ДЕЛ</h4>
                    </div>
                </div>
                <div className="tasks_fields">
                    <div>Время</div>
                    <div>Задание</div>
                    <div>Выполнено</div>
                </div>
                <hr/>
                <div className="task">
                    <div>16:40-17:00</div>
                    <div>Выполнить домашнее задание</div>
                    <div>Выполнено</div>
                </div>
                <div className="task">
                    <div>16:40-17:00</div>
                    <div>Прочитать книгу</div>
                    <div>Выполнено</div>
                </div>
                <div className="task">
                    <div>16:40-17:00</div>
                    <div>Прочитать книгу</div>
                    <div>Выполнено</div>
                </div>
                    <form className="task-form">
                        <div className="timePeacker">
                            <input value=""/>
                            <input value=""/>
                        </div>
                        <div className="inputTask">
                            <textarea rows="4" cols="45" name="text"></textarea>
                        </div>
                        
                        <button type="submit">Создать</button>
                    </form>
                
            </div>
    )
}

export default Diary;