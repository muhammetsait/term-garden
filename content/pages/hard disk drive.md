---
aliases:
  - hdd
---
# سواقة قرص صلب

سواقة الأقراص الصلبة Hard Disk Drive&mdash;HDD هي جهاز تخزين دائم يستطيع تخزين [[data|البيانات الرقمية]] وقراءتها من الأقراص الصلبة Hard Disk وهي أقراص مصنوعة من مواد صلبة ومغطاة بطبقة من مادة قابلة للمغنطة الدائمة.

كانت سواقات الأقراص الصلبة الوسط الدائم الرئيسي لتخزين البيانات والبرامج في [[personal computer|الحاسوب الشخصي]] منذ انخفاض أسعارها وتوفرها في متناول معظم المستخدمين في ثمانينات وتسعينات القرن الماضي وحتى بدء انتشار صناعة سواقات الحالة الصلبة [[solid state drive|SSD]] وتزايد سعاتها التخزينية وانخفاض أسعارها، التي أصبحت الوسط التخزيني الأكثر استخداماً في الحواسيب الشخصية بدءاً من عام 2015 تقريباً.

تصل السعة التخزينية للسواقات الصلبة حالياً ([[2024]]) إلى 32 [[تيرابايت]] وتتمتع بزمن [[mtbf|MTBF]] يصل إلى 2.5 مليون ساعة عمل و[[bit rate|سرعة نقل بيانات]] تتراوح بين 230 وبين 285 ميغابايت/ثا.

رغم تراجع استخدام سواقات الأقراص الصلبة في الحواسيب المحمولة والمكتبية الشخصية واستبدالها [[solid state drive|بسواقات الحالة الصلبة]]، إلا أنها لا تزال شائعة الاستخدام في التطبيقات التي تحتاج لسعات تخزينية كبيرة، مثل مراكز البيانات أو [[backup|النسخ الاحتياطي]] أو أنظمة كاميرات المراقبة.

## الاتصال مع الحاسوب

يتم الربط بين سواقات الأقراص الصلبة والحاسوب عبر أحد نواقل البيانات، ومن أكثرها استخداماً:

1. [[sata]] سرعة نقل البيانات القصوى 6 غ.بت/ثا. أكثر النواقل استخداماً في الحواسيب الشخصية.
2. [[usb]] سرعة نقل البيانات القصوى تتراوح بين 5 غ.بت/ثا إلى 40 غ.بت/ثا. يستخدم هذا الناقل لتوصيل سواقات الأقراص الصلبة الخارجية أو السواقات المحمولة.
3. [[sas]] سرعة نقل البيانات القصوى 12 غ.بت/ثا. ينتشر استخدام هذا الناقل في [[server|المخدّمات]] ومراكز البيانات.
4. [[pata|IDE]] سرعة نقل البيانات القصوى 167 م.بايت/ثا. الناقل الأكثر استخداماً قبل تطوير SATA.

بما أن [[bit rate|سرعات نقل البيانات]] في سواقات الأقراص الصلبة حالياً لا تتجاوز 300 ميغابايت/ثا، فإن أي ناقل بيانات يوفر 2.5 غ.بت/ثا أو أكثر يوفّر حجم حزمة كافٍ لسواقة قرص صلب واحدة. لكن نواقل البيانات التي توفر معدلات نقل أعلى مفيدة في حال توصيل عدة سواقات عبر منفذ واحد مثل توصيل عدة سواقات معاً عبر منفذ SAS أو عبر منفذ USB واحد.

## مصفوفات الأقراص

RAID

disk arrays (see raid ) offer high capacity and data-protecting redundancy.

## كثافة البيانات

تزايدت كثافة البيانات Data density في سواقات الأقراص الصلبة مع الزمن بسبب تطورات كثيرة طرأت عليها، منها استبدال محرك الرؤوس الخطوي بوشيعة صوتية ذات حركة مستمرة عالية الدقّة تسمح بتتبّع مسارات ضيقة أكثر، وتطوّر تقنيات تصنيع المواد الممغنطة حيث أصبحت أكثر قدرة على الاحتفاظ بقطبية مغناطيسية المناطق الصغيرة دون تداخل أو ضياع البيانات عند تقارب الشحنات المغناطيسية للبتّات المختلفة من بعضها.

