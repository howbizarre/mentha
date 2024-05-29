This is a blog template powered by [**Nuxt**](https://nuxt.com "The Intuitive
Vue Framework") framework. The name of the template is **Mentha**. Currently, it uses **version 3**, but it will also support future versions. Versions lower than 3 will not be supported. The template is developed with [**Vue Composition API**](https://vuejs.org/guide/extras/composition-api-faq.html "Composition API FAQ"), with the `setup` in the `script` tag - `<script setup lang="ts"></script>` and [**TypeScript**](https://www.typescriptlang.org/ "Typed JavaScript") support.

Several **Nuxt** modules are used to make the Developer Experience (**DX**) more delightful.

- [Nuxt Content](https://content.nuxt.com/ "Content made easy for Vue Developers")
- [Nuxt TailwindCSS](https://tailwindcss.nuxtjs.org/ "Tailwind CSS for your Nuxt Apps")
- [Nuxt Color Mode](https://color-mode.nuxtjs.org/ "Nuxt Color Mode")
- [Nuxt Icons](https://nuxt.com/modules/icon "Nuxt Icons")

Additionally, the **TailwindCSS** plugin [**Typography**](https://github.com/tailwindlabs/tailwindcss-typography "Beautiful typographic defaults for HTML you don't control.") has been added to automate content styling.

## Required Knowledge

To use the template, it is good to know how to [download it from GitHub](https://github.com/howbizarre/mentha, "Download template from GitHub repository"). The template has releases you can use out of the box by extracting them to your disk. Then it is good to know how to work with [**NPM**](https://www.npmjs.com/, "Node Package Manager") to install the necessary packages and be able to start the project. Need to know [**Markdown**](https://www.markdownguide.org/ "Markdown Guide") syntax and [**Nuxt directory structure**](https://nuxt.com/docs/guide/directory-structure "Nuxt directory structure"). Familiarity with **Vue & Vue Router** and **TailwindCSS** would be good.

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

## Changelog

### v0.2.1

- First public version
- Added `components/content/Comments.vue` to review ways to add components from markdown files to the template
- Added color theme support for dark and light modes

:hrline

:comments

:hrline