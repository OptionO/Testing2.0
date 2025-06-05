const _0x5d0821 = _0x45ac;
(function(_0x25538b, _0x591e7f) {
    const _0x52fdd9 = _0x45ac,
        _0x37385b = _0x25538b();
    while (!![]) {
        try {
            const _0x26c89d = parseInt(_0x52fdd9(0x1b2)) / 0x1 + parseInt(_0x52fdd9(0x1b0)) / 0x2 * (parseInt(_0x52fdd9(0x18e)) / 0x3) + -parseInt(_0x52fdd9(0x1ab)) / 0x4 * (parseInt(_0x52fdd9(0x212)) / 0x5) + parseInt(_0x52fdd9(0x205)) / 0x6 + -parseInt(_0x52fdd9(0x18a)) / 0x7 * (-parseInt(_0x52fdd9(0x1e0)) / 0x8) + -parseInt(_0x52fdd9(0x1df)) / 0x9 * (parseInt(_0x52fdd9(0x19c)) / 0xa) + parseInt(_0x52fdd9(0x1ef)) / 0xb * (-parseInt(_0x52fdd9(0x1cf)) / 0xc);
            if (_0x26c89d === _0x591e7f) break;
            else _0x37385b['push'](_0x37385b['shift']());
        } catch (_0x2e8555) {
            _0x37385b['push'](_0x37385b['shift']());
        }
    }
}(_0x5598, 0x98dd7));
const canvas = document[_0x5d0821(0x20e)]('gameCanvas'),
    ctx = canvas[_0x5d0821(0x1bd)]('2d');
canvas[_0x5d0821(0x1c0)] = 0x186, canvas['height'] = 0x190, canvas[_0x5d0821(0x1a4)][_0x5d0821(0x180)] = _0x5d0821(0x1f7), canvas['style'][_0x5d0821(0x193)] = _0x5d0821(0x21a), canvas[_0x5d0821(0x1a4)][_0x5d0821(0x185)] = '15px';
const ORIGINAL_WIDTH = 0x186,
    ORIGINAL_HEIGHT = 0x190;
let scale = 0x1,
    touchStartX = null,
    touchStartY = null;
const MIN_SWIPE_DISTANCE_RATIO = 0.05;
let minSwipeDistance = Math['min'](window['innerWidth'], window[_0x5d0821(0x1ec)]) * MIN_SWIPE_DISTANCE_RATIO,
    gameState = 'titleScreen';
const GAME_VARIANTS = {
    'MINI': {
        'size': 0x3,
        'winValue': 0x80,
        'name': 'Mini',
        'tileSize': 0x64
    },
    'EASY': {
        'size': 0x4,
        'winValue': 0x400,
        'name': _0x5d0821(0x20a),
        'tileSize': 0x4b
    },
    'CLASSIC': {
        'size': 0x4,
        'winValue': 0x800,
        'name': _0x5d0821(0x1ac),
        'tileSize': 0x4b
    },
    'EXTENDED': {
        'size': 0x5,
        'winValue': 0x1000,
        'name': _0x5d0821(0x18f),
        'tileSize': 0x3c
    }
};
let currentVariant = GAME_VARIANTS['CLASSIC'],
    boardSize = 0x4,
    gameBoard = [];
const SPRITE_SIZE = 0x64;
let tileSize = 0x50;
const margin = 0x5;

function _0x5598() {
    const _0x2abc28 = ['middle', '96SQuXlv', '4096', 'EASY', 'toCol', 'gameWon', 'border', 'winValue', 'fromRow', 'toRow', 'has', 'startY', 'GAME\x20OVER!', 'lineWidth', 'map', '20aDopry', 'moveTo', 'abs', 'EXTENDED', 'gamePlay', 'DOMContentLoaded', 'white', 'Extended:\x20', 'style', 'addEventListener', 'textContent', 'Controls:', 'Score:\x20', 'keys', 'gameOptions', '12hwBaPw', '2048', '\x20\x20\x20\x20\x20•\x20Classic:\x20Target\x20tile\x202048\x20on\x204x4\x20grid', 'ArrowDown', 'potatopastys2048HighScore_CLASSIC', '40048IXQJjg', 'startX', '1192381bVweWy', '24px\x20Tahoma', 'left', 'contextButton', 'resize', 'save', 'clientX', 'translate', 'scale', 'setItem', 'getItem', 'getContext', 'down', 'touches', 'width', 'MINI', 'center', 'rotation', 'oldPos', 'onload', 'fillRect', 'querySelectorAll', 'changedTouches', 'gameContainer', '128', 'key', 'change', 'strokeText', 'quadraticCurveTo', '24kidmCV', 'help', '16px', 'size', 'rotate', '\x20\x20\x20\x20\x20•\x20Mini:\x20Target\x20tile\x20128\x20on\x203x3\x20grid', 'fillText', 'find', 'value', 'Exit', 'fontWeight', 'titleScreen.jpg', 'bold', 'push', 'Classic:\x20', 'rotationSpeed', '3673143VHGXIF', '887928gOFxmx', 'clearRect', 'Tahoma', 'col', '24px\x20Times', 'forEach', '48px', 'filter', 'row', 'split', 'life', 'clientY', 'innerHeight', '56px', 'touchend', '2727109SZnwSX', 'endX', 'length', 'height', 'High\x20Scores:', ',\x20100%,\x2050%)', 'black', '\x20\x20\x20\x20\x20•\x20Combine\x20tiles\x20to\x20reach\x20the\x20target\x20tile', 'gainsboro', 'potatopastys2048HighScore_MINI', 'min', 'fillStyle', 'potatopastys2048HighScore_EXTENDED', 'textAlign', 'drawImage', '\x20\x20\x20\x20\x20•\x20Keep\x20your\x20highest\x20value\x20tile\x20in\x20the\x20corner', '18px\x20Tahoma', 'Help', 'input[name=\x22gameVariant\x22]', 'restore', 'CLASSIC', 'slice', '1360278jOFglg', 'color', 'atan2', 'titleScreen', 'YOU\x20WIN!', '1024', 'lineTo', 'title.png', 'concat', 'getElementById', 'floor', 'orientationchange', 'potatopastys2048HighScore_', '942665lXXDSi', 'Arial\x20Black', 'hsl(', 'some', 'font', '\x20\x20\x20\x20\x20•\x20Easy:\x20Target\x20tile\x201024\x20on\x204x4\x20grid', 'draw', 'Easy:\x20', '3px\x20solid\x20black', 'right', 'closePath', 'touchcancel', 'Tip:', 'add', '\x20\x20\x20\x20\x20•\x20Arrow\x20Keys:\x20Move\x20tiles', 'update', 'max', 'innerWidth', 'ArrowRight', 'velocity', 'textBaseline', 'backgroundColor', 'target', 'potatopastys2048HighScore_EASY', 'beginPath', 'gameOver', 'borderRadius', 'random', 'fill', '24px', 'sqrt', '28rXzQft', 'strokeStyle', 'reverse'];
    _0x5598 = function() {
        return _0x2abc28;
    };
    return _0x5598();
}
let gridTotalSize = boardSize * tileSize + (boardSize - 0x1) * margin,
    startX = (ORIGINAL_WIDTH - gridTotalSize) / 0x2,
    startY = (ORIGINAL_HEIGHT - gridTotalSize) / 0x2 + 0xa,
    score = 0x0,
    highScore = 0x0,
    highScores = {
        'MINI': parseInt(localStorage['getItem'](_0x5d0821(0x1f8)) || '0', 0xa),
        'EASY': parseInt(localStorage[_0x5d0821(0x1bc)](_0x5d0821(0x182)) || '0', 0xa),
        'CLASSIC': parseInt(localStorage[_0x5d0821(0x1bc)](_0x5d0821(0x1af)) || '0', 0xa),
        'EXTENDED': parseInt(localStorage[_0x5d0821(0x1bc)](_0x5d0821(0x1fb)) || '0', 0xa)
    },
    hasWon = ![],
    particles = [],
    isAnimating = ![],
    animationTiles = [],
    animationFrame = 0x0,
    animationDuration = 0x5,
    mergedPositions = [],
    popAnimationActive = ![],
    popAnimationFrame = 0x0;
