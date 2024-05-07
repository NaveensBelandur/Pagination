'use client'


import React from 'react'
import {useState,useEffect} from 'react'
import Navbar from '../Component/NavBar'


const GetPost = () =>{
    const [post,setpost] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [postperpage] = useState(10)


    const indexlast = currentPage * postperpage
    const indexfirst = indexlast - postperpage
    const postdata = post.slice(indexfirst,indexlast)

    const pageNumber = []
    for(let i=1;i<=Math.ceil(post.length / postperpage);i++){
        pageNumber.push(i)
    }

  
    const Pagination = (data)=>{
        setCurrentPage(data)
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data)=>{
            const res = data.json()
            .then((res)=>{
              
                setpost(res)
            })
        })
        .catch((err)=>{
            console.log(err)
        })

    },[])






    return (
        <>
        <Navbar/>
        <section>
        <h3 className="pt-5 text-center display-6">The Post Details</h3>
        <table class="table  table-hover">
          <thead>
            <tr>
              <th scope="col">Sl Number</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
            </tr>
          </thead>
          <tbody>
            {postdata.map((data,i)=>{
                return (
                    <>
                    <tr key={i}>
                        <td>{data.id}</td>
                        <td>{data.title}</td>
                        <td>{data.body}</td>
                    </tr>
                    </>
                )
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
    )
}

export default GetPost