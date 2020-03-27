# VR
Virtual DOM and Components.

## Installation
NPM:
```shell script
npm install @telegramv/vr
```

Yarn:
```shell script
yarn add @telegramv/vr
```

## Usage
Example:
```jsx harmony
import VRDOM from "@telegramv/vr/dom";
import StatelessComponent from "@telegramv/vr/StatelessComponent";
import StatefulComponent from "@telegramv/vr/StatefulComponent";

const Button = ({onClick}, content) => {
    return <button onClick={onClick}>content</button>
}

class Title extends StatelessComponent {
    render(state, props) {
        return <h1>{props.value}</h1>
    }
}

class Counter extends StatefulComponent {
    state = {
        count: 0
    }

    render(state) {
        return (
            <div>
                <Title value={state.count}/>

                <Button onClick={() => this.setState({
                    count: this.state.count + 1
                })}>Increment</Button>
            </div>
        );
    }
}

const $element = VRDOM.render(<Counter/>);
console.log($element);
```