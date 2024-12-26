
# تعديلات إكماسكربت 2016 ومابعد

ملخص التغييرات المضافة على توصيف [[ecmascript|إكماسكربت]]، وهو [[standard|المعيار القياسي]] الذي تتوافق معه لغة [[JavaScript|جافاسكربت]]، منذ عام 2016 وحتى عام 2025.

تُنشَر هذه التعديلات على [مستودع مقترحات إكماسكربت على جت هب](https://github.com/tc39/proposals/blob/main/finished-proposals.md). هناك أيضاً [جدول توافقية](https://compat-table.github.io/compat-table/es2016plus/) يبين مدى توافر هذه الميزات على [[web browser|المتصفحات]] والمنصات المختلفة.


## إضافات ES2025

### [`Promise.try`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/try)



### [Sync Iterator helpers](https://github.com/tc39/proposal-iterator-helpers)

### [JSON Modules](https://github.com/tc39/proposal-json-modules)
### [Import Attributes](https://github.com/tc39/proposal-import-attributes)
### [RegExp Modifiers](https://github.com/tc39/proposal-regexp-modifiers)
### [New Set methods](https://github.com/tc39/proposal-set-methods)

### [Duplicate named capture groups](https://github.com/tc39/proposal-duplicate-named-capturing-groups)


## إضافات ES2024

### https://github.com/tc39/proposal-arraybuffer-transfer

### https://github.com/tc39/proposal-promise-with-resolvers
### https://github.com/tc39/proposal-array-grouping
### https://github.com/tc39/proposal-resizablearraybuffer

### https://github.com/tc39/proposal-regexp-v-flag
### https://github.com/tc39/proposal-atomics-wait-async

### https://github.com/tc39/proposal-is-usv-string


## إضافات ES2023

https://github.com/tc39/proposal-change-array-by-copy
https://github.com/tc39/proposal-symbols-as-weakmap-keys
https://github.com/tc39/proposal-hashbang
https://github.com/tc39/proposal-array-find-from-last


## إضافات ES2022

https://github.com/tc39/proposal-error-cause
https://github.com/tc39/proposal-class-static-block
https://github.com/tc39/proposal-accessible-object-hasownproperty

### [`.at()`](https://github.com/tc39/proposal-relative-indexing-method)

### [Ergonomic brand checks for Private Fields](https://github.com/tc39/proposal-private-fields-in-in)
### [Top-level `await`](https://github.com/tc39/proposal-top-level-await)

### [RegExp Match Indices](https://github.com/tc39/proposal-regexp-match-indices)
### Class Fields ([Private instance methods and accessors](https://github.com/tc39/proposal-private-methods), [Class Public Instance Fields & Private Instance Fields](https://github.com/tc39/proposal-class-fields), [Static class fields and private static methods](https://github.com/tc39/proposal-static-class-features))



## إضافات ES2021

### [String.prototype.replaceAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)

تأخذ هذه الدالة بارامترين، وتبحث ضمن السلسلة المحرفية عن كافة الأماكن التي ورد فيها البارامتر الأول وتستبدله بقيمة البارامتر الثاني. البارامتر الأول عبارة عن نمط بحث، قد يكون سلسلة محرفية أو تعبيراً منتظماً [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) يستخدم للبحث. البارامتر الثاني قد يكون سلسلة نصية أو دالة يتم تنفيذها عند كل حالة مطابقة يعثر عليها.

تعيد دالة `replaceAll` ناتج الاستبدال في سلسلة تصية جديدة، أما السلسلة الأصلية فلا تجري عليها أي تغييرات.

إذا كان البارامتر الثاني دالة، فيمكنها استلام 3 بارامترات عند استدعائها عند كل حالة مطابقة: السلسلة النصية التي حققت التطابق، ورقم المحرف الذي وردت عنده هذه السلسلة (index)، والسلسلة المحرفية اﻷصلية كاملة.


```javascript
const p = 'Almost before we knew it, we had left the ground.';

console.log(p.replaceAll('we', 'they'));
// expected output: "Almost before they knew it, they had left the ground."

// global flag (g) is required when calling replaceAll with regex
// ignore case flag (i) is also used in this example
const regex = /a/ig;
p.replaceAll(regex, (a, b, c) => {console.log(a, b);})
// expected output:
// "A" 0
// "a" 30
```

### [Promise.any](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)

تأخذ هذه الدالة مجموعة كائنات وعود ([`Pormise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) objects) وترجع وعداً جديداً. يتحقق الوعد الجديد عندما يتحقق أول وعد من المجموعة المدخلة ويعيد قيمته نفسها.

إذا لم يتحقق أي وعد من المجموعة، ترجع الدالة وعداً مرفوضاً يعطي خطأ من نوع `AggregatorError`. أما في حال ظهور استثناء أثناء تنفيذ الوعود المدخلة، ترجع وعداً مرفوضاً مع إعادة الاستثناء الذي حصل.

```javascript
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));
// expected output: "quick"
```

وبذلك يصبح لدينا أربع دوال تجميع للوعود في إكماسكربت. كما في الجدول التالي:

| الدالة | وصف       | إصدار |
| -------------------- | ----------------------------------------------- | ------ |
| `Promise.allSettled` | تنتظر انتهاء جميع الوعود بالرفض أو التحقق       | ES2020 |
| `Promise.all`        | تنتهي عند رفض أول وعد                           | ES2015 |
| `Promise.race`       | تنتهي عند تحقق أو رفض أول وعد                   | ES2015 |
| `Promise.any`        | تنتهي عند تحقق أول وعد                          | ES2021 |

### [WeakRefs](https://github.com/tc39/proposal-weakrefs)

هذا التعديل أضاف كائنين جديدين هما [`WeakRef`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) و [`FinalizationRegistry`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry). يمكن استخدام هذين الكائنين للتحكم بعملية إدارة الذاكرة والتعامل مع جامع القمامة إلى حد ما. بشكل عام لا ينصح باستخدامهما إلا في حالات خاصة جداً ولا تظهر الحاجة لهما في أكواد التطبيقات.

### [Logical Assignment Operators](https://github.com/tc39/proposal-logical-assignment/)

عوامل الإسناد المنطقية هي مجموعة عوامل تسمح باختصار بعض تعليمات الإسناد إلى شكل أقصر مع تحسين الأداء بشكل طفيف (لكن لا يغرنك الmicro-optimization). في المثال التالي، وضعنا كل تعليمة إسناد جديدة ويليها تعليمتين قديمتين: الأولى مكافئة تماماً، والثانية مكافئة في الناتج ولكنها تسبب عملية إسناد زائدة أحياناً.

```javascript
a ||= b;      // Setter is triggered only when `a` is falsey.
a || (a = b); // Ok
a = a || b;   // Ok, but setter is always triggered.

// "And And Equals"
a &&= b;
a && (a = b);
a = a && b;

// "QQ Equals"
a ??= b;
a ?? (a = b);
a = a ?? b;
```

### [Numeric separators](https://github.com/tc39/proposal-numeric-separator)

أضيفت إمكانية استخدام الشرطة السفلية ( `_` ) للفصل بين الخانات عند تعريف الأعداد والثوابت، بهدف تسهيل قرائتها على المبرمج.

```javascript
let amount = 101_475_938.38; // a hundred million

let x = 0.000_001; // 1 millionth

let y = 1e10_000;  // 10^10000

let nibbles = 0b1010_0001_1000_0101; // with Binary numbers

let message = 0xA0_B0_C0; // with Hex values

let budget = 1_000_000_000_000n; // with BigInt number
```


## إضافات ES2020

### [String.prototype.matchAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)

تستقبل هذه الدالة تعبيراً منتظماً [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) وتعيد مكرراً [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) يمكننا من الوصول لكافة نتائج مطابقة التعبير المنتظم في السلسلة المحرفية. يجب أن يستعمل التعبير المنتظم المستخدم في البحث رمز `g`، وإذا تم تمرير كائن من نوع آخر فسيتم تحويله إلى تعبير منتظم باستدعاء الباني <code>new RegExp()&lrm;</code>.

يمكن معالجة النتائج عبر حلقة [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) على المكرر، أو بتحويله إلى مصفوفة عادية باستخدام عامل النشر [`...`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) أو الدالة [`Array.from`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

```javascript
const str = 'a complete sentence must express a complete thought.';

[...str.matchAll('complete')]
// expected result: [
//   ["complete", index: 2, input: "a complete sentence must express a complete thought.", groups: undefined],
//   ["complete", index: 35, input: "a complete sentence must express a complete thought.", groups: undefined]
// ]

Array.from(str.matchAll(/comp[a-z]*/g))
// expected result: same as above
```

### [import()&lrm;](https://github.com/tc39/proposal-dynamic-import)

دالة الاستيراد الديناميكي، هي دالة جديدة تسمح باستيراد الملفات بنفس أسلوب تعليمة `import` ولكن مع بعض الاختلافات:

- السماح باستخدام القوالب الحرفية بالإضافة للسلاسل النصية العادية، هذا يسمح باستيراد أكواد مختلفة ديناميكياً اعتماداً على قيم بعض المتغيرات، كاختلاف لغة الواجهة على سبيل المثال:

  ```javascript
  import(`./language-packs/${langCode}.js`)
  ```

- يمكن استخدامها ضمن أي نوع من السكربتات في أي مكان وليس فقط ضمن الموديولات modules.

- تسمح باستيراد الأكواد شرطياً (ضمن تعليمة `if` مثلاً) أو استيراد وحدات ثانوية ضمن `try/catch` مع استمرار التطبيق بالعمل في حال عدم نجاح الاستيراد.

- استخدام دالة <code>import()&lrm;</code> لا يسبب اعتمادية على الوحدات التي يتم استيرادها. بالتالي لا يشترط تحميل الاعتمادية وتنفيذها قبل تنفيذ السكربت الذي يستوردها.

### [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

كائن يسمح بتمثيل الأعداد الصحيحة الأكبر من الحجم الأقصى الذي يمكن تخزينه في المتغيرات من نوع [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)، أي التي تزيد عن &lrm;2<sup>53</sup>-1&lrm;. يمكنك إنشاء كائن BigInt جديد بإضافة حرف `n` إلى نهاية الرقم، أو باستدعاء دالة البناء <code>BigInt()&lrm;</code>.

```javascript
const bigNum = 1000n;
const bigNum2 = BigInt("2000");
```

يمكن استخدام العوامل الحسابية `+` `-` `*` `/` `**` على الأعداد من نوع `BigInt`، بشرط أن يكون الطرفين من النوع نفسه وعدم الخلط مع `Number`. انتبه أيضاً إلى أن دوال الصنف `Math` كلها غير متوافقة مع BigInt.

أما المقارنة المنطقية بين BigInt و Number فهي ممكنة.

```javascript
100n == 100 // true
100n < 200  // true
5n > 7      //false
```

### [Promise.allSettled](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)

تأخذ هذه الدالة مجموعة كائنات وعود ضمن كائن مكرر (مثل مصفوفة) وتعيد وعداً جديداً. تحسم نتيجة الوعد الجديد عندما تحسم (settle) نتائج كل الوعود المدخلة إما بالتحقق fulfill  أو الرفض reject.

عند معرفة كل النتائج، تحسم نتيجة الوعد الجديد الذي أعادته الدالة، ويعطي مصفوفة كائنات كل منها يمثل نتيجة من نتائج الوعود المدخلة.

```javascript
const promise1 = Promise.reject(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'foo');
});

