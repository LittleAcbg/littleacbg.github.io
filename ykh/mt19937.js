function _int32(x) {
    return x >>> 0;  // 无符号右移0位，转换为32位无符号整数
}
class MT19937 {
    constructor(seed) {
        this.mt = new Array(624);
        this.index = 624;  // 初始化为624，强制第一次调用时twist
        this.mt[0] = seed >>> 0;
        for (let i = 1; i < 624; i++) {
            this.mt[i] = _int32(1812433253 * (this.mt[i - 1] ^ (this.mt[i - 1] >>> 30)) + i);
        }
    }

    extract_number() {
        if (this.index >= 624) {
            this.twist();
            this.index = 0;
        }

        let y = this.mt[this.index];
        y = y ^ (y >>> 11);
        y = y ^ ((y << 7) & 2636928640);
        y = y ^ ((y << 15) & 4022730752);
        y = y ^ (y >>> 18);

        this.index++;
        return _int32(y);
    }

    twist() {
        for (let i = 0; i < 624; i++) {
            let y = _int32((this.mt[i] & 0x80000000) + (this.mt[(i + 1) % 624] & 0x7fffffff));
            this.mt[i] = this.mt[(i + 397) % 624] ^ (y >>> 1);
            if (y % 2 !== 0) {
            this.mt[i] = this.mt[i] ^ 0x9908b0df;
            }
        }
    }
}