/**
 * A utility object for handling URL redirection with optional delay configurations.
 */
const Redirect = {
    /**
     * Redirects the user to a specified URL after a dynamic or static delay
     * if the current page's URL does not include a specific substring.
     *
     * @param {string} substring - The string to check for in the current URL.
     * @param {string} url - The URL to redirect to if the substring is not found.
     * @param {number|function} delay - The delay in milliseconds before redirecting,
     *                                  or a function that returns the delay dynamically.
     * @example
     * // Redirect to "example.com" after a static delay of 2000ms
     * Redirect.dynamic("marketodesigner", "http://example.com", 2000);
     *
     * @example
     * // Redirect to "example.com" with a dynamically calculated delay
     * const calculateDelay = () => Math.random() * 5000;
     * Redirect.dynamic("marketodesigner", "http://example.com", calculateDelay);
     */
    dynamic(substring, url, delay) {
        const time = typeof delay === "function" ? delay() : delay;

        if (!window.location.href.includes(substring)) {
            setTimeout(() => window.location.replace(url), time);
        }
    },

    /**
     * Redirects the user to a specified URL after a static delay
     * if the current page's URL does not include a specific substring.
     *
     * @param {string} substring - The string to check for in the current URL.
     * @param {string} url - The URL to redirect to if the substring is not found.
     * @param {number} delay - The static delay in milliseconds before redirecting.
     * @example
     * // Redirect to "example.com" after a static delay of 2000ms
     * Redirect.static("marketodesigner", "http://example.com", 2000);
     */
    static(substring, url, delay) {
        if (!window.location.href.includes(substring)) {
            setTimeout(() => window.location.replace(url), delay);
        }
    },
};

export default Redirect;
