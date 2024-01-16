import DefDashboardImg1 from "@assets/images/projects/default_dashboard/dashboard_img_1.png";

import BikeSalesImg from "@assets/images/projects/excel/ex_bike_sales_08_01_img.png";
import airbnbImg from "@assets/images/projects/tableau/jan_2024/tb_airbnb_12_01_img.png";

const project_db = [
  // 1 - 5
  {
    id: 1,
    name: "Bike sales",
    project_img: BikeSalesImg,
    category: "excel",
    type: "Personal",
  },
  {
    id: 2,
    name: "AirBnb",
    project_img: airbnbImg,
    category: "tableau",
    type: "Personal",
  },
  {
    id: 3,
    name: "Air Bnb project",
    project_img: DefDashboardImg1,
    category: "sql",
    type: "Personal",
  },
  {
    id: 4,
    name: "Web scraping",
    project_img: DefDashboardImg1,
    category: "python",
    type: "Client",
  },
];

export default project_db;
