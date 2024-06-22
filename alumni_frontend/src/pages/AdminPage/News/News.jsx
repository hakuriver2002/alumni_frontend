import { FiSettings } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../context/authContext";
import Footer from "../../../components/adminComponents/Footer";
import Navbar from "../../../components/adminComponents/NavBar";
import { Tooltip } from "react-tooltip";
import Sidebar from "../../../components/adminComponents/Sidebar";
import Header from "../../../components/adminComponents/Header";
import MUIDataTable from "mui-datatables";
import {ThemeProvider, createStyles, createTheme} from "@mui/material/styles"


const News = () => {
  const { activeMenu, setActiveMenu, screenSize } = useAuthContext();

  const [news, setNews] = useState([]);
  
  const columns = [
    {
      name: "urlToImage",
      label: "IMAGE",
      options: {
        customBodyRender: (value) => {
          <img src={value} alt="Image" className="w-12 h-12 rounded-full" />
        }
      }
    },
    {
      name: "title",
      label: "Title"
    },
    {
      name: "author",
      label: "Author"
    },
    {
      name: "publishedAt",
      label: "Date published"
    },
    {
      name: "Edit",
      label: "Action",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <button 
                className="btn bg-yellow-200 justify-center"
                onClick={() => window.alert(`Clicked "Edit" for row ${tableMeta.rowIndex}`)}>
                Edit
              </button>
            </>
          )
        }
      }
    }
  ]

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e358fe8192ef4c4e85b76cc3745bf3e1")
    .then((res) => res.json())
    .then((data) => {
      let local = data?.articles?.map((news) => ({
        ...news,
      }))

      console.log(local);

      setNews(local);
    })
  }, [])

  

  const options = {
    selectableRows: true,
    elevation: 0,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 15, 20, 30],
  };

  const getMuiTheme = () => createTheme({
    typography: {
      fontFamily: "Montserrat",
    },
    palette: {
      background: {
        paper: "#F3F7EC",
        default: "#E2BBE9"
      },
      mode: "light"
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          head:{
            padding: "10px 8px"
          },
          body: {
            padding: "8px 15px",
            color: "#212121",
            justifyItems: "center",
            alignItems: "center"
          },
        }
      }
    }
  })

  

  return (
    <div>
      <div className="flex relative dark:bg-main-dark-bg">
        <div
          className="fixed right-4 bottom-4"
          style={{ zIndex: "1000" }}
        >
          <Tooltip
            content="Settings"
            position="Top"
          >
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </Tooltip>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div className="dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full">
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          <div>
            {/* Section */}
            <Header title="News" subtitle="Wellcome to News Management"/>
            
            <ThemeProvider theme={getMuiTheme()}>
              <MUIDataTable
                title={"News List"}
                data={news}
                columns={columns}
                options={options}
              />
            </ThemeProvider>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default News;
