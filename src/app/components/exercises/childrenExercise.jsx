import React, { useState, useRef } from "react";
import CollapseWrapper from "../common/collapse";

const ChildrenExercise = () => {

    const BlockComponent = ({ children }) => {

        const [flag, setFlag] = useState(true)
        
        const blockRef = useRef()

        const handleChange = () => {
            if (flag) {
                setFlag(prevSTate => !prevSTate)
                blockRef.current.innerText = 'text'
                blockRef.current.style.width = '40px'
                blockRef.current.style.height = '100px'
            } else {
                setFlag(true)
                blockRef.current.innerText = 'У вас есть блок'
                blockRef.current.style.width = '260px'
                blockRef.current.style.height = '140px'
            }
        }
    
        return React.Children.map(children, (child) => {
      
            if (child.type === "button") {
                return React.cloneElement( child, { onClick: handleChange } ) 
            }
            else if (child.type === "div")
            return React.cloneElement( child, { ref: blockRef } ) 
        })
    }

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменисят содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 100 и 40 соответственно</li>
            </ul>
            <BlockComponent>
                <div
                    className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                    style={{
                        height: 140,
                        width: 260,
                        color: "white"
                    }}
                >
                    У вас есть блок
                </div>
                <button 
                    className="btn btn-primary mt-3"
                >
                    Кнопка
                </button>
            </BlockComponent>
        </CollapseWrapper>
    );
};

export default ChildrenExercise;
