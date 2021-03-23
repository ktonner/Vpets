import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Login from "../LoginForm";
import AuthButton from "../AuthButton";
import { UserContext } from "../../utils/UserContext";

class Pet{
    constructor(species){
        this.species = species;
    }
}

class Doogle extends Pet{
    constructor(name, color){
        this.species = "Doogle";
        this.name = name;
        this.color = color
    }
}