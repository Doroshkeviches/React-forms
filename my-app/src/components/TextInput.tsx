import React from 'react';
import { State } from '../App';

export default class TextInput extends React.Component<{handle: (a: string, b: string)=> void, state: State}> {
    render() {
        const {handle, state} = this.props
        return (
            <div className='TextInput'>
                <input type="text"
                    placeholder='Write there'
                    value={(state as any).text}
                    onChange={ (e) => {
                        handle((e.target.value as string), 'text')
                        }}/>
                     
            </div>
        );
    }
};

