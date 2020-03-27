# VR
Virtual DOM and Components with JSX support and Awesome DOM builder.

## Installation
NPM:
```shell script
npm install @telegramv/vr
```

Yarn:
```shell script
yarn add @telegramv/vr
```

## Example
JSX:
> `VRDOM.createElement` is by default JSX-compatible.
```jsx harmony
import VRDOM from "@telegramv/vr/dom";
import {StatelessComponent, StatefulComponent} from "@telegramv/vr";

// Template
const Button = ({onClick}, content) => {
    return <button onClick={onClick}>{content}</button>;
}

// Component
class Title extends StatelessComponent {
    render(state, props) {
        return <h1>{props.title}</h1>;
    }
}

Title.defaultProps = {
    title: "Click `Increment`"
}

// Component
class Counter extends StatefulComponent {
    state = {
        count: 0,
    };

    render(state) {
        return (
            <div>
                <Title title={state.count}/>

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

No JSX (Awesome DOM):
```javascript

import VRDOM from "@telegramv/vr/dom";
import {h1, div, button, $c} from "@telegramv/vr/dom/elements";
import {StatelessComponent, StatefulComponent} from "@telegramv/vr";

// Template
const Button = ({onClick}, content) => {
    return button({onClick: onClick}, content);
}

// Component
class Title extends StatelessComponent {
    render(state, props) {
        return h1(props.title);
    }
}

Title.defaultProps = {
    title: "Click `Increment`"
}

// Component
class Counter extends StatefulComponent {
    state = {
        count: 0,
    };

    render(state) {
        return div(
            $c(Title, {title: state.count}),
            $c(Button, {onClick: () => this.setState({
                count: this.state.count + 1
            })}, 'Increment')
        );
    }
}

const $element = VRDOM.render(t(Counter));
console.log($element);
```