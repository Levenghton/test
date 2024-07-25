import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const LeaderboardScreen = () => {
  const topHolders = [
    { name: 'glebtma', honey: 16480936 },
    { name: 'elkanadi', honey: 14338333 },
    { name: 'Esalat', honey: 13159489 },
    { name: 'mohamahamed', honey: 11177207 },
    { name: 'SOGpopbrc', honey: 8868616 },
  ];

  return (
    <View style={styles.container}>
      <Ionicons name="ios-beer" size={50} color="#FFD700" style={styles.beeIcon} />
      <Text style={styles.title}>Hive Wall of Fame</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>#</Text>
          <Text style={styles.tableHeader}>User</Text>
          <Text style={styles.tableHeader}>Honey</Text>
        </View>
        {topHolders.map((holder, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{index + 1}</Text>
            <View style={styles.userCell}>
              {index < 3 && (
                <FontAwesome5
                  name="medal"
                  size={20}
                  color={index === 0 ? '#FFD700' : index === 1 ? '#C0C0C0' : '#CD7F32'}
                  style={styles.medalIcon}
                />
              )}
              <Text style={styles.tableCell}>{holder.name}</Text>
            </View>
            <Text style={styles.tableCell}>{holder.honey.toLocaleString()}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  beeIcon: {
    position: 'absolute',
    top: 40,
  },
  title: {
    fontSize: 24,
    color: '#FFD700',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  table: {
    width: '80%',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FFD700',
  },
  tableHeader: {
    color: '#FFD700',
    fontSize: 18,
    fontFamily: 'Roboto',
  },
  tableCell: {
    color: '#FFD700',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  userCell: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  medalIcon: {
    marginRight: 5,
  },
});

export default LeaderboardScreen;

