import React from 'react';
import { State } from '../App';

export default class DataInput extends React.Component<{handle: (a: string, b: string)=> void, state: State}> {
    render() {
        const {handle,state} = this.props
        return (
            <div className='TextInput'>
                <input type="date"
                    placeholder='Write there'
                    value={state.data}
                    onChange={(e) => { handle(e.target.value, 'data') }}/>
            </div>
        );
    }
};
