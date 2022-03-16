import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import _styles from '@mobile/src/styles/common';
const GetEnv = require('@envFile');

const IMAGE_CDN =
  GetEnv.CDN_PRE_URL || 'https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/';

const ImageViewerRN = memo(
  ({ imageName, sizeEnum, imageAlt, style, tabIndex, pictureProps }) => {
    const [failState, setFailState] = useState(0);
    const IMAGE_CONFIGS = {
      slider: '_resize-slider', // ana sayfa slider
      'box-thumb': '_resize-thumb-box', // Çekiliş box'ları için
      'small-thumb': '_resize-thumb-min', // oldukça küçük thumbnail 150px'den küçük
      'slider-prize': '_resize-prize-slider', // Çekiliş detayı slider
    };

    const getImageName = (_imageName, _sizeEnum) => {
      const _reName = _imageName.split('.')[0];
      let _suffix = '';
      if (IMAGE_CONFIGS[_sizeEnum]) {
        _suffix = IMAGE_CONFIGS[_sizeEnum];
      }

      return `${_reName}${_suffix}`;
    };

    const _rebuildImageUrl = `${IMAGE_CDN}${getImageName(imageName, sizeEnum)}`;
    const _rebuildImageUrlOriginal = `${IMAGE_CDN}${imageName}`;

    useEffect(() => {
      setFailState(0);
    }, [imageName]);

    const errorFallback = (event) => {
      if (event.type === 'error' && imageName !== '') {
        const elem = event.target;
        elem.onerror = null;
        if (failState === 0) {
          elem.parentNode.children[0].srcset =
            elem.parentNode.children[1].srcset;
        } else if (failState === 1) {
          elem.parentNode.children[0].srcset = elem.src;
        } else if (failState === 2) {
          elem.parentNode.children[0].srcset =
            elem.parentNode.children[2].srcset;
          setFailState(-1);
        }

        if (failState !== -1 && failState !== 2) {
          setFailState(failState + 1);
        }
        // setFailState(failState === 2 ? 2 : failState + 1);
      }
    };

    return (
      <Image
        style={style}
        onError={errorFallback}
        source={{ uri: `${_rebuildImageUrl}.jpeg` }}
      />
    );
  }
);

ImageViewerRN.defaultProps = {
  imageName: '',
  sizeEnum: 'original',
  imageAlt: '',
  className: '',
  onClick: () => {},
  pictureProps: {},
  style: [],
};

ImageViewerRN.propTypes = {
  imageName: PropTypes.string,
  sizeEnum: PropTypes.string,
  imageAlt: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  pictureProps: PropTypes.object,
  style: PropTypes.array,
};

export default ImageViewerRN;
