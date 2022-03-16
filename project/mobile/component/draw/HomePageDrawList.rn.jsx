import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DrawPrizeAction } from '@service/actions/F_Actions';
import { Ui_DrawPrizeModal } from '@service/actions/Ui_F_Actions.js';
import { useTranslation } from 'react-i18next';
import ArrowIcon from '@asset/images/icons/arrow-pointing-left.svg';
import { SvgXml } from 'react-native-svg';
import { View, Text, TouchableOpacity } from 'react-native';
import DrawBoxRN from '@mobile/component/draw/DrawBox.rn';
import _styles from '@mobile/src/styles/common';

const _ = require('lodash');

const HomePageDrawListRN = ({
  DrawPrizeA,
  Ui_DrawPrizeModalA,
  drawData,
  navigation,
}) => {
  const { t } = useTranslation();
  const openModal = (
    modalIsOpen,
    drawID = 0,
    gameID = 5,
    drawIndex,
    isResulted
  ) => {
    Ui_DrawPrizeModalA({
      isOpen: true,
      currentState: 'loading',
      drawID,
      gameID,
    });
    DrawPrizeA({
      modalIsOpen: true,
      drawID,
      gameID,
    });
  };

  return (
    <View style={_styles.homePageDrawList}>
      <View style={_styles.categoryShowMoreC}>
        <Text style={_styles.categoryShowMoreCText}>{drawData.text}</Text>
        <TouchableOpacity
          style={_styles.categoryShowMore}
          onPress={() => navigation.navigate('drawlist')}
        >
          <Text style={_styles.categoryShowMoreText}>{t('more')}</Text>
          <SvgXml
            width={20}
            height={20}
            xml={ArrowIcon}
            fill="#2d2d2d"
            rotation={180}
          />
        </TouchableOpacity>
      </View>
      <View style={_styles.drawListMain}>
        {drawData.drawData.length > 0 ? (
          React.Children.toArray(
            drawData.drawData.map((drawItem, index) => (
              <DrawBoxRN
                onClickMethod={() =>
                  openModal(
                    true,
                    drawItem.gameID === 6
                      ? drawItem.groupID
                      : drawItem.somosDrawID,
                    index + 1,
                    drawItem.gameID
                  )
                }
                key={drawItem.somosDrawID}
                somosDrawID={drawItem.somosDrawID.toString()}
                drawDate={drawItem.drawDate}
                drawStartDate={drawItem.drawStartDate}
                title={drawItem.title}
                pictures={drawItem.pictures}
                remainingTicketCount={drawItem.remainingTicketCount}
                approxPrizeValue={drawItem.approxPrizeValue}
                ticketAmount={drawItem.ticketAmount}
                allowAnimate={drawItem.allowAnimate}
                gameID={drawItem.gameID}
                isActive={drawItem.isActive}
                isResulted={drawItem.isResulted}
              />
            ))
          )
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

HomePageDrawListRN.propTypes = {
  DrawPrizeA: PropTypes.func,
  Ui_DrawPrizeModalA: PropTypes.func,
  navigation: PropTypes.object,
  drawData: PropTypes.shape({
    drawCategoryID: PropTypes.number,
    categoryID: PropTypes.number,
    orderCount: PropTypes.number,
    text: PropTypes.string,
    drawData: PropTypes.arrayOf(PropTypes.object),
  }),
};

HomePageDrawListRN.defaultProps = {
  DrawPrizeA: () => {},
  Ui_DrawPrizeModalA: () => {},
  drawData: {},
  navigation: {},
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  DrawPrizeA: DrawPrizeAction,
  Ui_DrawPrizeModalA: Ui_DrawPrizeModal,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePageDrawListRN);
