/** @jsxImportSource preact */
/// <reference types="systemjs" />

import { render } from 'preact/compat';
import { App } from "./app";
import type { BasePlugin } from 'blinko';
import plugin from '../plugin.json';

const CHART_ICON = `<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='20' x2='18' y2='10'/><line x1='12' y1='20' x2='12' y2='4'/><line x1='6' y1='20' x2='6' y2='14'/></svg>`;

System.register([], (exports) => ({
  execute: () => {
    exports('default', class Plugin implements BasePlugin {
      constructor() {
        Object.assign(this, plugin);
      }

      withSettingPanel = false;

      async init() {
        window.Blinko.addToolBarIcon({
          name: 'writing-stats',
          icon: CHART_ICON,
          tooltip: 'Writing Stats',
          onClick: () => {
            window.Blinko.showDialog({
              title: '✍️ Writing Stats',
              size: '3xl',
              content: () => {
                const container = document.createElement('div');
                render(<App />, container);
                return container;
              },
            });
          },
        });
      }

      destroy() {}
    });
  }
}));
