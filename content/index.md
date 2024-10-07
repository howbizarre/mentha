This is a blog template powered by [**Nuxt**](https://nuxt.com "The Intuitive
Vue Framework") framework. The name of the template is **Mentha**. Currently, it uses **version 3**, but it will also support future versions. Versions lower than 3 will not be supported. The template is developed with [**Vue Composition API**](https://vuejs.org/guide/extras/composition-api-faq.html "Composition API FAQ"), with the `setup` in the `script` tag - `<script setup lang="ts"></script>` and [**TypeScript**](https://www.typescriptlang.org/ "Typed JavaScript") support.

Several **Nuxt** modules are used to make the Developer Experience (**DX**) more delightful.

- [Nuxt Content](https://content.nuxt.com/ "Content made easy for Vue Developers")
- [Nuxt TailwindCSS](https://tailwindcss.nuxtjs.org/ "Tailwind CSS for your Nuxt Apps")
- [Nuxt Color Mode](https://color-mode.nuxtjs.org/ "Nuxt Color Mode")
- [Nuxt Icons](https://nuxt.com/modules/icon "Nuxt Icons")

Additionally, the **TailwindCSS** plugin [**Typography**](https://github.com/tailwindlabs/tailwindcss-typography "Beautiful typographic defaults for HTML you don't control.") has been added to automate content styling.

:hrline

## Required Knowledge

To use the template, it is good to know how to [download it from GitHub](https://github.com/howbizarre/mentha, "Download template from GitHub repository"). The template has releases you can use out of the box by extracting them to your disk. Then it is good to know how to work with [**NPM**](https://www.npmjs.com/, "Node Package Manager") to install the necessary packages and be able to start the project. Need to know [**Markdown**](https://www.markdownguide.org/ "Markdown Guide") syntax and [**Nuxt directory structure**](https://nuxt.com/docs/guide/directory-structure "Nuxt directory structure"). Familiarity with **Vue & Vue Router** and **TailwindCSS** would be good.

:hrline

## Directory structure

```text
PROJECT MENTHA
|   .gitignore
|   app.vue /* Entry point of the template */
|   nuxt.config.ts /* Nuxt configuration */
|   package-lock.json
|   package.json
|   README.md
|   tailwind.config.ts /* Additional TailwindCSS configuration */
|   tsconfig.json
|           
+---assets
|   \---css
|           tailwind.css /* Base TailwindCSS styles */
|           
+---components /* Reusable components */
|   |   Article.vue
|   |   ColorMode.vue /* Color mode switcher */
|   |   H1.vue
|   |   Navbar.vue /* Edit navigation of the template */
|   \---content /* Components for content files */
|           Comments.vue
|       
+---composables /* Auto imported exports by Nuxt engine */
|       utils.ts
|       
+---content /* Content directory */
|   |   index.md /* This doc is used by the home page */
|   |   
|   \---blog /* Remove fake Articles and start to add yours */
|           
+---pages /* You can add more pages here, then update Navbar component to update the navigation */
|   |   about.vue /* About page - edit with your information */
|   |   index.vue /* Home page - edit with your information */
|   |   
|   \---blog
|           index.vue /* Articles list */
|           [...slug].vue /* Every Article's page */
|           
+---public /* Static files */
|       favicon.ico
|       robots.txt
|       
\---server
        tsconfig.json
```

:hrline

## Features

There is a function added in `composables/utils.js` that takes a `string` and returns it (the same) back. The function name is `_t`. All strings in the template go through this function. The only purpose of this feature is to easily find all the strings that need to be translated if you add other languages ​​to the template.

There is also a function in `composables/utils.js` that converts an **ISO** date to a readable date. The function is called `articleLocaleDate`. It is only demonstratively added and is subject to additional efforts on your part. Date localization is an important process, so consider it carefully.

:hrline

## Next Steps

To develop and extend the template, it is good to add a state manager. I highly recommend [**Pinia**](https://pinia.vuejs.org/, "Intuitive, type safe, light and flexible Store for Vue"), as it has a module for **Nuxt**. Add categories and tags for the articles. Allow users to comment. Pay attention (a lot) to <abbr title="Server Side Rendering">**SSR**</abbr> and <abbr title="Search Engin Optimization">**SEO**</abbr>. You can improve the pagination with additional information about the number of articles in the blog, etc. Read out the **Nuxt Content** documentation. Many things can be added, such as a **sitemap**, automated navigation building, etc.

:hrline
 
## Changelog

### v0.2.3

- Added new blog post to Getting Started.
- Update dependencies to the latest versions.

### v0.2.2

- Updated the index page
- Added content to the **About** page
- Added new MDC component for the **About** page with props & slots support

### v0.2.1

- First public version
- Added `components/content/Comments.vue` to review ways to add components from markdown files to the template
- Added color theme support for dark and light modes

:hrline

:comments

:hrline