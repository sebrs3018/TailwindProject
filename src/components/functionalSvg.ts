import { h } from 'vue'
export const functionalSvg = () => {
  return h(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24.042 24.042' },
    h(
      'g',
      {
        fill: 'none',
        stroke: '#222',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        transform: 'rotate(-135 10.99 9.531)'
      },
      [
        h('path', { d: 'M11.876 1.246s-.976 5.647 1.106 7.759' }),
        h('path', { d: 'M9.153.527S9 8.661 10.06 10.1' }),
        h('path', { d: 'M7.15.614S8.146 8.6 6.4 10.76' }),
        h('path', { d: 'M4.908 1.351s1.078 5.223-.88 7.107' }),
        h('path', { d: 'M3.993 9.9a.89.89 0 1 1 .044-1.259.89.89 0 0 1-.044 1.259Z' }),
        h('path', { d: 'M6.685 12.3a.89.89 0 1 1 .044-1.258.89.89 0 0 1-.044 1.258Z' }),
        h('path', { d: 'M11.1 11.675a.89.89 0 1 1 .044-1.257.89.89 0 0 1-.044 1.257Z' }),
        h('path', { d: 'M14.221 10.28a.89.89 0 1 1 .044-1.258.89.89 0 0 1-.044 1.258Z' }),
        h('circle', { cx: '8', cy: '8', r: '8', transform: 'translate(.5 .5)' })
      ]
    )
  )
}