Promise.allSettled([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: [
//   { status: "rejected", reason: 3 },
//   { status: "fulfilled", value: 42 },
//   { status: "fulfilled", value: "foo" },
// ]
```

إذا كانت الوعود المدخلة تعتمد على بعضها، فربما عليك استخدام `Promise.all` التي أضيفت في ES2015. الاختلاف هو أن تلك الدالة تعيد وعداً يرفض ما أن ترفض قيمة أحد الوعود المدخلة ولا تنتظر حسم بقية النتائج في تلك الحالة.

### [globalThis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis)

هذه القيمة تشير دوماً إلى الكائن العام `this`، أي أنها تشير إلى كائن `window` في المتصفحات، وكائن `self` في عاملات الويب [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Worker)، وكائن `global` في Node.js.

### [for-in mechanics](https://github.com/tc39/proposal-for-in-order)

أعيد النظر في ترتيب التكرار على الكائنات عند استخدام حلقة [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in). في البيئات التنفيذية المتوافقة مع هذا التعديل، ستتوافق حلقة for-in مع الطرق الأخرى عند التكرار على الكائنات بدلاً من المعيار القديم حيث كان سلوك for-in مفتوحاً للتطبيق بصور مختلفة بين المتصفحات والبيئات المختلفة.

بشكل عام، حلقة `for...in` هي من التعليمات التي يفضل تجنبها بشكل كامل بسبب فائدتها المحدودة وتوفر تعمليات بديلة أفضل منها، مثل [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) و [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

### [Optional Chaining](https://github.com/tc39/proposal-optional-chaining)

أضيف عامل جديد هو عامل الترابط الاختياري ( <code>?.&lrm;</code> )، الذي يدعى أيضاً عامل الوصول الآمن، أو عامل الوصول المشروط، أو عامل أمان القيم الفارغة في لغات البرمجة الأخرى. هذا العامل يسمح بمحاولة الوصول إلى فروع المتغيرات دون التحقق أولاً من أنها تحوي قيماً معرفة.

إذا كان المتغير الأصل معرفاً، ستعاد محتويات المتغير الفرعي، أما إذا كان الأصل غير معرف (قيمته null أو undefined)، فسوف تعاد القيمة undefined بدلاً من إطلاق خطأ.

يمكن استخدامه للوصول بشكل آمن إلى خاصية في كائن، أو قيمة في مصفوفة، أو استدعاء دالة على كائن، أو استدعاء دالة يحتمل ألا تكون معرفة.

```javascript
a?.b   // undefined if `a` is null/undefined, `a.b` otherwise.
a == null ? undefined : a.b

a?.[x]  // undefined if `a` is null/undefined, `a[x]` otherwise.
a == null ? undefined : a[x]

a?.b()  // undefined if `a` is null/undefined, calls `a.b()` otherwise.
a == null ? undefined : a.b()

a?.()  // undefined if `a` is null/undefined, invokes the function `a()` otherwise.
a == null ? undefined : a()
```

### [Nullish coalescing Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

عامل استبدال المتغيرات غير المعرفة ( `??` )، يمكنك من استبدال قيمة المتغير بقيمة أخرى إذا وفقط إذا كانت قيمة المتغير هي null أو undefined.

يعمل هذا العامل بشكل مشابه لعامل (أو) المنطقية `||`، لكنه لا يستبدل القيم المعرفة التي تحول إلى قيمة false منطقية. يعني، قيم 0 أو السلسلة النصية الفارغة وغيرها من القيم الخاطئة منطقياً falsey لا تستبدل مع عامل `??`.

```javascript
const a = null ?? 'default string';
console.log(a);
// expected output: "default string"

const b = 0 ?? 42;
console.log(b);
// expected output: 0

const c = 0 || 42;
console.log(c);
// expected output: 42
```

### [import.meta](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.meta)

تعليمة `import.meta` تسمح بالوصول إلى معلومات متعلقة بالسياق أو البيئة التي تم استدعاء وحدة جافاسكريبت وتنفيذها فيها.

يمكن على سبيل المثال استخدامها للوصول إلى رابط الاستدعاء url وأي بارمترات معرفة في ذلك الرابط، أو الوصول إلى خصائص على وسم `<script>` الذي استدعى الملف، أو معرفة مسار الملف المستدعى في نظام الملفات الجهاز المستضيف، وغير ذلك من معلومات بيئة تنفيذ الموديول.

```javascript
<script type="module">
import './index.mjs?someURLInfo=5'
</script>


// in the file: index.mjs
new URL(import.meta.url).searchParams.get('someURLInfo');
// expected result: 5
```

مثال آخر:

```javascript
<script type="module" src="mymodule.mjs" data-size="500"></script>

// inside mymodule.mjs
const size = import.meta.scriptElement.dataset.size;
// expected result: size = 500
```

## إضافات ES2019

### [Object.fromEntries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

تأخذ هذه الدالة مجموعة أزواج [مفتاح، قيمة] وتنشئ كائناً جديداً منها. مجموعة الدخل يمكن أن تكون مصفوفة أو [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) أو أي كائن [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

```javascript
const obj = Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42]
]);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }

