
export let no : number = 100;
export let name : string = "John";

export function multi() {
    console.log(10 * 20);
}

//Default Export
//Each file can have exactly one default export, which represents the main fallback value of that module.

export default function add() : void {
    console.log("Addition of Two variable " + (40 + 50));
}


