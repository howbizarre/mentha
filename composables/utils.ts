/**
 * Fake translation function.
 * Serves to facilitate refactoring after translations are added.
 *
 * @param underscore - The string to be translated.
 * @returns The string to be translated.
 */
export const _t = (underscore: string): string => underscore;

/**
 * Converts a Date object to a localized string representation of the date.
 * 
 * @param date - The Date object to be converted.
 * @returns A string representing the localized date.
 */
export const articleLocaleDate = (date: Date): String => new Date(date).toLocaleDateString();