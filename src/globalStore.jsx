//Step1:Initialize Global State

let State={
    user:'Shubham'
}
let subscribers=[]
// Step 2: Function to read state (PDF Page 20) :contentReference[oaicite:2]{index=2}

export const getState=()=>State;

const notify=()=>{
    subscribers.forEach((callBack)=>callBack())
}

export const setUser=(newName)=>{
    State={...State,user:newName};
    console.log('New State',State)
    notify()
}

//Subscribe  Function

export const subscribe=(callBack)=>{
 subscribers.push(callBack);
}