import React from 'react';
import { State } from '../App';

export default class ListItems extends React.Component<{handle: (a: string, b: string)=> void, state: State}> {
    render() {
        const { handle, state } = this.props
        return (
            <select
                onChange={e => {
                    handle(e.target.value, 'select')
                }}
                value={state.select}
            >
                <option value='Пункт 1'>Пункт 1</option>
                <option value='Пункт 2'>Пункт 2</option>
            </select>
        );
    }
};
