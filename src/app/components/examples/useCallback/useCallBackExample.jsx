import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});


    const withoutCallback = useRef(0);

    const withCallback = useRef(0);

    const handleChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }));
    };

    //without Callback:
    const validateWithoutCallback = (data) => {
        console.log(data);
    }
    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback])

    //with Callback:
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []); 
        
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withoutCallback: {withoutCallback.current}</p>
            <p>Render withCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">Email</label>
            <input onChange={handleChange} value={data.email || ""} type="email" className="form-control" name="email" id="email"/>
        </CardWrapper>
    );
};

export default UseCallBackExample;
