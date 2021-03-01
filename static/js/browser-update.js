/**
 * @file Checks and notifies visitors if their browser is not supported and should be
 * updated. 
 * 
 * @see {@link https://browser-update.org/|Browser-Update.org} for more information.
 * @author Rubens Gomes <rubens.s.gomes@gmail.com>
 */

/*
 * Script copied from Browser-Update.org website.  The required browsers were customized.
 */
var $buoop = {
  required: {
    e: 12,
    i: 10,
    c: 45,
    f: 38,
    o: 30,
    s: 9,
    ios: 9,
    samsung: 4.4,
  },
  insecure: false,
  unsupported: false,
  api: 2020.07,
  text: {
    msg: 'Your web browser ({brow_name}) is not supported.',
    msgmore:
      'Update your browser for more security, speed and the best experience on this site.',
    bupdate: 'Update browser',
    bignore: 'Ignore',
  },
};

function $buo_f() {
  var e = document.createElement('script');
  e.src = '//browser-update.org/update.min.js';
  document.body.appendChild(e);
}

try {
  document.addEventListener('DOMContentLoaded', $buo_f, false);
} catch (e) {
  console.log('Error in unsupported browser: ' + e);
  window.attachEvent('onload', $buo_f);
}
