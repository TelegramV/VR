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

export type ForceUpdateComponentProps = {};

function __component_forceUpdate(component: any, props?: ForceUpdateComponentProps) {
    component.__.isUpdatingItSelf = true;
    component.$el = vrdom_patch(component.$el, __component_render(component));
    component.__.isUpdatingItSelf = false;

    component.componentDidUpdate(component.state, component.props); // todo: pass previous data
}

export default __component_forceUpdate;