كلما ارتفعت كثافة البيانات، كلما أمكن تخزين كميات بيانات أكبر على نفس المساحة الفيزيائية المتاحة، وتقاس الكثافة بواحدة بت في البوصة المربّعة Bit per Square Inch.

## تنظيم البيانات

تقسم الأقراص إلى مسارات دائرية tracks وتقسم المسارات إلى قطاعات sectors. تكون القطاعات متساوية السعة التخزينية رغم أن القطاعات الأبعد عن مركز القرص تكون أطول فيزيائياً. طريقة التقسيم هذه مستخدمة أيضاً في سوّاقات الأقراص المرنة.

![[/static/content/hdd-sectors.jpg]]

Data is organized on the disk by dividing the tracks
into segments called sectors. When the disk is prepared
Parts of a typical hard disk drive. Many hard drives have multiple
heads and platters to allow for storage of larger amounts of data.
to receive data (a process called formatting), each sector
is tested by writing and reading sample data. If an error
occurs, the operating system marks the sector as unusable
(virtually any hard disk will have at least a few such bad
sectors).
The set of vertical corresponding tracks on the stack of
platters that make up the drive is called a cylinder. Since
the drive heads are connected vertically, if a head is cur-
rently reading or writing for example sector 89 on one
platter, it is positioned over that same sector on all the
others. Therefore, the operating system normally stores
files by filling the full cylinder before going to a new sec-
tor number.
Another way to improve data flow is to use sector inter-
leaving. Because many disk drives can read data faster than
the operating system can read it from the disk’s memory
buffer, data is often stored by skipping over adjacent sec-
tors. Thus, instead of storing a file on sectors 1, 2, and 3,
it might be stored on sectors 1, 3, and 5 (this is called a 2:1
interleave). Moving the head from sector 1 to sector 3 gives
the system enough time to process the data. (Otherwise,
by the time the system was ready to read sector 2, the disk
would have rotated past it and the system would have to
wait through a complete rotation of the disk.) Newer CPUs
are often fast enough to keep up with contiguous sectors,
avoiding the need for interleaving.
Data throughput tends to decrease as a hard drive is
used. This is due to fragmentation. The operating system
runs out of sufficient contiguous space to store new files
and has to write new files to many sectors widely scattered
on the disk. This means the head has to be moved more
often, slowing data access. Using an operating system (or
third party) defragmentation utility, users can periodically
reorganize their hard drive so that files are again stored in
contiguous sectors.
Files can also be reorganized to optimize space rather
than access time. If an operating system has a minimum
cluster size c4K, a single file with only 32 bytes of data
will still consume 4,096 bytes. However, if all the files are
written together as one huge file (with an index that spec-
ifies where each file begins) that waste of space would be
avoided. This is the principle of disk compression. Disk
compression does slow access somewhat (due to the need
to look up and position to the actual data location for a
file) and the system becomes more fragile (since garbling
the giant file would prevent access to the data in perhaps
thousands of originally separate files). The low cost of
high capacity drives today has made compression less
necessary.

## حجم القطاع

القطاع هو أصغر وحدة يمكن كتابتها أو قراءتها من القرص. إذا كان حجم الملف الذي سيتم تخزينه على القرص الصلب أصغر من حجم القطاع، فإن بقية القطاع تبقى غير مستخدمة.

يتحدد حجم القطاع عند تصنيع السوّاقة، وتكون القطاعات كلها بحجم واحد. سابقاً كان حجم القطاع 512 بايت، لكن حديثاً أصبح حجم القطاع 4 كيلوبايت (4096 بايت) منتشراً في الأسواق. حالياً تتوفر ثلاث خيارات من ناحية حجم القطاع:

1. 4 كيلوبايت (يرمز لها 4Kn)
2. 4 كيلوبايت مع محاكاة 512 بايت (يرمز لها 512e)
3. 512 بايت (يرمز لها 512n)

