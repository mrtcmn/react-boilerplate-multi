import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ALL_ROUTES } from '@f/constants/routers.constant';
import PropTypes from 'prop-types';

function SubRouter(props) {
  const topic = SubRouterList(props.routeID);

  return (
    <div style={{ width: '100%' }}>
      <Switch>
        {topic.resources.map((item) => (
          <Route
            key={item.routeID}
            path={item.route}
            component={item.component()}
          />
        ))}

        <Route render={() => <div>Bu sayfa bulunamadı.</div>} />
      </Switch>
    </div>
  );
}
SubRouter.propTypes = {
  routeID: PropTypes.string.isRequired,
};

export function SubRouterList(routeId) {
  const allRoutes = Object.keys(ALL_ROUTES).map((item) => ALL_ROUTES[item]);
  const topic = allRoutes.find(({ routeID }) => routeID === routeId);

  return topic;
}

export default SubRouter;
