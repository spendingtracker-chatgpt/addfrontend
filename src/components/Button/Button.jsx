"use client"
import Link from "next/link"
import styles from "./Button.module.css"

export default function Button() {
    return (
      <Link href="/login">
        <button 
        className={styles.logout} 
        onClick={()=>{
          console.log("login")
        }}
      >Login</button>
      </Link>
    )
  }
  