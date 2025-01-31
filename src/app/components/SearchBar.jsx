// components/SearchBar.js
"use client";
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();
  return (
    <form className="d-flex my-2 my-lg-0" onSubmit={(e)=>{
      router.push(`/search?keyword=${keyword}`);
  }}>
      <input onChange={(e)=>{
          setKeyword(e.target.value);
      }} className="form-control me-sm-2" type="text" placeholder="What service are you looking for today?" />
      <Link href={`/search?keyword=${keyword}`} className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
      </Link>
  </form>
    // <div className={styles.searchBox}>
    //   <input type="text" placeholder="What service are you looking for today?" />
    //   <button className={styles.searchButton}>
    //     <i className="fas fa-search"></i>
    //   </button>
    // </div>
  );
}
