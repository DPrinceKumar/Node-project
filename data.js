/**
 * =====================GENERATED USING JSON GENERATOR===========
 *  [
 *    '{{repeat(5, 10)}}',
 *    {
 *      _id: '{{objectId()}}',
 *      index: '{{index()}}',
 *      guid: '{{guid()}}',
 *      name: '{{firstName()}} {{surname()}}',
 *      phone: '+1 {{phone()}}',
 *      address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
 *      isActive: '{{bool()}}',
 *      balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
 *      age: '{{integer(20, 40)}}',
 *      gender: '{{gender()}}',
 *      company: '{{company().toUpperCase()}}',
 *      email: '{{email()}}',
 *      about: '{{lorem(1, "paragraphs")}}',
 *         greeting: function (tags) {
 *        return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
 *      },
 *      favoriteFruit: function (tags) {
 *        var fruits = ['apple', 'banana', 'strawberry'];
 *        return fruits[tags.integer(0, fruits.length - 1)];
 *      }
 *    }
 *  ]
 */

const data = [
  {
    _id: "63a14e6a40a53a12b7dfd2d5",
    index: 0,
    guid: "d2d07895-dfb9-47da-ac4c-66d7fbc7e936",
    name: "Nolan Lindsay",
    phone: "+1 (968) 501-2282",
    address: "355 Kensington Walk, Bellamy, North Dakota, 6542",
    isActive: true,
    balance: "$2,779.89",
    age: 25,
    gender: "male",
    company: "AQUACINE",
    email: "nolanlindsay@aquacine.com",
    about:
      "Occaecat exercitation exercitation occaecat voluptate et officia ex. Duis ad quis dolore non ea. Officia nulla duis consequat amet ullamco.\r\n",
    greeting: "Hello, Nolan Lindsay! You have 1 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "63a14e6a0ca867545f8abd9c",
    index: 1,
    guid: "2c143c4b-b4a9-4b03-a400-fb6796848214",
    name: "Lynn Harmon",
    phone: "+1 (808) 460-2574",
    address: "227 Danforth Street, Mapletown, Utah, 9131",
    isActive: true,
    balance: "$1,030.97",
    age: 21,
    gender: "male",
    company: "AQUASURE",
    email: "lynnharmon@aquasure.com",
    about:
      "Eu esse excepteur laborum mollit. Dolor laborum aute labore exercitation ea in commodo laborum consectetur qui proident. Minim incididunt aliqua ut qui Lorem sit ullamco consequat voluptate veniam labore eu. Ut duis culpa nisi id labore Lorem consectetur enim adipisicing laboris sunt ut officia minim. Est sint mollit exercitation culpa sunt id. Culpa aute labore do ut. Ad sint id elit pariatur sunt.\r\n",
    greeting: "Hello, Lynn Harmon! You have 4 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "63a14e6a264a3cd9522024ec",
    index: 2,
    guid: "9c7bb920-1ed4-48ac-aa87-d8478296e78a",
    name: "Galloway Shannon",
    phone: "+1 (945) 453-2298",
    address: "840 Losee Terrace, Hemlock, Guam, 5632",
    isActive: false,
    balance: "$2,596.58",
    age: 20,
    gender: "male",
    company: "CORIANDER",
    email: "gallowayshannon@coriander.com",
    about:
      "Voluptate excepteur ad aliquip est fugiat sint. Nisi qui officia enim veniam proident amet cupidatat esse ut cillum et minim voluptate. Adipisicing exercitation adipisicing amet anim. Mollit aliquip eu exercitation officia qui. Officia velit irure ut occaecat reprehenderit laborum reprehenderit ipsum. Lorem ullamco eiusmod non id Lorem dolor esse.\r\n",
    greeting: "Hello, Galloway Shannon! You have 6 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "63a14e6a9e069187a2c6a74a",
    index: 3,
    guid: "930ba9a5-31fb-46a7-b545-38114c91d69b",
    name: "Linda Haynes",
    phone: "+1 (926) 480-3963",
    address: "697 Fleet Street, Grimsley, Vermont, 9375",
    isActive: true,
    balance: "$2,057.87",
    age: 33,
    gender: "female",
    company: "WAAB",
    email: "lindahaynes@waab.com",
    about:
      "Sit pariatur Lorem consequat proident reprehenderit deserunt. Qui mollit est aliquip tempor irure ad et sunt nostrud nulla aliqua sunt Lorem est. Nostrud esse ut id aute minim reprehenderit occaecat tempor id adipisicing. Nisi nulla ipsum adipisicing est fugiat cillum id occaecat dolor reprehenderit amet culpa irure consectetur. Ad eu pariatur enim mollit aliquip labore non. Exercitation duis laborum enim deserunt sunt velit consequat voluptate elit sit dolor culpa.\r\n",
    greeting: "Hello, Linda Haynes! You have 3 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "63a14e6a87156db1b82b3fa0",
    index: 4,
    guid: "7a9f6418-77ee-4e3b-886e-2b13d5a1281e",
    name: "Shelly Martinez",
    phone: "+1 (955) 430-2352",
    address: "259 Tapscott Avenue, Marysville, Ohio, 8586",
    isActive: true,
    balance: "$1,308.91",
    age: 38,
    gender: "female",
    company: "AQUASSEUR",
    email: "shellymartinez@aquasseur.com",
    about:
      "In qui eu excepteur aliqua laborum esse voluptate aute exercitation voluptate. Reprehenderit do velit occaecat sit. Ipsum mollit proident proident ea culpa aute nostrud pariatur nisi.\r\n",
    greeting: "Hello, Shelly Martinez! You have 1 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "63a14e6aea6ac039681b760b",
    index: 5,
    guid: "5cd02c39-d25c-4e36-b562-040ce843f84a",
    name: "Shana Emerson",
    phone: "+1 (905) 578-2551",
    address: "562 Ryder Street, Gloucester, Iowa, 4621",
    isActive: false,
    balance: "$2,577.01",
    age: 34,
    gender: "female",
    company: "PYRAMAX",
    email: "shanaemerson@pyramax.com",
    about:
      "Eiusmod officia Lorem do aute dolor amet mollit dolor sunt ipsum proident velit cupidatat. Laboris commodo nisi nulla anim sint eiusmod minim. Dolor irure dolor esse enim eu et voluptate anim nulla. Consectetur sit labore nisi proident eu aliqua deserunt occaecat Lorem sit qui. Aliquip eiusmod in proident minim ipsum voluptate excepteur nulla.\r\n",
    greeting: "Hello, Shana Emerson! You have 8 unread messages.",
    favoriteFruit: "banana",
  },
];
module.exports = {
  data,
};
