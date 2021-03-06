/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default class MenuState extends Phaser.State {
  init () {
    this.menuItems = []
  }

  preload () {}

  create () {
    this.loadBanner()

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    this.game.add.existing(this.mushroom)
    this.loadMenu()
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }

  loadBanner () {
    const bannerText = 'Roguelike ES6-Phaser-Webpack'
    const banner = this.configureBanner(
      this.addBannerText(bannerText)
    )
    if (__DEV__) {
      console.log('Loading Banner: ', banner)
    }
  }

  loadMenu () {
    const menuItems = [
      {
        label: 'Start Game',
        action () {}
      }, {
        label: 'Quit',
        action () {}
      }
    ]
    this.menuItems = menuItems
    this.renderMenuItems()
  }

  renderMenuItems () {
    this.menuItems.forEach(this.renderMenuItem.bind(this))
  }

  renderMenuItem () {}

  addBannerText (bannerText) {
    return this.add.text(
      this.world.centerX,
      this.game.height - 20,
      bannerText
    )
  }

  configureBanner (banner) {
    banner.font = 'Bangers'
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.padding.set(10, 16)
    banner.anchor.setTo(0.5)
    return banner
  }
}