```

### [String.prototype.{trimStart,trimEnd}](https://github.com/tc39/proposal-string-left-right-trim)

تستخدم الدالة [`trimStart`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) لإزالة المحارف الفارغة من بدايات السلاسل المحرفية ( مثل محرف المسافة أو المسطرة space، علامة الجدولة tab، المسافة غير المنقسمة non-breaking space، وغيرها بالإضافة لإزالة محارف السطر الجديد `CR` `LF` الخ)، أما [`trimEnd`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd) فتزيلها من نهايات السلاسل المحرفية.

الأسماء القياسية هي `trimStart`/`trimEnd`، لكن  هناك اسمين مستعارين لهاتين الدالتين هما `trimLeft`/`trimRight` تم الحفاظ عليهما لأغراض التوافق مع بعض المتصفحات التي أضافت هذه الدوال قبل إدراجها في المعيار القياسي في 2019.

دالة [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) التي تحذف المحارف الفارغة من طرفي السلسة سبقت إضافتها في ES5 عام 2009.

### [Array.prototype.{flat,flatMap}](https://github.com/tc39/proposal-flatMap)

إضافة دالتي [`flat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) و [`flatMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) إلى كائن المصفوفة.

دالة `flat` تفرد عناصر المصفوفات الفرعية وتضمها إلى المصفوفة الأم التي تحويها (تعيد الناتج بشكل مصفوفة جديدة ولا تعدل على مصفوفة الدخل). تأخذ الدالة برامتراً يحدد عمق المصفوفات التي سيتم دمجها في مستوى واحد.

```javascript
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, [1, 2], 5, [[11, [3, 4]], 12], 6];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, 5, 11, [3, 4], 12, 6]
```

دالة `flatMap` تكافئ استدعاء [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) يتبعها استدعاء `flat(1)` على المصفوفة الناتجة.

### [Optional catch binding](https://github.com/tc39/proposal-optional-catch-binding)

هذا التعديل يسمح لك بكتابة الصيغة التالية:

```javascript
try {
...
} catch {
...
}
```

بدلاً من:

```javascript
try {
...
} catch (err) {
...
}
```

الصيغة الأولى الجديدة مفيدة في حال لم تكن تستعمل المتغير `err` في بلوك `catch` أو إذا كنت تريد تجاهل أي نوع من الأخطاء تماماً بإضافة بلوك `catch` فارغ، حيث لم تعد هناك ضرورة لتعريف المتغير إذا لم ترغب باستخدامه.

### [JSON superset](https://github.com/tc39/proposal-json-superset)

رغم أن إكماسكربت تسمح بكتابة JSON بشكل مباشر ضمن الكود المصدري، إلا أن هناك محرفين (هما U+2028 ـ LINE SEPARATOR و U+2029 ـ PARAGRAPH SEPARATOR) يسمح بكتابتهما في السلاسل النصية في JSON دون تهريب لكنهما ممنوعان في السلاسل النصية في إكماسكربت.

هذا التعديل جعل هذين المحرفين مسموحين، وبالتالي يمكن تضمين أي JSON سليم ضمن أكواد إكماسكربت دون مشاكل. بهذا يصبح JSON مجموعة جزئية محتواة في إكماسكربت (أي أن JSON ⊂ ECMAScript).

### [Symbol.prototype.description](https://tc39.es/proposal-Symbol-description/)

إضافة خاصية `description` إلى كائنات الرموز [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)، هذه الخاصية تعيد وصف الرمز بشكل مباشر بدلاً من الاضطرار للوصول إليها بشكل غير مباشر باستخدام `toString`.

```javascript
Symbol('desc').toString();   // "Symbol(desc)"
Symbol('desc').description;  // "desc"
Symbol('').description;      // ""
Symbol().description;        // undefined
```

### [مراجعة Function.prototype.toString](https://2ality.com/2016/08/function-prototype-tostring.html)

تعديل على طريقة عمل دالة `toString` عند استدعائها على الدوال. الهدفان الأساسيان هما إعادة النص المصدري للدالة في حال كان ذلك ممكناً، بصيغة سليمة وقابلة للتنفيذ. الهدف الثاني، في حال تعذر إعادة شفرة برمجية سليمة، يجب إعادة سلسلة غير صالحة نحوياً، أي أنها ستسبب `SyntaxError` في حال محاولة تنفيذها باستخدام [`eval`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval).


### [Well-formed JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify)

تصحيح مشكلة في عمل دالة [`JSON.stringfy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) حيث كانت تعيد سلاسل نصية غير متوافقة مع معيار UTF-8 ولا معيار UTF-16 إذا وجدت بعض المحارف الخاصة (ضمن النطاق U+D800 حتى U+DFFF) في بيانات الدخل.


