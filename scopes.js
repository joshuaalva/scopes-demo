// what does scope mean? 
// scope: the current context of execution. The context in which values and expressions are "visible" or can be referenced. 
// where is the variable visible in the script 

// global scope 
var a = "This is global/module scope -a";
var b = "This is global/module scope - b";
const c = "this is global/module scope - c";
d = "this is global/module scope -d"; // this creates a global variable no matter where you do it 
// global scopes are generally a bad idea 

//Function Scope (var, let, const are all function scoped)
function fn(){
    var a = "this is scoped to the function fn - a";
    let b = "this is scoped to the function fn - b";
    const c = "this is global variable defined inside the function";
    d = "this is a global varaible defined inside the function";

// block scope 
    if(true){
        var a = "this is scoped to the function fn, but is inside - a";
        let b = "this is scoped to the if block - b";
        const c = "this is scoped to the if block - c";
        d = "this is a global variable defined deep inside the function - d";

        console.group("inside if");
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.groupEnd();
    }

    console.group("inside fn");
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.groupEnd();
}; // fn end 

// call fn 
fn();


