import React from 'react';
import { State } from '../App';

export default class Checkbox extends React.Component<{handle: (e: React.ChangeEvent<HTMLInputElement>)=> void, state: State}> {
    render() {
        const { handle, state } = this.props
        return (
            <div>
                <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handle(e)}
                    type="checkbox" name="border" value='border'
                    checked={state.checkbox.border}></input>
                <label htmlFor="border">border</label>
                <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handle(e)}
                    type="checkbox" name="shadow" value='shadow'
                    checked={state.checkbox.shadow}></input>
                <label htmlFor="shadow">shadow</label>
            </div>
        );
    }
};
