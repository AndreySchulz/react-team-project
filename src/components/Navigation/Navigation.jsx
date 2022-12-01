import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAuthUser,
  getAuthIsLoggedIn,
} from '../../redux/AuthRedux/selectors';
import { ResetApi } from '../../redux/AuthRedux/operations';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import sprite from './sprite.svg';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const mediaQueries = {
  response: '(max-width: 479px)',
  mobile: '(min-width: 480px) and (max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1279px)',
  desktop: '(min-width: 1280px)',
};

export default function Navigation() {
  const dispatch = useDispatch();
  const username = useSelector(getAuthUser);
  const isLoggedIn = useSelector(getAuthIsLoggedIn);

  return (
    <>
      {isLoggedIn && (
        <>
          <header className={s.header}>
            <div className={s.mainContainer}>
              <div className={s.logoContainer}>
                <NavLink to="/">
                  <svg className={s.logoSvg}>
                    <use href={`${sprite}#icon-logo-full`}></use>
                  </svg>
                </NavLink>
              </div>
              <div className={s.authContainer}>
                <p className={s.name}>{username}</p>
                <Media queries={mediaQueries}>
                  {matches =>
                    (matches.tablet || matches.desktop) && (
                      <svg className={s.lineSvg}>
                        <use href={`${sprite}#icon-vertical-line`}></use>
                      </svg>
                    )
                  }
                </Media>
                <button
                  className={s.button}
                  onClick={() => dispatch(ResetApi())}
                  type="button"
                >
                  <svg className={s.exitSvg}>
                    <use href={`${sprite}#icon-exit`}></use>
                  </svg>
                  <Media queries={mediaQueries}>
                    {matches =>
                      (matches.tablet || matches.desktop) && (
                        <p className={s.exit}>Exit</p>
                      )
                    }
                  </Media>
                </button>
              </div>
            </div>
          </header>
        </>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}