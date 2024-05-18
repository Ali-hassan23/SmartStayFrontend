'use client'
// import React,{useState} from "react";
import Accomodation from "@/components/HomePage/Accomodation";
import Facilities from "@/components/HomePage/Facilities";
import Welcome from "@/components/HomePage/Welcome";
import { useState, useEffect } from "react";

export default function Home() {

  return (
    <main>
      <Welcome />
      <Accomodation />
      <Facilities />
    </main>
  );
}
