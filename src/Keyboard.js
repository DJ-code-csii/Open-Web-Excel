// 键盘总控

import getKeyString from '@hai2007/tool/getKeyString.js';
import xhtml from '@hai2007/tool/xhtml';

export default function () {

    if ('__keyLog' in this) {
        console.error('Keyboard has been initialized');
        return;
    } else {

        this.__keyLog = {
            'shift': false
        };

        xhtml.bind(document.body, 'keydown', event => {
            let keyString = getKeyString(event);

            // 标记shift按下
            if (keyString == 'shift') this.__keyLog.shift = true;
        });

        xhtml.bind(document.body, 'keyup', event => {
            let keyString = getKeyString(event);

            // 标记shift放开
            if (keyString == 'shift') this.__keyLog.shift = false;
        });

    }

};
