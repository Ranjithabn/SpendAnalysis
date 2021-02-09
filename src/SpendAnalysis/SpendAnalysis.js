import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Chart from './Chart'
import Budget from './Budget'
import './SpendAnalysis.css'
import { useState, useEffect } from 'react'
const SpendAnalysis = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September"
        , "October", "November", "December"];
    const [index, setIndex] = useState(0)
    const [month, setMonth] = useState(months[index]);
    const [prevmonth, setPrevMonth] = useState(false);
    const [nextmonth, setNextMonth] = useState(false);
    useEffect(() => {
        if (prevmonth) {
            setIndex(index - 1);
            setMonth(months[index]);
            setPrevMonth(false);
        }
        if (nextmonth) {
            setIndex(index + 1);
            setMonth(months[index]);
            setNextMonth(false);
        }
    }, [month])

    return (
        <div className="container">
            <div className="topnav">
                <div className="leftslider arrow">
                    <FaAngleLeft onClick={() => setPrevMonth(true)} />
                </div>
                <div className="middle">
                    <h2>SPEND ANALYSIS</h2>
                    <h1>{month}​​​​​​​​</h1>
                </div>
                <div className="rightslider arrow">
                    <FaAngleRight onClick={() => setNextMonth(true)} />
                </div>
            </div>
            <Chart month={month} />
            <Budget />
        </div>
    )
}

export default SpendAnalysis