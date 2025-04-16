/**
 * Runtime security checks and protections
 */

// Define console methods that we want to potentially disable
const consoleMethods = ['log', 'info', 'warn', 'error', 'debug'] as const
type ConsoleMethod = typeof consoleMethods[number]

// No-operation function
function noop() {}

// Function to disable all console methods
export function disableConsole() {
  consoleMethods.forEach((method: ConsoleMethod) => {
    (console as any)[method] = noop;
  });
}

// Initialize security measures
export function initSecurity() {
  // Prevent clickjacking by checking if we're in an iframe
  if (window.self !== window.top) {
    document.body.innerHTML = "This website cannot be displayed in an iframe."
    throw new Error("Potential clickjacking attack detected")
  }

  // Disable console for production (uncomment if needed)
  // if (process.env.NODE_ENV === 'production') {
  //   disableConsole();
  // }

  // Add event listener to detect and prevent XSS in URL parameters
  checkURLParameters()
}

// Check URL parameters for potential XSS
function checkURLParameters() {
  const urlParams = new URLSearchParams(window.location.search)

  urlParams.forEach((value, key) => {
    // Check for suspicious patterns in URL parameters
    const suspiciousPatterns = [/<script/i, /javascript:/i, /on\w+=/i, /data:/i]

    if (suspiciousPatterns.some((pattern) => pattern.test(value))) {
      // Log the attempt and sanitize by removing the parameter
      console.warn(`Potential XSS attempt detected in URL parameter: ${key}`)

      // Remove the suspicious parameter
      urlParams.delete(key)

      // Update the URL without the suspicious parameter
      const newUrl =
        window.location.pathname + (urlParams.toString() ? `?${urlParams.toString()}` : "") + window.location.hash

      window.history.replaceState({}, document.title, newUrl)
    }
  })
}
