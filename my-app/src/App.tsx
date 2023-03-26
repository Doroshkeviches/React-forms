import './App.css';
import React from 'react';
import TextInput from './components/TextInput';
import DataInput from './components/DataInput';
import ListItems from './components/ListItems';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import File from './components/File';
import CardItem from './components/CardItem';
export interface  State {
  text: string,
    data: string,
    select: string,
  checkbox: {
    border: boolean,
    shadow: boolean,
  }
  color: string,
    file: string,
    listItems : any[]
}

class App extends React.Component {


  state = {
    text: '',
    data: '',
    select: 'Пункт 1',
    checkbox: {
      border: false,
      shadow: false,
    },
    color: '',
    file: '',
    listItems: []
  }

  handleInput = (value : string, string : string) => {
    if (string === 'data') {
      this.setState({
        data: value
      })
    } else if (string === 'text') {
      this.setState({
        text: value
      })
    } else if (string === 'select') {
      this.setState({
        select: value
      })
    } else if (string === 'radio') {
      this.setState((state) => {
        return {
          color: value
        }
      })
    } else if (string === 'file') {
      this.setState((state) => {
        return {
          file: value
        }
      })
    }

  }

  handleCheckbox = (e : React.ChangeEvent<HTMLInputElement>) => {
    if ((e.target as HTMLInputElement).checked) {
      if ((e.target as HTMLInputElement).value === 'border') {
        this.setState((state) => {
          return {
            checkbox: {
              ...(state as State).checkbox,
              border: true
            }
          }
        })
      } else {
        this.setState((state) => {
          return {
            checkbox: {
              ...(state as State).checkbox,
              shadow: true
            }
          }
        })
      }
    } else {
      if ((e.target as HTMLInputElement).value === 'border') {
        this.setState((state) => {
          return {
            checkbox: {
              ...(state as State).checkbox,
              border: '',
            }
          }
        })
      } else {
        this.setState((state) => {
          return {
            checkbox: {
              ...(state as State).checkbox,
              shadow: '',
            }
          }
        })
      }
    }

  }
  resetState = () => {
    this.setState((state) => {
      return {
        text: '',
        data: '',
        select: 'Пункт 1',
        checkbox: {
          border: false,
          shadow: false,
        },
        color: '',
        file: '',
      }
    })
  }
  handleButton() {
    const obj = {

    }

    for (let value in this.state) {
      if (value !== 'listItems') {
        if (!(this.state as any)[value]) {
          if (value === 'checkbox') {
            if (this.state[value]['border'] && this.state[value]['shadow']) {
              return false
            }
          } else {
            return false
          }
        }
        (obj as any)[value] = (this.state as any)[value]
      }
    }

    const array = [...this.state.listItems, obj]
    this.setState((state) => {
      return {
        listItems: array
      }
    })

    this.resetState()

  }
 

  render() {
    let count = 0
    return (
      <div className="App">
        <TextInput handle={this.handleInput} state={this.state}/>
        <DataInput handle={this.handleInput} state={this.state}/>
        <ListItems handle={this.handleInput} state={this.state}/>
        <Checkbox handle={this.handleCheckbox} state={this.state}/>
        <Radio handle={this.handleInput} state={this.state}/>
        <File handle={this.handleInput} state={this.state}/>
        <button
          onClick={() => this.handleButton()}
        >Check</button>
        {this.state.listItems.map((item) => {
          return (
            <CardItem item={item} key={count++}/>
          )
        })}

      </div>
    );
  }
}

export default App;
