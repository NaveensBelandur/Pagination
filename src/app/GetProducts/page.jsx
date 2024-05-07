'use client'

import React from 'react'
import {useState,useEffect} from 'react'
import Navbar from '../Component/NavBar'

const GetProducts = () =>{
    const [product,setProduct] = useState([])
    const [currentpage,setcurrentpage] = useState(1)
    const [productperpage] = useState(5)


    const indexLast = currentpage * productperpage
    const indexFirst = indexLast - productperpage
    const ProductData = product.slice(indexFirst,indexLast)

    const pageNumber = []
    for(let i=1;i<=Math.ceil(product.length / productperpage);i++){
        pageNumber.push(i)
    }

    const Pagination = (data) =>{
        setcurrentpage(data)
    }


    useEffect(()=>{
     fetch('https://fakestoreapi.com/products')
     .then((data)=>{
        const res = data.json()
        .then((res)=>{
            setProduct(res)
        })
     })
    },[])


    return (
        <>
        <Navbar/>
        <section>
        <h3 className="pt-5 text-center display-6">Products List</h3>
        <table class="table  table-hover">
          <thead>
            <tr>
              <th scope="col">Sl Number</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {ProductData.map((data,i)=>{
                return (
                    <tr key={i}>
                        <td>{data.id}</td>
                        <td>{data.title}</td>
                        <td>{data.price}</td>
                        <td>{data.description}</td>
                    </tr>
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






export default GetProducts