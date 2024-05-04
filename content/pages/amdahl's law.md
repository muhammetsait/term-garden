
# قانون أمدال



In computer architecture, Amdahl's law (or Amdahl's argument[1]) is a formula which gives the theoretical speedup in latency of the execution of a task at fixed workload that can be expected of a system whose resources are improved. It states that "the overall performance improvement gained by optimizing a single part of a system is limited by the fraction of time that the improved part is actually used".[2] It is named after computer scientist Gene Amdahl, and was presented at the American Federation of Information Processing Societies (AFIPS) Spring Joint Computer Conference in 1967.

Amdahl's law is often used in parallel computing to predict the theoretical speedup when using multiple processors. For example, if a program needs 20 hours to complete using a single thread, but a one-hour portion of the program cannot be parallelized, therefore only the remaining 19 hours' (p = 0.95) execution time can be parallelized, then regardless of how many threads are devoted to a parallelized execution of this program, the minimum execution time is always more than 1 hour. Hence, the theoretical speedup is less than 20 times the single thread performance,

https://en.wikipedia.org/wiki/Amdahl%27s_law
