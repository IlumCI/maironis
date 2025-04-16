/**
 * Runtime security checks and protections
 */

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

// Disable console in production (optional security measure)
function disableConsole() {
  const noop = () => {}
  const methods = ["log", "debug", "info", "warn", "error", "assert", "dir", "trace"]

  methods.forEach((method) => {
    console[method] = noop
  })
}
