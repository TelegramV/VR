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

import __component_render from "./render";
import __component_diffProps from "./diffProps";

export type UpdateComponentProps = {
    nextProps?: any;
    nextState?: any;
};

function __component_update(component: any, props: UpdateComponentProps) {
    let {nextProps, nextState} = props;

    let shouldUpdate;

    let hasNextState = false;

    if (nextState) {
        hasNextState = true;
        nextState = {
            ...component.state,
            ...nextState
        };
    } else {
        nextState = component.state;
    }

    if (nextProps) {
        nextProps = {
            ...component.props,
            ...nextProps
        };
    } else {
        nextProps = component.props;
    }

    shouldUpdate = component.shouldComponentUpdate(nextProps, nextState);

    if (shouldUpdate === undefined) {
        const diffProps = __component_diffProps(component, nextProps); // there is a better and faster way to do this, but no time to implement
        shouldUpdate = hasNextState || diffProps !== false;
    }

    shouldUpdate = shouldUpdate !== false;

    if (shouldUpdate) {
        if (nextProps) {
            Object.assign(component.props, nextProps)
        }

        if (nextState) {
            Object.assign(component.state, nextState)
        }

        component.__.isUpdatingItSelf = true;
        component.$el = vrdom_patch(component.$el, __component_render(component));
        component.__.isUpdatingItSelf = false;

        component.componentDidUpdate(null, null); // todo: pass previous data
    }
}

export default __component_update;