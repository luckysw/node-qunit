if (! _$jscoverage['javascript-while.js']) {
  _$jscoverage['javascript-while.js'] = [];
  _$jscoverage['javascript-while.js'][1] = 0;
  _$jscoverage['javascript-while.js'][2] = 0;
  _$jscoverage['javascript-while.js'][5] = 0;
  _$jscoverage['javascript-while.js'][6] = 0;
  _$jscoverage['javascript-while.js'][9] = 0;
  _$jscoverage['javascript-while.js'][10] = 0;
  _$jscoverage['javascript-while.js'][12] = 0;
  _$jscoverage['javascript-while.js'][13] = 0;
  _$jscoverage['javascript-while.js'][15] = 0;
  _$jscoverage['javascript-while.js'][16] = 0;
  _$jscoverage['javascript-while.js'][17] = 0;
  _$jscoverage['javascript-while.js'][21] = 0;
  _$jscoverage['javascript-while.js'][23] = 0;
  _$jscoverage['javascript-while.js'][24] = 0;
  _$jscoverage['javascript-while.js'][28] = 0;
  _$jscoverage['javascript-while.js'][29] = 0;
  _$jscoverage['javascript-while.js'][30] = 0;
  _$jscoverage['javascript-while.js'][31] = 0;
  _$jscoverage['javascript-while.js'][32] = 0;
}
_$jscoverage['javascript-while.js'].source = ["<span class=\"k\">while</span> <span class=\"k\">(</span>x<span class=\"k\">)</span> <span class=\"k\">{</span>","  x<span class=\"k\">();</span>","<span class=\"k\">}</span>","","<span class=\"k\">while</span> <span class=\"k\">(</span>x<span class=\"k\">)</span> <span class=\"k\">{</span>","  <span class=\"k\">;</span>","<span class=\"k\">}</span>","","<span class=\"k\">while</span> <span class=\"k\">(</span>x<span class=\"k\">)</span>","  x<span class=\"k\">();</span>","","<span class=\"k\">while</span> <span class=\"k\">(</span>x<span class=\"k\">)</span>","  <span class=\"k\">;</span>","","<span class=\"k\">while</span> <span class=\"k\">(</span>x<span class=\"k\">)</span> <span class=\"k\">{</span>","  <span class=\"k\">if</span> <span class=\"k\">(</span>x<span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">continue</span><span class=\"k\">;</span>","  <span class=\"k\">}</span>","<span class=\"k\">}</span>","","label<span class=\"k\">:</span>","<span class=\"k\">while</span> <span class=\"k\">(</span>x<span class=\"k\">)</span> <span class=\"k\">{</span>","  <span class=\"k\">if</span> <span class=\"k\">(</span>x<span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">continue</span> label<span class=\"k\">;</span>","  <span class=\"k\">}</span>","<span class=\"k\">}</span>","","label2<span class=\"k\">:</span> <span class=\"k\">{</span>","  f<span class=\"k\">();</span>","  <span class=\"k\">while</span> <span class=\"k\">(</span>x<span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">if</span> <span class=\"k\">(</span>x<span class=\"k\">)</span> <span class=\"k\">{</span>","      <span class=\"k\">break</span> label2<span class=\"k\">;</span>","    <span class=\"k\">}</span>","  <span class=\"k\">}</span>","<span class=\"k\">}</span>"];
_$jscoverage['javascript-while.js'][1]++;
while (x) {
  _$jscoverage['javascript-while.js'][2]++;
  x();
}
_$jscoverage['javascript-while.js'][5]++;
while (x) {
  _$jscoverage['javascript-while.js'][6]++;
  ;
}
_$jscoverage['javascript-while.js'][9]++;
while (x) {
  _$jscoverage['javascript-while.js'][10]++;
  x();
}
_$jscoverage['javascript-while.js'][12]++;
while (x) {
  _$jscoverage['javascript-while.js'][13]++;
  ;
}
_$jscoverage['javascript-while.js'][15]++;
while (x) {
  _$jscoverage['javascript-while.js'][16]++;
  if (x) {
    _$jscoverage['javascript-while.js'][17]++;
    continue;
  }
}
_$jscoverage['javascript-while.js'][21]++;
label:
while (x) {
  _$jscoverage['javascript-while.js'][23]++;
  if (x) {
    _$jscoverage['javascript-while.js'][24]++;
    continue label;
  }
}
_$jscoverage['javascript-while.js'][28]++;
label2:
{
  _$jscoverage['javascript-while.js'][29]++;
  f();
  _$jscoverage['javascript-while.js'][30]++;
  while (x) {
    _$jscoverage['javascript-while.js'][31]++;
    if (x) {
      _$jscoverage['javascript-while.js'][32]++;
      break label2;
    }
}
}
