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
        dbTodoPath = deviceId + '/todos';
        dbTodoRef = firebase.database().ref(dbTodoPath);
    };

export function writeData(info) {
    info.time = firebase.database.ServerValue.TIMESTAMP

    firebase.database().ref(dbTodoPath).push(info)
    .catch((error) => {
        alert(error)
            });
}

export function updateTaskStatus(item, status) {
    dbTodoRef.orderByChild("time").equalTo(item[0]).on("child_added", function(snapshot) {
      dbTodoRef.child(snapshot.key).update({'taskStatus': status})
    });
}

export async function loadTasksFromDB() {
    await initializeConstants()
    const todosFromDB = [];

    const snapshot = await dbTodoRef.once('value');
    const data = snapshot.val();

    if (data) {
        for (const [key, value] of Object.entries(data)) {
            if ( value.taskStatus.match("^\\s+$") ) {
                todosFromDB.push([value.time, value.taskName]);
            }
        }
    }
    return todosFromDB;
}