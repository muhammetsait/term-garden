---
aliases:
  - hdd
---

# سواقة الأقراص الصلبة

سواقة الأقراص الصلبة Hard Disc Drive&mdash;HDD هي جهاز تخزين بيانات دائم يستطيع تخزين البيانات الرقمية وقراءتها من الأقراص الصلبة Hard Disc وهي أقراص مصنوعة من مواد صلبة ومغطاة بطبقة من مادة قابلة للمغنطة الدائمة.

كانت سواقات الأقراص الصلبة الوسط الدائم الرئيسي لتخزين البيانات والبرامج في [[personal computer|الحاسوب الشخصي]] منذ انخفاض أسعارها وتوفرها في متناول معظم المستخدمين في تسعينات القرن الماضي وحتى بدء انتشار صناعة سواقات الحالة الصلبة [[solid state drive|SSD]] وتزايد سعاتها التخزينية وانخفاض أسعارها، التي أصبحت الوسط التخزيني الأكثر استخداماً في الحواسيب الشخصية بدءاً من عام 2015 تقريباً.

تصل السعة التخزينية للسواقات الصلبة حالياً ([[2024]]) إلى 32 [[تيرابايت]] وتتمتع بزمن [[mtbf|MTBF]] يصل إلى 2.5 مليون ساعة عمل وسرعة نقل بيانات تتراوح بين 230 وبين 285 [[ميغابت/ثا]].

رغم تراجع استخدام سواقات الأقراص الصلبة في الحواسيب المحمولة والمكتبية الشخصية، إلا أنها لا تزال شائعة الاستخدام في التطبيقات التي تحتاج لسعات تخزينية كبيرة، مثل مراكز البيانات أو النسخ الاحتياطي أو أنظمة كاميرات المراقبة.
## الاتصال مع الحاسوب

SATA 6 Gbit/s