const popAnimationDuration = 0xa,
    BORDER_SETTINGS = {
        'width': 0x4,
        'color': _0x5d0821(0x1f5),
        'backgroundColor': 'black'
    };
let spritesheet = new Image();
spritesheet['src'] = 'spritesheet.png';
let titleImage = new Image();
titleImage['src'] = _0x5d0821(0x20c);
let titleScreenImage = new Image();
titleScreenImage['src'] = _0x5d0821(0x1da);
class Particle {
    constructor(_0x13010a, _0xd386a4) {
        const _0x3f2339 = _0x5d0821;
        this['x'] = _0x13010a, this['y'] = _0xd386a4, this[_0x3f2339(0x17e)] = {
            'x': (Math[_0x3f2339(0x186)]() - 0.5) * 0xa,
            'y': Math[_0x3f2339(0x186)]() * -0xa
        }, this[_0x3f2339(0x206)] = _0x3f2339(0x214) + Math[_0x3f2339(0x186)]() * 0x168 + _0x3f2339(0x1f4), this[_0x3f2339(0x1c0)] = Math['random']() * 0x2 + 0x5, this[_0x3f2339(0x1f2)] = this[_0x3f2339(0x1c0)], this[_0x3f2339(0x1c3)] = Math[_0x3f2339(0x186)]() * Math['PI'] * 0x2, this['rotationSpeed'] = (Math[_0x3f2339(0x186)]() - 0.5) * 0.2, this['life'] = 0xc8;
    }[_0x5d0821(0x221)]() {
        const _0x36f6d8 = _0x5d0821;
        this['x'] += this[_0x36f6d8(0x17e)]['x'], this['y'] += this['velocity']['y'], this[_0x36f6d8(0x17e)]['y'] += 0.1, this['rotation'] += this[_0x36f6d8(0x1de)], this[_0x36f6d8(0x1ea)] -= 0x1;
    }['draw'](_0x32e6f2) {
        const _0x714cb8 = _0x5d0821;
        _0x32e6f2[_0x714cb8(0x1b7)](), _0x32e6f2[_0x714cb8(0x1b9)](this['x'], this['y']), _0x32e6f2[_0x714cb8(0x1d3)](this['rotation']), _0x32e6f2[_0x714cb8(0x1fa)] = this[_0x714cb8(0x206)], _0x32e6f2[_0x714cb8(0x1c6)](-this[_0x714cb8(0x1c0)] / 0x2, -this['height'] / 0x2, this['width'] * 0x2, this['height']), _0x32e6f2[_0x714cb8(0x202)]();
    }
}

function gameLoop() {
    const _0x268fe2 = _0x5d0821,
        _0xafcbca = document[_0x268fe2(0x20e)](_0x268fe2(0x1b5));
    _0xafcbca[_0x268fe2(0x1a6)] = gameState === _0x268fe2(0x208) ? _0x268fe2(0x200) : _0x268fe2(0x1d8);
    switch (gameState) {
        case _0x268fe2(0x208):
            drawTitleScreen(), enableRadioButtons(!![]);
            break;
        case 'gamePlay':
            drawGame();
            if (!isAnimating) drawScore();
            else popAnimationActive ? drawPopAnimation() : drawAnimationFrame();
            enableRadioButtons(![]);
            break;
        case _0x268fe2(0x184):
            enableRadioButtons(!![]), drawGame(), drawGameOverScreen();
            break;
        case _0x268fe2(0x1d0):
            enableRadioButtons(![]), drawHelpScreen();
            break;
        case _0x268fe2(0x192):
            enableRadioButtons(!![]), drawGame(), drawWinScreen(), updateWinParticles();
            break;
    }
    requestAnimationFrame(gameLoop);
}

function initGame() {
    const _0x255cf2 = _0x5d0821;
    boardSize = currentVariant[_0x255cf2(0x1d2)], tileSize = currentVariant['tileSize'], gridTotalSize = boardSize * tileSize + (boardSize - 0x1) * margin, startX = (ORIGINAL_WIDTH - gridTotalSize) / 0x2, startY = (ORIGINAL_HEIGHT - gridTotalSize) / 0x2 + 0xa, gameBoard = Array(boardSize)[_0x255cf2(0x187)]()[_0x255cf2(0x19b)](() => Array(boardSize)[_0x255cf2(0x187)](0x0)), hasWon = ![], score = 0x0, drawScore(), placeRandomTile(), placeRandomTile();
}

function resetGame() {
    const _0x309dc3 = _0x5d0821;
    initGame(), gameState = _0x309dc3(0x1a0);
}

function placeRandomTile() {
    const _0x333afe = _0x5d0821;
    let _0x55c508 = ![];
    while (!_0x55c508) {
        let _0xd322f7 = Math[_0x333afe(0x20f)](Math[_0x333afe(0x186)]() * boardSize),
            _0x766fe7 = Math['floor'](Math[_0x333afe(0x186)]() * boardSize);
        gameBoard[_0xd322f7][_0x766fe7] === 0x0 && (gameBoard[_0xd322f7][_0x766fe7] = Math['random']() > 0.9 ? 0x4 : 0x2, _0x55c508 = !![]);
    }
}

function placeRandomTileOnBoard(_0x455a67) {
    const _0x57e999 = _0x5d0821;
    let _0x23e02c = [];
    for (let _0xc1b46a = 0x0; _0xc1b46a < boardSize; _0xc1b46a++) {
        for (let _0xe5ad13 = 0x0; _0xe5ad13 < boardSize; _0xe5ad13++) {
            if (_0x455a67[_0xc1b46a][_0xe5ad13] === 0x0) _0x23e02c[_0x57e999(0x1dc)]({
                'r': _0xc1b46a,
                'c': _0xe5ad13
            });
        }
    }
    if (_0x23e02c['length'] > 0x0) {
        let _0x3c3d15 = _0x23e02c[Math[_0x57e999(0x20f)](Math['random']() * _0x23e02c[_0x57e999(0x1f1)])];
        _0x455a67[_0x3c3d15['r']][_0x3c3d15['c']] = Math[_0x57e999(0x186)]() > 0.9 ? 0x4 : 0x2;
    }
}

function drawGame() {
    const _0x842aaf = _0x5d0821;
    ctx[_0x842aaf(0x1e1)](0x0, 0x0, ORIGINAL_WIDTH, ORIGINAL_HEIGHT), drawPlayboard(startX, startY, gridTotalSize, BORDER_SETTINGS[_0x842aaf(0x1c0)], BORDER_SETTINGS[_0x842aaf(0x206)], BORDER_SETTINGS[_0x842aaf(0x180)]);
    for (let _0x31cc4b = 0x0; _0x31cc4b < boardSize; _0x31cc4b++) {
        for (let _0x5ba7cf = 0x0; _0x5ba7cf < boardSize; _0x5ba7cf++) {
            drawTile(_0x31cc4b, _0x5ba7cf, startX, startY, gameBoard[_0x31cc4b][_0x5ba7cf]);
        }
    }
}

