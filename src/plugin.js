import videojs from 'video.js';
import {version as VERSION} from '../package.json';

// Default options for the plugin.
const defaults = {};

// Cross-compatibility for Video.js 5 and 6.
const registerPlugin = videojs.registerPlugin || videojs.plugin;
// const dom = videojs.dom || videojs;

/**
 * Init plugin method.
 *
 * @function initPlugin
 * @param    {Player} player
 *           A Video.js player object.
 *
 * @param    {Object} [options={}]
 *           A plain object containing options for the plugin.
 */
const initPlugin = (player, options) => {
  videojs.log('singleTnsCounter Plugin ENABLED!', options);

  const tnsSiteCode = options.tnsSiteCode;
  const events = options.events;

  /**
   * Will send tnsSiteCode and eventName to www.tns-counter.ru
   * Example: "http://www.tns-counter.ru/V13a****mysite/ru/CP1251/tmsec=player_play/217528"
   *
   * @function  placeTnsCounter
   * @param     {string} eventText
   *            Text to send on event firing
   */
  const placeTnsCounter = function(eventText) {
    const rand = Math.floor(Math.random() * 999999);
    const src = (document.location.protocol === 'https:' ? 'https://' : 'http://') +
      'www.tns-counter.ru/V13a****' + tnsSiteCode +
      '/ru/CP1251/tmsec=' + eventText + '/' + rand;
    const tmp = new Image();

    tmp.onload = function() {
      document.body.removeChild(tmp);
    };
    tmp.src = src;

    document.body.appendChild(tmp);
  };

  for (const key in events) {
    if (events.hasOwnProperty(key)) {
      player.one(key, () => placeTnsCounter(events[key]));
    }
  }
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function singleTnsCounter
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const singleTnsCounter = function(options) {
  initPlugin(this, videojs.mergeOptions(defaults, options));
};

// Register the plugin with video.js.
registerPlugin('singleTnsCounter', singleTnsCounter);

// Include the version number.
singleTnsCounter.VERSION = VERSION;

export default singleTnsCounter;
