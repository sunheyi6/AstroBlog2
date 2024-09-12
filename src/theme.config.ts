export const THEME_CONFIG: App.Locals['config'] = {
    /** blog title */
    title: "流殃",
    /** your name */
    author: "",
    /** website description */
    desc: "Rediscory the beauty of typography",
    /** your deployed domain */
    website: "https://sunheyi.com",
    /** your locale */
    locale: "zh-cn",
    /** theme style */
    themeStyle: "light",
    /** your socials */
    socials: [
        {
            name: "github",
            href: "https://github.com/sunheyi6",
        },
        {
            name: "rss",
            href: "/atom.xml",
        },
        {
            name: "twitter",
            href: "https://twitter.com/sun76790508",
        }
    ],
    /** your header info */
    header: {
        twitter: "@sun76790508",
    },
    /** your navigation links */
    navs: [
        {
            name: "Search",
            href: "/pagefind",
        },
        {
            name: "Posts",
            href: "/posts/page/1",
        },
        {
            name: "Archive",
            href: "/archive",
        },
        {
            name: "Categories",
            href: "/categories"
        },
        {
            name: "Tags",
            href: "/tags"
        },
        {
            name: "bb",
            href: "/bb"
        },
        {
            name: "About",
            href: "/about",
        },
    ],
    /** your category name mapping, which the `path` will be shown in the url */
    category_map: [
        {name: "胡适", path: "hu-shi"},
    ],
    tag_map: [
        {name: "思考", path: "hu-shi"},
    ],
}

