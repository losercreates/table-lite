import React from "react";

export const Table = ({
  data,
  color = "white",
  textcolor = "black",
  width = "100%",
}) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  var headers_temp = [];
  for (let i in data) {
    headers_temp = headers_temp.concat(Object.keys(data[i]));
  }
  const headers = headers_temp.filter((c, index) => {
    return headers_temp.indexOf(c) === index;
  });
  const reg = /^#([0-9a-f]{3}){1,2}$/i;
  if (!(reg.test(color) && reg.test(textcolor))) {
    color = "white";
    textcolor = "black";
  }
  const styles = {
    table: {
      color: textcolor,
      border: "1px solid",
      borderColor: textcolor,
      borderCollapse: "collapse",
      width: width,
      textAlign: "left",
    },
    th: {
      border: "1px solid",
      borderColor: textcolor,
      backgroundColor: color,
      padding: "0.5vw",
    },
    td: {
      border: "1px solid",
      borderColor: textcolor,
      backgroundColor: color + "CC",
      padding: "0.5vw",
    },
  };
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={styles.table}>
        <tr style={styles.header}>
          {headers.map((header) => (
            <th style={styles.th}>{capitalizeFirstLetter(header)}</th>
          ))}
        </tr>
        {data.map((d) => (
          <tr>
            {headers.map((header) => (
              <td style={styles.td}>{d[header]}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};
