/*
 * Copyright 2020 Telegram V authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */


// types

// export type AESubscribe = {
//     // if no resolve, then forceUpdate will be used instead
//     on(type: string, resolve?): AESubscribe
// }
//
// export type AECondition = AESubscribe | {
//     /**
//      * @deprecated use `only` instead
//      */
//     condition(condition): AESubscribe,
//     only(callback): AESubscribe,
// }
//
// export type AE = {
//     bus(bus): AECondition
// }


// functions

export function __component_registerAppEvents(component) {
    return {
        bus: (bus) => registerAppEvents_bus(component, bus)
    }
}

function registerAppEvents_bus(component, bus) {
    return {
        condition: (condition) => registerAppEvents_bus_condition(component, bus, condition),
        only: (callback) => registerAppEvents_bus_only(component, bus, callback),
        on: (type, resolve) => registerAppEvents_bus_only_subscribe(component, bus, null, type, resolve)
    }
}

function registerAppEvents_bus_condition(component, bus, only) {
    console.warn("Deprecated usage: use `only` instead of `condition`")

    return {
        on: (type, resolve) => registerAppEvents_bus_only_subscribe(component, bus, only, type, resolve)
    }
}

function registerAppEvents_bus_only(component, bus, only) {
    return {
        on: (type, resolve) => registerAppEvents_bus_only_subscribe(component, bus, only, type, resolve)
    }
}

function registerAppEvents_bus_only_subscribe(component, bus, only, type, resolve) {

    let busContext = component.__.appEventContexts.get(bus)

    if (!resolve) {
        resolve = component.forceUpdate
    }

    if (!busContext) {
        busContext = component.__.appEventContexts.set(bus, new Map()).get(bus)
        busContext.set(type, resolve)
    } else {
        busContext.set(type, resolve)
    }

    if (only === null) {
        bus.subscribe(type, resolve)
    } else {
        bus.only(only, type, resolve)
    }

    return {
        on: (type, resolve) => registerAppEvents_bus_only_subscribe(component, bus, only, type, resolve)
    }
}