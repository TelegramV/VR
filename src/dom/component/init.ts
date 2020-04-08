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

function __component_init(component: any) {
    if (!component.__.initialized) {
        component.init = component.init.bind(component);
        component.render = component.render.bind(component);
        component.componentDidMount = component.componentDidMount.bind(component);
        component.shouldComponentUpdate = component.shouldComponentUpdate.bind(component);
        component.componentDidUpdate = component.componentDidUpdate.bind(component);
        component.setState = component.setState.bind(component);
        component.forceUpdate = component.forceUpdate.bind(component);

        component.withInterval = component.withInterval.bind(component);
        component.withTimeout = component.withTimeout.bind(component);
        component.clearIntervals = component.clearIntervals.bind(component);
        component.clearTimeouts = component.clearTimeouts.bind(component);

        component.__.initialized = true;
    } else {
        console.error("BUG: component is already initialized!")
    }
}

export default __component_init;