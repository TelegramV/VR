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

export type ComponentProps<P> = {
    props: P;
};

/**
 * Common Component Class.
 */
class Component<P> {
    readonly __: any = {
        intervals: new Set<number>(),
        timeouts: new Set<number>(),
    };

    readonly $el: HTMLElement | undefined;

    readonly props: P;

    constructor(props: ComponentProps<P>) {
        // @ts-ignore
        this.props = props.props || {};
    }

    withInterval(handler: TimerHandler, timeout?: number, ...args: any[]) {
        this.__.intervals.add(setInterval(handler, timeout, ...args));
    }

    withTimeout(handler: TimerHandler, timeout?: number, ...args: any[]) {
        this.__.timeouts.add(setTimeout(handler, timeout, ...args));
    }

    clearIntervals() {
        // @ts-ignore
        this.__.intervals.forEach(handle => clearInterval(handle));
        this.__.intervals.clear();
    }

    clearTimeouts() {
        // @ts-ignore
        this.__.timeouts.forEach(handle => clearTimeout(handle));
        this.__.timeouts.clear();
    }
}

export default Component;