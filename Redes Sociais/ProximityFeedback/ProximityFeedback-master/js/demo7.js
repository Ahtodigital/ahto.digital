/**
 * demo1.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */

/**
 * Equation of a line.
 */
const lineEq = (y2, y1, x2, x1, currentVal) => {
    // y = mx + b 
    var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
    return m * currentVal + b;
};

const distanceThreshold = {min: 0, max: 100};

/**************** Heart Icon ****************/
const iconPlay = document.querySelector('.icon-play');
const iconPlayButton = iconHeart.parentNode;
const heartbeatInterval = {from: 1, to: 40};
const grayscaleInterval = {from: 1, to: 0};

const tweenHeart = TweenMax.to(iconHeart, 5, {
    yoyoEase: Power2.easeOut,
    repeat: -1,
    yoyo: true,
    scale: 1.3,
    paused: true
});

let stateHeart = 'paused';
new Nearby(iconHeartButton, {
    onProgress: (distance) => {
        const time = lineEq(heartbeatInterval.from, heartbeatInterval.to, distanceThreshold.max, distanceThreshold.min, distance);
        tweenHeart.timeScale(Math.min(Math.max(time,heartbeatInterval.from),heartbeatInterval.to));
        if ( distance < distanceThreshold.max && distance >= distanceThreshold.min && stateHeart !== 'running' ) {
            tweenHeart.play();
            stateHeart = 'running';
        }
        else if ( (distance > distanceThreshold.max || distance < distanceThreshold.min) && stateHeart !== 'paused' ) {
            tweenHeart.pause();
            stateHeart = 'paused';
            TweenMax.to(iconHeart, .2, {
                ease: Power2.easeOut,
                scale: 1,
                onComplete: () => tweenHeart.time(0)
            });
        }

        const bw = lineEq(grayscaleInterval.from, grayscaleInterval.to, distanceThreshold.max, distanceThreshold.min, distance);
        TweenMax.to(iconHeart, 1, {
            ease: Power2.easeOut,
            filter: `grayscale(${Math.min(bw,grayscaleInterval.from)})`
        });
    }
});