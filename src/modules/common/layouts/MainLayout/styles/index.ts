import { CSSProperties } from 'react';

// Most of antd components in the layout are styled using elaborate CSS selectors.
// And because of that, it's decided to use inline styles for the layout components.
// In order not to fight with a CSS selectors specificity.

export const SIDER_STYLES: CSSProperties = {
  overflow: 'auto',
  userSelect: 'none',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  width: 200,
  minWidth: 200,
  maxWidth: 200,
};

export const SIDER_MENU_STYLES: CSSProperties = {
  height: '100%',
  borderRight: 0,
};

export const LAYOUT_STYLES: CSSProperties = {
  minHeight: '100vh',
};

export const INNER_LAYOUT_STYLES = (isCollapsed: boolean): CSSProperties => ({
  marginLeft: isCollapsed ? 80 : 200,
  transition: 'margin 0.3s cubic-bezier(0.2, 0, 0, 1) 0s',
});

export const HEADER_STYLES: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 0,
};

export const TOGGLE_SIDER_BUTTON_STYLES: CSSProperties = {
  fontSize: '16px',
  width: 64,
  height: 64,
};

export const CONTENT: CSSProperties = {
  margin: '24px 16px',
  padding: 24,
  overflow: 'initial',
};
