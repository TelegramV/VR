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

// AbstractComponent
class Title extends StatelessComponent {
    render(props) {
        return <h1>{props.title}</h1>;
    }
}

Title.defaultProps = {
    title: "Click `Increment`"
};

// AbstractComponent
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

// AbstractComponent
class Title extends StatelessComponent {
    render(props) {
        return h1(props.title);
    }
}

Title.defaultProps = {
    title: "Click `Increment`"
};

// AbstractComponent
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

const $element = VRDOM.render($c(Counter));
console.log($element);
```

TypeScript:
```typescript
import VRDOM from "@telegramv/vr/dom";
import {h1, $c} from "@telegramv/vr/dom/elements";
import {StatefulComponent} from "@telegramv/vr";

type TimeState = {
    time: Date;
};

class Time extends StatefulComponent<TimeState> {
    state = {
        time: new Date()
    };

    render(state: TimeState, props: any) {
        return h1(state.time.toString());
    }

    componentDidMount() {
        this.withInterval(() => {
            this.setState({
                time: new Date()
            });
        }, 500);
    }
}

VRDOM.mount($c(Time), "#app");
```