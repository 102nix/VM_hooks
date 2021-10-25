import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {

    const [startValue, setStartValue] = useState(true)

    const blockRef = useRef()

    const handleChange = () => {
        if (startValue ) {
            setStartValue(prevState => !prevState)
            blockRef.current.innerText = 'text'
            blockRef.current.style.width = '80px'
            blockRef.current.style.height = '150px'
        } else {
            setStartValue(true)
            blockRef.current.innerText = 'Блок'
            blockRef.current.style.width = '60px'
            blockRef.current.style.height = '40px'
        }
    }

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменисят содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={blockRef}
            >
                <small>Блок</small>
            </div>
            <button 
                className="btn btn-primary mt-3"
                onClick={handleChange}
            >
                {startValue ? 'Изменить' : 'Сбросить'}
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
