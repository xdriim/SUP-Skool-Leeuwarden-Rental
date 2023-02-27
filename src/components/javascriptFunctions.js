export function getUserLanguage() {
    let lang = navigator.language.toString()

    //if navigator.language returns a language that is NOT in english, spanish, catalan, germany, and dutch, return the page in english.
    if (lang !== "en" && lang !== "es" && lang !== "ca" && lang !== "de" && lang !== "nl") lang = "en"
    return lang
}