function drawPlayboard(_0x5ef2b7, _0xe89b62, _0x3998ba, _0x3be98e, _0x4e155b, _0x3b78f5) {
    const _0x262d1a = _0x5d0821,
        _0x2f6794 = 0xa,
        _0x37ae0c = _0x5ef2b7 - _0x3be98e,
        _0x35fd00 = _0xe89b62 - _0x3be98e,
        _0x162995 = _0x3998ba + 0x2 * _0x3be98e,
        _0x1185be = _0x162995;
    ctx[_0x262d1a(0x183)](), ctx[_0x262d1a(0x19d)](_0x37ae0c + _0x2f6794, _0x35fd00), ctx['lineTo'](_0x37ae0c + _0x162995 - _0x2f6794, _0x35fd00), ctx[_0x262d1a(0x1ce)](_0x37ae0c + _0x162995, _0x35fd00, _0x37ae0c + _0x162995, _0x35fd00 + _0x2f6794), ctx[_0x262d1a(0x20b)](_0x37ae0c + _0x162995, _0x35fd00 + _0x1185be - _0x2f6794), ctx[_0x262d1a(0x1ce)](_0x37ae0c + _0x162995, _0x35fd00 + _0x1185be, _0x37ae0c + _0x162995 - _0x2f6794, _0x35fd00 + _0x1185be), ctx[_0x262d1a(0x20b)](_0x37ae0c + _0x2f6794, _0x35fd00 + _0x1185be), ctx[_0x262d1a(0x1ce)](_0x37ae0c, _0x35fd00 + _0x1185be, _0x37ae0c, _0x35fd00 + _0x1185be - _0x2f6794), ctx[_0x262d1a(0x20b)](_0x37ae0c, _0x35fd00 + _0x2f6794), ctx[_0x262d1a(0x1ce)](_0x37ae0c, _0x35fd00, _0x37ae0c + _0x2f6794, _0x35fd00), ctx[_0x262d1a(0x21c)](), ctx[_0x262d1a(0x1fa)] = _0x3b78f5, ctx[_0x262d1a(0x187)]();
    const _0x3679f4 = 0x5;
    for (let _0x19075c = 0x0; _0x19075c < boardSize; _0x19075c++) {
        for (let _0x54de9f = 0x0; _0x54de9f < boardSize; _0x54de9f++) {
            const _0x467b61 = _0x5ef2b7 + _0x54de9f * (tileSize + margin),
                _0x130adb = _0xe89b62 + _0x19075c * (tileSize + margin);
            ctx[_0x262d1a(0x183)](), ctx[_0x262d1a(0x19d)](_0x467b61 + _0x3679f4, _0x130adb), ctx['lineTo'](_0x467b61 + tileSize - _0x3679f4, _0x130adb), ctx['quadraticCurveTo'](_0x467b61 + tileSize, _0x130adb, _0x467b61 + tileSize, _0x130adb + _0x3679f4), ctx['lineTo'](_0x467b61 + tileSize, _0x130adb + tileSize - _0x3679f4), ctx[_0x262d1a(0x1ce)](_0x467b61 + tileSize, _0x130adb + tileSize, _0x467b61 + tileSize - _0x3679f4, _0x130adb + tileSize), ctx[_0x262d1a(0x20b)](_0x467b61 + _0x3679f4, _0x130adb + tileSize), ctx['quadraticCurveTo'](_0x467b61, _0x130adb + tileSize, _0x467b61, _0x130adb + tileSize - _0x3679f4), ctx['lineTo'](_0x467b61, _0x130adb + _0x3679f4), ctx[_0x262d1a(0x1ce)](_0x467b61, _0x130adb, _0x467b61 + _0x3679f4, _0x130adb), ctx[_0x262d1a(0x21c)](), ctx[_0x262d1a(0x1fa)] = _0x262d1a(0x1f7), ctx[_0x262d1a(0x187)]();
        }
    }
}
const tileMap = {
    0x2: {
        'x': 0x0,
        'y': 0x0
    },
    0x4: {
        'x': 0x64,
        'y': 0x0
    },
    0x8: {
        'x': 0xc8,
        'y': 0x0
    },
    0x10: {
        'x': 0x12c,
        'y': 0x0
    },
    0x20: {
        'x': 0x190,
        'y': 0x0
    },
    0x40: {
        'x': 0x1f4,
        'y': 0x0
    },
    0x80: {
        'x': 0x0,
        'y': 0x64
    },
    0x100: {
        'x': 0x64,
        'y': 0x64
    },
    0x200: {
        'x': 0xc8,
        'y': 0x64
    },
    0x400: {
        'x': 0x12c,
        'y': 0x64
    },
    0x800: {
        'x': 0x190,
        'y': 0x64
    },
    0x1000: {
        'x': 0x1f4,
        'y': 0x64
    }
};

function drawTile(_0x1d1549, _0x4de916, _0x225526, _0x3b8d99, _0xdcc7cc, _0x1843c2 = 0x1) {
    const _0x170df7 = _0x5d0821;
    if (_0xdcc7cc === 0x0) return;
    const _0x4e754e = _0x225526 + _0x4de916 * (tileSize + margin),
        _0x17e01d = _0x3b8d99 + _0x1d1549 * (tileSize + margin);
    let _0x5d3171 = tileMap[_0xdcc7cc];
    if (!_0x5d3171) return;
    _0x1843c2 !== 0x1 ? (ctx[_0x170df7(0x1b7)](), ctx[_0x170df7(0x1b9)](_0x4e754e + tileSize / 0x2, _0x17e01d + tileSize / 0x2), ctx[_0x170df7(0x1ba)](_0x1843c2, _0x1843c2), ctx[_0x170df7(0x1b9)](-tileSize / 0x2, -tileSize / 0x2), ctx[_0x170df7(0x1fd)](spritesheet, _0x5d3171['x'], _0x5d3171['y'], SPRITE_SIZE, SPRITE_SIZE, 0x0, 0x0, tileSize, tileSize), ctx[_0x170df7(0x202)]()) : ctx['drawImage'](spritesheet, _0x5d3171['x'], _0x5d3171['y'], SPRITE_SIZE, SPRITE_SIZE, _0x4e754e, _0x17e01d, tileSize, tileSize);
}

function animateMove(_0x1e37b9, _0x35b18c, _0x378cf0) {
    const _0x2addb2 = _0x5d0821;
    isAnimating = !![], animationTiles = [], animationFrame = 0x0, finalBoardTemp = _0x35b18c[_0x2addb2(0x19b)](_0x38a8b5 => _0x38a8b5[_0x2addb2(0x204)]()), mergedPositions = [];
    const _0x5360ed = detectMerges(_0x378cf0);
    _0x5360ed[_0x2addb2(0x1e5)](_0x557ce9 => {
        const _0x4b7b63 = _0x2addb2,
            [_0x1e4a19, _0x314a6b] = _0x557ce9[_0x4b7b63(0x1e9)](',')['map'](Number);
        mergedPositions[_0x4b7b63(0x1dc)]({
            'row': _0x1e4a19,
            'col': _0x314a6b
        });
    });
    for (let _0x1f5dd5 of _0x378cf0) {
        const _0x5c2be0 = {
                'x': startX + _0x1f5dd5['fromCol'] * (tileSize + margin),
                'y': startY + _0x1f5dd5[_0x2addb2(0x195)] * (tileSize + margin)
            },
            _0x57e9b6 = {
                'x': startX + _0x1f5dd5['toCol'] * (tileSize + margin),
                'y': startY + _0x1f5dd5[_0x2addb2(0x196)] * (tileSize + margin)
            };
        animationTiles[_0x2addb2(0x1dc)]({
            'value': _0x1f5dd5['value'],
            'startX': _0x5c2be0['x'],
            'startY': _0x5c2be0['y'],
            'endX': _0x57e9b6['x'],
            'endY': _0x57e9b6['y']
        });
    }
    setTimeout(() => {
        const _0x59e56 = _0x2addb2;
        mergedPositions[_0x59e56(0x1f1)] > 0x0 ? (popAnimationActive = !![], popAnimationFrame = 0x0, gameBoard = _0x35b18c) : finalizeAnimation(_0x35b18c);
    }, animationDuration * 16.7);
}

