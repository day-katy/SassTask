import { firebase } from './config'

const deviceId = 'phone_001';
const dbTodoPath = 'todos/' + deviceId;
const dbTodoRef = firebase.database().ref(dbTodoPath);

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