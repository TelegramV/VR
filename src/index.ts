/*
 * Telegram V
 * Copyright (C) 2020 Davyd Kohut
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {$c, a, article, body, button, div, h1, head, html, link, section, span, title} from "./dom/elements";
import StatefulComponent from "./StatefulComponent";

if (!Map || !Set) {
    throw new Error("Map and Set are required.");
}

// @ts-ignore
if (!Array.prototype.flat) {
    throw new Error("Array.prototype.flat() is required.");
}

// @ts-ignore
if (!Object.entries) {
    throw new Error("Object.entries() is required.");
}

const list = ["a", 1, "b"];

const dom = html(
    list.map(v => div(v)),
    head({renderIf: false},
        title('Telegram V'),
        link({rel: 'stylesheet', href: '/styles.css'}),
    ),
    body({class: 'theme-dark', showIf: true},
        div({class: 'header'},
            a({class: 'header-link', href: '/'}, 'Telegram V')
        ),
        article({class: 'post'},
            div({class: 'title'}, 'Telegram lost all users..'),
            section({class: 'content'}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
        ),
    ),
);

type CounterState = {
    count: number;
};

type CounterProps = {
    text: string;
};

class Counter extends StatefulComponent<CounterState, CounterProps> {
    state = {
        count: 0
    };

    render(state: CounterState, props: CounterProps) {
        return (
            div(
                h1(props.text),
                span(state.count),
                button({
                    onClick: () => this.setState({
                        count: state.count + 1
                    })
                }, 'Increment')
            )
        );
    }
}

type TimeState = {
    time: Date;
}

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
        }, 1000);
    }
}

console.log($c(Counter));