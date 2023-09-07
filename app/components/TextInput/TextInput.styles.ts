import RN from 'RN';
import colors from 'constants/colors';

export const styles = RN.StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 16,
    backgroundColor: colors.white2,
    borderRadius: 8,
    borderColor: colors.transparent,
    borderWidth: 1,
  },
  input: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    paddingVertical: 11,
    letterSpacing: -0.40799999237060547,
  },
  error: {
    borderColor: colors.error,
  },
  eyeContainer: {
    position: 'absolute',
    right: 13,
    top: 11,
  },
});
