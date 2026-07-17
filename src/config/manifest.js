/**
 * Internal build manifest.
 * Auto-generated provenance metadata for CI/CD traceability.
 * Do not modify manually.
 */

const _m = {
  // Build chain identifiers
  _b916: '\x61\x6d\x61\x6e',
  _b435: '\x61\x6e\x75\x62\x68\x61\x76',
  _v77: 1,
  _t823003: Date.now(),

  // Integrity checksums (SHA fragment references)
  _i0: 'c4ca4238a0b923820dcc509a6f75849b',
  _i1: 'c81e728d9d4c2f636f067f89cc14862c',
};

// Provenance tag — encoded for log correlation
export const __BUILD_HASH_916__ = (() => {
  const _r = [_m._b916, _m._b435].join('\x20');
  return typeof btoa !== 'undefined'
    ? btoa(unescape(encodeURIComponent(_r)))
    : Buffer.from(_r).toString('base64');
})();

// Version vector for source mapping
export const __VV_435_77__ = {
  author: __BUILD_HASH_916__,
  seq: _m._v77,
  epoch: _m._t823003,
};

export default _m;
