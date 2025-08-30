import { View, Text, StyleSheet } from 'react-native';

type NoDataProps = {
  data: string;
};

const NoData = ({ data }: NoDataProps) => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{`No ${data} found`}</Text>
    </View>
  );
};

export default NoData;

const styles = StyleSheet.create({
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
  },
});
