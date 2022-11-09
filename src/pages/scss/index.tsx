import style from './index.module.scss'

const Sass = () => {
  const list = Array.from({ length: 12 }, (_, i) => i+1 )
  const iconList = ['success', 'error']
  return(
    <div className={style.wrap}>
      <div className={style.title}>Sass</div>
      <div className={style.mixin}>Mixin</div>
      {/* <div className={style.extend}>Extend</div> */}

      <div className={style.extend}>
        <button className={style['primary-btn']}>primary</button>
        <button className={style['success-btn']}>success</button>
      </div>

      <div className={style.color}>
        <div>base</div>
        <div>adjust hue</div>
        <div>lighten</div>
        <div>darken</div>
        <div>saturate</div>
        <div>desaturate</div>
        <div>opacify</div>
        <div>transparentize</div>
      </div>

      <div className={style['message-error']}>interpolation</div>

      <div className={style.row}>
        { list.map(item => <div className={style[`col-${item}`]} key={item}>{ item }</div> ) }
      </div>

      <div className={style.icon}>
        { iconList.map(item => <div className={style[`icon-${item}`]} key={item} ></div> ) }
      </div>

      <div className={style.error}>
        <div className={style['item-2']}></div>
        <div className={style['item-4']}></div>
        <div className={style['item-6']}></div>
      </div>

      <div className={style['theme-bg']}>function</div>
    </div>
  )
}

export default Sass