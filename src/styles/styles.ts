import {StyleSheet} from 'react-native';

export const appStyles = StyleSheet.create({
  appBackground: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  textResult: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  textSmall: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    height: 80,
    width: 80,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: '300',
  },
});
