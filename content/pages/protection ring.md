hierarchical protection domains
# نطاقات الحماية الهرمية

# حلقات الحماية

يوفر نظام التشغيل عدة مستويات بامتيازات مختلفة للوصول إلى موارد الحاسوب. تنقسم مستويات الوصول إلى عدة طبقات أو مراتب تدعى حلقات الحماية.

توفر المعالجات دوائر حماية توفر أوضاعاً مختلفة لعمل المعالج تتمتع بمستويات وصول مقيدة على مستوى السيليكون أو الميكروكود.

تنظم الحلقات في طبقات من الأعلى امتيازاً (الأكثر ثقة، تدعى عادة الحلقة 0)، إلى الأدنى امتيازاً (الأقل ثقة، ويرمز لها بأكبر رقم متاح). في معظم نظم التشغيل، تتمتع الحلقة 0 بأعلى مستوى من صلاحيات الوصول، وتتعامل مباشرة مع بعض العتاد الفيزيائي مثل بعض وظائف المعالج ومتحكمات الدخل والخرج. في بعض المعالجات، هناك مستوى صلاحية أعلى (الحلقة -1) يعمل بها الهيبرفايزور.

يسمح للتطبيقات التي تعمل في الحلقات العليا الوصول إلى موارد الحلقات السفلى وفق آليات محددة ولا يسمح بالوصول العشوائي. على سبيل المثال، لا يستطيع برنامج يعمل في الحلقة 3 (حلقة تطبيقات المستخدم) تشغيل كاميرا الويب دون تنبيه المستخدم لأن الوصول المباشر إلى العتاد مسموح لبرمجيات الحلقة 1 فقط (حلقة تعاريف الأجهزة).

## التنفيذ

مفهوم تعدد حلقات الحماية كان أحد المفاهيم الثورية التي طرحها نظام التشغيل ملتيكس Multics. الحاسوب المركزي GE 645 احتوى على بعض العتاد المخصص للحماية، لكنه لم يكن كافياً لتوفير دعم حلقات الحماية عتادياً، لذلك كان تقييد الانتقال بين الحلقات في نظام ملتيكس مطبق برمجياً.

تلى ذلك الحاسوب المركزي Honeywell 6180 الذي احتوى على عتاد خاص يدعم ثمان حلقات حماية.

تتطلب الاستفادة الكاملة من حلقات الحماية تكاملاً دقيقاً بين العتاد وبين نظام التشغيل. نظم التشغيل التي صممت لتعمل على منصات عتادية مختلفة قد تستخدم حلقات الحماية بشكل محدود إذا لم تكن متاحة على كل المنصات المدعومة. لذلك يتم تبسيط نموذج الحماية إلى مستوى "نواة" ومستوى "مستخدم" رغم أن العتاد يدعم عدداً أكبر من المستويات.

رغم أن نظام ملتيكس كان يدعم 8 حلقات حماية إلا أن معظم نظم التشغيل الحديثة تستخدم عدداً أقل من ذلك. مثلاً، نظام التشغيل ويندوز 7 وويندوز سيرفر 2008 يستخدمان حلقتي حماية: الحلقة 0 التي تمثل وضع النواة، والحلقة 3 التي تمثل وضع المستخدم. ذلك لأن إصدارات ويندوز NT السابقة كانت تعمل على معالجات تدعم مستويين من الحماية فقط.

## أوضاع المعالج

[[cpu modes]]

