import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'nav-bar-title-after': () =>
        h('span', { class: 'kw-title' }, [
          h('span', { class: 'kw-keno' }, 'Keno'),
          h('span', { class: 'kw-wiki' }, 'Wiki'),
        ]),
    }),
} satisfies Theme
