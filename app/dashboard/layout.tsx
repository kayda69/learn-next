"use client"
import React from "react";
import SideNav from "../ui/dashboard/sidenav";
import styles from '@/app/ui/home.module.css'
import {NextUIProvider} from "@nextui-org/react";

export default function Layout({children}:{children :React.ReactNode}){
    return(
      <NextUIProvider>
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className={`flex-grow p-6 md:overflow-y-auto md:p-12 flex-row`}  >{children}</div>
    </div>
    </NextUIProvider>

)}