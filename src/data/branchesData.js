import bhaktapurImg from "../assets/branches/bhaktapur.png";
import lalitpurImg from "../assets/branches/lalitpur.png";
import tripureshworImg from "../assets/branches/tripureshwor.jpg";


const branchesData = [
  {
    slug: "bhaktapur",
    name: "Bhaktapur Branch",
    image: bhaktapurImg,
    contact: "01-6612345",
    address: "Bhaktapur, Nepal",
    hours: "10 AM – 5 PM",
    employees: [
      { name: "Ram Shrestha", position: "Branch Chief", image: "/person/person1.jpeg" },
      { name: "Sita Maharjan", position: "Account Officer", image: "/person/person2.jpeg" },
    ],
  },
  {
    slug: "lalitpur",
    name: "Lalitpur Branch",
    image: lalitpurImg,
    contact: "01-5523456",
    address: "Lalitpur, Nepal",
    hours: "10 AM – 5 PM",
    employees: [
      { name: "Hari Karki", position: "Branch Chief", image: "/person/person1.jpeg" },
      { name: "Nirmala Shakya", position: "Admin Officer" },
    ],
  },
   {
    slug: "nasiympati",
    name: "Nasiympati Branch",
    image: lalitpurImg,
    contact: "01-5523456",
    address: "Nasiympati, Lalitpur",
    hours: "10 AM – 5 PM",
    employees: [
      { name: "Hari Karki", position: "Branch Chief", image: "/person/person2.jpeg" },
      { name: "Nirmala Shakya", position: "Admin Officer" },
    ],
  },
  {
    slug: "tripureshwor",
    name: "Tripureshwor Branch",
    image: tripureshworImg,
    contact: "01-4234567",
    address: "Tripureshwor, Kathmandu",
    hours: "10 AM – 5 PM",
    employees: [
      { name: "Suman Adhikari", position: "Branch Chief", image: "/person/person1.jpeg" },
      { name: "Bina Thapa", position: "Finance Officer", image: "/person/person2.jpeg" },
    ],
  },
];

export default branchesData;
