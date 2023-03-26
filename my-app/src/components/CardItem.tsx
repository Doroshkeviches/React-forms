import React from 'react';

interface State2 {
    text: string,
    data: string,
    select: string,
  checkbox: {
    border: boolean,
    shadow: boolean,
  }
  color: string,
    file: string,
}

export default class CardItem extends React.Component<any> {
    render() {
        const { text, data, select, checkbox, color, file } = this.props.item
        const borderData = checkbox.border ? '3px solid black' : ''
        const shadowData = checkbox.shadow ? '0 14px 28px rgba(0,0,0,0.40)' : ''
        return (
            <div style={
                {
                    width: '40%',
                    backgroundColor: color,
                    border: borderData,
                    boxShadow: shadowData,
                    margin: '0 auto',
                    marginBottom: '10px',

                }}>
                <div>
                    <img style={{
                        width: '20%'
                    }} src={file} alt="" />
                </div>
                <div>{text}</div>
                <div>{data}</div>
                <div>{select}</div>
            </div>
        );
    }
};
