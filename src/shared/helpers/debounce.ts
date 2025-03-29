export function debounce<T extends (...args: any[]) => Promise<void>>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => Promise<void> {
  let timeoutId: NodeJS.Timeout;

  return async (...args: Parameters<T>): Promise<void> => {
    // Очищаем предыдущий таймаут
    clearTimeout(timeoutId);

    // Устанавливаем новый таймаут
    timeoutId = setTimeout(async () => {
      await fn(...args);
    }, delay);
  };
} 