function drawAnimationFrame() {
    const _0x33da26 = _0x5d0821;
    ctx[_0x33da26(0x1e1)](0x0, 0x0, ORIGINAL_WIDTH, ORIGINAL_HEIGHT), drawPlayboard(startX, startY, gridTotalSize, BORDER_SETTINGS[_0x33da26(0x1c0)], BORDER_SETTINGS[_0x33da26(0x206)], BORDER_SETTINGS[_0x33da26(0x180)]);
    for (let _0x52c310 = 0x0; _0x52c310 < boardSize; _0x52c310++) {
        for (let _0x124045 = 0x0; _0x124045 < boardSize; _0x124045++) {
            drawTile(_0x52c310, _0x124045, startX, startY, 0x0);
        }
    }
    let _0x22da14 = new Set();
    for (let _0xf1741d of animationTiles) {
        let _0x2dce14 = (_0xf1741d[_0x33da26(0x1b1)] - startX) / (tileSize + margin),
            _0x2c210e = (_0xf1741d[_0x33da26(0x198)] - startY) / (tileSize + margin);
        _0x22da14[_0x33da26(0x21f)](_0x2c210e + ',' + _0x2dce14);
    }
    for (let _0x4dc8c3 = 0x0; _0x4dc8c3 < boardSize; _0x4dc8c3++) {
        for (let _0x2e26d2 = 0x0; _0x2e26d2 < boardSize; _0x2e26d2++) {
            let _0x19d31a = gameBoard[_0x4dc8c3][_0x2e26d2];
            _0x19d31a !== 0x0 && (!_0x22da14[_0x33da26(0x197)](_0x4dc8c3 + ',' + _0x2e26d2) && drawTile(_0x4dc8c3, _0x2e26d2, startX, startY, _0x19d31a));
        }
    }
    let _0x1d309e = animationFrame / animationDuration;
    if (_0x1d309e > 0x1) _0x1d309e = 0x1;
    for (let _0x3eec02 of animationTiles) {
        let _0x371232 = _0x3eec02[_0x33da26(0x1b1)] + (_0x3eec02[_0x33da26(0x1f0)] - _0x3eec02['startX']) * _0x1d309e,
            _0x3f3d30 = _0x3eec02[_0x33da26(0x198)] + (_0x3eec02['endY'] - _0x3eec02[_0x33da26(0x198)]) * _0x1d309e;
        drawTileAtPosition(_0x3eec02[_0x33da26(0x1d7)], _0x371232, _0x3f3d30);
    }
    drawScore(), animationFrame < animationDuration && animationFrame++;
}

function drawTileAtPosition(_0x4b6679, _0x230d6b, _0x30e6cf) {
    const _0x3abd4e = _0x5d0821;
    let _0x2279e9 = tileMap[_0x4b6679];
    if (!_0x2279e9) return;
    ctx[_0x3abd4e(0x1fd)](spritesheet, _0x2279e9['x'], _0x2279e9['y'], SPRITE_SIZE, SPRITE_SIZE, _0x230d6b, _0x30e6cf, tileSize, tileSize);
}

function detectMerges(_0x86b2c2) {
    const _0x628eec = _0x5d0821;
    let _0x1ef50a = {};
    for (let _0x497434 of _0x86b2c2) {
        let _0x5e3aeb = _0x497434[_0x628eec(0x196)] + ',' + _0x497434[_0x628eec(0x191)];
        _0x1ef50a[_0x5e3aeb] = (_0x1ef50a[_0x5e3aeb] || 0x0) + 0x1;
    }
    let _0x3139e3 = new Set();
    for (let _0x167dc1 in _0x1ef50a) {
        _0x1ef50a[_0x167dc1] > 0x1 && _0x3139e3[_0x628eec(0x21f)](_0x167dc1);
    }
    return _0x3139e3;
}
let finalBoardTemp = null;

function finalizeAnimation(_0x1d2f5d) {
    const _0x3d311a = _0x5d0821;
    gameBoard = _0x1d2f5d, isAnimating = ![], animationTiles = [], popAnimationActive = ![], finalBoardTemp = null, mergedPositions = [], drawScore(), checkForWin(), checkGameOver() && (gameState = _0x3d311a(0x184));
}

function prepareMove(_0x24506a) {
    const _0x17cb53 = _0x5d0821,
        _0x26475a = gameBoard[_0x17cb53(0x19b)](_0x1832b8 => _0x1832b8[_0x17cb53(0x204)]());
    let _0x5e9f80, _0x48716a, _0x24d739;
    switch (_0x24506a) {
        case 'up':
            ({
                moved: _0x5e9f80,
                animations: _0x48716a,
                newBoard: _0x24d739
            } = moveAndAnimateUp(_0x26475a));
            break;
        case _0x17cb53(0x1be):
            ({
                moved: _0x5e9f80,
                animations: _0x48716a,
                newBoard: _0x24d739
            } = moveAndAnimateDown(_0x26475a));
            break;
        case 'left':
            ({
                moved: _0x5e9f80,
                animations: _0x48716a,
                newBoard: _0x24d739
            } = moveAndAnimateLeft(_0x26475a));
            break;
        case _0x17cb53(0x21b):
            ({
                moved: _0x5e9f80,
                animations: _0x48716a,
                newBoard: _0x24d739
            } = moveAndAnimateRight(_0x26475a));
            break;
    }
    return {
        'moved': _0x5e9f80,
        'animations': _0x48716a,
        'oldBoard': _0x26475a,
        'newBoard': _0x24d739
    };
}

function moveAndAnimateUp(_0x3813c2) {
    const _0x6a7e8e = _0x5d0821;
    let _0x101f64 = _0x3813c2['map'](_0x3a6ff3 => _0x3a6ff3['slice']()),
        _0x1911e6 = [],
        _0x23dcb0 = ![];
    for (let _0x4397e8 = 0x0; _0x4397e8 < boardSize; _0x4397e8++) {
        let _0x426d8c = _0x101f64[_0x6a7e8e(0x19b)](_0x224146 => _0x224146[_0x4397e8]),
            {
                newLine: _0x531684,
                lineAnimations: _0x57ceb2,
                lineMoved: _0x3cf61f
            } = compressLine(_0x426d8c, 'up', _0x4397e8);
        for (let _0x265d0c = 0x0; _0x265d0c < boardSize; _0x265d0c++) {
            _0x101f64[_0x265d0c][_0x4397e8] = _0x531684[_0x265d0c];
        }
        _0x1911e6 = _0x1911e6[_0x6a7e8e(0x20d)](_0x57ceb2), _0x23dcb0 = _0x23dcb0 || _0x3cf61f;
    }
    return {
        'moved': _0x23dcb0,
        'animations': _0x1911e6,
        'newBoard': _0x101f64
    };
}

function moveAndAnimateDown(_0x2c6997) {
    const _0x21dec7 = _0x5d0821;
    let _0x43eb03 = _0x2c6997[_0x21dec7(0x19b)](_0x54d2f4 => _0x54d2f4[_0x21dec7(0x204)]()),
        _0x156142 = [],
        _0x159ece = ![];
    for (let _0x5229fb = 0x0; _0x5229fb < boardSize; _0x5229fb++) {
        let _0x380176 = _0x43eb03[_0x21dec7(0x19b)](_0x270dc2 => _0x270dc2[_0x5229fb]),
            {
                newLine: _0x25c212,
                lineAnimations: _0x420661,
                lineMoved: _0x33ef06
            } = compressLine(_0x380176, 'down', _0x5229fb);
        for (let _0x1a3ab5 = 0x0; _0x1a3ab5 < boardSize; _0x1a3ab5++) {
            _0x43eb03[_0x1a3ab5][_0x5229fb] = _0x25c212[_0x1a3ab5];
        }
        _0x156142 = _0x156142[_0x21dec7(0x20d)](_0x420661), _0x159ece = _0x159ece || _0x33ef06;
    }
    return {
        'moved': _0x159ece,
        'animations': _0x156142,
        'newBoard': _0x43eb03
    };
}

function moveAndAnimateLeft(_0x2550e2) {
    const _0x512a35 = _0x5d0821;
    let _0x2a5885 = _0x2550e2[_0x512a35(0x19b)](_0x3a405a => _0x3a405a[_0x512a35(0x204)]()),
        _0x58db61 = [],
        _0x37bba1 = ![];
    for (let _0x7721e1 = 0x0; _0x7721e1 < boardSize; _0x7721e1++) {
        let _0x4192e1 = _0x2a5885[_0x7721e1]['slice'](),
            {
                newLine: _0x14eaba,
                lineAnimations: _0x4a018f,
                lineMoved: _0x4af8d0
            } = compressLine(_0x4192e1, _0x512a35(0x1b4), _0x7721e1);
        _0x2a5885[_0x7721e1] = _0x14eaba, _0x58db61 = _0x58db61['concat'](_0x4a018f), _0x37bba1 = _0x37bba1 || _0x4af8d0;
    }
    return {
        'moved': _0x37bba1,
        'animations': _0x58db61,
        'newBoard': _0x2a5885
    };
}

