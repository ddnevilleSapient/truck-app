import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import copy from 'resources/copy.json';

const styles = {
  header: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
  },
};

window.console.log(process.env);

const SiteWrapper = ({ children }) => {
  return (
    <View>
      <Text style={styles.header}>{copy['headerAndNavigation.title']}</Text>
      <Text>{`Device is ${process.env.REACT_NATIVE_DEVICE}`}</Text>
      {children}
    </View>
  );
};

SiteWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};


export default SiteWrapper;
