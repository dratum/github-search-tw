export function throttle<T extends (...args: string[]) => Promise<void>>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => Promise<void> {
  let lastCall = 0;
  return async (...args: Parameters<T>): Promise<void> => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      await fn(...args);
    }
  };
}
