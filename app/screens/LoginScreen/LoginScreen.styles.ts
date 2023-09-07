import RN from 'RN';
import colors from 'constants/colors';

export const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  backButton: {
    position: 'absolute',
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
    color: colors.black,
  },
  logoContainer: {
    alignSelf: 'center',
    paddingTop: 37,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
    color: colors.black,
    paddingTop: 46.5,
    paddingBottom: 20,
  },
  inputContainer: {
    gap: 10,
  },
  logInButton: {
    borderRadius: 20,
    backgroundColor: colors.pink,
    paddingVertical: 10,
    marginTop: 38,
    marginBottom: 16,
    height: 48,
  },
  logInText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 28,
    textAlign: 'center',
    color: colors.white,
  },
  forgateText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
    color: colors.black3,
  },
  socialContainer: {
    gap: 10,
  },
  socialButton: {
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.17)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    gap: 10,
    height: 48,
    elevation: 5,
  },
  socialText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
    color: colors.white,
  },
  VKButton: {
    backgroundColor: colors.blue,
  },
  YaButton: {
    backgroundColor: colors.error,
  },
  registrationText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
    color: colors.black,
    paddingVertical: 40,
  },
});
