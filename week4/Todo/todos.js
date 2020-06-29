const { v4: uuidv4 } = require('uuid');

const todos = [
    {
        title: 'Clean Kitchen',
        discreption: 'Wash dishes, Mop floor, wip countertops, take out trash',
        imgUrl:'https://secure.img1-fg.wfcdn.com/im/74229785/resize-h800%5Ecompr-r85/8716/87164202/Arata+Adjustable+Height+Bar+Stool.jpg',
        _id: uuidv4()
     },
     {
        title: 'Clean Bathroon',
        discreption: 'Clean tub, clean toilet, clean sink, mop floor',
        imgUrl:'https://secure.img1-fg.wfcdn.com/im/04317869/resize-h800%5Ecompr-r85/1591/15912697/Moselle+60%2522+x+77.5%2522+Single+Sliding+Completely+Frameless+Shower+Door.jpg',
        _id: uuidv4()
     },{
        title: 'Clean Bedroom',
        discreption: 'Vaccum carpet, put away laundry, make bed',
        imgUrl:'https://secure.img1-fg.wfcdn.com/im/65956784/resize-h800%5Ecompr-r85/3550/35507753/Osspiee+Comforter+Set.jpg',
        _id: uuidv4()
     },
]

module.exports = todos