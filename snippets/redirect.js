/**
 * Redirects the user to a specified URL after a static delay
 * if the current page's URL does not include a specific substring.
 *
 * @param {string} substring - The string to check for in the current URL.
 * @param {string} url - The URL to redirect to if the substring is not found.
 * @param {number} delay - The static delay in milliseconds before redirecting.
 * @example
 * // Redirect after a fixed delay, but not in the marketo landing page designer
 * redirectStatic("marketodesigner", "https://example.com", 2000);
 */
const redirectStatic = (substring, url, delay) => {
    if (!window.location.href.includes(substring)) {
        setTimeout(() => window.location.replace(url), delay);
    }
};

/**
 * Redirects the user to a specified URL after a static or dynamic delay
 * if the current page's URL does not include a specific substring.
 *
 * @param {string} substring - The string to check for in the current URL.
 * @param {string} url - The URL to redirect to if the substring is not found.
 * @param {number|function} delay - The delay in milliseconds before redirecting,
 *                                  or a function that returns the delay dynamically.
 * @example
 * // Redirect after a fixed delay
 * redirectDynamic("marketodesigner", "https://example.com", 2000);
 *
 * @example
 * // Redirect with a dynamically calculated delay
 * const calculateDelay = () => Math.random() * 5000;
 * redirectDynamic("marketodesigner", "https://example.com", calculateDelay);
 */
const redirectDynamic = (substring, url, delay) => {
    const delayValue = typeof delay === "function" ? delay() : delay;

    if (!window.location.href.includes(substring)) {
        setTimeout(() => window.location.replace(url), delayValue);
    }
};

export { redirectDynamic, redirectStatic };
export default redirectStatic;