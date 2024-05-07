"use client";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Component/NavBar";

const GetUser = () => {
  const [data, setData] = useState([]);
  const [currentpost, setcurrentpost] = useState(1);
  const [postperpage] = useState(5);

  const indexoflastPage = currentpost * postperpage;
  const indexoffirstpage = indexoflastPage - postperpage;
  const userdata = data.slice(indexoffirstpage, indexoflastPage);



  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(data.length / postperpage); i++) {
    pageNumber.push(i);
  }

  const Pagination = (data) =>{
      setcurrentpost(data)
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Data) => {
        const res = Data.json().then((res) => {
          setData(res);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <section>
        <h3 className="pt-5 text-center display-6">The Cusomer user Details</h3>
        <table class="table  table-hover">
          <thead>
            <tr>
              <th scope="col">Sl Number</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{data.name}</td>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            {pageNumber.map((data,i) => {
              return (
                <>
                  <li class="page-item" >
                    <a class="page-link" onClick={()=>Pagination(data)}>
                      {data}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default GetUser;
