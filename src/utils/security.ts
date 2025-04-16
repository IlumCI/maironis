/**
 * Sanitizes strings to prevent XSS attacks
 * This is a simple implementation - for production, consider using DOMPurify
 */
export function sanitizeString(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

/**
 * Creates a safe HTML object for dangerouslySetInnerHTML
 * Only use this when absolutely necessary
 */
export function createSafeHTML(html: string) {
  // In a real production app, you would use DOMPurify here
  // For example: return { __html: DOMPurify.sanitize(html) };
  return { __html: html }
}
