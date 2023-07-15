import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import { API } from "../config";
import { tableStyles } from "../styles/patience";

const TestInfo = () => {
  const tableclasses = tableStyles();

  const TOKEN = localStorage.getItem("logintoken");

  const [rows, setRows] = useState();
  const params = useParams();

  console.log("get-single-patience", rows);

  const fetchData = async (id) => {
    try {
      const response = await axios.get(
        `${API}/get-single-patience/${params.id}`,
        {
          headers: { authtoken: `${TOKEN}` },
        }
      );
      console.log("get-single-patience", response.data);
      setRows(response?.data);
    } catch (error) {
      console.error("Fetching Data Error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className={tableclasses.root}>
      <div className={tableclasses.body}>
        <div className={tableclasses.header}>
          <div className={tableclasses.name}>
            <div className={tableclasses.h2}>
              <Box>
                <p>
                  {rows?.firstname} {rows?.lastname}
                </p>
              </Box>
              <Box>
                <Typography className={tableclasses.patienceTypo}>
                  Patient ID: {rows?._id}
                </Typography>
              </Box>
              <Box>
                <Typography className={tableclasses.patienceTypo}>
                  Status: {rows?.sampleStatus}
                </Typography>
              </Box>

              <Box
                style={{
                  display: "flex",
                  marginRight: "400px",
                  margin: "20px",
                }}
              >
                <Box>
                  <Typography className={tableclasses.patienceTypo}>
                    Lab: {rows?.labnumber}
                  </Typography>
                  <Typography className={tableclasses.patienceTypo}>
                    Patience Name: {rows?.firstname} {rows?.lastname}{" "}
                  </Typography>
                  <Typography className={tableclasses.patienceTypo}>
                    Age/Sex : {rows?.age}/{rows?.gender}{" "}
                  </Typography>
                  <Typography className={tableclasses.patienceTypo}>
                    Mobile: {rows?.phone}
                  </Typography>
                  <Typography className={tableclasses.patienceTypo}>
                    Email Address:{rows?.email}
                  </Typography>
                </Box>

                <Box style={{ marginLeft: "100px" }}>
                  <Typography className={tableclasses.patienceTypo}>
                    Refered By:{rows?.referedby}
                  </Typography>
                  <Typography className={tableclasses.patienceTypo}>
                    Lab: {rows?.labnumber}
                  </Typography>
                  <Typography className={tableclasses.patienceTypo}>
                    Created Date :{formatDate(rows?.createdAt)}
                  </Typography>
                  <Typography className={tableclasses.patienceTypo}>
                    Address : {rows?.address}
                  </Typography>
                  <Typography className={tableclasses.patienceTypo}>
                    No of test: 2
                  </Typography>
                </Box>
              </Box>
            </div>
          </div>

          <Box style={{ display: "flex", justifyContent: "flex-start" }}>
            <Box>
              <Box style={{ textAlign: "start" }}>Report category and test</Box>
              <Typography className={tableclasses.patienceTypo}>
                Diagnostic Center: {rows?.labnumber}
              </Typography>
              <Typography className={tableclasses.patienceTypo}>
                Patience Name: {rows?.firstname} {rows?.lastname}{" "}
              </Typography>
              <Typography className={tableclasses.patienceTypo}>
                Age/Sex : {rows?.age}/{rows?.gender}{" "}
              </Typography>
              <Typography className={tableclasses.patienceTypo}>
                Mobile: {rows?.phone}
              </Typography>
              <Typography className={tableclasses.patienceTypo}>
                Email Address:{rows?.email}
              </Typography>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default TestInfo;