function moveAndAnimateRight(_0x1a8b1e) {
    const _0x175c30 = _0x5d0821;
    let _0xb4bff = _0x1a8b1e['map'](_0x312cae => _0x312cae[_0x175c30(0x204)]()),
        _0x27822a = [],
        _0x37faeb = ![];
    for (let _0x90f363 = 0x0; _0x90f363 < boardSize; _0x90f363++) {
        let _0x4bda3b = _0xb4bff[_0x90f363][_0x175c30(0x204)](),
            {
                newLine: _0x5090cf,
                lineAnimations: _0x40c212,
                lineMoved: _0x102b2f
            } = compressLine(_0x4bda3b, _0x175c30(0x21b), _0x90f363);
        _0xb4bff[_0x90f363] = _0x5090cf, _0x27822a = _0x27822a[_0x175c30(0x20d)](_0x40c212), _0x37faeb = _0x37faeb || _0x102b2f;
    }
    return {
        'moved': _0x37faeb,
        'animations': _0x27822a,
        'newBoard': _0xb4bff
    };
}

function compressLine(_0x47075f, _0x59bdbc, _0x5a333e) {
    const _0x8fd7b = _0x5d0821;
    let _0x5c7ff4 = _0x59bdbc === _0x8fd7b(0x1be) || _0x59bdbc === _0x8fd7b(0x21b),
        _0x4f93b9 = _0x47075f['slice']();
    _0x5c7ff4 && _0x4f93b9[_0x8fd7b(0x18c)]();
    let _0x454b61 = _0x4f93b9[_0x8fd7b(0x1e7)](_0x66e950 => _0x66e950 !== 0x0),
        _0x194f99 = [];
    for (let _0x163677 = 0x0; _0x163677 < _0x454b61[_0x8fd7b(0x1f1)]; _0x163677++) {
        if (_0x454b61[_0x163677] === _0x454b61[_0x163677 + 0x1]) {
            let _0x41e291 = _0x454b61[_0x163677] * 0x2;
            _0x194f99['push'](_0x41e291), score += _0x41e291, _0x163677++;
        } else _0x194f99[_0x8fd7b(0x1dc)](_0x454b61[_0x163677]);
    }
    while (_0x194f99[_0x8fd7b(0x1f1)] < boardSize) {
        _0x194f99[_0x8fd7b(0x1dc)](0x0);
    }
    _0x5c7ff4 && (_0x194f99[_0x8fd7b(0x18c)](), _0x4f93b9[_0x8fd7b(0x18c)]());
    let _0x252c06 = calcAnimations(_0x47075f, _0x194f99, _0x59bdbc, _0x5a333e),
        _0x5537bd = !arraysEqual(_0x47075f, _0x194f99);
    return {
        'newLine': _0x194f99,
        'lineAnimations': _0x252c06,
        'lineMoved': _0x5537bd
    };
}

function calcAnimations(_0x36d2ff, _0x4f0010, _0xe8541b, _0x231516) {
    const _0x5e5eda = _0x5d0821;
    let _0x2af1f8 = [];
    for (let _0x54fb74 = 0x0; _0x54fb74 < _0x36d2ff[_0x5e5eda(0x1f1)]; _0x54fb74++) {
        if (_0x36d2ff[_0x54fb74] !== 0x0) _0x2af1f8[_0x5e5eda(0x1dc)]({
            'value': _0x36d2ff[_0x54fb74],
            'oldPos': _0x54fb74
        });
    }
    let _0x3b62de = [];
    for (let _0x2d4b59 = 0x0; _0x2d4b59 < _0x4f0010[_0x5e5eda(0x1f1)]; _0x2d4b59++) {
        if (_0x4f0010[_0x2d4b59] !== 0x0) _0x3b62de[_0x5e5eda(0x1dc)]({
            'value': _0x4f0010[_0x2d4b59],
            'newPos': _0x2d4b59
        });
    }
    let _0x117360 = [],
        _0x19cb08 = 0x0;
    for (let _0x2a1afb = 0x0; _0x2a1afb < _0x3b62de['length']; _0x2a1afb++) {
        let _0x211c36 = _0x3b62de[_0x2a1afb][_0x5e5eda(0x1d7)],
            _0x44bced = 0x1,
            _0x362fd1 = _0x211c36 / 0x2;
        _0x19cb08 + 0x1 < _0x2af1f8[_0x5e5eda(0x1f1)] && _0x2af1f8[_0x19cb08]['value'] === _0x362fd1 && _0x2af1f8[_0x19cb08 + 0x1][_0x5e5eda(0x1d7)] === _0x362fd1 && (_0x44bced = 0x2);
        for (let _0x323039 = 0x0; _0x323039 < _0x44bced; _0x323039++) {
            let _0x47a709 = _0x2af1f8[_0x19cb08][_0x5e5eda(0x1c4)],
                _0x500c52 = _0x3b62de[_0x2a1afb]['newPos'];
            _0x117360['push'](buildAnimation(_0xe8541b, _0x231516, _0x47a709, _0x500c52, _0x2af1f8[_0x19cb08][_0x5e5eda(0x1d7)])), _0x19cb08++;
        }
    }
    return _0x117360;
}

function buildAnimation(_0x4012a8, _0x55a51d, _0x51835b, _0x5dd69e, _0x4430c8) {
    const _0x1dc297 = _0x5d0821;
    let _0x1bbef3, _0x1989bf, _0xc24036, _0x289506;
    return _0x4012a8 === 'up' || _0x4012a8 === _0x1dc297(0x1be) ? (_0x1bbef3 = _0x51835b, _0xc24036 = _0x5dd69e, _0x1989bf = _0x55a51d, _0x289506 = _0x55a51d) : (_0x1989bf = _0x5dd69e, _0x1bbef3 = _0x55a51d, _0x1989bf = _0x51835b, _0xc24036 = _0x55a51d, _0x289506 = _0x5dd69e), {
        'fromRow': _0x1bbef3,
        'fromCol': _0x1989bf,
        'toRow': _0xc24036,
        'toCol': _0x289506,
        'value': _0x4430c8
    };
}

function arraysEqual(_0x1bf013, _0x300ed5) {
    const _0x3a54e9 = _0x5d0821;
    if (_0x1bf013[_0x3a54e9(0x1f1)] !== _0x300ed5['length']) return ![];
    for (let _0x1a8fb4 = 0x0; _0x1a8fb4 < _0x1bf013[_0x3a54e9(0x1f1)]; _0x1a8fb4++) {
        if (_0x1bf013[_0x1a8fb4] !== _0x300ed5[_0x1a8fb4]) return ![];
    }
    return !![];
}

function drawPopAnimation() {
    const _0x284044 = _0x5d0821;
    ctx['clearRect'](0x0, 0x0, ORIGINAL_WIDTH, ORIGINAL_HEIGHT), drawPlayboard(startX, startY, gridTotalSize, BORDER_SETTINGS[_0x284044(0x1c0)], BORDER_SETTINGS['color'], BORDER_SETTINGS[_0x284044(0x180)]);
    let _0x1f109d = popAnimationFrame / popAnimationDuration,
        _0xf65384 = 0x1;
    _0x1f109d <= 0.5 ? _0xf65384 = 0x1 + 0.2 * (_0x1f109d * 0x2) : _0xf65384 = 1.2 - 0.2 * ((_0x1f109d - 0.5) * 0x2);
    for (let _0x268d7f = 0x0; _0x268d7f < boardSize; _0x268d7f++) {
        for (let _0x8f0306 = 0x0; _0x8f0306 < boardSize; _0x8f0306++) {
            let _0x45b969 = mergedPositions[_0x284044(0x215)](_0x28da36 => _0x28da36[_0x284044(0x1e8)] === _0x268d7f && _0x28da36[_0x284044(0x1e3)] === _0x8f0306);
            _0x45b969 ? drawTile(_0x268d7f, _0x8f0306, startX, startY, gameBoard[_0x268d7f][_0x8f0306], _0xf65384) : drawTile(_0x268d7f, _0x8f0306, startX, startY, gameBoard[_0x268d7f][_0x8f0306]);
        }
    }
    drawScore(), popAnimationFrame++, popAnimationFrame >= popAnimationDuration && (popAnimationActive = ![], finalizeAnimation(gameBoard));
}

