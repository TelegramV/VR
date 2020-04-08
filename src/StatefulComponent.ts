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

import AbstractComponent, {ComponentProps} from "./AbstractComponent";

export type StatefulComponentProps<P> = ComponentProps<P>;

class StatefulComponent<S = any, P = any> extends AbstractComponent<P> {
    readonly state: S;

    constructor(props: StatefulComponentProps<P>) {
        super(props);

        // @ts-ignore
        this.state = {};
    }

    render(state: S, props: P) {
    }

    componentDidMount() {
    }

    componentDidUpdate(state: S, props: P) {
    }

    shouldComponentUpdate(nextState: S, nextProps: P): boolean | null {
        return null;
    }

    setState(state: any) {
        if (typeof state === "function") {
            //
        } else {
            //
        }
    }
}

export default StatefulComponent;