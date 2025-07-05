import React from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Text } from './StyledText';
import { Colors } from '../styles/globalStyles';

interface DropdownProps {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selected, onSelect }) => {
  const [open, setOpen] = React.useState(false);
  const animatedHeight = React.useRef(new Animated.Value(0)).current;
  const maxHeight = options.length * 44; // 44 is approx. height per option

  React.useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: open ? maxHeight : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [open, maxHeight, animatedHeight]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selected} onPress={() => setOpen(!open)}>
        <Text style={styles.selectedText}>{selected}</Text>
        <Text style={styles.arrow}>{open ? '▲' : '▼'}</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.dropdown, { height: animatedHeight, overflow: 'hidden' }]}>
        {open && options.map((item, index) => (
          <TouchableOpacity 
            key={item} 
            onPress={() => { setOpen(false); onSelect(item); }} 
            style={[
              styles.option, index === options.length - 1 && styles.lastOption
            ]}
          >
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({  container: {
    marginHorizontal: 15,
    marginBottom: 16,
    zIndex: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
  },
  selected: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedText: {
    fontSize: 16,
  },
  arrow: {
    color: Colors.textSecondary,
    fontSize: 14,
    marginLeft: 8,
  },  dropdown: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    marginTop: 1,
    paddingVertical: 0, // Remove vertical padding to avoid extra space when closed
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  option: {
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.separator,
    borderBottomWidth: 1,
    borderBottomColor: Colors.separator,
  },
  firstOption: {
    borderTopWidth: 0,
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  optionText: {
    fontSize: 15,
  },
});

export default Dropdown;