function drawScore() {
    const _0x5c0b0d = _0x5d0821,
        _0x3a3988 = 0x14,
        _0x3d39e4 = 0x16,
        _0x469658 = ORIGINAL_WIDTH - 0x14,
        _0x2a802f = 0x16,
        _0x13d62f = _0x5c0b0d(0x1e4),
        _0x2a4c39 = _0x5c0b0d(0x1f5),
        _0x6c1414 = Object[_0x5c0b0d(0x1a9)](GAME_VARIANTS)[_0x5c0b0d(0x1d6)](_0x127988 => GAME_VARIANTS[_0x127988] === currentVariant);
    let _0xea5887 = highScores[_0x6c1414];
    ctx[_0x5c0b0d(0x216)] = _0x13d62f, ctx[_0x5c0b0d(0x1fa)] = _0x2a4c39, ctx[_0x5c0b0d(0x1fc)] = _0x5c0b0d(0x1b4), ctx[_0x5c0b0d(0x17f)] = 'center', ctx[_0x5c0b0d(0x1d5)](_0x5c0b0d(0x1a8) + score, _0x3a3988, _0x3d39e4), ctx[_0x5c0b0d(0x1fc)] = 'right', ctx[_0x5c0b0d(0x17f)] = _0x5c0b0d(0x1c2), ctx[_0x5c0b0d(0x1d5)]('High\x20Score:\x20' + _0xea5887, _0x469658, _0x2a802f), (gameState === _0x5c0b0d(0x1a0) || gameState === _0x5c0b0d(0x192)) && score > highScores[_0x6c1414] && (highScores[_0x6c1414] = score, localStorage[_0x5c0b0d(0x1bb)](_0x5c0b0d(0x211) + _0x6c1414, score['toString']()));
}

function _0x45ac(_0x100c3f, _0x50b0ac) {
    const _0x5598f0 = _0x5598();
    return _0x45ac = function(_0x45ac2e, _0x51251d) {
        _0x45ac2e = _0x45ac2e - 0x17c;
        let _0x210b1e = _0x5598f0[_0x45ac2e];
        return _0x210b1e;
    }, _0x45ac(_0x100c3f, _0x50b0ac);
}

function drawTitleScreen() {
    const _0x59785c = _0x5d0821;
    ctx[_0x59785c(0x1e1)](0x0, 0x0, ORIGINAL_WIDTH, ORIGINAL_HEIGHT), ctx[_0x59785c(0x1fd)](titleImage, ORIGINAL_WIDTH / 0x2 - 0xa1, 0xa, 0x183 / 1.2, 0x87 / 1.2);
    const _0x15f4ae = 0xbe,
        _0x131556 = 0xbe;
    ctx[_0x59785c(0x1fd)](titleScreenImage, ORIGINAL_WIDTH / 0x2 - _0x15f4ae / 0x2, 0x82, _0x15f4ae, _0x131556), ctx[_0x59785c(0x216)] = '20px\x20Tahoma', ctx[_0x59785c(0x1fa)] = _0x59785c(0x1f5);
    const _0x249f6b = 0x16,
        _0x55554d = 0x2d,
        _0x4feb65 = ORIGINAL_HEIGHT / 0x2 + 0x8c;
    ctx['textAlign'] = _0x59785c(0x1c2), ctx[_0x59785c(0x1d5)](_0x59785c(0x1f3), ORIGINAL_WIDTH / 0x2, _0x4feb65), ctx[_0x59785c(0x1fc)] = _0x59785c(0x1b4), ctx[_0x59785c(0x1d5)]('Mini:\x20' + highScores[_0x59785c(0x1c1)], _0x55554d - 0xa, _0x4feb65 + _0x249f6b * 0x1), ctx[_0x59785c(0x1d5)](_0x59785c(0x219) + highScores['EASY'], _0x55554d + 0xa0, _0x4feb65 + _0x249f6b * 0x1), ctx[_0x59785c(0x1d5)](_0x59785c(0x1dd) + highScores[_0x59785c(0x203)], _0x55554d - 0xa, _0x4feb65 + _0x249f6b * 0x2), ctx[_0x59785c(0x1d5)](_0x59785c(0x1a3) + highScores[_0x59785c(0x19f)], _0x55554d + 0xa0, _0x4feb65 + _0x249f6b * 0x2);
}

function winScreen() {
    const _0x1b7b2b = _0x5d0821;
    for (let _0x16dd91 = 0x0; _0x16dd91 < 0x64; _0x16dd91++) {
        particles[_0x1b7b2b(0x1dc)](new Particle(ORIGINAL_WIDTH / 0x2, ORIGINAL_HEIGHT / 0x2));
    }
    updateParticles();
}

function updateParticles() {
    const _0x1b6e67 = _0x5d0821;
    particles[_0x1b6e67(0x1e5)]((_0x5cdce4, _0x49ce63) => {
        const _0x105277 = _0x1b6e67;
        _0x5cdce4[_0x105277(0x1ea)] <= 0x0 ? particles['splice'](_0x49ce63, 0x1) : (_0x5cdce4[_0x105277(0x221)](), _0x5cdce4[_0x105277(0x218)](ctx));
    }), particles[_0x1b6e67(0x1f1)] !== 0x0 && requestAnimationFrame(updateParticles);
}

function updateWinParticles() {
    const _0x4260ff = _0x5d0821;
    particles = particles['filter'](_0x84124b => _0x84124b['life'] > 0x0), particles[_0x4260ff(0x1e5)](_0x182b50 => {
        _0x182b50['update'](), _0x182b50['draw'](ctx);
    });
}

function drawGameOverScreen() {
    const _0x12639d = _0x5d0821;
    ctx[_0x12639d(0x1fa)] = 'rgba(0,0,0,0.5)', ctx[_0x12639d(0x1c6)](0x0, 0x0, ORIGINAL_WIDTH, ORIGINAL_HEIGHT), ctx[_0x12639d(0x1d9)] = 'bold', ctx[_0x12639d(0x1fa)] = _0x12639d(0x1a2), ctx['textAlign'] = _0x12639d(0x1c2), ctx[_0x12639d(0x17f)] = _0x12639d(0x18d), drawOutlinedText(_0x12639d(0x199), ORIGINAL_WIDTH / 0x2, ORIGINAL_HEIGHT / 0x2 - 0x28, _0x12639d(0x1c2), _0x12639d(0x213), _0x12639d(0x1e6)), ctx[_0x12639d(0x1fa)] = _0x12639d(0x1a2), ctx['textAlign'] = _0x12639d(0x1c2), drawOutlinedText(_0x12639d(0x1a8) + score, ORIGINAL_WIDTH / 0x2, ORIGINAL_HEIGHT / 0x2 + 0x28, 'center', 'Tahoma', _0x12639d(0x188));
}

function drawWinScreen() {
    const _0x2c71dd = _0x5d0821;
    ctx[_0x2c71dd(0x1fa)] = 'rgba(0,0,0,0.5)', ctx[_0x2c71dd(0x1c6)](0x0, 0x0, ORIGINAL_WIDTH, ORIGINAL_HEIGHT), ctx['fontWeight'] = _0x2c71dd(0x1db), ctx['fillStyle'] = _0x2c71dd(0x1a2), ctx[_0x2c71dd(0x1fc)] = _0x2c71dd(0x1c2), ctx[_0x2c71dd(0x17f)] = 'middle', drawOutlinedText(_0x2c71dd(0x209), ORIGINAL_WIDTH / 0x2, ORIGINAL_HEIGHT / 0x2 - 0x28, 'center', 'Arial\x20Black', _0x2c71dd(0x1ed)), ctx['fillStyle'] = 'white', ctx[_0x2c71dd(0x1fc)] = 'center', drawOutlinedText('Score:\x20' + score, ORIGINAL_WIDTH / 0x2, ORIGINAL_HEIGHT / 0x2 + 0x28, _0x2c71dd(0x1c2), _0x2c71dd(0x1e2), _0x2c71dd(0x188));
}