## إضافات ES2018

### [تعديل على القوالب الحرفية](https://tc39.es/proposal-template-literal-revision/)

القوالب الحرفية Template literals هي سلاسل محرفية خاصة يمكنك فيها طباعة قيم بعض المتغيرات أو تنفيذ عمليات حسابية بهدف طباعة سلسلة منسقة بشكل جميل. يتم تعريف هذه السلاسل باستخدام علامة ( <code>`</code> ) ويمكن كتابتها على عدة سطور.

الجديد في ES2018 هو تعديل يسمح باستخدام سلاسل التهريب غير الصالحة في القوالب الحرفية الموسومة tagged template literals، بدلاً من إعادة خطأ.

```javascript
console.log(`\u0620 or \u{1f602} this is ok.`);
// expected output: "ؠ or 😂 this is ok."

let str = `\unicode ${1} hello ${2}.`;
// Uncaught SyntaxError: Invalid Unicode escape sequence
```

في المثال السابق، التعليمة الأولى عرفنا فيها قالباً نصياً واستخدمنا <code>&lrm;\u</code> لتهريب محرفين من محارف يونيكود، أما التعليمة الثانية فتعطي خطأ، لأن `nicode` ليس مقبولاً كمحرف يونيكود.

لكن هناك حالات تحتاج فيها للتعامل مع سلاسل التهريب غير المسموحة كما في حالة كتابة كود لمعالجة نصوص LaTeX أو ما شابه. في تلك الحالة، يمكنك وسم القالب الحرفي، وسيتم تمرير القالب كما هو دون معالجة إلى دالة الوسم حيث يمكن معالجته. انظر المثال التالي لمزيد من الإيضاح.

```javascript
function latex(str) {
 return { "cooked": str, "raw": str.raw }
}

console.log(latex`\unicode ${1} hello ${2}.`)
// expected output: {
// cooked: [undefined, " hello ", ".", raw: Array(3)]
// raw: ["\unicode ", " hello ", "."]
// }
```

كما ترى، فقد تجاهلت جافاسكريبت الخطأ، ومررت السلسلة الأولى بشكلها الخام إلى دالة الوسم، أما بالنسبة للشكل المطبوخ -الذي يفترض أن تستبدل جافاسكريبت محارف التهريب فيه بقيمها المناسبة- فهو يحوي القيمة `undefined`.

### [علامة `s` في التعبيرات المنتظمة (`dotAll`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll) [[1]](https://github.com/tc39/proposal-regexp-dotall-flag)

تمت إضافة وضع جديد للتعبيرات المنتظمة (Regular Expressions)، حيث يتم فيه مطابقة أي محرف مع رمز النقطة: `.` (من هنا سمي وضع `dotAll`). الفكرة أن رمز `.` في جافاسكربت لم يكن يطابق بعض المحارف رغم أنه يفترض أن يطابق "أي شيء". بشكل أخص، رمز `.` لا يطابق بعض محارف المسافات البيضاء (مثل محرف نهاية السطر ونهاية المقطع) في الحالة الافتراضية. كما أن المحارف الفلكية (astral characters) في يونيكود لا تطابق مع رمز `.` إلا باستخدام الرمز `s` لتفعيل نمط `dotAll` مع إضافة الرمز `u` من أجل يونيكود.

### [تسمية المجموعات في RegExp](https://github.com/tc39/proposal-regexp-named-groups)

في التعبيرات المنتظمة، يمكن تعريف "مجموعات التقاط capture groups" تمثل أجزاءاً محددة من السلسلة المحرفية التي يطابقها التعبير المنتظم.

سابقاً، كانت الطريقة الوحيدة للتعامل مع مجموعات الالتقاط هي باستخدام أرقامها، حيث ترقّم المجموعات تسلسلياً حسب ترتيب ورودها بدءاً من الصفر. المثال التالي فيه تعبير منتظم يطابق التواريخ المكتوبة حسب صيغة ISO المعيارية ويستخدم مجموعات الالتقاط للتعامل مع السنة والشهر واليوم بشكل منفصل:

```javascript
let re = /(\d{4})-(\d{2})-(\d{2})/u;
let result = re.exec('2015-01-02');

// result[0] === '2015-01-03';
// result[1] === '2015';
// result[2] === '01';
// result[3] === '02';
```

لكن مع هذا التغيير أصبح اسناد تسميات للمجموعات ممكناً، مما يسهل التعامل معها، كما أن هذا يحل مشكلة تغير الرقم الدال على مجموعة ما إذا تغير ترتيب تعريف المجموعات في التعبير المنتظم (كأن نستخدم تعبيراً لمطابقة صيغة تاريخ أخرى ترتيب الشهر واليوم والسنة فيها مختلف).

لتسمية مجموعة التقاط ما، نستخدم الصيغة التالية <code>&lrm;(?&lt;name>&lrm; ... )</code>، مع الأخذ بعين الاعتبار أن الاسم يجب أن يحقق شروط تسمية المتغيرات العادية (يتكون من حروف وأرقام و `_` فقط ولا يبدأ برقم):

```javascript
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
let result = re.exec('2015-01-02');

// result.groups.year === '2015';
// result.groups.month === '01';
// result.groups.day === '02';
```

يمكن أيضاً استخدم صيغة التفكيك destructring مع هذه الصيغة، كما يلي:

```javascript
let {groups: {year, month, day}} =
    /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u
    .exec('2015-01-02');

// year = 2015
// month = 01
// day = 02
```

### [RegExp Lookbehind Assertions](https://github.com/tc39/proposal-regexp-lookbehind)

أضيفت تأكيدات البحث الخلفي في التعبيرات المنتظمة كمتمم لتأكيدات البحث الأمامي الموجودة سابقاً ([Lookahead Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)).

تكتب هذه التأكيدات وفق الصيغة التالية <code>&lrm;(?&lt;=y)x</code> للتأكيد الخلفي المثبت (أو الموجب Positive lookbehind assertion)، حيث تتم مطابقة التعبير المنتظم `x` فقط إذا كان مسبوقاً بسلسلة محارف تطابق التعبير `y`. أما التأكيد الخلفي المنفي (أو السالب Negative lookbehind assterion) فيأخذ الصيغة <code>&lrm;(?&lt;!y)x</code> وهو يستخدم لمطابقة التعبير `x` إذا وفقط إذا لم يكن مسبوقاً بسلسلة محارف تطابق التعبير `y`.

مثلاً، لمطابقة سعر منتج ما ضمن نص قد يحوي أرقاماً أخرى لا تمثل أسعاراً، وعلى فرض أن السعر يسبق برمز عملة الدولار `$`، يمكننا استخدام التعليمات التالية:

```javascript
const productDescription = "Just try it and if you don't like it within the next 90 days, we'll refund every penny! Starting from $39.75. Order within the next 4 hours and receive your product by tomorrow.";

const regex = /(?<=\$)\d+\.?\d*/; // Match one or more digits,
                                  // followed by one optional dot `.`,
                                  // followed by zero or more digits,
                                  // with a lookbehind assertions for the `$` symbol

console.log(productDescription.match(regex));
// expected output: Array ["39.75"]

```

### [RegExp Unicode Property Escapes](https://github.com/tc39/proposal-regexp-unicode-property-escapes)

هذا التغيير يضيف طريقة جديدة لمطابقة محارف يونيكود في السلاسل المحرفية حسب اسم اللغة أو حسب تصنيف المحارف في معيار يونيكود. هذا التغيير يسمح بمطابقة المحارف التي تنتمي لمجموعة معينة أو لغة ما دون تعريف مجالات يونيكود أو استخدام مكتبات خارجية.

في المثال التالي، لدينا ثلاثة تعابير منتظمة كلها تطابق مجموعات الحروف العربية الواردة في السلسلة المحرفية، الأول يستخدم الصيغة الجديدة، بينما التعبير الثاني والثالث يستخدمان الصيغ القديمة:

```javascript
const str = "hello this جملة is used for اختبار regex Unicode escapes.";

const regexArabic = /\p{Script=Arabic}+/gu;
console.log(str.match(regexArabic));
// expected output: Array ["جملة", "اختبار"]

const oldRegex = /[\u0621-\u064A]+/gu;
console.log(str.match(oldRegex));
// expected output: Array ["جملة", "اختبار"]

const oldRegex2 = /[ء-ي]+/gu;
console.log(str.match(oldRegex2));
// expected output: Array ["جملة", "اختبار"]
```

التعامل مع الصيغة الجديدة أسهل ولا حاجة لمعرفة مجالات الحروف المراد مطابقتها، كما أنها تحدث تلقائياً مع الزمن كلما طرأت تغييرات وتحديثات على معيار يونيكود.

تكتب هذه الصيغة بالشكل <code>&lrm;\p{ ... }&lrm;</code> (حرف `p` صغير) للمطابقة مع الخاصية التي تكتبها بين القوسين، أو بالشكل <code>&lrm;\P{ ... }&lrm;</code> (حرف `P` كبير) لنفي التطابق مع الخاصية المحددة بين القوسين.

يمكنك مطابقة المحارف حسب اللغة (Script)، أو حسب خاصية يونيكود (Unicode property). من الخصائص المدعومة:

```javascript
const sentence = 'A ticket to 大阪 costs ¥2000 👌.';

const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
console.log(sentence.match(regexpEmojiPresentation));
// expected output: Array ["👌"]

const regexpNonLatin = /\P{Script_Extensions=Latin}+/gu;
console.log(sentence.match(regexpNonLatin));
// expected output: Array [" ", " ", " 大阪 ", " ¥2000 👌."]

const regexpCurrencyOrPunctuation = /\p{Sc}|\p{P}/gu;
console.log(sentence.match(regexpCurrencyOrPunctuation));
// expected output: Array ["¥", "."]
```

### [استخدام عامل التفكيك والنشر `...` مع الكائنات](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

عامل النقط الثلاث `...` يسمح بتفكيك المصفوفات والكائنات إلى مكونات فرعية أثناء عملية الإسناد أو تعريف متغير جديد. كما يسمح بنشر محتويات المصفوفة وتمريرها في الأماكن التي تتوقع استقبال صفر أو أكثر من العناصر (مثل استدعاء دالة أو تعريف مصفوفة جديدة)، أو نشر محتويات الكائن وتمريرها بشكل مجموعة من أزواج key-value إلى التعليمات التي تتوقع استقبالها.

الجديد في ES2018 هو دعم التعامل مع الكائنات (سابقاً كان يعمل مع المصفوفات وبارامترات الدوال).

```javascript
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

عامل النشر يتجاهل القيم البوليانية الخاطئة (falsey values)، وهذا يسمح بدمج بعض الخصائص في كائن جديد شرطياً:

```javascript
const trueCondition = true;
const falseCondition = false;

const obj = {
  ...(trueCondition && { dogs: "woof" }),
  ...(falseCondition && { cats: "meow" }),
};
// obj = { dogs: 'woof' }
```

### [Promise.prototype.finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

هذا المُتناوِل handler يستقبل دالة تستدعى عند حسم نتيجة الوعد، رفضاً أو تحققاً. يفيد استخدامه لتجنب تكرار الكود الذي نريد تنفيذه في حالتي `then` و `catch`.

```javascript
p.finally(function() {
   // settled (fulfilled or rejected)
});
```

### [Asynchronous Iteration](https://2ality.com/2016/10/asynchronous-iteration.html)

إضافة المكررات غير المتزامنة. هناك [مقالة تشرحها على أكاديمية حسوب](https://academy.hsoub.com/programming/javascript/%D8%A7%D9%84%D9%85%D9%83%D8%B1%D8%B1%D8%A7%D8%AA-iterators-%D9%88%D8%A7%D9%84%D9%85%D9%88%D9%84%D8%AF%D8%A7%D8%AA-generators-%D8%BA%D9%8A%D8%B1-%D8%A7%D9%84%D9%85%D8%AA%D8%B2%D8%A7%D9%85%D9%86%D8%A9-%D9%81%D9%8A-%D8%AC%D8%A7%D9%81%D8%A7%D8%B3%D9%83%D8%B1%D8%A8%D8%AA-r923/).


## إضافات ES2017

### [Object.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

تعيد هذه الدالة مصفوفة تحوي كافة القيم التي يحويها الكائن الممرر لها.

```javascript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]
```

### [Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

تعيد هذه الدالة مصفوفة فيها مصفوفات جزئية. كل مصفوفة جزئية تكافئ مدخلة واحدة في الكائن، وتحوي عنصرين هما المفتاح والقيمة لتلك المدخلة.

```javascript
const object1 = {
  a: 'somestring',
  b: 42
};

console.log(JSON.stringify(Object.entries(object1)));
// expected output: [["a","somestring"],["b",42]]
```

هذه الدالة مفيدة عند الرغبة بالتكرار على كل المدخلات في الكائن وتفيذ عملية ما تحتاج الوصول إلى المفتاح والقيمة معاً. قارن بين الأمثلة التالية التي تطبع مفاتيح وقيم مدخلات الكائن `object1`:

```javascript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

// Loop using the old way
var k = Object.keys(object1);
for(i = 0; i < k.length; i++) {
    console.log(k[i], object1[k[i]]);
}

// Modern way
Object.entries(object1).forEach(([k, v]) => { console.log(k, v); });

// Alternative modern way
for (let [key, val] of Object.entries(object1)) {
  console.log(key, val);
}

// expected output:
// a somestring
// b 42
// c false
```

### [String.prototype.padEnd](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd) / [String.prototype.padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)

دوال حشو السلاسل النصية. تستخدم لتمديد طول السلسلة إلى الطول الحدد من المحارف بإضافة فراغات أو بتكرار السلسلة النصية الممرة كمتغير ثان للدالة.

```javascript
'z'.padEnd(5);
// expected output: "z    "

'z'.padEnd(25, '.+.');
// expected output: "z.+..+..+..+..+..+..+..+."
```

_انظر أيضاً [`trimStart` و `trimEnd` التي أدرجت في إكماسكربت 2019](#stringprototypetrimstarttrimend)_

### [Object.getOwnPropertyDescriptors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)

دالة جديدة متممة لعمل الدالة المفردة [`Object.getOwnPropertyDescriptor`](https://wiki.hsoub.com/JavaScript/Object/getOwnPropertyDescriptor). هذه الدالة تعيد واصفات كافة الخواص المعرفة ضمن الكائن نفسه.

```javascript
const object1 = {
  property1: 42
};

const descriptors1 = Object.getOwnPropertyDescriptors(object1);

console.log(descriptors1);

//expected output:
//  {
//    property1: {
//      value: 42,
//      writable: true,
//      enumerable: true,
//      configurable: true
//    }
//  }

```

### [الفواصل الإضافية في نهاية بارمترات الدوال عند التعريف أو الاستدعاء](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Trailing_commas)

الفاصلة الإضافية هي علامة ( `,` ) التي توضع بعد العنصر الأخير في المصفوفة أو الكائن أو مجموعة بارامترات الدالة عند تعريفها أو استدعائها. كتابة الفاصلة الإضافية غير مسموحة في JSON، لكنها كانت مسموحة في تعريف المصفوفات في جافاسكربت منذ بداية عهدها، ثم تم السماح بإضافة الفاصلة النهائية إلى تعريفات الكائنات في ES5 وإلى قائمة بارمترات الدوال في ES2017.

لا يسمح باستخدام الفاصلة الإضافية في تعريف الدالة إذا لم تكن لها أي بارمترات.

```javascript
function add(x, y, ) { // ok
  return x + y;
}

console.log(add(3, 4, ));
// expected output: 7

function test(, ) { // syntax error
}
```

### [`async / await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

يمكن تعريف الدوال اللامتزامنة باستخدام الكلمة المفتاحية الجديدة: `aync`. ضمن هذه الدوال، يمكنك استخدام الكلمة المفتاحية  `await` لانتظار حسم نتيجة وعد ما (Promise) وتخزينها في متغير بدلاً من استخدام سلاسل طويلة من استدعاءات `then` وكتابة دوال متداخلة. هذه الطريقة تؤدي لكتابة أكواد أنظف، كما تسمح باستخدام بلوكات `try / catch` حول استدعاءات الوعود.

كل الدوال التي تعرف بالكلمة المفتاحية `async` هي كائنات من نوع [`AsyncFunction`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction). القيمة التي تعيدها الدالة اللامتزامنة هي دوماً من نوع Promise. إذا كانت الدالة تعيد قيمة أخرى فسوف تغلف تلقائياً ضمن Promise.

### [مشاركة الذاكرة](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md) و [Atomics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics)

أضيف كائن [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) الذي يسمح بمشاركة الذاكرة بين السكربت الرئيسي وبين عمال الويب (Web Workers) الذين يتخاطب معهم. كما أضيف كائن [`Atomics`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics) الذي يوفر عمليات ذرية (غير قابلة للمقاطعة) لاستخدامها في مزامنة الذاكرة المشتركة بين خيوط المعالجة التي تتعامل معها.


## إضافات ES2016

### [Array.prototype.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

تستخدم هذه الدالة لمعرفة إذا كانت المصفوفة تحوي قيمة ما ضمن مدخلاتها، وتعيد القيمة `true` أو `false`.

```javascript
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true
```

### [عامل الرفع إلى قوة \*\*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)

يعطي ناتج رفع العدد الأول إلى قوة العدد الثاني. أي الأساس ** الأس. ناتج العملية يكافئ ناتج استدعاء الدالة `Math.pow`، لكنه يتميز عنها بأنه يدعم الأعداد من نوع BigInt. هذا العامل أيضاً يخضع لتحسينات الأداء بشكل أفضل من `Math.pow` في بعض الحالات مما قد يعطي أداء أعلى نسبياً.

```javascript
console.log(3 ** 4);
// expected output: 81

console.log(10 ** -2);
// expected output: 0.01
```
