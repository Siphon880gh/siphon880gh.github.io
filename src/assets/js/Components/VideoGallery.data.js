
export default function videosPreimport(importedIcons) {
    const { ytEcommerceBackend,
        ytCodeOrganization,
        ytReactProps,
        ytTrading } = importedIcons;
        // console.log(importedIcons)

    return [
        {
            id: 1,
            title: 'Demo: Ecommerce Backend',
            thumbnail: ytEcommerceBackend,
            url: 'https://www.youtube.com/watch?v=s-0sNWgcSIQ'
        },
        {
            id: 2,
            title: 'Code Organization - Publisher/Subscriber, Service Layer, Data Access Layer',
            thumbnail: ytCodeOrganization,
            url: 'https://www.youtube.com/watch?v=eNh6t2_tuAI'
        },
        {
            id: 3,
            title: 'Weng Teaches - React Parent to Child props passing',
            thumbnail: ytReactProps,
            url: 'https://www.youtube.com/watch?v=AQ2h7spCH3U'
        },
        {
            id: 4,
            title: 'Weng feeds trade information into ChatGPT with Javascript by Weng',
            thumbnail: ytTrading,
            url: 'https://www.youtube.com/watch?v=c4C9QmbY-fY'
        }
        // {
        //     commentedOut: "Need permission first - was a collab",
        //     id: 100,
        //     title: 'Weng feeds trade information into ChatGPT with Javascript by Weng',
        //     thumbnail: ytDailyPortal,
        //     url: 'https://www.youtube.com/watch?v=rbk3H45fToA'
        // },
        // more videos...
    ]
}