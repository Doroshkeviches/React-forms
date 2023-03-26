import React from 'react';
import { State } from '../App';

export default class Radio extends React.Component<{handle: (a: string, b: string)=> void, state: State}> {
    render() {
        let count =100
        const colors = ['red', 'green', 'white']
        const { handle, state } = this.props
        return (
            <div>
                {colors.map((item) => {
                    return (
                        <div key={count++}>
                            <input
                                onChange={(e) => {
                                    handle(e.target.value, 'radio')
                                }}
                                type="radio" value={item} name='color'
                                checked={state.color === item ? true : false} />
                            <label htmlFor={item}>{item}</label>
                        </div>
                    )
                })}
            </div>
        );
    }
};
