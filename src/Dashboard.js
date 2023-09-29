import { Card,AddCard,ListCard } from "./Components";
import {Header,Footer} from "./Partials";
import React from "react";
function JudgeDashBoard(props){
    return (
        <div>
            <Header/>
            <div id="JDB">
            <h1>Welcome Justice So'n'So(use props from db)</h1>
                <div id="JDB-cont">
                    <Card heading={"CourtName from db"} count={""} desc={"From db we retrive his expirience in this court"}/>
                    <Card heading={"Pending Cases"} count={"Number from db"} desc={"From db any desc is fetched"}/>
                    <Card heading={"Criminal Cases"} count={"Number of criminal cases"} desc={"Retrive Number from DB"}/>
                    <Card heading={"Civil Cases"} count={"Number of civil cases"} desc={"Retrive Number from DB"}/>
                    <Card heading={"Today Committments"} count={"Number of hearings for today"} desc={"Retrive Number from DB"}/>
                    <Card heading={"Current Week Cases"} count={"Number of cases"} desc={"Retrive Number from DB"}/>
                    <Card heading={"Notes"} count={""} desc={"Any personalized notes that has been saved by the user will be retrieved"}/>
                    <AddCard/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
function LawyerDashBoard(prop){
    return (
        <div>
            <Header/>
            <div id="LDB">
            <h1>Welcome Lawyer So'n'So(use props from db)</h1>
                <div id="LDB-cont">
                    <Card heading={"CourtName from db"} count={""} desc={"From db we retrive his expirience in this court"}/>
                    <Card heading={"Pending Cases"} count={"Number from db"} desc={"From db any desc is fetched"}/>
                    <Card heading={"Criminal Cases"} count={"Number of criminal cases"} desc={"Retrive Number from DB"}/>
                    <Card heading={"Civil Cases"} count={"Number of civil cases"} desc={"Retrive Number from DB"}/>
                    <Card heading={"Today Committments"} count={"Number of hearings for today"} desc={"Retrive Number from DB"}/>
                    <Card heading={"Current Week Cases"} count={"Number of cases"} desc={"Retrive Number from DB"}/>
                    <Card heading={"Notes"} count={""} desc={"Any personalized notes that has been saved by the user will be retrieved"}/>
                    <ListCard list={["Fake name1","Fake name2","Test name3","Test name 4","Test name 5","Test6"]}/>
                    <AddCard/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
function ClientDashBoard(prop){
    return (
        <div>
            <Header/>
            <div id="CDB">
            <h1>Welcome Mr/Mrs So'n'So(use props from db)</h1>
                <div id="CDB-cont">
                    <ListCard list={["Case1","Case2","Case3","These are from db-prop"]}/>
                    <ListCard list={["Attorney-1 Contact","Multiple Attorneys may exist"]}/>
                    <Card heading={"Case-1 Notes-"} count={""} desc={"So and so number of hearings were done..."}/>
                    <Card heading={"Expenses-"} count={"Has spent XXX"} desc={""}/>
                    <Card heading={"Previous Hearing data-"} count={""} desc={"XYZ"}/>
                    <AddCard/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export {JudgeDashBoard};
export {LawyerDashBoard};
export {ClientDashBoard};