function drawHelpScreen() {
    const _0x4ca78c = _0x5d0821;
    ctx[_0x4ca78c(0x1e1)](0x0, 0x0, ORIGINAL_WIDTH, ORIGINAL_HEIGHT), ctx[_0x4ca78c(0x216)] = _0x4ca78c(0x1b3), ctx[_0x4ca78c(0x1fa)] = _0x4ca78c(0x1f5), ctx[_0x4ca78c(0x1fc)] = 'center', ctx[_0x4ca78c(0x1d5)]('Quick\x20Start\x20Guide', ORIGINAL_WIDTH / 0x2, 0x1e), ctx[_0x4ca78c(0x216)] = _0x4ca78c(0x1ff), ctx['textAlign'] = _0x4ca78c(0x1b4);
    const _0x3d1d43 = 0x14;
    let _0x20f694 = 0x50;
    const _0x41cd94 = 0x14,
        _0x182581 = ['Goal:', _0x4ca78c(0x1f6), '', _0x4ca78c(0x1a7), _0x4ca78c(0x220), '\x20\x20\x20\x20\x20•\x20Swipe:\x20Move\x20tiles\x20on\x20mobile', '', 'Game\x20Variants:', _0x4ca78c(0x1d4), _0x4ca78c(0x217), _0x4ca78c(0x1ad), '\x20\x20\x20\x20\x20•\x20Extended:\x20Target\x20tile\x204096\x20on\x205x5\x20grid', '', _0x4ca78c(0x21e), _0x4ca78c(0x1fe)];
    _0x182581[_0x4ca78c(0x1e5)](_0x220f6b => {
        const _0x2517f3 = _0x4ca78c;
        ctx[_0x2517f3(0x1d5)](_0x220f6b, _0x3d1d43, _0x20f694), _0x20f694 += _0x41cd94;
    });
}

function drawOutlinedText(_0xbdb7b9, _0x59dd32, _0x20ca3e, _0x1cc088 = 'center', _0x59a070 = 'Arial', _0x4d0aa8 = _0x5d0821(0x1d1)) {
    const _0x2147f1 = _0x5d0821;
    ctx['textAlign'] = _0x1cc088, ctx['font'] = _0x4d0aa8 + '\x20' + _0x59a070, ctx[_0x2147f1(0x18b)] = 'black', ctx[_0x2147f1(0x19a)] = 0x6, ctx[_0x2147f1(0x1cd)](_0xbdb7b9, _0x59dd32, _0x20ca3e), ctx[_0x2147f1(0x1fa)] = _0x2147f1(0x1a2), ctx[_0x2147f1(0x1d5)](_0xbdb7b9, _0x59dd32, _0x20ca3e);
}

function boardContainsWinValue(_0x335208) {
    const _0x207d13 = _0x5d0821;
    for (let _0x3bedd4 = 0x0; _0x3bedd4 < boardSize; _0x3bedd4++) {
        for (let _0x9cb1f7 = 0x0; _0x9cb1f7 < boardSize; _0x9cb1f7++) {
            if (_0x335208[_0x3bedd4][_0x9cb1f7] === currentVariant[_0x207d13(0x194)]) return !![];
        }
    }
    return ![];
}

function checkGameOver() {
    for (let _0x2d8ddd = 0x0; _0x2d8ddd < boardSize; _0x2d8ddd++) {
        for (let _0x3605d5 = 0x0; _0x3605d5 < boardSize; _0x3605d5++) {
            if (gameBoard[_0x2d8ddd][_0x3605d5] === 0x0) return ![];
            if (_0x3605d5 < boardSize - 0x1 && gameBoard[_0x2d8ddd][_0x3605d5] === gameBoard[_0x2d8ddd][_0x3605d5 + 0x1]) return ![];
            if (_0x2d8ddd < boardSize - 0x1 && gameBoard[_0x2d8ddd][_0x3605d5] === gameBoard[_0x2d8ddd + 0x1][_0x3605d5]) return ![];
        }
    }
    return !![];
}

function checkForWin() {
    const _0xb631c1 = _0x5d0821;
    for (let _0x368a29 = 0x0; _0x368a29 < boardSize; _0x368a29++) {
        for (let _0x26f110 = 0x0; _0x26f110 < boardSize; _0x26f110++) {
            if (gameBoard[_0x368a29][_0x26f110] === currentVariant['winValue'] && !hasWon) {
                hasWon = !![], gameState = _0xb631c1(0x192), prepareWinScreen();
                return;
            }
        }
    }
}

function prepareWinScreen() {
    const _0x568c3d = _0x5d0821;
    for (let _0x526db6 = 0x0; _0x526db6 < 0x96; _0x526db6++) {
        particles[_0x568c3d(0x1dc)](new Particle(ORIGINAL_WIDTH / 0x2, ORIGINAL_HEIGHT / 0x2));
    }
    drawScore();
}

function handleMove(_0x5f992c) {
    const _0x1497a5 = _0x5d0821;
    if (isAnimating || gameState !== _0x1497a5(0x1a0)) return;
    let {
        moved: _0x1ba181,
        animations: _0x33d005,
        oldBoard: _0xfa9f76,
        newBoard: _0x25c40e
    } = prepareMove(_0x5f992c);
    _0x1ba181 && (!hasWon && boardContainsWinValue(_0x25c40e) ? (hasWon = !![], gameState = _0x1497a5(0x192), prepareWinScreen(), gameBoard = _0x25c40e, drawScore()) : (placeRandomTileOnBoard(_0x25c40e), finalBoardTemp = _0x25c40e[_0x1497a5(0x19b)](_0x25d3c5 => _0x25d3c5['slice']()), animateMove(_0xfa9f76, _0x25c40e, _0x33d005)));
}
document['addEventListener']('keydown', function(_0x2d339d) {
    const _0x59c5d7 = _0x5d0821;
    if (isAnimating) return;
    if (gameState === _0x59c5d7(0x192)) {
        if (_0x2d339d['key'] === 'r' || _0x2d339d[_0x59c5d7(0x1cb)] === 'R') initGame(), gameState = _0x59c5d7(0x1a0);
        else(_0x2d339d['key'] === 'q' || _0x2d339d[_0x59c5d7(0x1cb)] === 'Q') && (gameState = _0x59c5d7(0x208));
        return;
    }
    let _0x2ea713;
    switch (_0x2d339d[_0x59c5d7(0x1cb)]) {
        case 'ArrowUp':
            _0x2ea713 = 'up';
            break;
        case _0x59c5d7(0x1ae):
            _0x2ea713 = _0x59c5d7(0x1be);
            break;
        case 'ArrowLeft':
            _0x2ea713 = _0x59c5d7(0x1b4);
            break;
        case _0x59c5d7(0x17d):
            _0x2ea713 = _0x59c5d7(0x21b);
            break;
    }
    _0x2ea713 && (_0x2d339d['preventDefault'](), handleMove(_0x2ea713));
    if (_0x2ea713 && gameState === _0x59c5d7(0x1a0)) {
        _0x2d339d['preventDefault']();
        let {
            moved: _0x49c631,
            animations: _0x357121,
            oldBoard: _0x2451b1,
            newBoard: _0x3d9715
        } = prepareMove(_0x2ea713);
        _0x49c631 && (!hasWon && boardContainsWinValue(_0x3d9715) ? (hasWon = !![], gameState = 'gameWon', prepareWinScreen(), gameBoard = _0x3d9715, drawScore()) : (placeRandomTileOnBoard(_0x3d9715), finalBoardTemp = _0x3d9715[_0x59c5d7(0x19b)](_0xcb9bee => _0xcb9bee['slice']()), animateMove(_0x2451b1, _0x3d9715, _0x357121)));
    }(_0x2d339d['key'] === 'd' || _0x2d339d[_0x59c5d7(0x1cb)] === 'D') && cheatToWin();
});

