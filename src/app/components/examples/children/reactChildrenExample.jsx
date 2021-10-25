import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider"
import TextField from "../../common/form/textField";
import SmallTitle from "../../common/typografy/smallTitle";
import PropTypes from 'prop-types'

const FormComponent = ({ children }) => {
    const [data, setdata] = useState({})
    const handleChange = (target) => {
        setdata(prevState => ({...prevState, [target.name]: target.value}))
    }

    return React.Children.map(children, (child) => {
        const config = {...child.props, onChange:handleChange, value: data[child.props.name]}
        React.cloneElement(child, config)
        return child
    })
}
FormComponent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.oneOf(PropTypes.node), PropTypes.node])
}
const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider />
            <FormComponent>
                <TextField name="email" label="email" />
                {/* <TextField name="password" label="Пароль" type="password" /> */}
            </FormComponent>
        </CardWrapper>
    );
};

export default ReactChildrenExample;
