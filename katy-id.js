import { firebase } from './config'
import { returnDeviceId } from './deviceId'

let deviceId 
let dbTodoPath 
let dbTodoRef 

 async function initializeConstants(){
     try {
        deviceId = await returnDeviceId()

} catch (error) {
    console.error("there was an error returning the device ID")
  }
     dbTodoPath = 'todos/' + deviceId;
    dbTodoRef = firebase.database().ref(dbTodoPath);

    
};





// const deviceId = 'phone_001';


export function writeData(info) {
    info.time = firebase.database.ServerValue.TIMESTAMP

    firebase.database().ref(dbTodoPath).push(info)
    .catch((error) => {
        alert(error)
            });
}

export function sayHi(name) {
    console.log('Hi ' + name);
}

export function updateTaskStatus(item) {
    console.log('In UPDATE')
    dbTodoRef.orderByChild("time").equalTo(item[0]).on("child_added", function(snapshot) {
      dbTodoRef.child(snapshot.key).update({'taskStatus': 'Y'})
    });
}

export async function loadTasksFromDB() {
    await initializeConstants()
    const todosFromDB = [];

    const snapshot = await dbTodoRef.once('value');
    const data = snapshot.val();

    if (data) {
        for (const [key, value] of Object.entries(data)) {
            if ( value.taskStatus !== 'Y' ) {
                todosFromDB.push([value.time, value.taskName]);
            }
        }
    }
    return todosFromDB;
}