import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "بدون عنوان",
    description: "لا يوجد وصف",
  },
  components: {
    backlinks: {
      title: "الروابط الراجعة",
      noBacklinksFound: "لا توجد روابط راجعة.",
    },
    themeToggle: {
      lightMode: "الوضع الفاتح",
      darkMode: "الوضع الداكن",
    },
    explorer: {
      title: "فهرس",
    },
    footer: {
      createdWith: "مبني بوساطة",
    },
    graph: {
      title: "المخطط",
    },
    recentNotes: {
      title: "آخر الملاحظات",
      seeRemainingMore: ({ remaining }) => `تصفح ${remaining} أكثر →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `مقتبس من ${targetSlug}`,
      linkToOriginal: "رابط الملاحظة الأصل",
    },
    search: {
      title: "بحث",
      searchBarPlaceholder: "ابحث عن شيء ما",
    },
    tableOfContents: {
      title: "المحتويات",
    },
  },
  pages: {
    rss: {
      recentNotes: "آخر الملاحظات",
      lastFewNotes: ({ count }) => `آخر ${count} ملاحظة`,
    },
    error: {
      title: "غير موجود",
      notFound: "هذه الصفحة غير موجودة.",
    },
    folderContent: {
      folder: "فهرس",
      itemsUnderFolder: ({ count }) =>
        count === 1
          ? "هناك عنصر واحد في هذا الفهرس"
          : count < 11
            ? `هناك ${count} عناصر في هذا الفهرس.`
            : `هناك ${count} عنصراً في هذا الفهرس.`,
    },
    tagContent: {
      tag: "وسم",
      tagIndex: "فهرس الوسوم",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "هناك عنصر واحد يملك الوسم" : `هناك ${count} عناصر تملك هذا الوسم.`,
      showingFirst: ({ count }) => `إظهار أول ${count} وسوم.`,
      totalTags: ({ count }) => `هناك ${count} وسوم.`,
    },
  },
} as const satisfies Translation
