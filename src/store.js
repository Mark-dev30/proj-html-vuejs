import { reactive } from "vue";
export const store = reactive({
    menu: ['Home', 'About Me', 'Testimonials', 'My Blog', 'Meetups', 'Shop', 'Contact Me', ''],
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
                content: ['63 E. Studebaker Street Bolingbrook, IL 60440', 'Phone: (800) 000-0000', 'Mobile: (800) 000-0000', 'Email: info@your-company.com']
            }
        }
    ]
})
