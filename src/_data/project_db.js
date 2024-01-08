import BikeSalesImg from "@assets/images/projects/excel/ex_bike_sales_img.png";
import PythonWebScrapingImg from "@assets/images/projects/python/python_web_scraping_img.png";
import SqlAirBnbImg from "@assets/images/projects/sql/sql_airbnb_img.png";
import TableauCovidImg from "@assets/images/projects/tableau/tableau_covid_img.png";

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
    name: "Covid 19",
    project_img: TableauCovidImg,
    category: "tableau",
    type: "Client",
  },
  {
    id: 3,
    name: "Air Bnb project",
    project_img: SqlAirBnbImg,
    category: "sql",
    type: "Personal",
  },
  {
    id: 4,
    name: "Web scraping",
    project_img: PythonWebScrapingImg,
    category: "python",
    type: "Client",
  },
];

export default project_db;
