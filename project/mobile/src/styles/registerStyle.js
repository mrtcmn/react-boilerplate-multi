import EStyleSheet from 'react-native-extended-stylesheet';
import styleUtil from './utils/styleUtil';

export default EStyleSheet.create({
  loginRN: {
    padding: 10,
    marginTop: 10,
    marginBottom: 30,
    display: 'flex',
    flexDirection: 'column',
  },
  ...styleUtil.subTitleConstant,
});