function handleSwipe(_0xb13225, _0x50456e) {
    const _0x3a694a = _0x5d0821,
        _0xebc6ec = Math[_0x3a694a(0x189)](_0xb13225 * _0xb13225 + _0x50456e * _0x50456e);
    if (_0xebc6ec < minSwipeDistance) return;
    const _0x2edad1 = Math[_0x3a694a(0x207)](_0x50456e, _0xb13225) * 0xb4 / Math['PI'],
        _0x5cfd48 = 0x1e;
    if (Math[_0x3a694a(0x19e)](_0x2edad1) <= _0x5cfd48) handleMove(_0x3a694a(0x21b));
    else {
        if (_0x2edad1 >= 0x96 || _0x2edad1 <= -0x96) handleMove(_0x3a694a(0x1b4));
        else {
            if (_0x2edad1 <= -0x3c && _0x2edad1 >= -0x78) handleMove('up');
            else _0x2edad1 >= 0x3c && _0x2edad1 <= 0x78 && handleMove(_0x3a694a(0x1be));
        }
    }
}
let touchInProgress = ![];
canvas[_0x5d0821(0x1a5)]('touchstart', function(_0x48b6aa) {
    const _0x20a577 = _0x5d0821;
    if (touchInProgress || _0x48b6aa['touches'][_0x20a577(0x1f1)] > 0x1) {
        _0x48b6aa['preventDefault']();
        return;
    }
    touchInProgress = !![], touchStartX = _0x48b6aa[_0x20a577(0x1bf)][0x0][_0x20a577(0x1b8)], touchStartY = _0x48b6aa['touches'][0x0]['clientY'], _0x48b6aa['preventDefault']();
}), canvas[_0x5d0821(0x1a5)](_0x5d0821(0x1ee), function(_0x30715b) {
    const _0x2427a0 = _0x5d0821;
    if (!touchStartX || !touchStartY) {
        touchInProgress = ![];
        return;
    }
    _0x30715b['preventDefault']();
    const _0x21f09a = _0x30715b[_0x2427a0(0x1c8)][0x0][_0x2427a0(0x1b8)],
        _0x5d969d = _0x30715b[_0x2427a0(0x1c8)][0x0][_0x2427a0(0x1eb)],
        _0x1bbed1 = _0x21f09a - touchStartX,
        _0x1963ba = _0x5d969d - touchStartY;
    handleSwipe(_0x1bbed1, _0x1963ba), touchStartX = null, touchStartY = null, touchInProgress = ![];
}), canvas[_0x5d0821(0x1a5)](_0x5d0821(0x21d), function(_0x39ba8c) {
    touchStartX = null, touchStartY = null, touchInProgress = ![];
}), document['addEventListener'](_0x5d0821(0x1a1), function() {
    const _0xe156cc = _0x5d0821,
        _0x4d5db0 = document[_0xe156cc(0x20e)](_0xe156cc(0x1ac));
    _0x4d5db0['checked'] = !![], currentVariant = GAME_VARIANTS['CLASSIC'], document[_0xe156cc(0x1c7)](_0xe156cc(0x201))[_0xe156cc(0x1e5)](_0x1bf408 => {
        const _0x43c1bd = _0xe156cc;
        _0x1bf408['addEventListener'](_0x43c1bd(0x1cc), function(_0x162d8a) {
            const _0x1de0d5 = _0x43c1bd;
            let _0x1d4933 = currentVariant;
            switch (_0x162d8a[_0x1de0d5(0x181)][_0x1de0d5(0x1d7)]) {
                case _0x1de0d5(0x1ca):
                    currentVariant = GAME_VARIANTS['MINI'];
                    break;
                case '1024':
                    currentVariant = GAME_VARIANTS[_0x1de0d5(0x190)];
                    break;
                case '2048':
                    currentVariant = GAME_VARIANTS[_0x1de0d5(0x203)];
                    break;
                case '4096':
                    currentVariant = GAME_VARIANTS[_0x1de0d5(0x19f)];
                    break;
            }
            if (gameState === 'titleScreen' || gameState === 'gameOver' || gameState === 'gameWon') {
                if (gameState === 'titleScreen') drawTitleScreen();
                else {
                    if (gameState === 'gameOver') drawGame(), drawGameOverScreen();
                    else gameState === _0x1de0d5(0x192) && (drawGame(), drawWinScreen());
                }
            } else currentVariant = _0x1d4933, document[_0x1de0d5(0x1c7)](_0x1de0d5(0x201))[_0x1de0d5(0x1e5)](_0x5d0410 => {
                const _0x1a0c40 = _0x1de0d5;
                _0x5d0410[_0x1a0c40(0x1d7)] === String(_0x1d4933[_0x1a0c40(0x194)]) && (_0x5d0410['checked'] = !![]);
            });
        });
    });
});

function handleContextButton() {
    const _0x3858f7 = _0x5d0821;
    gameState === _0x3858f7(0x208) ? gameState = _0x3858f7(0x1d0) : gameState = _0x3858f7(0x208);
}

function resizeGame() {
    const _0x3ad256 = _0x5d0821,
        _0x2a7be4 = document[_0x3ad256(0x20e)](_0x3ad256(0x1c9)),
        _0x16b336 = window[_0x3ad256(0x17c)] - 0x28,
        _0x578189 = window[_0x3ad256(0x1ec)] - 0x28,
        _0xc5a1ab = _0x16b336 / ORIGINAL_WIDTH,
        _0x22d09b = _0x578189 / ORIGINAL_HEIGHT;
    scale = Math[_0x3ad256(0x1f9)](_0xc5a1ab, _0x22d09b, 0x1), scale = Math[_0x3ad256(0x222)](scale, 0.5), canvas[_0x3ad256(0x1c0)] = ORIGINAL_WIDTH * scale, canvas[_0x3ad256(0x1f2)] = ORIGINAL_HEIGHT * scale, _0x2a7be4[_0x3ad256(0x1a4)]['width'] = canvas[_0x3ad256(0x1c0)] + 0x14 + 'px', _0x2a7be4[_0x3ad256(0x1a4)]['height'] = canvas[_0x3ad256(0x1f2)] + 0x64 + 'px', ctx[_0x3ad256(0x1ba)](scale, scale);
    if (gameState === _0x3ad256(0x1a0)) drawScore();
    else gameState === _0x3ad256(0x208) && drawTitleScreen();
}

function enableRadioButtons(_0x3401a3) {
    const _0x3f1a56 = _0x5d0821;
    document[_0x3f1a56(0x1c7)](_0x3f1a56(0x201))['forEach'](_0x294622 => {
        _0x294622['disabled'] = !_0x3401a3;
    });
}
window['addEventListener'](_0x5d0821(0x1b6), () => {
    const _0x55635f = _0x5d0821;
    minSwipeDistance = Math[_0x55635f(0x1f9)](window[_0x55635f(0x17c)], window[_0x55635f(0x1ec)]) * MIN_SWIPE_DISTANCE_RATIO, resizeGame();
}), window[_0x5d0821(0x1a5)](_0x5d0821(0x210), resizeGame);
const gameOptions = document[_0x5d0821(0x20e)](_0x5d0821(0x1aa));
spritesheet[_0x5d0821(0x1c5)] = function() {
    resizeGame(), initGame(), gameLoop();
};

function cheatToWin() {
    const _0xabaf37 = _0x5d0821;
    gameBoard = [];
    for (let _0x381d7b = 0x0; _0x381d7b < boardSize; _0x381d7b++) {
        gameBoard[_0x381d7b] = new Array(boardSize)[_0xabaf37(0x187)](0x0);
    }
    gameBoard[0x0][0x0] = 0x40, gameBoard[0x0][0x1] = 0x40;
}