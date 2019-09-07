import React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, TextInput, View } from 'react-native';

class BelajarAsyncStorage extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            hobby: '',
            textName: '',
            textHobby: ''
        };


        AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                    name: resultParsed.name,
                    hobby: resultParsed.hobby
                });
            }
        });
    }
    saveData() {
        let name = this.state.textName;
        let hobby = this.state.textHobby;
        let data = {
            name: name,
            hobby: hobby
        }
      
        AsyncStorage.setItem('user', JSON.stringify(data));
      
        this.setState({
            name: name,
            hobby: hobby
        });
      
        alert('Data tersimpan');
      }
      
      
          //Ini Step ke - 1
          render() {
              return (
                  <View style={styles.container}>
                      <Text style={styles.welcome}>
                          Biodata Santri Pondok Programmer
                      </Text>
                      <Text style={styles.instructions}>
                          Nama: {this.state.name}
                      </Text>
                      <Text style={styles.instructions}>
                          Hobi: {this.state.hobby}
                      </Text>
                      <TextInput style={styles.textInput}
                          onChangeText={(textName) => this.setState({textName})}
                          placeholder='Nama Santri'
                      />
                      <TextInput style={styles.textInput}
                          onChangeText={(textHobby) => this.setState({textHobby})}
                          placeholder='Hobi Santri'
                      />
                      <Button
                          title='Simpan'
                          onPress={this.saveData.bind(this)}
                      />
                  </View>
              );
          }
      }
      
      
      // Ini Step ke - 1
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#9370DB',
          padding: 16,
          paddingTop: 32
        },
        welcome: {
          fontSize: 25,
          textAlign: 'center',
          margin: 10,
          color:'#7FFF00'
        },
        instructions: {
          textAlign: 'center',
          color: '#FFF',
          marginBottom: 5,
          
        },
        textInput: {
          height: 35,
          width:'80%',
          backgroundColor: 'white',
          marginTop: 8,
          marginBottom: 8,
          borderWidth: 1,
          borderColor: 'grey',
          padding: 8
        }
      });
      
      export default BelajarAsyncStorage