import React, { useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { ALL_ROUTES } from '@f/constants/routers.constant';

const MainRouter = () => {
  const allRoutes = Object.keys(ALL_ROUTES).map((item) => ALL_ROUTES[item]);
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById('root').scrollTo({
      top: 0,
    });
  }, [pathname]);

  return (
    <>
      <div className="site-main-area">
        <Switch>
          <Redirect exact from="/home" to={ALL_ROUTES.homepage.route} />
          {allRoutes.map((item) =>
            item.auth ? (
              <div />
            ) : (
              <Route
                key={item.routeID}
                path={item.route}
                component={item.component()}
                exact
              />
            )
          )}
        </Switch>
      </div>
    </>
  );
};

export default MainRouter;