بعض سواقات 4Kn تسمح للمستخدم بتفعيل وضع محاكاة 512e أو تعطيله حسب الرغبة. محاكاة 512e تسمح للسواقة بالعمل مع النظم التي لا تستطيع التعامل مع الأقراص الصلبة ذات قطاع 4 كيلوبايت، خاصة عند استخدامها للإقلاع، وقد توفر أداء أعلى في حال استخدام نظام ملفات قديم يفترض أن حجم القطاع هو 512 دائماً بدلاً من الاستعلام عنه من السوّاقة.

## تقنيات التسجيل

CMR (Conventional Magnetic Recording)

SMR (Shingled Magnetic Recording)

**Heat-assisted magnetic recording** (**HAMR**)

Uses a laser diode for heating up the media area where data should be written to, supporting the writing process through the selective use of heat energy. This allows writing with less magnetic energy and the use of a smaller write head, achieving a higher storage density as a result. However, the energy requirement has an impact on the operating costs in large installations and also leads to thermal challenges. In addition, there are still concerns about the long-term reliability of laser diodes.

MAMR (Microwave Assisted Magnetic Recording)
uses a microwave transmitter (spin torque oscillator) at the write head to generate waves in the range of 20GHz to 40GHz. These are introduced to the magnetic medium as auxiliary energy, thereby requiring less energy for the writing process. In turn, this means that significantly smaller writing heads can be used, making the production of drives with significantly higher capacity possible.

