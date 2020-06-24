import React, { Component, Fragment } from 'react';
import './styles.scss';

class TextFieldResuable extends Component {
    

    render() {
        const { label, placeholder, type, isHide, icon, disabled, icon2, value, ambilValue, name, standarBasic } = this.props;

        return (
            <div>
                {/* {icon2 && <h1>ICON</h1>} */}
                <h4 style={{float:'left'}}>{isHide ? '' : label}</h4>
                <input placeholder={placeholder} type={type} disabled={disabled}  value={value} onChange={ambilValue} name={name} standarBasic={standarBasic} />
                {icon && <h1>ICON</h1>}
                {/* <button>Simpan</button> */}
            </div>
        )
    }
}

export default TextFieldResuable;