SAS (https://en.wikipedia.org/wiki/Serial_Attached_SCSI) 12 Gbit/s

IDE

## مصفوفات الأقراص

RAID

## تقنيات التسجيل

CMR (Conventional Magnetic Recording)

SMR (Shingled Magnetic Recording)

**Heat-assisted magnetic recording** (**HAMR**)

Uses a laser diode for heating up the media area where data should be written to, supporting the writing process through the selective use of heat energy. This allows writing with less magnetic energy and the use of a smaller write head, achieving a higher storage density as a result. However, the energy requirement has an impact on the operating costs in large installations and also leads to thermal challenges. In addition, there are still concerns about the long-term reliability of laser diodes.

MAMR (Microwave Assisted Magnetic Recording)
uses a microwave transmitter (spin torque oscillator) at the write head to generate waves in the range of 20GHz to 40GHz. These are introduced to the magnetic medium as auxiliary energy, thereby requiring less energy for the writing process. In turn, this means that significantly smaller writing heads can be used, making the production of drives with significantly higher capacity possible.

[heated-dot magnetic recording](https://en.wikipedia.org/w/index.php?title=Heated-dot_magnetic_recording&action=edit&redlink=1 "Heated-dot magnetic recording (page does not exist)") (HDMR)
bit-pattern recording, is also under development, although not expected to be available until at least 2025


9-Disc Helium filled (16TB)

Up to 20 TB of Conventional Magnetic Recording (CMR) capacity. Available in SATA models with 512e or 4Kn Advanced Format Sector Technology

10-disk design for superior storage density.

### Toshiba Precision Laser Welding Technology

Seals helium inside the 10-disk mechanics to reduce aerodynamic drag and deliver a lower operational power profile.

Buffer size

256MiB or 512MiB


## حجم القطاع

سابقاً كان حجم القطاع 512 بايت. لكن حديثاً أصبح حجم القطاع 4 كيلوبايت 4Kn. توفر سواقات الأقراص الصلبة الحديثة محاكاة لحجم القطاع 512 (512e).

Sector length

512n
512e
4Kn

Toshiba Persistent Write Cache Technology for Data-Loss Protection in Sudden Power-Loss Events (512e models)

## مكونات سواقة القرص الصلب

![[/static/content/hard_disk.svg|600]]

### 1. الأطباق Platters

الأطباق هي الأقراص التي تكتب عليها البيانات، وهي تصنع من مادة صلبة غير مغناطيسية كالزجاج أو السيراميك أو الألمنيوم، وتطلى بطبقة رقيقة من معدن قابل لإعادة المغنطة. تتميز الأطباق الزجاجية في السواقات الحديثة بعزلها للحرارة وسماكتها الرقيقة.

تحوي سواقة الأقراص الصلبة طبقاً واحداً أو أكثر. وقد تحوي السواقات ذات السعات الكبيرة 9 أو 10 أطباق.

يحتاج كل طبق إلى رأسي قراءة وكتابة للقراءة والكتابة على الوجهين العلوي والسفلي للطبق. لا تلامس رؤوس القراءة والكتابة الأطباق مباشرة، بل "تطفو" على بعد مسافة دقيقة من الأطباق بفعل قوة الطرد المركزية.

يفصل بين الطبق وبين الرأس الهواء أو غاز الهليوم، كما تغطى الأطباق عادة بطبقة من [الكربون الألماسي](https://en.wikipedia.org/wiki/Diamond-like_carbon) أو [نتريد السيليكون](https://en.wikipedia.org/wiki/Silicon_nitride#:~:text=Silicon%20nitride%20is%20a%20chemical,refers%20to%20this%20specific%20composition.) أو [الكربون المهدرج](https://www.sciencedirect.com/topics/engineering/amorphous-hydrogenated-carbon) أو [PFPE](https://en.wikipedia.org/wiki/Perfluoropolyether).

تكتب البيانات على الطبق بشكل حلقات متحدة المركز تدعى المسارات tracks، وتقسم المسارات إلى قطاعات متساوية الحجم التخزيني تدعى القطاعات sectors.

### 2. المغزل spindle

تُثبّتُ الأقراص على محور دوران واحد يدعى المِغْزَل spindle. يدور المغزل بسرعة ثابتة باستخدام محرك DC يدور عادة بسرعة 5400 [[rpm|دورة في الدقيقة]] أو 7200 دورة في الدقيقة. هناك سوّاقات بسرعات دوران أعلى مثل 10,500 دورة أو 15,000 دورة في الدقيقة لكنها أقل انتشاراً وتستخدم في الأغراض التي تتطلب أداءً أعلى.

تؤثر سرعة الدوران على سرعة نقل البيانات وزمن الوصول. بشكل عام، كلما كانت سرعة الدوران أكبر كلما زادت سرعة قراءة أو كتابة البيانات. هناك عوامل أخرى تؤثر على أداء سواقة القرص الصلب، مثل حجم الكاش وكثافة البيانات و[[seek time|زمن السعي]].

من جهة أخرى، يرتفع استهلاك الطاقة والحرارة الناتجة مع ارتفاع سرعة دوران الأقراص. سواقات الأقراص الصلبة المتاحة حالياً في الأسواق تستهلك نموذجياً 4.8 [[watt|واط]] إذا كانت سرعة دورانها 5400، أما السواقات التي تدور بسرعة 7200 فهي تستهلك 9.4 واط.

### 3. الذراع Arm

محرك الذراع actuator

All the heads are attached to a single head [actuator](https://www.webopedia.com/definitions/actuator/), or actuator arm, that moves the heads around the platters. Older hard drives used a stepper motor actuator, which moved the heads based on a motor reacting to stepper pulses. Each pulse moved the actuator over the platters in predefined steps. Stepper motor actuators are not used in modern drives because they are prone to alignment problems and are highly sensitive to heat. Modern hard drives use a voice coil actuator, which controls the movement of a coil toward or away from a permanent magnet based on the amount of current flowing through it. This guidance system is called a servo.

voice coils

### 4. رؤوس القراءة والكتابة Read/Write Heads

![[/static/content/hdd-arm.jpg]]

Head gimbal assembly (HGA) is connected to the actuator arm front end. It consists of thin (**≈0.1mm**) pieces of sheet metal on which "**sliders**" are soldered. These sliders, are the most important part of entire head assembly, as they are responsible for performing read/write operations.

Mass of HGA is negligible, so it can hover on "**air bearing**" above/bellow platters during read/write operations. "Air bearing" is a thin layer of air, which is formed as a consequence of high RPM of the platters.

Height, on which HGA of modern hard drives hovers above/bellow platters, is, depending on exact model **≈ 70nm**. It's important to point out that there is constant tendency in HDD development, to additionally decrease this dimension. If high RPM is taken into consideration, it's clear from where danger lurks...
Sliders are low-volume cubes/cuboids, made of **ferrite**, by which electric signal is transformed into magnetic recording -writing data or vice versa, by which magnetic recording is transformed into electric signal - reading data. Slider surface is aerodynamically designed so "air bearing" features can be used in the best way. Shape of these surface is known as a "**pattern**" and it differs from model to model.


The read/write [heads](https://www.webopedia.com/definitions/head/) read and write data to the platters. There is typically one head per platter side, and each head is attached to a single actuator shaft so that all the heads move in unison. When one head is over a track, all the other heads are at the same location over their respective surfaces. Typically, only one of the heads is active at a time, i.e., reading or writing data. When not in use, the heads rest on the stationary platters, but when in motion the spinning of the platters create air pressure that lifts the heads off the platters. The space between the platter and the head is so minute that even one dust particle or a fingerprint could disable the spin. This necessitates that hard drive assembly be done in a [clean room](https://www.webopedia.com/definitions/clean-room/). When the platters cease spinning the heads come to rest, or park, at a predetermined position on the heads, called the [landing zone](https://www.webopedia.com/definitions/landing-zone/).

### 5. المكونات الإلكترونية

### 6. مجموعة الرأس والعلبة الخارجية Chassis

تضم مجموعة الرأس والقرص head disk assemby&mdash;HDA الأطباق ورؤوس القراءة والكتابة والمغزل ومحرك المحور وهي تشكل معاً غرفة مغلقة معزولة عن الجو الخارجي. أما اللوحة الإلكترونية التي تتحكم بتلك المكونات وتدير عملية قراءة وكتابة البيانات فهي تقع خارج مجموعة الرأس.

تجمع الدارة الإلكترونية مع مجموعة الرأس والقرص معاً في علبة حاوية لحمايتها، وتصنع سواقات الأقراص الصلبة بأبعاد قياسية من أشهرها مقاس 3.5 [[inch|بوصة]] ومقاس 2.5 بوصة.

الحماية من الغبار

غاز الهليوم

