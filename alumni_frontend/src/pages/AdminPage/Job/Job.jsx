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


const Job = () => {
  const { activeMenu, setActiveMenu, screenSize } = useAuthContext();

  const [jobs, setJobs] = useState([]);
  
  const columns = [
    
  ]

  useEffect(() => {
    fetch("https://jobs.github.com/positions.json")
    .then((res) => res.json())
    .then((data) => {
    //   let local = data?.posts?.map((Job) => ({
    //     ...Job,
    //   }))


      console.log(data);

      setJobs(data)
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
            <Header title="Job" subtitle="Wellcome to Job Management"/>
            
            <ThemeProvider theme={getMuiTheme()}>
              <MUIDataTable
                title={"Job List"}
                data={jobs}
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

export default Job;