[heated-dot magnetic recording](https://en.wikipedia.org/w/index.php?title=Heated-dot_magnetic_recording&action=edit&redlink=1 "Heated-dot magnetic recording (page does not exist)") (HDMR)
bit-pattern recording, is also under development, although not expected to be available until at least 2025

## حجم الكاش

256MiB or 512MiB

Another factor in data access time and throughput is the
use of a dedicated memory device (see cache ) to “pre-fetch”
data likely to be needed. Windows Vista allows memory
from some USB memory sticks (see flash drive ) to work
as a disk cache. “Hybrid” hard drives directly integrating
RAM and drive storage are also available.

## مكونات سواقة القرص الصلب

![[/static/content/hdd-hard-disk.svg|600]]

### 1. الأطباق Platters

الأطباق هي الأقراص التي تكتب عليها البيانات، وهي تصنع من مادة صلبة غير مغناطيسية كالزجاج أو السيراميك أو الألمنيوم، وتطلى بطبقة رقيقة من معدن قابل لإعادة المغنطة. تتميز الأطباق الزجاجية في السواقات الحديثة بعزلها للحرارة وسماكتها الرقيقة.

تحوي سواقة الأقراص الصلبة طبقاً واحداً أو أكثر. وقد تحوي السواقات ذات السعات الكبيرة 9 أو 10 أطباق.

يفصل بين الطبق وبين الرأس الهواء أو غاز الهليوم، كما تغطى الأطباق عادة بطبقة حماية من [الكربون الألماسي](https://en.wikipedia.org/wiki/Diamond-like_carbon) أو [نتريد السيليكون](https://en.wikipedia.org/wiki/Silicon_nitride#:~:text=Silicon%20nitride%20is%20a%20chemical,refers%20to%20this%20specific%20composition.) أو [الكربون المهدرج](https://www.sciencedirect.com/topics/engineering/amorphous-hydrogenated-carbon) أو [PFPE](https://en.wikipedia.org/wiki/Perfluoropolyether).

تكتب البيانات على الطبق بشكل حلقات متحدة المركز تدعى المسارات tracks، وتقسم المسارات إلى قطاعات متساوية الحجم التخزيني تدعى القطاعات sectors.

### 2. المغزل Spindle

تُثبّتُ الأطباق على محور دوران واحد يدعى المِغْزَل spindle. يدور المغزل بسرعة ثابتة باستخدام محرك DC يدور عادة بسرعة 5400 [[rpm|دورة في الدقيقة]] أو 7200 دورة في الدقيقة. هناك سوّاقات بسرعات دوران أعلى مثل 10,500 دورة أو 15,000 دورة في الدقيقة لكنها أقل انتشاراً وتستخدم في الأغراض التي تتطلب أداءً أعلى.

تؤثر سرعة الدوران على سرعة نقل البيانات وزمن الوصول. بشكل عام، كلما كانت سرعة الدوران أكبر كلما زادت سرعة قراءة أو كتابة البيانات. هناك عوامل أخرى تؤثر على أداء سواقة القرص الصلب، مثل حجم الكاش وكثافة البيانات و[[seek time|زمن السعي]].

من جهة أخرى، يرتفع استهلاك الطاقة والحرارة الناتجة مع ارتفاع سرعة دوران الأقراص. سواقات الأقراص الصلبة المتاحة حالياً في الأسواق تستهلك نموذجياً 4.8 [[watt|واط]] إذا كانت سرعة دورانها 5400، أما السواقات التي تدور بسرعة 7200 فهي تستهلك 9.4 واط.

### 3. الذراع Arm

تحمل الذراع رؤوس القراءة والكتابة ويتحكم بحركتها محرك خطي يدعى المشغّل actuator. يتألف المشغل من مغناطيسين قويين يولدان حقلاً مغناطيسياً بينهما عمودي الاتجاه حتى لا يتداخل مع البيانات المخزنة على الأطباق، ووشيعة صوتية voice coil في جذر الذراع تتحرك بينهما. تتحرك الذراع مع حركة الوشيعة الصوتية حسب اختلاف قطبية التيار المارّ بها وشدّته.

كانت السوّاقات القديمة تستخدم محركاً خطوياً stepper motor لتحريك الذراع، لكنها لم تعد تستخدم لعدة عيوب منها ارتفاع حرارتها مع التشغيل، وعدم دقتها في تحريك الرؤوس ومطابقتها مع المسارات تماماً.

### 4. رؤوس القراءة والكتابة Read/Write Heads

![[/static/content/hdd-arm.jpg]]

في نهاية كل ذراع، يتم تثبيت مجموعة جمبل الرأس Head Gimbal Assembly&mdash;HGA التي تتألف من قطعة معدنية رقيقة (حوالي 0.1 مم) تُثبَّت عليها "منزلقة slider". هذه المنزلقات هي المسؤولة عن عمليات القراءة والكتابة. تصنع المنزلقة بشكل مكعب صغير الحجم من مادة الفرّيت ferrite تعمل على تحويل الطاقة الكهربائية إلى مغناطيسية تستخدم في تسجيل البيانات أو استشعار الحقول المغناطيسية وتحويلها إلى إشارة كهربائية عند قراءة البيانات.

وزن مجموعة الجمبل مهمل، ويسمح لها بالطفو على طبقة رقيقة من الهواء تتشكل بسبب سرعة دوران الأطباق تدعى بالمحمل الهوائي air bearing. يصمم سطح المنزلقة أيروديناميكياً للاستفادة من خواص المحمل الهوائي ويختلف ارتفاع انزلاق الرأس بحسب اختلاف التصميم. تناقصت المسافة الفاصلة بين رأس القراءة والكتابة وسطح القرص في السواقات الحديثة حتى أنها قد تصل إلى 3 نانومتر. عند إيقاف عمل السواقة تتحرك الرؤوس إلى "الموقف" وهو إما أن يكون قطعة خارج الأطباق تسمح للرؤوس بالتوقف جانب الحافة الخارجية للطبق أو قريباً من محور الدوران حيث لا تخزن البيانات في تلك المنطقة.

يحتاج كل طبق إلى رأسي قراءة وكتابة للقراءة والكتابة على الوجهين العلوي والسفلي للطبق. تجمع الرؤوس كلها معاً في مجموعة الذراع Head Arm Assembly&mdash;HSA بحيث تتحرك مع بعضها البعض أي أن الرؤوس تكون كلها عند رقم المسار نفسه. يعمل رأس واحد في الوقت الواحد لقراءة البيانات أو كتابتها وتكون بقية الرؤوس خاملة.

### 5. اللوحة الإلكترونية

تُثبّت [[pcb|لوحة الدارة المطبوعة PCB]] على الوجه السفلي لسواقة القرص الصلب. الوظيفة الرئيسية للوحة الإلكترونية هي تغذية الأجزاء الميكانيكية بالتيار الكهربائي والتحكم بعملها ونقل البيانات بين مجموعة القراءة والكتابة وبين الحاسوب. أهم المكوّنات الإلكترونية هي شريحة التحكم الرئيسية، شريحة قيادة المحرك، شريحة [[rom]]، وشريحة كاش، وواجهة الاتصال. قد تحوي اللوحة أيضاً مكونات إضافية مثل عتاد مُخصّص [[encryption|لتشفير البيانات]]، أو محوّل SATA إلى USB في السوّاقات الخارجية.

بعض اللوحات الإلكترونية تحوي أيضاً [[jumper|jumpers]] تستخدم لتغيير بعض الإعدادات، مثل اختيار السواقة الرئيسة والتابعة master/slave في سواقات [[pata|IDE]].

### 6. مجموعة الرأس والعلبة الخارجية Chassis

تضم مجموعة الرأس والقرص head disk assemby&mdash;HDA المكونات الميكانيكية وهي الأطباق ورؤوس القراءة والكتابة والمغزل ومحرك المغزل وهي تشكل معاً غرفة مغلقة معزولة عن الجو الخارجي. أما اللوحة الإلكترونية التي تتحكم بتلك المكونات وتدير عملية قراءة وكتابة البيانات فهي تقع خارج مجموعة الرأس.

تجمع الدارة الإلكترونية مع مجموعة الرأس والقرص معاً في علبة حاوية Chassis، وتصنع سواقات الأقراص الصلبة بأبعاد قياسية من أشهرها مقاس 3.5 [[inch|بوصة]] ومقاس 2.5 بوصة.

سواقات الأقراص الصلبة الحديثة حساسة جداً بسبب دقّة حجم رأس القراءة والكتابة وكثافة البيانات العالية. إذا فُتِحت مجموعة الرأس في بيئة غير مناسبة فإن أي شوائب صغيرة أو ذرات من الغبار يمكن أن تسبب أضراراً للأطباق أو لرؤوس القراءة والكتابة. في سواقات الأقراص الأحدث ذات السعات العالية تكون حجرة مجموعة الرأس مفرغة من الهواء ومملوءة بغاز الهليوم للتقليل من أثر المقاومة الأيروديناميكية، وهذا يسمح بخفض طاقة التشغيل. تستخدم تقنيات لحام خاصة بأشعة الليزر لضمان عدم تسرب الغاز من مجموعة الرأس.

![[/static/content/hdd-normal-vs-sealed.jpg]]
![[/static/content/hdd-helium-sealed.jpg]]

---

## فيديو

- [كيف تعمل سواقة القرص الصلب؟](https://www.youtube.com/watch?v=wtdnatmVdIg)
- [إصلاح قرص صلب 8 بوصة من الثمانينات](https://www.youtube.com/watch?v=hbc6n3Ln3bM)
- [تصوير عمل سواقة أقراص صلبة قديمة بمحرك سيرفو](https://www.youtube.com/watch?v=GwpQrWSx8B4)
- [تصوير عمل سواقة من التسعينات تستخدم وشيعة صوتية لتحريك الذراع](https://www.youtube.com/shorts/8tOB5K95aRg)
- [هل يمكن استخدام سواقة القرص الصلب كمكبر صوت؟](https://youtu.be/L7GV-DgDZn4?si=2jtMyOCYaqAyEGCi&t=650)
- [أصغر قرص صلب في العالم](https://www.youtube.com/watch?v=p7_Zlkj4u4g)

---

## مصادر

- Encyclopedia of computer science and technology, Harry Henderson, 2008, ISBN-13: 978-0-8160-6382-6
- Hard Disk Drive: Mechatronics and Control, Abdullah Al Mamun, GuoXiao Guo, Chao Bi, 2017
- https://www.webopedia.com
- https://www.wikipedia.com
