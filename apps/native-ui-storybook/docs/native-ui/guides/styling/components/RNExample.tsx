import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#550091',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: 'center',
    width: 420,
    maxWidth: '100%',
  },
  timings: {
    color: '#fff',
    fontSize: 14,
  },
  metaContainer: {
    justifyContent: 'space-between',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  description: {
    color: 'white',
    marginTop: 5,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#75A7FD',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
  },
});

function Example() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.metaContainer}>
          <View>
            <Text style={styles.timings}>Uswitch Energy Awards 2023</Text>
            <Text style={styles.description}>Over a million reasons to join</Text>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Remind me</Text>
          </Pressable>
        </View>
        <Image
          source={{
            uri: 'https://d1pverny9k19rc.cloudfront.net/attachments/cl0rw8sf30lxt0qczvzte5r51-snappr-day3-ben-running-0221.jpg',
          }}
          style={styles.avatar}
        />
      </View>
    </View>
  );
}

export default Example;
