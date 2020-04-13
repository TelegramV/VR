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

import VFrameworkRouter from "./Router/VRouter"
import VRDOMPlugin from "./VRDOM/plugin/VRDOMPlugin"

/**
 * V Framework - tool for building SPA-like application. Written specially for Telegram V.
 */
class VFramework {

    /**
     * @param {VFrameworkRouter} router
     */
    constructor({router}) {


        this.latestInstantiatedComponent = 0
        this.latestInstantiatedRef = 0

        /**
         * @type {Set<VRDOMPlugin>}
         */
        this.plugins = new Set()

        /**
         * @type {VRDOMInterceptor}
         */
        this.interceptor = undefined

        /**
         * @type {Map<string, VComponent>}
         */
        this.mountedComponents = new Map()

        /**
         * @type {Map<string, Ref | FragmentRef | ComponentRef>}
         */
        this.mountedRefs = new Map()

        /**
         * @type {VFrameworkRouter}
         */
        this.router = undefined
        this.router = router
    }

    mount(selector) {
        const $mountElement = document.querySelector(selector)

        if (this.router) {
            this.router.run($mountElement)
        } else {
            throw new Error("Router is not defined!")
        }
    }

    registerPlugin(plugin) {
        this.plugins.add(new plugin)
    }

    setInterceptor(interceptor) {
        this.interceptor = new interceptor
    }

    /**
     * @param {function(VFrameworkRouter)} routesRegister
     */
    useRoutes(routesRegister) {
        routesRegister(this.router)
    }

    uniqueComponentId() {
        return ++(this.latestInstantiatedComponent)
    }
}

export default VFramework