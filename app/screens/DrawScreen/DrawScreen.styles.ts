import RN from 'RN';
import colors from 'constants/colors';
import {SIZES} from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  pureView: {
    backgroundColor: colors.pure,
    transform: [{rotate: '30deg'}, {scale: 2}, {translateX: SIZES.width * 0.5}],
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
    textAlign: 'center',
    color: colors.white,
    paddingTop: 8,
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
  },
  logoContainer: {
    alignSelf: 'center',
    paddingTop: 23,
  },
  infoText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 14,
    textAlign: 'center',
    color: colors.white,
    paddingTop: 30,
  },
  infoIcon: {
    position: 'absolute',
    right: 45,
    top: 20,
  },
  timerContaiener: {
    paddingTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontWeight: '800',
    fontSize: 45,
  },
  timerTextContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 40,
    width: 70,
  },
  flexSection: {
    flexDirection: 'row',
    gap: 5,
  },
  lightContainer: {
    backgroundColor: colors.white,
  },
  lightText: {
    color: colors.white,
  },
  pinkContainer: {
    backgroundColor: colors.pink,
  },
  dotsContainer: {
    paddingHorizontal: 10,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 24,
    gap: 23,
  },
  itemContainer: {
    width: 96,
    aspectRatio: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  itemImage: {
    width: 75,
    height: 75,
    objectFit: 'cover',
  },
  itemText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 14,
    textAlign: 'center',
    color: colors.white,
    paddingTop: 5,
  },
  itemCircleText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 14,
    textAlign: 'center',
    color: colors.white,
  },
  itemCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.pink,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    right: -12,
    top: -12,
  },
  participateButton: {
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FF00B8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  participateText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
    textAlign: 'center',
    color: colors.white,
  },
});
