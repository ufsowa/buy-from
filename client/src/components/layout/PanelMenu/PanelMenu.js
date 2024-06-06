/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './PanelMenu.module.scss';
import { PropTypes } from 'prop-types';
import { clsx } from 'clsx';

const PanelMenu = ({
  menuItems,
  action,
  activeItem,
  classActive: classActiveProp,
  noHover,
}) => {
  const classActive = classActiveProp ? classActiveProp : styles.active;

  return (
    <div className={'col ' + styles.menu}>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <a
              className={clsx(
                item.id === activeItem && classActive,
                noHover ? styles.noHover : ''
              )}
              onClick={() => action(item.id)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

PanelMenu.propTypes = {
  menuItems: PropTypes.array,
  action: PropTypes.func,
  activeItem: PropTypes.string,
  classActive: PropTypes.string,
  noHover: PropTypes.bool,
};

export default PanelMenu;
