import { h, nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import mediumZoom from 'medium-zoom'
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
  setup() {
    // Click-to-zoom on doc images, re-attached after each client-side navigation
    const route = useRoute()
    const initZoom = () => mediumZoom('.vp-doc img', { background: 'var(--vp-c-bg)' })
    onMounted(initZoom)
    watch(() => route.path, () => nextTick(initZoom))
  },
} satisfies Theme
