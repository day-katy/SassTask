import { firebase } from './config'

const deviceId = 'phone_002';
const dbTodoPath = 'todos/' + deviceId;
const dbTodoRef = firebase.database().ref(dbTodoPath);

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