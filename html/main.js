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

// import {StatefulComponent} from "../lib";
// import VRDOM from "../lib/dom"
// import {$c, a, article, body, div, h1, section} from "../lib/dom/elements"
// import vrdom_mount from "../lib/dom/mount"
// import VR from "../lib/VR"

import VRDOM from "../src/VRDOM/VRDOM";
import VComponent from "../src/VRDOM/component/VComponent";

VComponent

const button = VRDOM.jsx("button", {onClick: () => console.log("clicked")}, "click");

VRDOM.mount(button, "#app");

// const $app = document.getElementById("app");
// const app = new VR();
//
// class Time extends StatefulComponent {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             time: new Date()
//         };
//     }
//
//     render(state, props) {
//         return h1(state.time.toString());
//     }
//
//     componentDidMount() {
//         this.withInterval(() => {
//             this.setState({
//                 time: new Date()
//             });
//         }, 1000);
//     }
// }
//
// const $h1 = VRDOM.render(h1("Title"));
// const time = $c(Time);
//
// console.log(time);
// let dom
// console.log(dom =
//     body({class: 'theme-dark', showIf: true},
//         div({class: 'header'},
//             a({class: 'header-link', href: '/'}, 'Telegram V')
//         ),
//         article({class: 'post'},
//             div({class: 'title'}, 'Telegram lost all users..'),
//             section({class: 'content'}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
//         ),
//     ),
// );
//
// // vrdom_mount(time, $app);
// vrdom_mount(dom, document.body)