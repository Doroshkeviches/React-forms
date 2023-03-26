import { Component, createRef } from "react";
import { State } from "../App";

export default class File extends Component<{handle: (a: string, b: string)=> void, state: State}> {
    inputFile = createRef<HTMLInputElement>()
    
    render() {
        const { handle, state } = this.props
        if(state.file === '' && this.inputFile.current) {
            
            (this.inputFile.current as HTMLInputElement).value = '';
        }
        
        return (
            <div>
                <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const file = ((e.target as HTMLInputElement).files as any)[0]
                        const url = URL.createObjectURL(file)
                        handle(url, 'file')
                    }
                    }
                    name="myFile"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    ref={this.inputFile} />
                <label htmlFor="myFile">PNG JPG JPEG files</label>
            </div>
        );
    }
};
