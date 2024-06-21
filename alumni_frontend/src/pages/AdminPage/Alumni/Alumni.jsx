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


const Alumni = () => {
  const { activeMenu, setActiveMenu, screenSize } = useAuthContext();

  const [users, setUsers] = useState([]);
  
  const columns = [
    {
      name: "image",
      label: "Profile",
      options: {
        customBodyRender: (value) => <img src={value} alt="pic" className="w-12 h-12 rounded-full"/>
      }
    },
    {
      name: "name",
      label: "Full name",
    },
    {
      name: "gender",
      label: "Gender",
      options: {
        customBodyRender: (value) => <p className={`capitalize px-3 py-1 inline-block rounded-full ${
          value == "male" ? "bg-blue-500" : "bg-pink-500"
        }`}>{value}</p>
      }
    },
    {
      name: "work",
      label: "Working",
    },
    {
      name: "gaduated",
      label: "Gaduated"
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
    fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => {
      let local = data?.users?.map((user) => ({
        ...user,
        name: user?.firstName + ' ' + user?.lastName,
        work: user?.company.title,
        gaduated: parseInt(user?.birthDate) + 20
      }))


      console.log(local);

      setUsers(local)
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
        paper: "#7776B3",
        default: "#E2BBE9"
      },
      mode: "dark"
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          head:{
            padding: "10px 4px"
          },
          body: {
            padding: "7px 15px",
            color: "#FFF5E1"
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
            <Header title="Alumni" subtitle="Wellcome to Alumni Management"/>
            
            <ThemeProvider theme={getMuiTheme()}>
              <MUIDataTable
                title={"Alumni List"}
                data={users}
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

export default Alumni;
