const db = {
    testimonials: [
        { _id: 1, author: 'John Doe', text: 'This company is worth every coin!' },
        { _id: 2, author: 'Amanda Doe', text: 'They really know how to make you happy.' },
        { _id: 3, author: 'Paul Doe', text: 'Vel blanditiis hic tempora ab culpa.' },
        { _id: 4, author: 'Sean Doe', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' },
    ],
    concerts: [
        { _id: 1, performer: 'John Doe', genre: 'Rock', price: 25, day: 1, image: '/img/uploads/1fsd324fsdg.jpg' },
        { _id: 2, performer: 'Rebekah Parker', genre: 'R&B', price: 25, day: 1, image: '/img/uploads/2f342s4fsdg.jpg' },
        { _id: 3, performer: 'Maybell Haley', genre: 'Pop', price: 40, day: 1, image: '/img/uploads/hdfh42sd213.jpg' },
    ],
    seats: [
        { _id: 1, day: 1, seat: 3, client: 'Amanda Doe', email: 'amandadoe@example.com' },
        { _id: 2, day: 1, seat: 9, client: 'Curtis Johnson', email: 'curtisj@example.com'  },
        { _id: 3, day: 1, seat: 10, client: 'Felix McManara', email: 'felxim98@example.com'  },
        { _id: 4, day: 1, seat: 26, client: 'Fauna Keithrins', email: 'mefauna312@example.com'  },
        { _id: 5, day: 2, seat: 1, client: 'Felix McManara', email: 'felxim98@example.com'  },
        { _id: 6, day: 2, seat: 2, client: 'Molier Lo Celso', email: 'moiler.lo.celso@example.com'  },
    ]
}

module.exports = db;