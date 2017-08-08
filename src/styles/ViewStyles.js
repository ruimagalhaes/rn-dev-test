import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_INPLOI_RED,
  COLOR_INPLOI_GREY,
  COLOR_INPLOI_DARK_GREY
} from './StyleKit';

export const viewStyles = {
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  centerVertical: {
    justifyContent: 'center',
  },
  centerHorizontal: {
    alignItems: 'center',
  },
  jobCell: {
    height: 70,
    backgroundColor: COLOR_WHITE
  },
  detailBackground: {
    backgroundColor: COLOR_WHITE
  },
  coverImageView: {
    height: 200
  },
  thumbImageView: {
    height: 50,
    width: 50
  },
  underLineView: {
    height: 1,
    backgroundColor: COLOR_INPLOI_DARK_GREY
  }
}
