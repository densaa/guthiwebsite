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
      { name: "Ram Shrestha", position: "Branch Chief" },
      { name: "Sita Maharjan", position: "Account Officer" },
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
      { name: "Hari Karki", position: "Branch Chief" },
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
      { name: "Suman Adhikari", position: "Branch Chief" },
      { name: "Bina Thapa", position: "Finance Officer" },
    ],
  },
];

export default branchesData;
