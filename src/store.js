import { reactive } from "vue";
export const store = reactive({
    menu_header: [
        {
            _type: 'title',
            active: true,
            data: {
                title: 'Home',
            }
        },
        {
            _type: 'title',
            active: false,
            data: {
                title: 'About Me',
            }
        },
        {
            _type: 'title',
            active: false,
            data: {
                title: 'Testimonials',
            }
        },
        {
            _type: 'title',
            active: false,
            data: {
                title: 'My Blog',
            }
        },
        {
            _type: 'title',
            active: false,
            data: {
                title: 'Meetups',
            }
        },
        {
            _type: 'list',
            active: false,
            data: {
                title: 'Shop',
                icon: 'fa-solid fa-angle-down',
                content: ['Simple Product', 'Variable Product']
            }
        },
        {
            _type: 'title',
            active: false,
            data: {
                title: 'Contact Me',
            }
        },
        {
            _type: 'icon',
            active: false,
            data: {
                title: 'fa-solid fa-cart-shopping',
            }
        },

    ],
    menu_footer: [
        {
            _type: 'paragraph',
            data: {
                title: 'about me',
                content: 'Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat.'
            }
        },
        {
            _type: 'list',
            data: {
                title: 'useful links',
                content: ['Latest Book', 'Upcoming Events', 'Recent Articles', 'Business Enquiries', 'Visit My Foundation']
            }
        },
        {
            _type: 'info',
            data: {
                title: 'contact info',
                content: ['63 E. Studebaker Street Bolingbrook, IL 60440', 'Phone: (800) 000-0000', 'Mobile: (800) 000-0000', 'Email: info@your-company.com'],
                icons: ['fa-brands fa-facebook-f', 'fa-brands fa-twitter', 'fa-brands fa-instagram', 'fa-brands fa-youtube', 'fa-brands fa-linkedin']
            }
        }

    ]
})
