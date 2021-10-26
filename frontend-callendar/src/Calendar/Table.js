import React, {useEffect, useState, useCallback} from 'react'
import './Table.css';

const months = { // список месяцов
            0: "January",
            1: "February",
            2: "March",
            3: "April",
            4: "May",
            5: "June",
            6 :"July",
            7 :"August",
            8 :"September",
            9 :"October",
            10 :"November",
            11 :"December",
        };

function Table(){

    const [prevMonths, setPrevMonth] = useState([])
    const [currMonths, setCurrMonths] = useState([])
    const [nextMonths, setNextMonth] = useState([])
    const [date, setDate] = useState(new Date()) // текущая дата
    const [currMonth, setCurrMonth] = useState('')

    const getPrevDays = () =>{ 

        const prevlastDayIndex = new Date( // номер в недели последний день месяца
            date.getFullYear(),
            date.getMonth(),
            0
        ).getDay();

        const prevLastDay = new Date( // предыдущий последний день
            date.getFullYear(),
            date.getMonth(),
            0
        ).getDate();

        let copyPrevDays = [];
        for (let x = prevlastDayIndex; x > 0; x--) { // получение предыдущих дней месяца
            copyPrevDays.push(prevLastDay - x + 1)
        }
        setPrevMonth(copyPrevDays)
    }

    const getCurrDays = () =>{
        // получение дней этого месяца

        const lastDay = new Date( // последний день месяца
            date.getFullYear(),
            date.getMonth()+1,
            0
        ).getDate();

        let copyCurrDays = [];
        for (let i = 1; i <= lastDay; i++) {
            if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                copyCurrDays.push({
                                    day: i,
                                    class: "today"
                                  })
            } 
            else {
                copyCurrDays.push({
                                    day: i,
                                    class: "none"
                                  })
            }
        }
        setCurrMonths(copyCurrDays)
    }

    const getNextDays = () =>{
        // получение следующих первых дней

        const lastDayIndex = new Date( // номер последнего дня в месяце в недели ( 0- воскресенье, 1-понедельник, 6 - суббота)
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDay();


        const nextDays = 7 - lastDayIndex;

        let copyNextDays = []

        for (let j = 1; j <= nextDays; j++) {
            copyNextDays.push(j)
        }

        setNextMonth(copyNextDays)
    }

    

    const date_p = useCallback( // ref дата
        node => {
            if (node !== null) {
                node.innerHTML = new Date().toDateString()
                setCurrMonth(months[new Date().getMonth()])
            }
        },
        [],
    )
    const monthDays = useCallback( // ref дни
        node => {
            if (node !== null) {
                console.log(node)
            }
        },
        [],
    )


    const clickPrev = () => {
        date.setMonth(date.getMonth() -1)
        setCurrMonth(months[date.getMonth()])
    };

    const clickNext= () => {
        date.setMonth(date.getMonth()+1)

        setCurrMonth(months[date.getMonth()])
    };
    

    useEffect(()=>{
        getPrevDays();
        getCurrDays();
        getNextDays();
    }, [currMonth])
    

    return (
        <div className="container">
            <div className="calendar">
                <div className="month">
                    <h1 className="prev" onClick={clickPrev}>&larr;</h1>	
                    <div className="date">
                        <h1>{currMonth}</h1>
                        <p ref={date_p}>{new Date().toDateString()}</p>
                    </div>
                    <h1 className="next" onClick={clickNext}>&rarr;</h1>
                </div>
                <div className="weekdays">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                </div>
                <div className="days" ref={monthDays}>
                    {prevMonths.map(p => (
                        <div className="prev-date">{p}</div>
                    ))}
                    {currMonths.map(d => (
                        <div className={d.class}>{d.day}</div>
                    ))}
                    {nextMonths.map(n =>(
                        <div className="next-date">{n}</div>
                    ))}

                </div>
            </div>
        </div>


    )

}

export default Table;