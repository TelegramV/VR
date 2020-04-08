import StatefulComponent from "./StatefulComponent";
import StatelessComponent from "./StatelessComponent";

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

export {StatefulComponent, StatelessComponent};