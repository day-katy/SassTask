import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { useAuth } from '../context/AuthContext'

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const { signup, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSignup() {

        if (password !== passwordConfirmation) {
            console.log(`${password} <> ${passwordConfirmation}`)
            return setError('Passwords do not match');
        }
        
        try {
            console.log(`Attempting authenticaiton with ${email} and ${password}`)
            setError('');
            setLoading(true);
            await signup(email, password);
        } catch {
            setError('Failed to create an account');
        }
        setLoading(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.addTaskSection}>
                <View>
                    <Text>Signup Screen</Text>
                </View>
                <View>
                    <Text>{currentUser && currentUser.email}</Text>
                </View>
                {/* <View>
                    {error && threeOptionAlertHandler()}
                </View> */}
                <View style={styles.addTask}>
                    <Input placeholder={'Enter Email'} label='Email' value={email} onChangeText={email => setEmail(email)} />
                </View>
                <View style={styles.addTask}>
                    <Input placeholder={'Enter password'} label='Password' secureTextEntry={true} value={password} onChangeText={password => setPassword(password)} />
                </View>
                <View style={styles.addTask}>
                    <Input placeholder={'Confirm password'} label='Password confirmation' secureTextEntry={true} value={passwordConfirmation} onChangeText={passwordConfirmation => setPasswordConfirmation(passwordConfirmation)} />
                </View>
                <TouchableOpacity onPress ={() => handleSignup()} style={styles.addTaskButton}>
                    <View>
                        <Text>Submit</Text>
                    </View>
                </TouchableOpacity>
                <Button
                title="Submit" disable={loading} onPress ={() => handleSignup()} style={styles.addTaskButton}
                />
                <View>
                    <Text>Already have an account? Log In</Text>
                </View>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addTaskSection: {
        // position: 'absolute',
        // bottom: 60,
        width: '100%',
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        alignItems: 'center'
      },
    addTask: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        maxWidth: 250,
        backgroundColor: 'white',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250
      },
      addTaskButton: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1
      },
})
