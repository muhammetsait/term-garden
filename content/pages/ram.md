
# ذاكرة وصول عشوائي

ذاكرة الوصول العشوائي رام Random Access Memory&mdash;RAM هي [[volatile|ذاكرة تخزين مؤقت]] تستخدم ل

Types
There are two kinds of volatile RAM: dynamic and static. Even though both types need continuous electrical current to retain data, there are some important differences between them.

Dynamic RAM (DRAM) is very popular due to its cost-effectiveness. DRAM stores each bit of information in a different capacitor within the integrated circuit. DRAM chips need just one single capacitor and one transistor to store each bit of information. This makes it space-efficient and inexpensive.[2]

The main advantage of static RAM (SRAM) is that it is much faster than dynamic RAM. Its disadvantage is its high price. SRAM does not need continuous electrical refreshes, but it still requires constant current to sustain the difference in voltage. Every single bit in a static RAM chip needs a cell of six transistors, whereas dynamic RAM requires only one capacitor and one transistor. As a result, SRAM is unable to accomplish the storage capabilities of the DRAM family.[3] SRAM is commonly used as CPU cache and for processor registers and in networking devices.


ECC (error-correcting code) RAM.

ECC ram will commonly store 8-bits worth of information using 9-bits. The extra bit-per-byte is used to store error correction codes.

ECC vs non-ECC (In both cases, every byte is spread across every chip. Image courtesy of Puget Systems)

This is all completely invisible to users of the hardware. In both cases, software using this RAM sees 8 bits per byte.

As an aside: error-correcting codes in RAM typically aren't actually 1 bit per byte; they're instead 8 bits per 8 bytes. This has the same space overhead, but has some additional advantages. See SECDED for more info.

![[/static/content/ram-ecc.jpg]]

---

## مصادر

- https://en.wikipedia.org/wiki/Volatile_memory
