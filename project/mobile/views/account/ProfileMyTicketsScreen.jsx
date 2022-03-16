import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { DrawHistoryAction } from '@service/actions/F_Actions';
import { connect } from 'react-redux';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import _styles from '@mobile/src/styles/profileMyTickets';
import MyTicketsDrawHistory from '@mobile/component/profile/MyTicketsDrawHistory';
import MyTicketsTicketHistory from '@mobile/component/profile/MyTicketsTicketHistory';

const ProfileMyTicketsScreen = ({
  getDrawHistory,
  mainState,
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const [drawSelect, setDrawSelect] = useState(0);
  const [page, setPage] = useState('draw');

  const apiDrawHistory = (value) => {
    return getDrawHistory({
      select: value,
      drawID: 0,
    });
  };

  useEffect(() => {
    if (mainState === 'loading') {
      setPage('ticket');
    }
  }, [mainState]);

  useEffect(() => {
    apiDrawHistory(drawSelect);
  }, [drawSelect]);

  return (
    <ScrollView style={_styles.scrollView}>
      {page === 'draw' ? (
        <View style={_styles.drawPage}>
          <View style={_styles.buttonGroup}>
            <ButtonCLR
              mainState="initial"
              isActiveButton={drawSelect === 0}
              tText="Draw_History_Button_Text_1"
              onPressF={() => setDrawSelect(0)}
              extraClass={[_styles.buttonItem]}
            />
            <ButtonCLR
              mainState="initial"
              isActiveButton={drawSelect === 1}
              tText="Draw_History_Button_Text_3"
              onPressF={() => setDrawSelect(1)}
              extraClass={[_styles.buttonItem]}
            />
            <ButtonCLR
              mainState="initial"
              isActiveButton={drawSelect === 2}
              tText="Draw_History_Button_Text_2"
              onPressF={() => setDrawSelect(2)}
              extraClass={[_styles.buttonItem]}
            />
          </View>
          <MyTicketsDrawHistory />
        </View>
      ) : (
        <View style={_styles.drawPage}>
          <ButtonCLR
            mainState="initial"
            tText="back"
            onPressF={() => setPage('draw')}
          />
          <MyTicketsTicketHistory />
        </View>
      )}
    </ScrollView>
  );
};

ProfileMyTicketsScreen.propTypes = exact({
  getDrawHistory: PropTypes.func,
  mainState: PropTypes.string,
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object,
});
ProfileMyTicketsScreen.defaultProps = {
  getDrawHistory: () => {},
  mainState: 'initial',
  route: {},
};

const mapStateToProps = (state) => {
  return {
    mainState: state.Ui_F_TicketHistoryReducer.mainState,
  };
};

const mapDispatchToProps = {
  getDrawHistory: DrawHistoryAction,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileMyTicketsScreen);
